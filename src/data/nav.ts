import { ROUTES } from '../config/site';
import { SERVICES } from './services';

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

const arLabels: Record<string, string> = {
  facades: 'واجهات زجاج سكريت',
  doors: 'أبواب زجاج سكريت',
  partitions: 'قواطع مكاتب زجاجية',
  showers: 'شاورات وكبائن حمامات',
  rooms: 'غرف زجاجية',
  railings: 'درابزين زجاج',
  mirrors: 'مرايا',
  repair: 'صيانة وإصلاح الزجاج',
};
const enLabels: Record<string, string> = {
  facades: 'Glass Facades',
  doors: 'Glass Doors',
  partitions: 'Office Partitions',
  showers: 'Shower Enclosures',
  rooms: 'Glass Rooms',
  railings: 'Glass Railings',
  mirrors: 'Mirrors',
  repair: 'Maintenance & Repair',
};

export function serviceNav(lang: 'ar' | 'en') {
  const labels = lang === 'ar' ? arLabels : enLabels;
  return SERVICES.map((s) => ({ label: labels[s.id] ?? s.ar.title, href: ROUTES[s.id][lang] }));
}

export function mainNav(lang: 'ar' | 'en'): NavItem[] {
  return [
    { label: lang === 'ar' ? 'الرئيسية' : 'Home', href: ROUTES.home[lang] },
    {
      label: lang === 'ar' ? 'الخدمات' : 'Services',
      href: ROUTES.facades[lang],
      children: serviceNav(lang),
    },
    { label: lang === 'ar' ? 'الأعمال' : 'Projects', href: ROUTES.projects[lang] },
    { label: lang === 'ar' ? 'الأسعار' : 'Pricing', href: ROUTES.pricing[lang] },
    { label: lang === 'ar' ? 'من نحن' : 'About', href: ROUTES.about[lang] },
  ];
}
