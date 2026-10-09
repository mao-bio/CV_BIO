import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { cvData } from '@/lib/data';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Ingeniero Biomédico',
    'Inteligencia Artificial',
    'Machine Learning',
    'Análisis de Datos',
    'Power BI',
    'Python',
    'Gestión Tecnológica Hospitalaria',
    'Tecnovigilancia',
    'Colombia',
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'es_CO',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.fullName,
  url: siteConfig.url,
  image: `${siteConfig.url}/mario-perfil.jpg`,
  jobTitle: 'Ingeniero Biomédico | Especialista en Inteligencia Artificial',
  email: `mailto:${cvData.contact.email}`,
  address: { '@type': 'PostalAddress', addressRegion: 'Nariño', addressCountry: 'CO' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma de Manizales' },
  knowsAbout: ['Ingeniería Biomédica', 'Inteligencia Artificial', 'Machine Learning', 'Análisis de Datos', 'Tecnovigilancia'],
  sameAs: [cvData.contact.linkedin, cvData.contact.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
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
