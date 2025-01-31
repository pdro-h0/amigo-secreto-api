import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(8080),
  DEFAULT_TOKEN: z.coerce.string(),
  SSL_KEY: z.string(),
  SSL_CERT: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment", _env.error.format());

  throw new Error(`Invalid environment, ${_env.error.format()}`);
}

export const env = _env.data;
