import { ZodError } from "zod";

export class ApiError extends Error {
  status: number;
  code: string;
  details?: unknown;

  constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function ok<T>(data: T, init?: ResponseInit) {
  return Response.json(
    {
      success: true,
      data,
    },
    init,
  );
}

export function fail(
  status: number,
  code: string,
  message: string,
  details?: unknown,
  init?: ResponseInit,
) {
  return Response.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details ? { details } : {}),
      },
    },
    {
      status,
      ...init,
    },
  );
}

export function fromUnknownError(error: unknown) {
  if (error instanceof ApiError) {
    return fail(error.status, error.code, error.message, error.details);
  }

  if (error instanceof ZodError) {
    return fail(400, "VALIDATION_ERROR", "Dados invalidos.", error.flatten());
  }

  if (error instanceof Error) {
    return fail(500, "INTERNAL_ERROR", "Erro interno de servidor.");
  }

  return fail(500, "INTERNAL_ERROR", "Erro interno de servidor.");
}

export async function parseJsonBody<T = unknown>(request: Request, maxChars = 1_000_000) {
  const raw = await request.text();
  if (raw.length > maxChars) {
    throw new ApiError(413, "PAYLOAD_TOO_LARGE", "Payload excede o limite permitido.");
  }

  if (!raw.trim()) {
    return {} as T;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    throw new ApiError(400, "INVALID_JSON", "JSON invalido.");
  }
}
