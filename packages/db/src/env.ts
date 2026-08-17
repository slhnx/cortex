import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

// Load the .env file located at the package root in local development
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
}

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid database connection URL"),
  DIRECT_URL: z.string().url("DIRECT_URL must be a valid database connection URL").optional(),
});

const result = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
});

if (!result.success) {
  console.error("❌ Invalid environment variables in @cortex/db:", result.error.format());
  throw new Error("Invalid environment variables in @cortex/db");
}

export const env = result.data;
