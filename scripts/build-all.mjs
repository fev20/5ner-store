import { spawnSync } from 'node:child_process';
import process from 'node:process';
import { sites } from './site-config.mjs';

const executable = process.platform === 'win32' ? 'node.exe' : 'node';
for (const siteId of Object.keys(sites)) {
  const result = spawnSync(executable, ['scripts/build-site.mjs', siteId], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
