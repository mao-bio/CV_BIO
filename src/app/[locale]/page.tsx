import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { PathCards, type PathCard } from '@/components/sections/PathCards';
import { EducationSection } from '@/components/sections/Education';
import { AwardsSection } from '@/components/sections/Awards';
import { Inspiration } from '@/components/sections/Inspiration';
import { ContactSection } from '@/components/sections/Contact';
import { FloatingCV } from '@/components/sections/FloatingCV';
import { SiteFooter } from '@/components/sections/TrackSwitch';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ConvaiWidget } from '@/components/ConvaiWidget';
import { MotionProvider } from '@/components/MotionProvider';
import type { CvLink } from '@/components/CvMenu';
import { contact, getContent, ui } from '@/content';
import { cvPdfName, cvPdfPath, homePath, isLocale, otherLocale, trackPath, tracks } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { home } = getContent(locale);
  return buildMetadata({
    locale,
    title: home.seoTitle,
    description: home.seoDescription,
    paths: { es: homePath('es'), en: homePath('en') },
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const t = ui[locale];

  const cards: PathCard[] = tracks.map((track) => ({
    track,
    label: content.tracks[track].label,
    role: content.tracks[track].role,
    text: content.tracks[track].cardText,
    points: content.tracks[track].cardPoints,
    href: trackPath(locale, track),
    cvHref: cvPdfPath(locale, track),
    cvDownload: cvPdfName[locale][track],
  }));

  const cvLinks: CvLink[] = tracks.map((track) => ({
    label: content.tracks[track].label,
    href: cvPdfPath(locale, track),
    download: cvPdfName[locale][track],
    icon: track,
  }));

  const nav = [
    { name: t.nav.home, id: 'inicio' },
    { name: t.nav.profiles, id: 'perfiles' },
    { name: t.nav.awards, id: 'logros' },
    { name: t.nav.education, id: 'educacion' },
    { name: t.nav.contact, id: 'contacto' },
  ];

  return (
    <MotionProvider>
      <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 bg-grid">
        <div className="noise" />
        <ScrollProgress />
        <Header
          nav={nav}
          homeHref={homePath(locale)}
          profiles={tracks.map((track) => ({ label: content.tracks[track].short, href: trackPath(locale, track) }))}
          langHref={homePath(otherLocale(locale))}
          contact={contact}
          t={t.nav}
        />

        <main>
          <Hero
            name={content.person.name}
            role={content.person.title}
            headline={content.home.headline}
            summary={content.home.summary}
            cvLinks={cvLinks}
            contact={contact}
            ctaHref="#perfiles"
            ctaLabel={t.hero.choose}
            t={t.hero}
          />
          <PathCards cards={cards} t={t.paths} />
          <AwardsSection awards={content.awards} t={t.awards} />
          <EducationSection education={content.person.education} languages={content.person.languages} t={t.education} />
          <Inspiration quotes={content.quotes} nextLabel={t.inspiration.next} />
          <ContactSection contact={contact} location={content.person.location} t={t.contact} />
        </main>

        <SiteFooter name={content.person.name} tagline={t.footer.tagline} built={t.footer.built} />
        <FloatingCV links={cvLinks} label={t.hero.downloadCv} />
        <ConvaiWidget />
      </div>
    </MotionProvider>
  );
}
