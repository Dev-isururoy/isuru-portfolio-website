# Cloudflare hosting

The public site runs on Cloudflare Workers as `isuru-thennakoon`. The design and content are shared with the local Next.js app.

## Development

Run `npm install` and `npx prisma generate`, then `npm run dev`.
Local development uses `prisma/dev.db` and files under `public/uploads`.
Keep `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `JWT_SECRET` in the ignored `.env` file.

## Deploy an update

Run `npm run deploy` while signed into the correct Cloudflare account with Wrangler.
This builds with OpenNext and publishes the Worker and static assets. A GitHub push alone does not deploy this Worker.

The Worker uses the D1 database and KV namespace identified in `wrangler.toml`.
Existing images in `public/uploads` are shipped as assets; new CMS uploads persist in KV.
The Cloudflare build substitutes `lib/prisma-cloudflare.js` for the local Prisma module so native SQLite binaries are not shipped to Workers.

Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `JWT_SECRET` as Worker secrets using `wrangler secret put NAME` when changing production credentials. Never commit their values.

`npm run cf:preview` builds and starts a local Cloudflare runtime. It uses separate local D1/KV data and the ignored `.dev.vars` file for local secrets.

The configuration uses Workers, D1, and KV features available on Cloudflare's free tiers. Usage is subject to Cloudflare's current free-tier quotas.
