#!/usr/bin/env node
/**
 * Generates the illustrative SVG artwork used as clearly-marked
 * placeholders until the owner supplies real project photographs.
 *
 * These are NOT photographs of the business's work and must never be
 * presented as such. See docs/OWNER-INPUTS.md.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => {
  const file = join(root, 'public', p);
  mkdirSync(dirname(file), { recursive: true });
  return file;
};

const NAVY = '#0F1A2C';
const NAVY_2 = '#16263f';
const CYAN = '#00B4D8';
const GOLD = '#C9A94E';

const frame = (inner, { w = 1200, h = 750, label = '' } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" width="${w}" height="${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="0.55" stop-color="${NAVY_2}"/>
      <stop offset="1" stop-color="#0b1524"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="0.5" stop-color="${CYAN}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  ${inner}
  <g opacity="0.9">
    <rect x="0" y="${h - 6}" width="${w}" height="6" fill="${GOLD}" opacity="0.5"/>
  </g>
  ${label ? `<text x="${w / 2}" y="${h - 34}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#ffffff" fill-opacity="0.45" font-weight="600">${label}</text>` : ''}
</svg>
`;

const panels = (n, { y = 130, w = 960, h = 470, gap = 18 } = {}) => {
  const pw = (w - gap * (n - 1)) / n;
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = 130 + i * (pw + gap);
    s += `<rect x="${x}" y="${y}" width="${pw}" height="${h}" rx="10" fill="url(#glass)" stroke="${CYAN}" stroke-opacity="0.55" stroke-width="2"/>`;
    s += `<rect x="${x + pw * 0.16}" y="${y}" width="${pw * 0.14}" height="${h}" fill="url(#sheen)" opacity="0.5"/>`;
  }
  return s;
};

const glow = (cx, cy, r, color = CYAN, o = 0.25) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${o}"/>`;

const scenes = {
  facades: `${glow(940, 150, 260)}${panels(4)}
    <line x1="130" y1="600" x2="1090" y2="600" stroke="${GOLD}" stroke-opacity="0.5" stroke-width="3"/>`,
  doors: `${glow(300, 600, 240)}${panels(2)}
    <rect x="640" y="180" width="330" height="420" rx="12" fill="none" stroke="${GOLD}" stroke-opacity="0.6" stroke-width="2"/>
    <line x1="820" y1="240" x2="820" y2="560" stroke="#fff" stroke-opacity="0.5" stroke-width="8" stroke-linecap="round"/>`,
  partitions: `${glow(980, 620, 240)}${panels(5, { h: 430 })}
    <line x1="130" y1="560" x2="1090" y2="560" stroke="${CYAN}" stroke-opacity="0.4" stroke-width="2"/>`,
  showers: `${glow(220, 120, 200)}${panels(2, { y: 170, h: 380 })}
    <circle cx="960" cy="210" r="26" fill="none" stroke="${CYAN}" stroke-opacity="0.6" stroke-width="3"/>
    <path d="M960 246 v90" stroke="${CYAN}" stroke-opacity="0.5" stroke-width="3"/>
    <line x1="130" y1="580" x2="1090" y2="580" stroke="#fff" stroke-opacity="0.2" stroke-width="3"/>`,
  rooms: `${glow(600, 80, 280)}
    <rect x="150" y="150" width="900" height="430" rx="14" fill="url(#glass)" stroke="${CYAN}" stroke-opacity="0.5" stroke-width="2"/>
    <line x1="430" y1="150" x2="430" y2="580" stroke="${CYAN}" stroke-opacity="0.4" stroke-width="2"/>
    <line x1="730" y1="150" x2="730" y2="580" stroke="${CYAN}" stroke-opacity="0.4" stroke-width="2"/>
    <rect x="130" y="600" width="960" height="6" rx="3" fill="${GOLD}" opacity="0.5"/>`,
  railings: `${glow(600, 640, 300)}
    <g stroke="${CYAN}" stroke-opacity="0.6" stroke-width="2" fill="url(#glass)">
      <rect x="170" y="330" width="180" height="220" rx="8"/>
      <rect x="368" y="300" width="180" height="250" rx="8"/>
      <rect x="566" y="270" width="180" height="280" rx="8"/>
      <rect x="764" y="240" width="180" height="310" rx="8"/>
    </g>
    <line x1="150" y1="238" x2="970" y2="208" stroke="${GOLD}" stroke-opacity="0.7" stroke-width="6" stroke-linecap="round"/>`,
  mirrors: `${glow(600, 300, 320)}
    <rect x="330" y="120" width="540" height="470" rx="16" fill="url(#glass)" stroke="${GOLD}" stroke-opacity="0.7" stroke-width="4"/>
    <rect x="372" y="162" width="456" height="386" rx="10" fill="none" stroke="#fff" stroke-opacity="0.2" stroke-width="2"/>
    <path d="M400 520 L560 300 L720 480 L790 420" fill="none" stroke="#fff" stroke-opacity="0.3" stroke-width="3"/>`,
  repair: `${glow(600, 260, 300)}
    <rect x="260" y="140" width="680" height="420" rx="14" fill="url(#glass)" stroke="${CYAN}" stroke-opacity="0.5" stroke-width="2"/>
    <path d="M520 120 l40 120 l-70 60 l60 130" fill="none" stroke="${GOLD}" stroke-opacity="0.8" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="470" cy="470" r="10" fill="${GOLD}"/>
    <circle cx="720" cy="230" r="10" fill="${GOLD}"/>`,
};

for (const [name, inner] of Object.entries(scenes)) {
  writeFileSync(out(`images/services/${name}.svg`), frame(inner, { label: '' }));
}

// Hero + open graph
writeFileSync(out('images/hero.svg'), frame(`${glow(1000, 120, 320)}${glow(120, 680, 260, GOLD, 0.14)}${panels(3, { y: 150, h: 440 })}`, {}));
writeFileSync(out('images/og-default.svg'), frame(`${glow(1050, 120, 300)}${panels(4, { y: 220, h: 300 })}`, { w: 1200, h: 630 }));

// Generic project placeholder (clearly a placeholder)
writeFileSync(
  out('images/placeholder-project.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" width="800" height="500">
  <rect width="800" height="500" fill="#0F1A2C"/>
  <rect width="800" height="500" fill="url(#p)" opacity="0.35"/>
  <defs>
    <linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00B4D8" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#0b1524" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="80" y="70" width="640" height="360" rx="12" fill="none" stroke="#00B4D8" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="10 8"/>
  <text x="400" y="262" text-anchor="middle" fill="#c3cee0" font-family="sans-serif" font-size="26" font-weight="700">Placeholder</text>
  <text x="400" y="300" text-anchor="middle" fill="#7d8ba6" font-family="sans-serif" font-size="17">Replace with a real project photo</text>
</svg>`
);

console.log('SVG assets generated.');
