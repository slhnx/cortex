'use client';

import { initClient } from '@ts-rest/core';
import { healthContract } from '@cortex/contracts';
import { useEffect, useState } from 'react';

export const HealthCheck = () => {
  const [status, setStatus] = useState<string>('loading...');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const client = initClient(healthContract, {
          baseUrl: 'http://localhost:8000',
          baseHeaders: {},
        });

        const res = await client.health();
        if (res.status === 200) {
          setStatus(res.body.status);
        } else {
          setStatus(`error (${res.status})`);
        }
      } catch (err) {
        setStatus('offline');
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${status === 'ok' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
      <span className="font-mono text-xs text-muted-foreground">API: {status}</span>
    </div>
  );
};

