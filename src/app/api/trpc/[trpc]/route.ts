//routes.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/trpc/router';
import { createContext } from '@/server/trpc/trpc';

// Prevent Vercel from attempting to statically cache this route
export const dynamic = 'force-dynamic';

const handler = async (req: Request) => {
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

export { handler as GET, handler as POST };
