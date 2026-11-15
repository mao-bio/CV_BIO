import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, Languages } from 'lucide-react';
import { PrintButton } from '@/components/PrintButton';
import { TrackedLink } from '@/components/TrackedLink';
import { contact, getContent, getTrackContent, ui, type ExperienceView } from '@/content';
import { formatMarkdown } from '@/lib/format-text';
import {
  cvPath,
  cvPdfName,
  cvPdfPath,
  isLocale,
  otherLocale,
  trackFromSlug,
  trackPath,
  trackSlugs,
  tracks,
} from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

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
  const content = getContent(locale);
  return buildMetadata({
    locale,
    title: `CV · ${content.person.fullName} · ${content.tracks[track].label}`,
    description: content.tracks[track].seoDescription,
    paths: { es: cvPath('es', track), en: cvPath('en', track) },
    index: false,
  });
}

const stripUrl = (url: string) => decodeURI(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// The CV must fit on two pages: the two most recent roles get the most room,
// research stays brief, and the web profile keeps the full detail.
const bulletLimit = (item: ExperienceView, index: number) => (index < 2 ? 4 : item.icon === 'research' ? 2 : 3);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-3 mb-1 flex items-center gap-3 text-[11.5pt] font-bold text-[#17468a] break-after-avoid">
    {children}
    <span className="h-px flex-1 bg-[#17468a]" />
  </h2>
);

const ExperienceEntry = ({ item, index }: { item: ExperienceView; index: number }) => (
  <div className="mb-1.5">
    <div className="flex items-baseline justify-between gap-4 break-after-avoid">
      <p>
        <strong>{item.company}</strong>, {item.role}
      </p>
      <p className="flex-shrink-0 text-right text-slate-600">{item.period}</p>
    </div>
    <ul className="list-disc pl-5">
      {item.bullets.slice(0, bulletLimit(item, index)).map((bullet) => (
        <li key={bullet} className="break-inside-avoid">
          {formatMarkdown(bullet)}
        </li>
      ))}
    </ul>
  </div>
);

export default async function CvPage({ params }: Props) {
  const { locale, track: slug } = await params;
  if (!isLocale(locale)) notFound();
  const track = trackFromSlug(locale, slug);
  if (!track) notFound();

  const content = getContent(locale);
  const t = ui[locale].cv;
  const { profile, experience, otherExperience, projects, skills, certifications } = getTrackContent(locale, track);
  const featured = projects.filter((project) => project.featured);
  const portfolioUrl = `${siteConfig.url}${trackPath(locale, track)}`;

  const skillsBlock = (
    <>
      <SectionTitle>{t.skills}</SectionTitle>
      <div>
        {skills
          .filter((group) => group.id !== 'blandas')
          .map((group) => (
            <p key={group.id} className="break-inside-avoid">
              <strong>{group.title}:</strong> {group.items.join(' | ')}
            </p>
          ))}
        <p>
          <strong>{t.languages}:</strong>{' '}
          {content.person.languages.map((language) => `${language.name}: ${language.level}`).join(' | ')}
        </p>
      </div>
    </>
  );

  return (
    <div className="cv-screen min-h-screen bg-slate-200 py-8 print:bg-white print:py-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 print:hidden">
        <Link href={trackPath(locale, track)} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> {t.back}
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={cvPath(otherLocale(locale), track)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 h-10 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Languages className="h-4 w-4" /> {ui[locale].nav.langCode}
          </Link>
          <PrintButton label={t.print} />
          <TrackedLink
            event="descarga_cv"
            data={{ archivo: cvPdfName[locale][track] }}
            href={cvPdfPath(locale, track)}
            download={cvPdfName[locale][track]}
            className="inline-flex items-center gap-2 rounded-full bg-[#17468a] px-4 h-10 text-sm font-semibold text-white hover:bg-[#123a73] transition-colors"
          >
            <Download className="h-4 w-4" /> {t.download}
          </TrackedLink>
        </div>
      </div>

      <article className="cv-sheet mx-auto max-w-[210mm] bg-white p-[12mm] text-[9.5pt] leading-[1.35] text-slate-900 shadow-xl print:max-w-none print:p-0 print:shadow-none">
        <header className="text-center">
          <h1 className="text-[20pt] font-extrabold uppercase tracking-tight text-[#17468a]">{content.person.fullName}</h1>
          <p className="text-[9.5pt] font-medium text-[#17468a]">{profile.cvHeadline}</p>
          <p className="mt-1 flex flex-wrap justify-center gap-x-3 text-[9pt] text-slate-700">
            <span>{content.person.location}</span>
            <span aria-hidden>|</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span aria-hidden>|</span>
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          </p>
          <p className="flex flex-wrap justify-center gap-x-3 text-[9pt] text-slate-700">
            <a href={contact.linkedin}>{stripUrl(contact.linkedin)}</a>
            <span aria-hidden>|</span>
            <a href={contact.github}>{stripUrl(contact.github)}</a>
            <span aria-hidden>|</span>
            <a href={portfolioUrl}>{stripUrl(portfolioUrl)}</a>
          </p>
          <p className="text-[9pt] text-slate-700">{content.person.availability}</p>
        </header>

        <SectionTitle>{t.profile}</SectionTitle>
        <p className="text-justify">{profile.cvProfile}</p>

        {track === 'data' && skillsBlock}

        <SectionTitle>{t.experience}</SectionTitle>
        {experience.map((item, index) => (
          <ExperienceEntry key={item.id} item={item} index={index} />
        ))}
        {otherExperience.map((item) => (
          <div key={item.id} className="flex items-baseline justify-between gap-4 break-inside-avoid">
            <p>
              <strong>{item.company}</strong>, {item.role}
            </p>
            <p className="flex-shrink-0 text-right text-slate-600">{item.period}</p>
          </div>
        ))}

        {featured.length > 0 && (
          <>
            <SectionTitle>{t.projects}</SectionTitle>
            <ul className="list-disc pl-5">
              {featured.map((project) => {
                const link = project.githubUrl ?? (project.embedUrl?.includes('htmlpreview') ? undefined : project.embedUrl);
                return (
                  <li key={project.id} className="break-inside-avoid">
                    <strong>{project.title}</strong>
                    <span className="text-slate-600"> · {project.tags.slice(0, 4).join(', ')}</span>
                    {link && (
                      <>
                        {' · '}
                        <a href={link} className="text-[#17468a]">
                          {stripUrl(link).replace(/\/?\?embed=true$/, '')}
                        </a>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <SectionTitle>{t.education}</SectionTitle>
        {content.person.education.map((item) => (
          <div key={item.degree} className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <p>
                <strong>{item.degree}</strong> · {item.institution}
                {item.honor && ` · ${item.honor.split('|').map((honor) => honor.trim()).join(' · ')}`}
              </p>
              <p className="flex-shrink-0 text-slate-600">{item.period}</p>
            </div>
            {item.note && <p className="text-slate-600">{item.note}</p>}
          </div>
        ))}

        <SectionTitle>{t.certifications}</SectionTitle>
        <p>
          {certifications
            .map((item) => {
              const source = [item.issuer, item.date].filter(Boolean).join(', ');
              return source ? `${item.title} (${source})` : item.title;
            })
            .join(' · ')}
        </p>

        {track === 'bio' && skillsBlock}

        <SectionTitle>{t.awards}</SectionTitle>
        <p>
          {content.awards
            .map((award) => `${award.title}, ${award.issuer}${award.year ? ` (${award.year})` : ''}`)
            .join(' · ')}
        </p>
      </article>
    </div>
  );
}
