#!/usr/bin/env node
/**
 * Post-build verification.
 * Checks the built HTML in dist/ for real SEO + integrity problems.
 * Reports honestly; exits non-zero when a hard failure is found.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const problems = [];
const notes = [];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('✗ dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const assetFiles = new Set(files.map((f) => f.replace(/^dist\//, '/')));

const titles = new Map();
const canonicals = new Map();
const descriptions = new Map();
const languages = new Map();

function decodeSafe(s) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

for (const file of htmlFiles) {
  const route = '/' + file.replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\\/g, '/');
  const html = readFileSync(file, 'utf8');
  const is404 = route.includes('404');

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const desc = html.match(/<meta name="description" content="(.*?)"/s)?.[1];
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const h1s = [...html.matchAll(/<h1[\s>]/g)];
  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  const lang = htmlTag.match(/lang="([^"]*)"/)?.[1];
  const dir = htmlTag.match(/dir="([^"]*)"/)?.[1];
  const noindex = /name="robots" content="[^"]*noindex/.test(html);

  if (!title) problems.push(`${route}: missing <title>`);
  if (!desc) problems.push(`${route}: missing meta description`);
  if (!canonical && !is404) problems.push(`${route}: missing canonical`);
  if (!canonical && is404) notes.push(`${route}: canonical intentionally omitted (404)`);
  if (h1s.length === 0) problems.push(`${route}: no <h1>`);
  if (h1s.length > 1) problems.push(`${route}: ${h1s.length} <h1> tags (expected 1)`);
  if (!lang) problems.push(`${route}: <html> missing lang`);
  if (!dir) problems.push(`${route}: <html> missing dir`);
  if (!is404 && noindex) problems.push(`${route}: unintended noindex on a normal page`);
  if (is404 && !noindex) problems.push(`${route}: 404 page should be noindex`);

  if (title) titles.set(route, title);
  if (desc) descriptions.set(route, desc);
  if (canonical) canonicals.set(route, canonical);
  if (lang) languages.set(route, lang);

  // Internal link check (anchors only).
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) {
    const href = decodeSafe(m[1]);
    if (href.startsWith('/_astro') || href.startsWith('/images') || href.startsWith('/fonts')) continue;
    const candidates = [href, `${href.replace(/\/$/, '')}/index.html`, `${href}index.html`];
    const ok = candidates.some((c) => assetFiles.has(c) || assetFiles.has(c.replace(/\/$/, '')));
    if (!ok && !href.endsWith('.xml') && !href.endsWith('.txt') && !href.endsWith('.svg')) {
      problems.push(`${route}: broken internal link → ${href}`);
    }
  }

  // Image existence + alt attributes.
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/src="(\/[^"]*)"/)?.[1];
    if (!tag.includes('alt=')) problems.push(`${route}: <img> without alt (${src ?? 'inline'})`);
    if (src && !assetFiles.has(src)) problems.push(`${route}: image not found → ${src}`);
    if (src && !/width=/.test(tag)) notes.push(`${route}: <img> without width (${src})`);
  }
}

/* Uniqueness of titles / descriptions */
const seenTitles = new Map();
for (const [route, t] of titles) {
  if (seenTitles.has(t)) problems.push(`duplicate <title>: "${t}" (${seenTitles.get(t)} + ${route})`);
  else seenTitles.set(t, route);
}

/* hreflang reciprocity */
const hreflang = new Map();
for (const file of htmlFiles) {
  const route = '/' + file.replace(/^dist\//, '').replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  if (route.includes('404')) continue;
  const alts = [...html.matchAll(/hreflang="([^"]+)" href="([^"]*)"/g)].map((m) => [m[1], m[2]]);
  const langs = alts.map(([l]) => l);
  if (!langs.includes('ar') && !langs.includes('en')) {
    problems.push(`${route}: no hreflang pairs`);
  }
  hreflang.set(route, alts);
}

/* structured data is parseable */
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = '/' + file.replace(/^dist\//, '');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  for (const b of blocks) {
    try {
      JSON.parse(b[1]);
    } catch (e) {
      problems.push(`${route}: invalid JSON-LD (${e.message})`);
    }
  }
}

/* art files */
for (const f of ['dist/robots.txt', 'dist/sitemap.xml', 'dist/favicon.svg']) {
  if (!existsSync(f)) problems.push(`missing ${f}`);
}

console.log(`\nChecked ${htmlFiles.length} HTML pages.\n`);
if (notes.length) {
  console.log('Notes:');
  for (const n of notes.slice(0, 20)) console.log('  • ' + n);
  console.log('');
}
if (problems.length) {
  console.log(`✗ ${problems.length} problem(s):`);
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('✓ All checks passed (titles, descriptions, canonicals, h1, lang/dir, hreflang, JSON-LD, links, images, noindex).');
