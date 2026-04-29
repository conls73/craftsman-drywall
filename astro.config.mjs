// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://craftsmandrywallllc.com',
  base: '/craftsman-drywall',
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false
  }
});
