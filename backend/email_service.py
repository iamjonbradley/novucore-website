"""Brevo (transactional email) client for NovuCore inquiries."""
from __future__ import annotations

import logging
import os
from typing import Optional, Tuple

import requests

logger = logging.getLogger(__name__)

BREVO_URL = "https://api.brevo.com/v3/smtp/email"


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def _env(key: str, default: Optional[str] = None) -> Optional[str]:
    val = os.environ.get(key, default)
    return val.strip() if isinstance(val, str) else val


def _read_brevo_config() -> Tuple[Optional[str], Optional[str], str, Optional[str]]:
    return (
        _env("BREVO_API_KEY"),
        _env("BREVO_SENDER_EMAIL"),
        _env("BREVO_SENDER_NAME", "NovuCore") or "NovuCore",
        _env("INQUIRY_RECIPIENT"),
    )


def _build_rows_html(rows: list[Tuple[str, str]]) -> str:
    cell_label = (
        "padding:8px 14px;color:#5B6B8C;font:500 12px Inter,Arial;"
        "text-transform:uppercase;letter-spacing:.08em;width:140px;"
        "border-bottom:1px solid #E4E8F0"
    )
    cell_value = (
        "padding:8px 14px;color:#1F2A48;font:500 14px Inter,Arial;"
        "border-bottom:1px solid #E4E8F0"
    )
    return "".join(
        f"<tr><td style='{cell_label}'>{label}</td>"
        f"<td style='{cell_value}'>{value}</td></tr>"
        for label, value in rows
    )


def _build_email_html(
    *,
    name: str,
    email: str,
    rows_html: str,
    safe_message: str,
) -> str:
    return f"""
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


def _parse_error(response: requests.Response) -> str:
    try:
        body = response.json()
        return body.get("message") or body.get("error") or response.text
    except ValueError:
        return response.text


def _post_to_brevo(payload: dict, api_key: str) -> Tuple[bool, Optional[str]]:
    headers = {
        "api-key": api_key,
        "content-type": "application/json",
        "accept": "application/json",
    }
    try:
        response = requests.post(BREVO_URL, json=payload, headers=headers, timeout=15)
    except requests.RequestException as exc:
        logger.exception("Brevo request failed")
        return False, f"Network error: {exc}"

    if 200 <= response.status_code < 300:
        return True, None

    detail = _parse_error(response)
    logger.error("Brevo error %s: %s", response.status_code, detail)
    return False, f"Brevo {response.status_code}: {detail}"


# ---------------------------------------------------------------------------
# Public
# ---------------------------------------------------------------------------
def send_inquiry_email(
    *,
    name: str,
    email: str,
    phone: Optional[str] = None,
    company: Optional[str] = None,
    project_type: Optional[str] = None,
    budget: Optional[str] = None,
    message: str,
) -> Tuple[bool, Optional[str]]:
    """Send a new inquiry via Brevo. Returns ``(ok, error_message)``."""
    api_key, sender_email, sender_name, recipient = _read_brevo_config()
    if not api_key or not sender_email or not recipient:
        return False, "Email service is not configured."

    rows = [
        ("Name", name),
        ("Email", email),
        ("Phone", phone or "—"),
        ("Company", company or "—"),
        ("Project type", project_type or "—"),
        ("Budget", budget or "—"),
    ]
    html = _build_email_html(
        name=name,
        email=email,
        rows_html=_build_rows_html(rows),
        safe_message=(message or "").replace("\n", "<br/>"),
    )

    payload = {
        "sender": {"name": sender_name, "email": sender_email},
        "to": [{"email": recipient}],
        "replyTo": {"email": email, "name": name},
        "subject": f"New inquiry from {name} — NovuCore",
        "htmlContent": html,
    }
    return _post_to_brevo(payload, api_key)
