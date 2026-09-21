import { PrismaClient } from '@prisma/client';

export function getPrisma() {
  // Cloudflare builds replace this module with prisma-cloudflare.js.
  if (process.env.NODE_ENV !== 'production') {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    return global.prisma;
  }
  
  return new PrismaClient();
}
