# NovuCore — API contracts

## Mocked in frontend (to be replaced)
- `Contact.jsx` previously persisted form to `localStorage` under `novu_inquiries`
  and showed a sonner toast. This is now replaced by a real API call to
  `POST /api/contact`. localStorage save is removed.

## Backend env (in `backend/.env`)
- `BREVO_API_KEY` — Brevo transactional API key
- `BREVO_SENDER_EMAIL` — verified sender in Brevo (e.g. `iamjonbradley@gmail.com`)
- `BREVO_SENDER_NAME` — display name (e.g. `NovuCore Website`)
- `INQUIRY_RECIPIENT` — where new inquiries should be delivered
  (e.g. `iamjonbradley@gmail.com`)

## Endpoint: POST /api/contact
Saves an inquiry to MongoDB and emails the recipient via Brevo.

Request body (JSON):
```json
{
  "name": "Jane Cooper",            // required
  "email": "jane@studio.com",       // required, valid email
  "company": "Acme Inc.",           // optional
  "projectType": "Marketing site",  // optional
  "budget": "$15k – $40k",          // optional
  "message": "About the project..." // required, min 10 chars
}
```

Response 200:
```json
{ "ok": true, "id": "<uuid>" }
```

Response 4xx:
```json
{ "ok": false, "error": "Reason" }
```

## Mongo
Collection: `inquiries`. Document shape mirrors the request plus:
- `id` (uuid string)
- `created_at` (ISO timestamp)
- `email_status` ("sent" | "failed" | "skipped")
- `email_error` (string, optional)

We persist regardless of email success so no inquiry is ever lost.

## Frontend integration points
- `Contact.jsx` posts the form to `${REACT_APP_BACKEND_URL}/api/contact`.
- On `ok=true` → success toast + reset form.
- On error → error toast with backend message.
