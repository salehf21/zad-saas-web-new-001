import { createApp } from "./app.js";
import { config } from "./config.js";
import { createDatabase } from "./db.js";

const db = createDatabase();
const app = createApp(db, { serveStatic: config.serveStatic });

const server = app.listen(config.port, () => {
  console.log(`ZAD API listening on http://127.0.0.1:${config.port} (db: ${config.databasePath})`);
});

function shutdown() {
  server.close(() => {
    db.close();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
