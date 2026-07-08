export type FieldErrors = Record<string, string>;

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; errors: FieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[0-9\s().-]{7,20}$/;

function asRecord(body: unknown): Record<string, unknown> {
  return typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function requireText(
  errors: FieldErrors,
  field: string,
  value: unknown,
  label: string,
  maxLength: number
): string {
  const cleaned = text(value);
  if (!cleaned) {
    errors[field] = `${label} is required.`;
  } else if (cleaned.length > maxLength) {
    errors[field] = `${label} must be at most ${maxLength} characters.`;
  }
  return cleaned;
}

export interface ContactInput {
  name: string;
  email: string;
  phone: string | null;
  restaurant: string;
  message: string;
}

export function validateContact(body: unknown): ValidationResult<ContactInput> {
  const record = asRecord(body);
  const errors: FieldErrors = {};

  const name = requireText(errors, "name", record.name, "Name", 120);
  const email = requireText(errors, "email", record.email, "Email", 254);
  const restaurant = requireText(errors, "restaurant", record.restaurant, "Restaurant name", 160);
  const message = requireText(errors, "message", record.message, "Message", 4000);
  const phone = text(record.phone);

  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phone && !PHONE_PATTERN.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, value: { name, email, phone: phone || null, restaurant, message } };
}

export interface SignupInput {
  name: string;
  email: string;
  restaurant: string;
}

export function validateSignup(body: unknown): ValidationResult<SignupInput> {
  const record = asRecord(body);
  const errors: FieldErrors = {};

  const name = requireText(errors, "name", record.name, "Full name", 120);
  const email = requireText(errors, "email", record.email, "Email", 254);
  const restaurant = requireText(errors, "restaurant", record.restaurant, "Restaurant name", 160);

  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true, value: { name, email, restaurant } };
}

export interface OnboardingInput {
  email: string | null;
  restaurantName: string;
  menuSize: "small" | "medium" | "large";
  tableCount: number;
  hasKitchenDisplay: boolean;
}

export function validateOnboarding(body: unknown): ValidationResult<OnboardingInput> {
  const record = asRecord(body);
  const errors: FieldErrors = {};

  const restaurantName = requireText(errors, "restaurantName", record.restaurantName, "Restaurant name", 160);
  const email = text(record.email);
  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const menuSize = record.menuSize;
  if (menuSize !== "small" && menuSize !== "medium" && menuSize !== "large") {
    errors.menuSize = "Choose a menu size.";
  }

  const tableCount = Number(record.tableCount);
  if (!Number.isInteger(tableCount) || tableCount < 1 || tableCount > 500) {
    errors.tableCount = "Table count must be between 1 and 500.";
  }

  if (typeof record.hasKitchenDisplay !== "boolean") {
    errors.hasKitchenDisplay = "Tell us if you have a kitchen display.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    value: {
      email: email || null,
      restaurantName,
      menuSize: menuSize as OnboardingInput["menuSize"],
      tableCount,
      hasKitchenDisplay: record.hasKitchenDisplay as boolean
    }
  };
}
