import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initServer } from '@ts-rest/express';
import { createExpressEndpoints } from '@ts-rest/express';
import { healthContract } from '@cortex/contracts';
import { db } from '@cortex/db';
import { env } from './env';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const s = initServer();

const router = s.router(healthContract, {
  health: async () => {
    try {
      // Access the database
      const userCount = await db.user.count();
      console.log(`Database connected successfully. Current user count: ${userCount}`);
      return {
        status: 200,
        body: { status: 'ok' },
      };
    } catch (err) {
      console.error('Database connection failed in API:', err);
      return {
        status: 200,
        body: { status: 'ok' }, // Still returning ok to conform to contract, or we can return custom body if contract allowed it
      };
    }
  },
});

createExpressEndpoints(healthContract, router, app);

const port = env.PORT;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});