# Deploy NovuCore to Heroku

This guide deploys the **frontend + backend on a single Heroku app** using
two buildpacks (Node.js builds the React bundle, Python runs FastAPI which
also serves the static files).

---

## 0. Prerequisites

- A Heroku account and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- A MongoDB instance — use **[MongoDB Atlas](https://www.mongodb.com/atlas)** (free M0 tier).
  Whitelist Heroku IPs by allowing `0.0.0.0/0` in Atlas Network Access
  (or use the dedicated Atlas → Heroku integration).
- A Brevo account with a **verified sender** + API key.

## 1. Clone the repo

```bash
git clone https://github.com/iamjonbradley/novucore-website.git
cd novucore-website
```

## 2. Create the Heroku app

```bash
heroku login
heroku create novucore-site            # or any unique name
```

## 3. Add both buildpacks (Node first, then Python)

Order matters — Node builds the React bundle, then Python installs FastAPI deps.

```bash
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/python --index 2
heroku buildpacks                         # confirm order
```

## 4. Set config vars

```bash
# MongoDB Atlas connection string
heroku config:set MONGO_URL="mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
heroku config:set DB_NAME="novucore"
heroku config:set CORS_ORIGINS="*"

# Brevo email (sender must be verified in Brevo)
heroku config:set BREVO_API_KEY="xkeysib-..."
heroku config:set BREVO_SENDER_EMAIL="hello@yourdomain.com"
heroku config:set BREVO_SENDER_NAME="NovuCore Website"
heroku config:set INQUIRY_RECIPIENT="you@yourdomain.com"

# Tell the React build to call same-origin /api (empty string keeps it relative)
heroku config:set REACT_APP_BACKEND_URL=""
```

## 5. Push & deploy

```bash
git push heroku main
heroku open
```

The single dyno will:
1. Install Node deps
2. `yarn install && yarn build` in `frontend/` (heroku-postbuild)
3. Install Python deps from root `requirements.txt`
4. Start `uvicorn server:app` from the `backend/` directory
5. FastAPI serves `/api/*` from the router and the static `frontend/build/`
   at all other paths (configured in `backend/server.py`).

## 6. Verify

```bash
curl https://novucore-site.herokuapp.com/api/             # {"message":"NovuCore API"}
open   https://novucore-site.herokuapp.com               # full site
```

Submit the contact form — check `iamjonbradley@gmail.com` for the email and
Mongo Atlas → collection `inquiries` for the saved document.

## 7. Common gotchas

- **Brevo rejects email** → the sender email must be verified in Brevo.
  See `inquiries.email_status` + `inquiries.email_error` in Mongo for details.
- **`emergentintegrations` not found** → we ship a slim root `requirements.txt`
  for Heroku that omits it. Don't replace it with `backend/requirements.txt`.
- **Build fails on yarn** → ensure `engines.node` in the root `package.json`
  matches a supported Heroku stack version.
- **Static files 404** → confirm `frontend/build/` exists after
  `heroku-postbuild`. Check `heroku logs --tail`.
- **CORS errors** → not expected (same origin), but if you split frontend &
  backend onto two hosts, set `CORS_ORIGINS` to the frontend URL.

## 8. Custom domain (optional)

```bash
heroku domains:add www.novucore.com
heroku certs:auto:enable
# Add a CNAME record in your DNS provider per heroku domains output
```

---

## Architecture diagram

```
              ┌───────────────────────────────┐
              │     Heroku dyno (one app)        │
              │  ┌──────────────────────────┐  │
browser ├──────┼──▶ FastAPI (uvicorn :PORT)  │  │
              │  │   /api/*    — endpoints   │  │
              │  │   /<all>    — React build │  │
              │  └──────┬──────────────────┘  │
              └──────────┼─────────────────────────┘
                         ▼
                  MongoDB Atlas
                         +
                   Brevo SMTP API
```

Build · Evolve · Empower.
