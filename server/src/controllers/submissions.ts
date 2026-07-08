import type { Request, Response } from "express";
import type { SubmissionServices } from "../services/submissions.js";
import { validateContact, validateOnboarding, validateSignup } from "../validation.js";
import type { FieldErrors } from "../validation.js";

function badRequest(res: Response, errors: FieldErrors) {
  res.status(400).json({
    ok: false,
    code: "validation",
    error: "Validation failed.",
    fieldErrors: errors
  });
}

export function createSubmissionControllers(services: SubmissionServices) {
  return {
    contact(req: Request, res: Response) {
      const result = validateContact(req.body);
      if (!result.ok) {
        badRequest(res, result.errors);
        return;
      }
      const id = services.createContactSubmission(result.value);
      res.status(201).json({ ok: true, id });
    },

    signup(req: Request, res: Response) {
      const result = validateSignup(req.body);
      if (!result.ok) {
        badRequest(res, result.errors);
        return;
      }
      const { id, alreadyRequested } = services.upsertAccountRequest(result.value);
      res.status(alreadyRequested ? 200 : 201).json({ ok: true, id, alreadyRequested });
    },

    onboarding(req: Request, res: Response) {
      const result = validateOnboarding(req.body);
      if (!result.ok) {
        badRequest(res, result.errors);
        return;
      }
      const id = services.createOnboardingResponse(result.value);
      res.status(201).json({ ok: true, id });
    }
  };
}
