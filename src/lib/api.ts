export type FieldErrors = Record<string, string>;

export class ApiError extends Error {
  fieldErrors?: FieldErrors;

  constructor(message: string, fieldErrors?: FieldErrors) {
    super(message);
    this.name = "ApiError";
    this.fieldErrors = fieldErrors;
  }
}

const NETWORK_ERROR = "We couldn't reach the server — please check your connection and try again.";
const GENERIC_ERROR = "Something went wrong — please try again.";

export async function postJson<T extends { ok: true }>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  } catch {
    throw new ApiError(NETWORK_ERROR);
  }

  const data = (await response.json().catch(() => null)) as
    | { ok: boolean; error?: string; fieldErrors?: FieldErrors }
    | null;

  if (!response.ok || !data?.ok) {
    throw new ApiError(data?.error ?? GENERIC_ERROR, data?.fieldErrors);
  }
  return data as T;
}
