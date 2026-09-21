import fs from 'node:fs/promises';
import path from 'node:path';
import { getCloudflareEnv } from './cloudflare';

export async function saveUpload(image) {
  if (!image || image.size === 0) return null;
  const name = `${crypto.randomUUID()}-${image.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
  const bytes = await image.arrayBuffer();
  const env = getCloudflareEnv();
  if (env) {
    if (!env.CONTENT) throw new Error('Cloudflare upload storage is missing');
    await env.CONTENT.put(`uploads/${name}`, bytes, { metadata: { contentType: image.type || 'application/octet-stream' } });
  } else {
    const directory = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(path.join(directory, name), Buffer.from(bytes));
  }
  return `/uploads/${name}`;
}
