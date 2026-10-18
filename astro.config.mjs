// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Central domain configuration.
 * `site` powers absolute canonical / Open Graph / sitemap URLs.
 *
 * The production domain has NOT been purchased yet. Set the SITE_URL
 * environment variable on Netlify (or in a local `.env`) once confirmed:
 *
 *   SITE_URL=https://your-real-domain.com
 *
 * When SITE_URL is absent, the project emits relative canonical / hreflang
 * URLs instead of publishing a fake domain.
 */
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
});
