import type { Locale, Track } from '@/lib/i18n';
import { es } from './es';
import { en } from './en';
import { ui } from './ui';
import type { Content, ExperienceView, Stat } from './types';

export { contact } from './shared';
export { ui, type UI } from './ui';
export type * from './types';

const contents: Record<Locale, Content> = { es, en };

export const getContent = (locale: Locale): Content => contents[locale];

/** Everything one career path shows: its own bullets, projects, skills, certifications and figures. */
export const getTrackContent = (locale: Locale, track: Track) => {
  const content = contents[locale];
  const profile = content.tracks[track];

  const experience: ExperienceView[] = content.experience
    .filter((item) => item.tracks.includes(track))
    .map(({ bullets, ...rest }) => ({
      ...rest,
      bullets: bullets[track] ?? bullets.bio ?? bullets.data ?? [],
    }));

  const projects = content.projects.filter((item) => item.tracks.includes(track));

  // Counted from the project list so the figures never go stale.
  const counted: Stat[] =
    track === 'data'
      ? [
          { value: String(projects.length), label: ui[locale].stats.projects },
          { value: String(projects.filter((p) => p.embedUrl).length), label: ui[locale].stats.demos },
        ]
      : [];

  const certifications = content.certifications.filter((item) => item.tracks.includes(track));
  const certificationStat: Stat = { value: String(certifications.length), label: ui[locale].stats.certifications };

  return {
    profile,
    stats: [...counted, ...profile.stats, certificationStat],
    experience: experience.filter((item) => !item.secondary),
    otherExperience: experience.filter((item) => item.secondary),
    projects,
    skills: content.skills.filter((item) => item.tracks.includes(track)),
    certifications,
  };
};
