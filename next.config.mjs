import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.CLOUDFLARE_BUILD === '1' ? {
    images: { unoptimized: true },
    webpack(config, { webpack }) {
      // Cloudflare uses D1; keep the native SQLite client for local development.
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(
        /^@\/lib\/prisma$/,
        fileURLToPath(new URL('./lib/prisma-cloudflare.js', import.meta.url)),
      ));
      return config;
    },
  } : {}),
};

export default nextConfig;
