// Special config file for Docker development
// This doesn't affect the GitHub Pages deployment

import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});