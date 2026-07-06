// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/protocol`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/brew`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/fundamentos`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/breach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/lab`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/comunidad`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
