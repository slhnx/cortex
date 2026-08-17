import dotenv from 'dotenv';
import { z } from 'zod';

// Load the .env file in the current working directory
dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(3333),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid database connection URL"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const result = envSchema.safeParse({
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!result.success) {
  console.error("❌ Invalid environment variables in @cortex/api:", result.error.format());
  throw new Error("Invalid environment variables in @cortex/api");
}

export const env = result.data;
