# NovuCore — Source Bundle

A modern professional portfolio site for NovuCore, a custom-code web dev studio.

**Stack**
- Frontend: React 19 + Tailwind + shadcn/ui + Manrope/Inter
- Backend: FastAPI + Motor (async MongoDB)
- Email: Brevo transactional API
- Storage: MongoDB

---

## 1. Prerequisites

- Node 18+ and Yarn
- Python 3.10+
- A running MongoDB instance (local or Atlas)
- A Brevo account with a verified sender + API key

## 2. Backend setup

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # then edit values
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

`backend/.env` keys:

```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="novucore"
CORS_ORIGINS="*"

# Brevo (https://app.brevo.com -> SMTP & API -> API keys)
BREVO_API_KEY="xkeysib-..."
BREVO_SENDER_EMAIL="hello@yourdomain.com"   # must be verified in Brevo
BREVO_SENDER_NAME="NovuCore Website"
INQUIRY_RECIPIENT="you@yourdomain.com"
```

The backend exposes:
- GET  /api/            health
- POST /api/contact     saves inquiry to Mongo + sends Brevo email
- GET  /api/status      demo
- POST /api/status      demo

## 3. Frontend setup

```bash
cd frontend
yarn install
cp .env.example .env  # set REACT_APP_BACKEND_URL to your backend URL
yarn start             # dev
yarn build             # production bundle in /build
```

`frontend/.env` keys:

```
REACT_APP_BACKEND_URL=https://your-backend.example.com
```

The Contact form posts to `${REACT_APP_BACKEND_URL}/api/contact`.

## 4. Deploy notes

- All backend routes are prefixed with `/api`. Route `/api/*` to the
  FastAPI service and the rest to the static frontend build.
- For static hosting (Vercel / Netlify / Cloudflare Pages) upload
  `frontend/build` and point `REACT_APP_BACKEND_URL` at your API host.
- The Brevo sender email MUST be verified in your Brevo account or
  emails will fail. Check `inquiries.email_status` in Mongo to audit.

## 5. Project structure

```
backend/
  server.py            FastAPI app + /api/contact endpoint
  email_service.py     Brevo transactional helper
  requirements.txt
  .env.example
frontend/
  src/
    App.js             Routes + global layout
    App.css            Brand tokens, fonts, animations
    mock.js            Static copy / nav / services / pillars
    components/
      site/            Header, Hero, HeroVisual, Marquee, About,
                       Services, Process, Contact, Footer, Logo
      ui/              shadcn/ui components
  public/
  package.json
  tailwind.config.js
contracts.md           API contracts
```

Build - Evolve - Empower.
