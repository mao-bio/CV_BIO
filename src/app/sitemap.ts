import type { MetadataRoute } from 'next';
import { homePath, locales, trackPath, tracks, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

const abs = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { priority: number; path: (locale: Locale) => string }[] = [
    { priority: 1, path: homePath },
    ...tracks.map((track) => ({ priority: 0.9, path: (locale: Locale) => trackPath(locale, track) })),
  ];

  return pages.flatMap(({ priority, path }) =>
    locales.map((locale) => ({
      url: abs(path(locale)),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages: { es: abs(path('es')), en: abs(path('en')) } },
    })),
  );
}
