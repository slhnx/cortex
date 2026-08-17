import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

// Load the .env file relative to the file location
dotenv.config({ path: path.resolve(__dirname, '.env') });

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(3333),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const result = envSchema.safeParse({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
});

if (!result.success) {
  console.error("❌ Invalid environment variables in @cortex/api:", result.error.format());
  throw new Error("Invalid environment variables in @cortex/api");
}

export const env = result.data;
