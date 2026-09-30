import { spawnSync } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';
import { sites } from './site-config.mjs';

const siteId = process.argv[2];
const site = sites[siteId];
if (!site) {
  console.error(`Unknown site: ${siteId || '(missing)'}`);
  process.exit(1);
}

const outputDirectory = resolve('deploy', siteId);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const viteEntry = resolve('node_modules', 'vite', 'bin', 'vite.js');
const result = spawnSync(process.execPath, [viteEntry, 'build', '--outDir', outputDirectory, '--emptyOutDir'], {
  stdio: 'inherit',
  env: { ...process.env, VITE_DEFAULT_THEME: site.theme },
});
if (result.status !== 0) process.exit(result.status ?? 1);

const note = `${site.domain}\n${site.themeName} theme\nTheme ID: ${site.theme}\nLayouts: basic, project, minimal, gallery\n\nUpload every file in this folder to the web root for this domain.\nEach site includes four portfolio layouts. Use #/basic, #/project, #/minimal, or #/gallery.\n`;
await writeFile(resolve(outputDirectory, 'CNAME'), `${site.domain}\n`, 'utf8');
await writeFile(resolve(outputDirectory, 'DEPLOYMENT-NOTE.txt'), note, 'utf8');
// The repository root owns these URL-stable assets; copy them into each standalone deploy.
await cp(resolve('images'), resolve(outputDirectory, 'images'), { recursive: true });
await cp(resolve('certificates'), resolve(outputDirectory, 'certificates'), { recursive: true });
console.log(`Built ${siteId} -> ${outputDirectory}`);
