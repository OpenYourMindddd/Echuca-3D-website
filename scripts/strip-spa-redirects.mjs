/**
 * Remove legacy _redirects from dist. SPA routing uses wrangler.jsonc
 * (not_found_handling: single-page-application). A cached dist/_redirects
 * causes Cloudflare API error 100324 on deploy.
 */
import { unlinkSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const redirectsPath = join(process.cwd(), 'dist', '_redirects');

if (existsSync(redirectsPath)) {
  unlinkSync(redirectsPath);
  console.log('Removed dist/_redirects (SPA handled by wrangler assets config)');
}
