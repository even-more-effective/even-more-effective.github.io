import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  site: 'https://even-more-effective.github.io',
  outDir: './dist',
  build: {
    format: 'file'
  },
});
