import type { Messages } from "../i18n/locales/en";

// Backend responses carry stable machine codes; user-facing text is resolved
// from the active locale at render time so errors stay translated after a
// language switch.

export type ApiErrorCode = "network" | "generic" | "validation" | "rate_limited";
export type FieldErrorCode = "required" | "too_long" | "invalid" | "range" | "choice";
export type FieldErrors = Record<string, FieldErrorCode>;

export class ApiError extends Error {
  code: ApiErrorCode;
  fieldErrors?: FieldErrors;

  constructor(code: ApiErrorCode, fieldErrors?: FieldErrors) {
    super(code);
    this.name = "ApiError";
    this.code = code;
    this.fieldErrors = fieldErrors;
  }
}

export async function postJson<T extends { ok: true }>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  } catch {
    throw new ApiError("network");
  }

  const data = (await response.json().catch(() => null)) as
    | { ok: boolean; code?: string; fieldErrors?: FieldErrors }
    | null;

  if (!response.ok || !data?.ok) {
    const code: ApiErrorCode =
      data?.code === "validation" ? "validation" : data?.code === "rate_limited" ? "rate_limited" : "generic";
    throw new ApiError(code, data?.fieldErrors);
  }
  return data as T;
}

export function bannerMessage(error: ApiError, m: Messages): string {
  switch (error.code) {
    case "network":
      return m.errors.network;
    case "validation":
      return m.errors.validation;
    case "rate_limited":
      return m.errors.rateLimited;
    default:
      return m.errors.generic;
  }
}

export function fieldMessage(field: string, error: ApiError | null, m: Messages): string | undefined {
  const code = error?.fieldErrors?.[field];
  if (!code) {
    return undefined;
  }
  switch (code) {
    case "required":
      return m.errors.required;
    case "too_long":
      return m.errors.tooLong;
    case "invalid":
      return field === "email" ? m.errors.invalidEmail : field === "phone" ? m.errors.invalidPhone : m.errors.invalidValue;
    case "range":
      return m.errors.tableRange;
    case "choice":
      return m.errors.chooseOption;
    default:
      return m.errors.invalidValue;
  }
}
