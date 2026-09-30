import { cp, mkdir, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('dist');
async function copyDirectory(name) {
  const from = resolve(name);
  const to = resolve(output, name);
  await mkdir(to, { recursive: true });
  for (const file of await readdir(from)) await cp(resolve(from, file), resolve(to, file), { recursive: true, force: true });
}
await copyDirectory('images');
await copyDirectory('certificates');
