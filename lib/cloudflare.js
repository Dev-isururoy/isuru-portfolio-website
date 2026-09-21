import { getCloudflareContext } from '@opennextjs/cloudflare';

export function getCloudflareEnv() {
  try {
    return getCloudflareContext().env;
  } catch {
    return null;
  }
}
