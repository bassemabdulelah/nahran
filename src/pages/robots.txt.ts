import type { APIRoute } from 'astro';

/**
 * robots.txt
 *
 * Crawling of HTML, CSS, JS and images is allowed. Assets are never
 * blocked. The Sitemap line is only published once the domain is known,
 * so we never reference a fake domain.
 */
export const GET: APIRoute = ({ site }) => {
  const isConfigured = Boolean(site);
  const base = site ? site.toString().replace(/\/$/, '') : '';

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Build artefacts and source are not published, but be explicit.',
    'Disallow: /api/',
    '',
  ];

  if (isConfigured) {
    lines.push(`Sitemap: ${base}/sitemap.xml`);
  } else {
    lines.push('# Sitemap becomes available once SITE_URL (the domain) is configured.');
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
