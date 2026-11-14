import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, Languages } from 'lucide-react';
import { PrintButton } from '@/components/PrintButton';
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

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-5 mb-2 flex items-center gap-3 text-[13pt] font-bold text-[#17468a] break-after-avoid">
    {children}
    <span className="h-px flex-1 bg-[#17468a]" />
  </h2>
);

const ExperienceEntry = ({ item, compact }: { item: ExperienceView; compact?: boolean }) => (
  <div className={compact ? 'mb-3 break-inside-avoid' : 'mb-3'}>
    <div className="flex items-baseline justify-between gap-4 break-after-avoid">
      <p>
        <strong>{item.company}</strong>, {item.role}
      </p>
      <p className="flex-shrink-0 text-right text-slate-600">{item.period}</p>
    </div>
    <p className="text-slate-600 break-after-avoid">{item.location}</p>
    {compact ? (
      <p className="mt-1">{formatMarkdown(item.summary)}</p>
    ) : (
      <ul className="mt-1 list-disc pl-5 space-y-0.5">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="break-inside-avoid">
            {formatMarkdown(bullet)}
          </li>
        ))}
      </ul>
    )}
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
      <div className="space-y-1">
        {skills.map((group) => (
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
          <a
            href={cvPdfPath(locale, track)}
            download={cvPdfName[locale][track]}
            className="inline-flex items-center gap-2 rounded-full bg-[#17468a] px-4 h-10 text-sm font-semibold text-white hover:bg-[#123a73] transition-colors"
          >
            <Download className="h-4 w-4" /> {t.download}
          </a>
        </div>
      </div>

      <article className="cv-sheet mx-auto max-w-[210mm] bg-white p-[14mm] text-[10pt] leading-[1.4] text-slate-900 shadow-xl print:max-w-none print:p-0 print:shadow-none">
        <header className="text-center">
          <h1 className="text-[22pt] font-extrabold uppercase tracking-tight text-[#17468a]">{content.person.fullName}</h1>
          <p className="mt-1 text-[10pt] font-medium text-[#17468a]">{profile.cvHeadline}</p>
          <p className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[9.5pt] text-slate-700">
            <span>{content.person.location}</span>
            <span aria-hidden>|</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span aria-hidden>|</span>
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          </p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[9.5pt] text-slate-700">
            <a href={contact.linkedin}>{stripUrl(contact.linkedin)}</a>
            <span aria-hidden>|</span>
            <a href={contact.github}>{stripUrl(contact.github)}</a>
          </p>
          <p className="text-[9.5pt] text-slate-700">
            <a href={portfolioUrl}>
              {t.portfolio}: {stripUrl(portfolioUrl)}
            </a>
          </p>
        </header>

        <SectionTitle>{t.profile}</SectionTitle>
        <p className="text-justify">{profile.cvProfile}</p>

        {track === 'data' && skillsBlock}

        <SectionTitle>{t.experience}</SectionTitle>
        {experience.map((item) => (
          <ExperienceEntry key={item.id} item={item} />
        ))}

        {track === 'data' && featured.length > 0 && (
          <>
            <SectionTitle>{t.projects}</SectionTitle>
            {featured.map((project) => (
              <div key={project.id} className="mb-2 break-inside-avoid">
                <p>
                  <strong>{project.title}</strong>
                  <span className="text-slate-600"> · {project.tags.slice(0, 5).join(', ')}</span>
                </p>
                <p>{formatMarkdown(project.description)}</p>
                {(project.githubUrl || (project.embedUrl && !project.embedUrl.includes('htmlpreview'))) && (
                  <p className="text-[9pt] text-[#17468a]">
                    {[project.githubUrl, project.embedUrl && !project.embedUrl.includes('htmlpreview') ? project.embedUrl : undefined]
                      .filter((url): url is string => Boolean(url))
                      .map((url, index) => (
                        <span key={url}>
                          {index > 0 && ' | '}
                          <a href={url}>{stripUrl(url).replace(/\/?\?embed=true$/, '')}</a>
                        </span>
                      ))}
                  </p>
                )}
              </div>
            ))}
          </>
        )}

        {otherExperience.length > 0 && (
          <>
            <SectionTitle>{t.otherExperience}</SectionTitle>
            {otherExperience.map((item) => (
              <ExperienceEntry key={item.id} item={item} compact />
            ))}
          </>
        )}

        <SectionTitle>{t.education}</SectionTitle>
        {content.person.education.map((item) => (
          <div key={item.degree} className="mb-2 break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <p>
                <strong>{item.degree}</strong>
              </p>
              <p className="flex-shrink-0 text-slate-600">{item.period}</p>
            </div>
            <p>
              {item.institution}
              {item.honor && ` · ${item.honor.split('|').map((honor) => honor.trim()).join(' · ')}`}
            </p>
          </div>
        ))}

        <SectionTitle>{t.certifications}</SectionTitle>
        <ul className="list-disc pl-5 space-y-0.5">
          {certifications.map((item) => (
            <li key={item.title} className="break-inside-avoid">
              <strong>{item.title}</strong>
              {[item.issuer, item.date].filter(Boolean).length > 0 && ` · ${[item.issuer, item.date].filter(Boolean).join(', ')}`}
            </li>
          ))}
        </ul>

        {track === 'bio' && skillsBlock}

        <SectionTitle>{t.awards}</SectionTitle>
        <ul className="list-disc pl-5 space-y-0.5">
          {content.awards.map((award) => (
            <li key={award.title} className="break-inside-avoid">
              <strong>{award.title}</strong> · {award.issuer}
              {award.year && `, ${award.year}`}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
