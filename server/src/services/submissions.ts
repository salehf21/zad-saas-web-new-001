import type { DatabaseSync } from "node:sqlite";
import type { ContactInput, OnboardingInput, SignupInput } from "../validation.js";

export interface SubmissionServices {
  createContactSubmission(input: ContactInput): number;
  upsertAccountRequest(input: SignupInput): { id: number; alreadyRequested: boolean };
  createOnboardingResponse(input: OnboardingInput): number;
}

export function createSubmissionServices(db: DatabaseSync): SubmissionServices {
  const insertContact = db.prepare(
    `INSERT INTO contact_submissions (name, email, phone, restaurant, message)
     VALUES (?, ?, ?, ?, ?)`
  );
  const findAccountByEmail = db.prepare(
    `SELECT id FROM account_requests WHERE email = ?`
  );
  const upsertAccount = db.prepare(
    `INSERT INTO account_requests (name, email, restaurant)
     VALUES (?, ?, ?)
     ON CONFLICT(email) DO UPDATE SET
       name = excluded.name,
       restaurant = excluded.restaurant,
       updated_at = datetime('now')
     RETURNING id`
  );
  const insertOnboarding = db.prepare(
    `INSERT INTO onboarding_responses (email, restaurant_name, menu_size, table_count, has_kitchen_display)
     VALUES (?, ?, ?, ?, ?)`
  );

  return {
    createContactSubmission(input) {
      const result = insertContact.run(
        input.name,
        input.email,
        input.phone,
        input.restaurant,
        input.message
      );
      return Number(result.lastInsertRowid);
    },

    upsertAccountRequest(input) {
      const existing = findAccountByEmail.get(input.email) as { id: number } | undefined;
      const row = upsertAccount.get(input.name, input.email, input.restaurant) as { id: number };
      return { id: row.id, alreadyRequested: existing !== undefined };
    },

    createOnboardingResponse(input) {
      const result = insertOnboarding.run(
        input.email,
        input.restaurantName,
        input.menuSize,
        input.tableCount,
        input.hasKitchenDisplay ? 1 : 0
      );
      return Number(result.lastInsertRowid);
    }
  };
}
