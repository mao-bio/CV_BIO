import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

type PageSeo = {
  locale: Locale;
  title: string;
  description: string;
  /** Path of this page in each language, for canonical and hreflang. */
  paths: Record<Locale, string>;
  index?: boolean;
};

export const buildMetadata = ({ locale, title, description, paths, index = true }: PageSeo): Metadata => ({
  title,
  description,
  alternates: {
    canonical: paths[locale],
    languages: { es: paths.es, en: paths.en, 'x-default': paths.es },
  },
  robots: index ? undefined : { index: false, follow: true },
  openGraph: {
    type: 'profile',
    locale: locale === 'es' ? 'es_CO' : 'en_US',
    url: paths[locale],
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
});
