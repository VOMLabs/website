/**
 * Error classification helpers.
 *
 * NOTE: TanStack Start serializes errors thrown in server functions and
 * loaders across the server->client boundary as plain `Error` instances that
 * only preserve `message`. We therefore classify by message patterns rather
 * than relying on `instanceof`, which only works within a single environment.
 */

const DB_ERROR_PATTERNS = [
  /ECONNREFUSED/i,
  /ETIMEDOUT/i,
  /ENOTFOUND/i,
  /connection refused/i,
  /connection terminated/i,
  /connection timed out/i,
  /the database system is starting up/i,
  /could not connect to server/i,
  /connection pool error/i,
  /database .* does not exist/i,
  /role .* does not exist/i,
  /password authentication failed/i,
  /the server may not be running/i,
  /cannot connect to the database/i,
] as const;

export function isDatabaseError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }
  return DB_ERROR_PATTERNS.some((pattern) => pattern.test(error.message));
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "An unknown error occurred.";
}
