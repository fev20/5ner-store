import { cp } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('dist');
await cp(resolve('images'), resolve(output, 'images'), { recursive: true });
await cp(resolve('certificates'), resolve(output, 'certificates'), { recursive: true });
