import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { createApp } from "../dist/app.js";
import { createDatabase } from "../dist/db.js";

let server;
let base;
let db;

before(async () => {
  db = createDatabase(":memory:");
  const app = createApp(db);
  await new Promise((resolveStart) => {
    server = app.listen(0, "127.0.0.1", resolveStart);
  });
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => {
  server.close();
  db.close();
});

const post = (path, body) =>
  fetch(base + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

describe("GET /api/health", () => {
  it("responds ok", async () => {
    const res = await fetch(base + "/api/health");
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { ok: true });
  });
});

describe("POST /api/contact", () => {
  it("stores a valid submission", async () => {
    const res = await post("/api/contact", {
      name: "Saleh",
      email: "saleh@example.com",
      phone: "+962 6 000 0000",
      restaurant: "The Burger House",
      message: "We want QR ordering."
    });
    assert.equal(res.status, 201);
    const body = await res.json();
    assert.equal(body.ok, true);
    assert.ok(body.id > 0);
    const row = db.prepare("SELECT * FROM contact_submissions WHERE id = ?").get(body.id);
    assert.equal(row.email, "saleh@example.com");
  });

  it("accepts a missing phone but rejects an invalid one", async () => {
    const ok = await post("/api/contact", {
      name: "A",
      email: "a@b.co",
      restaurant: "Cafe",
      message: "Hi"
    });
    assert.equal(ok.status, 201);

    const bad = await post("/api/contact", {
      name: "A",
      email: "a@b.co",
      phone: "abc",
      restaurant: "Cafe",
      message: "Hi"
    });
    assert.equal(bad.status, 400);
    const body = await bad.json();
    assert.equal(body.ok, false);
    assert.ok(body.fieldErrors.phone);
  });

  it("rejects missing fields with per-field errors", async () => {
    const res = await post("/api/contact", { email: "not-an-email" });
    assert.equal(res.status, 400);
    const body = await res.json();
    assert.equal(body.ok, false);
    assert.ok(body.fieldErrors.name);
    assert.ok(body.fieldErrors.email);
    assert.ok(body.fieldErrors.restaurant);
    assert.ok(body.fieldErrors.message);
  });

  it("rejects malformed JSON with a clean 400", async () => {
    const res = await fetch(base + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{nope"
    });
    assert.equal(res.status, 400);
    const body = await res.json();
    assert.equal(body.ok, false);
  });
});

describe("POST /api/signup", () => {
  it("stores an account request", async () => {
    const res = await post("/api/signup", {
      name: "Lina",
      email: "lina@example.com",
      restaurant: "Zaatar & Zeit"
    });
    assert.equal(res.status, 201);
    const body = await res.json();
    assert.equal(body.alreadyRequested, false);
  });

  it("is idempotent per email", async () => {
    const res = await post("/api/signup", {
      name: "Lina Updated",
      email: "lina@example.com",
      restaurant: "Zaatar & Zeit 2"
    });
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.alreadyRequested, true);
    const rows = db.prepare("SELECT COUNT(*) AS n FROM account_requests WHERE email = ?").get("lina@example.com");
    assert.equal(rows.n, 1);
  });

  it("rejects an invalid email", async () => {
    const res = await post("/api/signup", { name: "X", email: "bad", restaurant: "Y" });
    assert.equal(res.status, 400);
  });
});

describe("POST /api/onboarding", () => {
  it("stores a full response", async () => {
    const res = await post("/api/onboarding", {
      email: "lina@example.com",
      restaurantName: "Zaatar & Zeit",
      menuSize: "medium",
      tableCount: 14,
      hasKitchenDisplay: true
    });
    assert.equal(res.status, 201);
    const body = await res.json();
    const row = db.prepare("SELECT * FROM onboarding_responses WHERE id = ?").get(body.id);
    assert.equal(row.menu_size, "medium");
    assert.equal(row.table_count, 14);
    assert.equal(row.has_kitchen_display, 1);
  });

  it("rejects invalid enum and range values", async () => {
    const res = await post("/api/onboarding", {
      restaurantName: "X",
      menuSize: "gigantic",
      tableCount: 0,
      hasKitchenDisplay: "yes"
    });
    assert.equal(res.status, 400);
    const body = await res.json();
    assert.ok(body.fieldErrors.menuSize);
    assert.ok(body.fieldErrors.tableCount);
    assert.ok(body.fieldErrors.hasKitchenDisplay);
  });
});

describe("unknown API route", () => {
  it("returns JSON 404", async () => {
    const res = await fetch(base + "/api/nope");
    assert.equal(res.status, 404);
    const body = await res.json();
    assert.equal(body.ok, false);
  });
});
