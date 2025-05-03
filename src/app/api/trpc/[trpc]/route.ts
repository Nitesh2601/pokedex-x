// src/app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/trpc/router';
import { createContext } from '@/server/trpc/trpc';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const handler = async (req: NextRequest) => {
  try {
    return await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext,
    });
  } catch (err) {
    console.error('🔥 Error in tRPC route handler:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const GET = handler;
export const POST = handler;
