/**
 * Single source of truth for business + site configuration.
 *
 * NEVER invent business facts here. Every field below is either
 * confirmed by the business owner or an explicit, documented placeholder.
 */

/* ------------------------------------------------------------------ */
/* Domain                                                              */
/* ------------------------------------------------------------------ */

/**
 * Production domain is NOT confirmed yet.
 *
 * How to set it:
 *   - On Netlify: Site settings → Environment variables → add `SITE_URL`
 *     with the full origin (e.g. https://example.com).
 *   - Repository code does not change when the domain is set; only the
 *     environment variable does.
 *
 * While the domain is unknown, canonical / hreflang URLs are emitted as
 * relative paths instead of publishing a non-existent domain.
 */
export const SITE_ORIGIN =
  (import.meta.env.SITE || import.meta.env.PUBLIC_SITE_URL || '').replace(/\/$/, '');

export const isDomainConfigured = /^https?:\/\//.test(SITE_ORIGIN);

/**
 * Build an absolute URL when the domain is configured, otherwise return
 * the site-relative path. Used for canonicals and hreflang so we never
 * publish a fake domain.
 */
export function url(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return isDomainConfigured ? `${SITE_ORIGIN}${clean}` : clean;
}

/* ------------------------------------------------------------------ */
/* Business facts (confirmed)                                          */
/* ------------------------------------------------------------------ */

export const BUSINESS = {
  nameAr: 'زجاج سكريت',
  nameEn: 'Zijaj Sekreet',
  legalNameAr: 'زجاج سكريت',
  /** Service-area business: Riyadh only. Reflected in copy + schema. */
  cityAr: 'الرياض',
  cityEn: 'Riyadh',
  regionAr: 'منطقة الرياض',
  regionEn: 'Riyadh Province',
  countryAr: 'المملكة العربية السعودية',
  countryEn: 'Saudi Arabia',
  countryCode: 'SA',
  phoneDisplay: '+966\u200e50 202 7835',
  phoneE164: '+966502027835',
  telHref: 'tel:+966502027835',
  whatsappNumber: '966502027835',
  whatsappHref: 'https://wa.me/966502027835',
  whatsappMessageAr: 'مرحباً، أرغب بالاستفسار عن خدمة زجاج سكريت في الرياض.',
  whatsappMessageEn: 'Hello, I would like to ask about your glass service in Riyadh.',
} as const;

/**
 * Fields intentionally left empty because they are NOT confirmed.
 * Do not fabricate these. See docs/OWNER-INPUTS.md.
 */
export const UNCONFIRMED = {
  streetAddress: null,
  geoCoordinates: null,
  openingHours: null,
  foundedYear: null,
  socialProfiles: [] as string[],
} as const;

/* ------------------------------------------------------------------ */
/* Contact links                                                       */
/* ------------------------------------------------------------------ */

export type Lang = 'ar' | 'en';

export const DEFAULT_LANG: Lang = 'ar';

export function whatsappHref(lang: Lang): string {
  const msg = lang === 'ar' ? BUSINESS.whatsappMessageAr : BUSINESS.whatsappMessageEn;
  return `${BUSINESS.whatsappHref}?text=${encodeURIComponent(msg)}`;
}

/* ------------------------------------------------------------------ */
/* Locale / routing conventions                                        */
/* ------------------------------------------------------------------ */

export const LOCALES = {
  ar: { label: 'العربية', htmlLang: 'ar', dir: 'rtl', prefix: '' },
  en: { label: 'English', htmlLang: 'en', dir: 'ltr', prefix: '/en' },
} as const;

/** Every indexable route, keyed by a stable id, with both locales. */
export const ROUTES = {
  home: { ar: '/', en: '/en/' },
  facades: { ar: '/glass-facades/', en: '/en/glass-facades/' },
  doors: { ar: '/glass-doors/', en: '/en/glass-doors/' },
  partitions: { ar: '/glass-office-partitions/', en: '/en/glass-office-partitions/' },
  showers: { ar: '/glass-shower-enclosures/', en: '/en/glass-shower-enclosures/' },
  rooms: { ar: '/glass-rooms/', en: '/en/glass-rooms/' },
  railings: { ar: '/glass-railings/', en: '/en/glass-railings/' },
  mirrors: { ar: '/mirrors/', en: '/en/mirrors/' },
  repair: { ar: '/glass-repair/', en: '/en/glass-repair/' },
  projects: { ar: '/projects/', en: '/en/projects/' },
  pricing: { ar: '/glass-price-guide/', en: '/en/glass-price-guide/' },
  about: { ar: '/about/', en: '/en/about/' },
  privacy: { ar: '/privacy/', en: '/en/privacy/' },
} as const;

export type RouteId = keyof typeof ROUTES;

/** The other locale's path, for the language switcher + hreflang. */
export function alternatePath(id: RouteId, lang: Lang): string {
  const key = lang === 'ar' ? 'en' : 'ar';
  return ROUTES[id][key];
}
