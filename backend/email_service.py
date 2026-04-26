"""Brevo (transactional email) client for NovuCore inquiries."""
from __future__ import annotations

import logging
import os
from typing import Optional

import requests

logger = logging.getLogger(__name__)

BREVO_URL = "https://api.brevo.com/v3/smtp/email"


def _env(key: str, default: Optional[str] = None) -> Optional[str]:
    val = os.environ.get(key, default)
    return val.strip() if isinstance(val, str) else val


def send_inquiry_email(
    *,
    name: str,
    email: str,
    phone: Optional[str] = None,
    company: Optional[str],
    project_type: Optional[str],
    budget: Optional[str],
    message: str,
) -> tuple[bool, Optional[str]]:
    """Send a new inquiry via Brevo. Returns (ok, error_message)."""
    api_key = _env("BREVO_API_KEY")
    sender_email = _env("BREVO_SENDER_EMAIL")
    sender_name = _env("BREVO_SENDER_NAME", "NovuCore")
    recipient = _env("INQUIRY_RECIPIENT")

    if not api_key or not sender_email or not recipient:
        return False, "Email service is not configured."

    subject = f"New inquiry from {name} — NovuCore"

    rows = [
        ("Name", name),
        ("Email", email),
        ("Phone", phone or "—"),
        ("Company", company or "—"),
        ("Project type", project_type or "—"),
        ("Budget", budget or "—"),
    ]
    rows_html = "".join(
        f"<tr><td style='padding:8px 14px;color:#5B6B8C;font:500 12px Inter,Arial;text-transform:uppercase;letter-spacing:.08em;width:140px;border-bottom:1px solid #E4E8F0'>{label}</td>"
        f"<td style='padding:8px 14px;color:#1F2A48;font:500 14px Inter,Arial;border-bottom:1px solid #E4E8F0'>{value}</td></tr>"
        for label, value in rows
    )
    safe_message = (message or "").replace("\n", "<br/>")

    html = f"""
    <div style="background:#F4F6FA;padding:32px 16px;font-family:Inter,Arial,sans-serif;color:#1F2A48">
      <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E8F0;border-radius:16px;overflow:hidden">
        <div style="padding:24px 28px;border-bottom:1px solid #E4E8F0">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#94A0B8">NovuCore · New inquiry</div>
          <div style="font-size:22px;font-weight:700;margin-top:6px">{name}</div>
          <div style="font-size:14px;color:#5B6B8C;margin-top:2px">{email}</div>
        </div>
        <table style="width:100%;border-collapse:collapse">{rows_html}</table>
        <div style="padding:20px 28px">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#94A0B8;margin-bottom:8px">Message</div>
          <div style="font-size:15px;line-height:1.6;color:#1F2A48">{safe_message}</div>
        </div>
        <div style="padding:14px 28px;background:#F4F6FA;font-size:12px;color:#94A0B8">
          Sent automatically from the NovuCore website contact form.
        </div>
      </div>
    </div>
    """

    payload = {
        "sender": {"name": sender_name, "email": sender_email},
        "to": [{"email": recipient}],
        "replyTo": {"email": email, "name": name},
        "subject": subject,
        "htmlContent": html,
    }
    headers = {
        "api-key": api_key,
        "content-type": "application/json",
        "accept": "application/json",
    }

    try:
        r = requests.post(BREVO_URL, json=payload, headers=headers, timeout=15)
    except requests.RequestException as e:
        logger.exception("Brevo request failed")
        return False, f"Network error: {e}"

    if 200 <= r.status_code < 300:
        return True, None

    detail = r.text
    try:
        j = r.json()
        detail = j.get("message") or j.get("error") or detail
    except Exception:
        pass
    logger.error("Brevo error %s: %s", r.status_code, detail)
    return False, f"Brevo {r.status_code}: {detail}"
