import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { cn } from '@/lib/utils';
import { contact, getContent } from '@/content';
import { isLocale, locales } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/mario-perfil.jpg`,
    jobTitle: content.person.title,
    email: `mailto:${contact.email}`,
    address: { '@type': 'PostalAddress', addressRegion: 'Nariño', addressCountry: 'CO' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma de Manizales' },
    knowsAbout: [content.tracks.bio.label, content.tracks.data.label, ...content.tracks.bio.specialties.map((s) => s.title), ...content.tracks.data.specialties.map((s) => s.title)],
    sameAs: [contact.linkedin, contact.github],
    award: content.awards.map((a) => `${a.title} - ${a.issuer}`),
    knowsLanguage: content.person.languages.map((l) => l.name),
  };

  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={cn('bg-background font-body antialiased', inter.variable, spaceGrotesk.variable)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
