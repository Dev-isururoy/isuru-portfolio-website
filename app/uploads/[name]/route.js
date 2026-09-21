import { getCloudflareEnv } from '@/lib/cloudflare';

export async function GET(request, { params }) {
  const { name } = await params;
  const storage = getCloudflareEnv()?.CONTENT;
  if (!storage || !/^[a-zA-Z0-9.-]+$/.test(name)) return new Response('Not found', { status: 404 });
  const { value, metadata } = await storage.getWithMetadata(`uploads/${name}`, { type: 'arrayBuffer' });
  if (!value) return new Response('Not found', { status: 404 });
  return new Response(value, {
    headers: {
      'Content-Type': metadata?.contentType || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'; sandbox",
    },
  });
}
