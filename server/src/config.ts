const DEFAULT_PORT = 8787;

export const config = {
  port: Number(process.env.PORT) || DEFAULT_PORT,
  databasePath: process.env.DATABASE_PATH ?? "./data/zad.sqlite",
  isProduction: process.env.NODE_ENV === "production",
  // In production the API server also serves the built frontend from dist/.
  serveStatic: process.env.NODE_ENV === "production" || process.env.SERVE_STATIC === "true"
} as const;
