import type { Track } from '@/lib/i18n';

export type Stat = { value: string; label: string };

export type Specialty = {
  title: string;
  description: string;
  icon: 'brain' | 'database' | 'briefcase' | 'code' | 'shield' | 'wrench';
};

export type TrackProfile = {
  /** Full name of the path, e.g. "Ingeniería Biomédica". */
  label: string;
  /** Short name for navigation chips. */
  short: string;
  /** Job title shown above the hero heading. */
  role: string;
  /** Hero heading, split in two lines (the second one is highlighted). */
  headline: [string, string];
  /** Hero paragraphs. Supports **bold**. */
  summary: string[];
  /** Subtitle line under the name in the printable CV. */
  cvHeadline: string;
  /** "Professional profile" paragraph of the printable CV. */
  cvProfile: string;
  /** Home page card. */
  cardText: string;
  cardPoints: string[];
  stats: Stat[];
  specialties: Specialty[];
  skillsIntro: string;
  seoTitle: string;
  seoDescription: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  icon: 'corporate' | 'research' | 'academic';
  imageUrlId?: string;
  tracks: Track[];
  /** Listed after the main roles, under "Other experience". */
  secondary?: boolean;
  summary: string;
  /** Bullets written for each path. A path without its own list falls back to the other one. */
  bullets: Partial<Record<Track, string[]>>;
  tech: string[];
  impact?: string[];
};

export type ExperienceView = Omit<Experience, 'bullets'> & { bullets: string[] };

export type Project = {
  id: string;
  title: string;
  description: string;
  /** Real picture of the project. Without one the card shows a drawn cover instead. */
  imageUrlId?: string;
  cover?: 'app' | 'chart' | 'model' | 'web';
  images?: string[];
  tags: string[];
  category: 'salud' | 'datos';
  tracks: Track[];
  /** Listed in the printable CV. */
  featured?: boolean;
  caseStudy?: { problem: string; solution: string; result: string };
  embedUrl?: string;
  downloadUrl?: string;
  githubUrl?: string;
};

export type SkillGroup = {
  id: 'clinica' | 'herramientas' | 'lenguajes' | 'ia' | 'desarrollo' | 'blandas';
  title: string;
  items: string[];
  tracks: Track[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  tracks: Track[];
};

export type Award = {
  title: string;
  issuer: string;
  description: string;
  year?: string;
  category: 'investigacion' | 'academico';
  icon: 'trophy' | 'globe' | 'medal' | 'star';
  imageUrlId?: string;
};

export type Education = { degree: string; institution: string; period: string; honor: string; note?: string };

export type Content = {
  person: {
    name: string;
    fullName: string;
    title: string;
    location: string;
    availability: string;
    languages: { name: string; level: string }[];
    education: Education[];
  };
  home: {
    headline: [string, string];
    summary: string[];
    /** "What I'm looking for now" block on the home page. */
    now: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[]; contact: string };
    seoTitle: string;
    seoDescription: string;
  };
  tracks: Record<Track, TrackProfile>;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  certifications: Certification[];
  awards: Award[];
};
