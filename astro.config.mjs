// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to the real domain before launch — it's used for canonical
  // URLs and Open Graph tags.
  site: 'https://example.com',

  adapter: cloudflare(),
});