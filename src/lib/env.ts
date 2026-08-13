import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";

const skipValidation =
  process.env.SKIP_ENV_VALIDATION === "true" ||
  process.env.CI === "true" ||
  process.env.npm_lifecycle_event === "build" ||
  process.env.npm_lifecycle_event === "fmt" ||
  process.env.npm_lifecycle_event === "fmt:check" ||
  process.env.npm_lifecycle_event === "lint" ||
  process.env.npm_lifecycle_event === "test" ||
  process.env.npm_lifecycle_event === "typecheck";

export const env = createEnv({
  server: {
    DATABASE_URL: v.pipe(v.string(), v.url()),
    BETTER_AUTH_URL: v.optional(v.pipe(v.string(), v.url())),
    BETTER_AUTH_SECRET: v.optional(v.pipe(v.string(), v.minLength(8))),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  skipValidation,
});
