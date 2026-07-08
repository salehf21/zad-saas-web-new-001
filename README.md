# ZAD | زاد — Restaurant OS website

Marketing website for ZAD, the restaurant operating system (QR menus, table ordering,
reservations, loyalty, digital receipts, analytics), with a small typed API backend for
form submissions.

## Stack

- **Frontend**: Vite + React 18 + TypeScript + Framer Motion (SPA with a lightweight client-side router)
- **Backend**: Express 5 + TypeScript in `server/`, storing data in SQLite via Node's built-in `node:sqlite` (no native dependencies)

## Run locally

```bash
npm install
cp .env.example .env        # optional — defaults work out of the box

# Terminal 1 — API server on :8787
npm run dev:server

# Terminal 2 — frontend on :5173 (proxies /api to :8787)
npm run dev
```

Production build (one server serves both API and frontend):

```bash
npm run build               # frontend -> dist/, backend -> server/dist/
NODE_ENV=production npm start
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server (proxies `/api` to the backend) |
| `npm run dev:server` | Compile + run the API server |
| `npm run build` | Typecheck + build frontend and backend |
| `npm start` | Run the compiled server (serves `dist/` when `NODE_ENV=production`) |
| `npm run typecheck` | Typecheck frontend and backend |
| `npm run test:api` | API integration tests (`node --test`, in-memory SQLite) |

## API

| Endpoint | Purpose |
| --- | --- |
| `GET /api/health` | Liveness check |
| `POST /api/contact` | Store a contact form submission (name, email, phone?, restaurant, message) |
| `POST /api/signup` | Store an account/demo request (name, email, restaurant) — idempotent per email |
| `POST /api/onboarding` | Store onboarding answers (restaurant name, menu size, table count, kitchen display) |

Validation errors return `400` with `{ ok: false, error, fieldErrors }`. Submissions are
rate-limited per IP. There is **no authentication system** — signup records an account
request; login is a visual demo.

## Environment variables

See `.env.example`:

- `PORT` — API port (default `8787`)
- `DATABASE_PATH` — SQLite file (default `./data/zad.sqlite`, auto-created; `:memory:` supported)
- `NODE_ENV` — `production` makes the API server also serve the built frontend from `dist/`

Data lives in `data/` and is gitignored. No secrets are stored in the repo.
