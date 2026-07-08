import express from "express";
import type { NextFunction, Request, Response } from "express";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import type { DatabaseSync } from "node:sqlite";
import { createSubmissionControllers } from "./controllers/submissions.js";
import { createSubmissionServices } from "./services/submissions.js";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_POSTS = 20;

/** Minimal in-memory rate limiter — enough to blunt naive form spam. */
function rateLimit() {
  const hits = new Map<string, { count: number; windowStart: number }>();
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? "unknown";
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      hits.set(key, { count: 1, windowStart: now });
      next();
      return;
    }
    entry.count += 1;
    if (entry.count > RATE_LIMIT_MAX_POSTS) {
      res.status(429).json({ ok: false, code: "rate_limited", error: "Too many requests." });
      return;
    }
    next();
  };
}

export function createApp(db: DatabaseSync, options: { serveStatic?: boolean } = {}) {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", true);
  app.use(express.json({ limit: "32kb" }));

  const controllers = createSubmissionControllers(createSubmissionServices(db));

  const api = express.Router();
  api.get("/health", (_req, res) => {
    res.json({ ok: true });
  });
  api.post("/contact", rateLimit(), controllers.contact);
  api.post("/signup", rateLimit(), controllers.signup);
  api.post("/onboarding", rateLimit(), controllers.onboarding);
  app.use("/api", api);

  // Unknown API routes get a JSON 404 instead of the SPA fallback.
  app.use("/api", (_req, res) => {
    res.status(404).json({ ok: false, code: "not_found", error: "Not found." });
  });

  if (options.serveStatic) {
    const distDir = resolve(process.cwd(), "dist");
    if (existsSync(distDir)) {
      app.use(express.static(distDir));
      app.use((req, res, next) => {
        if (req.method !== "GET") {
          next();
          return;
        }
        res.sendFile(resolve(distDir, "index.html"));
      });
    }
  }

  // JSON error handler — malformed request bodies land here.
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    const status = typeof err === "object" && err !== null && "status" in err ? Number(err.status) : 500;
    if (status >= 500) {
      console.error(err);
    }
    res.status(status >= 400 && status < 600 ? status : 500).json({
      ok: false,
      code: status === 400 ? "invalid_body" : "server_error",
      error: status === 400 ? "Invalid request body." : "Internal error."
    });
  });

  return app;
}
