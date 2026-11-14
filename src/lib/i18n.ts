export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const tracks = ['bio', 'data'] as const;
export type Track = (typeof tracks)[number];

// URL slug of each career path, per language.
export const trackSlugs: Record<Locale, Record<Track, string>> = {
  es: { bio: 'biomedico', data: 'datos' },
  en: { bio: 'biomedical', data: 'data-ai' },
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const trackFromSlug = (locale: Locale, slug: string): Track | undefined =>
  tracks.find((track) => trackSlugs[locale][track] === slug);

export const otherLocale = (locale: Locale): Locale => (locale === 'es' ? 'en' : 'es');
export const otherTrack = (track: Track): Track => (track === 'bio' ? 'data' : 'bio');

export const homePath = (locale: Locale) => `/${locale}`;
export const trackPath = (locale: Locale, track: Track) => `/${locale}/${trackSlugs[locale][track]}`;
export const cvPath = (locale: Locale, track: Track) => `/${locale}/cv/${trackSlugs[locale][track]}`;

// PDF files written to /public/cv by `npm run cv:pdf`.
export const cvPdfName: Record<Locale, Record<Track, string>> = {
  es: {
    bio: 'CV_Mario_Hernandez_Ing_Biomedico_ES.pdf',
    data: 'CV_Mario_Hernandez_Datos_IA_ES.pdf',
  },
  en: {
    bio: 'CV_Mario_Hernandez_Biomedical_Eng_EN.pdf',
    data: 'CV_Mario_Hernandez_Data_AI_EN.pdf',
  },
};

export const cvPdfPath = (locale: Locale, track: Track) => `/cv/${cvPdfName[locale][track]}`;
