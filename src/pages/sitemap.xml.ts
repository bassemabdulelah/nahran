import type { APIRoute } from 'astro';
import { ROUTES } from '../config/site';

/**
 * XML sitemap — canonical, indexable pages only.
 *
 * When `SITE_URL` is configured (astro `site`), locations are absolute.
 * Until the domain is purchased, locations stay relative so we never
 * publish a fake domain. Setting SITE_URL is all that is required.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ? site.toString().replace(/\/$/, '') : '';

  const paths = Object.values(ROUTES).flatMap((loc) => [loc.ar, loc.en]);
  const unique = Array.from(new Set(paths));

  const body = unique
    .map((p) => {
      const loc = `${base}${p}`;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
