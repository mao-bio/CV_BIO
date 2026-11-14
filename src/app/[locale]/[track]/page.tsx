import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { SpecialtiesSection, StatsStrip } from '@/components/sections/Specialties';
import { ExperienceSection } from '@/components/sections/Experience';
import { ProjectsSection, type ProjectGroup } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { EducationSection } from '@/components/sections/Education';
import { CertificationsSection } from '@/components/sections/Certifications';
import { ContactSection } from '@/components/sections/Contact';
import { FloatingCV } from '@/components/sections/FloatingCV';
import { SiteFooter, TrackSwitch } from '@/components/sections/TrackSwitch';
import { ScrollProgress } from '@/components/ScrollProgress';
import { MotionProvider } from '@/components/MotionProvider';
import type { CvLink } from '@/components/CvMenu';
import { contact, getContent, getTrackContent, ui } from '@/content';
import {
  cvPath,
  cvPdfName,
  cvPdfPath,
  homePath,
  isLocale,
  otherLocale,
  otherTrack,
  trackFromSlug,
  trackPath,
  trackSlugs,
  tracks,
} from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; track: string }> };

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  const slugs = trackSlugs[params.locale];
  return tracks.map((track) => ({ track: slugs[track] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, track: slug } = await params;
  const track = isLocale(locale) ? trackFromSlug(locale, slug) : undefined;
  if (!isLocale(locale) || !track) return {};
  const profile = getContent(locale).tracks[track];
  return buildMetadata({
    locale,
    title: profile.seoTitle,
    description: profile.seoDescription,
    paths: { es: trackPath('es', track), en: trackPath('en', track) },
  });
}

export default async function TrackPage({ params }: Props) {
  const { locale, track: slug } = await params;
  if (!isLocale(locale)) notFound();
  const track = trackFromSlug(locale, slug);
  if (!track) notFound();

  const content = getContent(locale);
  const t = ui[locale];
  const { profile, stats, experience, otherExperience, projects, skills, certifications } = getTrackContent(locale, track);
  const other = otherTrack(track);

  const cvLinks: CvLink[] = [
    { label: t.hero.downloadPdf, href: cvPdfPath(locale, track), download: cvPdfName[locale][track], icon: 'pdf' },
    { label: t.hero.viewOnline, href: cvPath(locale, track), icon: 'view' },
  ];

  // The path's own kind of project goes first.
  const order: ProjectGroup['category'][] = track === 'data' ? ['datos', 'salud'] : ['salud', 'datos'];
  const groups: ProjectGroup[] = order
    .map((category) => ({ category, projects: projects.filter((p) => p.category === category) }))
    .filter((group) => group.projects.length > 0);

  const nav = [
    { name: t.nav.home, id: 'inicio' },
    { name: t.nav.experience, id: 'experiencia' },
    { name: t.nav.projects, id: 'proyectos' },
    { name: t.nav.skills, id: 'habilidades' },
    { name: t.nav.education, id: 'educacion' },
    { name: t.nav.certifications, id: 'certificaciones' },
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
          profiles={[{ label: content.tracks[other].short, href: trackPath(locale, other) }]}
          langHref={trackPath(otherLocale(locale), track)}
          contact={contact}
          t={t.nav}
        />

        <main>
          <Hero
            name={content.person.name}
            role={profile.role}
            headline={profile.headline}
            summary={profile.summary}
            cvLinks={cvLinks}
            contact={contact}
            ctaHref="#contacto"
            ctaLabel={t.hero.contact}
            t={t.hero}
          />
          <SpecialtiesSection specialties={profile.specialties} />
          <StatsStrip stats={stats} />
          <ExperienceSection items={experience} other={otherExperience} subtitle={profile.cardText} t={t.experience} />
          <ProjectsSection groups={groups} t={t.projects} />
          <SkillsSection groups={skills} intro={profile.skillsIntro} t={t.skills} />
          <EducationSection education={content.person.education} languages={content.person.languages} t={t.education} />
          <CertificationsSection items={certifications} t={t.certifications} />
          <TrackSwitch
            eyebrow={t.switchTrack.eyebrow}
            title={t.switchTrack[other].title}
            text={t.switchTrack[other].text}
            cta={t.switchTrack.cta}
            href={trackPath(locale, other)}
          />
          <ContactSection contact={contact} location={content.person.location} t={t.contact} />
        </main>

        <SiteFooter name={content.person.name} tagline={t.footer.tagline} built={t.footer.built} />
        <FloatingCV links={cvLinks} label={t.hero.downloadCv} />
      </div>
    </MotionProvider>
  );
}
