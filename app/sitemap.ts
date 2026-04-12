import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/quienes-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/transparencia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fuentes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contacto-prensa`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/politica-editorial`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/accesibilidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
