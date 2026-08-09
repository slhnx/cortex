import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract()

export const healthContract = c.router({
  health: {
    method: 'GET',
    path: '/health',
    summary: 'Health check',
    responses: {
      200: z.object({
        status: z.literal('ok'),
      }),
    },
  },
})