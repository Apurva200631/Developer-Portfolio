import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use relative route or root
  return [
    {
      url: '/',
      lastModified: new Date('2026-10-09'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
