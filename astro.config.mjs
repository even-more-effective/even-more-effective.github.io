import { defineConfig } from 'astro/config';

// Check if we're in development mode (Docker)
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  site: isDev ? undefined : 'https://even-more-effective.github.io',
  base: isDev ? '/' : undefined,
  trailingSlash: isDev ? 'ignore' : 'always',
  build: {
    format: isDev ? 'file' : 'directory'
  },
});