import { rmSync, existsSync } from 'node:fs';

if (existsSync('dist')) {
  rmSync('dist', { recursive: true, force: true });
}
