import { spawnSync } from 'node:child_process';
import { readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const result = spawnSync(process.execPath, ['node_modules/@opennextjs/cloudflare/dist/cli/index.js', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, CLOUDFLARE_BUILD: '1' },
});
if (result.status !== 0) process.exit(result.status ?? 1);

// Next's standalone tracing can copy local .env files. Runtime secrets belong
// in Cloudflare bindings, so exclude these copies from the deployment output.
function removeEnvironmentCopies(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) removeEnvironmentCopies(file);
    else if (entry.name === '.env' || entry.name.startsWith('.env.')) unlinkSync(file);
  }
}
removeEnvironmentCopies(path.resolve('.open-next'));

// OpenNext also compiles .env values into a server-side fallback module.
// Keep only public build settings there; private values come from Worker secrets.
const environmentModule = path.resolve('.open-next/cloudflare/next-env.mjs');
const environments = await import(pathToFileURL(environmentModule).href);
writeFileSync(environmentModule, ['production', 'development', 'test'].map(mode => {
  const publicValues = Object.fromEntries(Object.entries(environments[mode] ?? {}).filter(([key]) => key.startsWith('NEXT_PUBLIC_')));
  return `export const ${mode} = ${JSON.stringify(publicValues)};`;
}).join('\n') + '\n');
