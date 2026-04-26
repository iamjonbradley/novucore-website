from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from email_service import send_inquiry_email

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Existing demo models (kept for compatibility) ----------
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------- Contact / Inquiry models ----------
class InquiryIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    company: Optional[str] = Field(default=None, max_length=160)
    projectType: Optional[str] = Field(default=None, max_length=80)
    budget: Optional[str] = Field(default=None, max_length=40)
    message: str = Field(min_length=10, max_length=4000)


class InquiryOut(BaseModel):
    ok: bool
    id: Optional[str] = None
    error: Optional[str] = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "NovuCore API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    obj = StatusCheck(client_name=payload.client_name)
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find().to_list(1000)
    out = []
    for r in rows:
        ts = r.get("timestamp")
        if isinstance(ts, str):
            try:
                r["timestamp"] = datetime.fromisoformat(ts)
            except Exception:
                r["timestamp"] = datetime.now(timezone.utc)
        out.append(StatusCheck(**{k: v for k, v in r.items() if k != "_id"}))
    return out


@api_router.post("/contact", response_model=InquiryOut)
async def create_inquiry(payload: InquiryIn):
    inquiry_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()

    # Persist first so nothing is lost even if email fails
    doc = {
        "id": inquiry_id,
        "name": payload.name,
        "email": payload.email,
        "phone": payload.phone,
        "company": payload.company,
        "projectType": payload.projectType,
        "budget": payload.budget,
        "message": payload.message,
        "created_at": created_at,
        "email_status": "pending",
        "email_error": None,
    }
    try:
        await db.inquiries.insert_one(doc)
    except Exception as e:
        logging.exception("Mongo insert failed")
        raise HTTPException(status_code=500, detail="Could not save inquiry.")

    # Fire transactional email via Brevo
    ok, err = send_inquiry_email(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        company=payload.company,
        project_type=payload.projectType,
        budget=payload.budget,
        message=payload.message,
    )

    await db.inquiries.update_one(
        {"id": inquiry_id},
        {
            "$set": {
                "email_status": "sent" if ok else "failed",
                "email_error": err,
            }
        },
    )

    if not ok:
        # We still succeeded in saving — return success but include warning
        logging.warning("Inquiry %s saved but email failed: %s", inquiry_id, err)

    return InquiryOut(ok=True, id=inquiry_id)


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
