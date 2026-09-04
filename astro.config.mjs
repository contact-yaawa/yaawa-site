import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { answerRedirects } from './src/redirects.mjs';

export default defineConfig({
  site: 'https://answers.youaskandweanswer.com',
  output: 'static',
  redirects: answerRedirects,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
