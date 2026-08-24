import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

export function getPrisma() {
  // Check if we are running on Cloudflare Pages (where getRequestContext is available)
  try {
    const { getRequestContext } = require('@cloudflare/next-on-pages');
    const ctx = getRequestContext();
    if (ctx && ctx.env && ctx.env.DB) {
      const adapter = new PrismaD1(ctx.env.DB);
      return new PrismaClient({ adapter });
    }
  } catch (e) {
    // getRequestContext is not available or failed
  }

  // Fallback for local development using standard SQLite file
  if (process.env.NODE_ENV !== 'production') {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    return global.prisma;
  }
  
  return new PrismaClient();
}
