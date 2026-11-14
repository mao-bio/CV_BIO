import { getContent } from '@/content';
import { defaultLocale, isLocale } from '@/lib/i18n';
import { ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Mario Hernández';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);

  return renderOgImage({
    eyebrow: 'Bio-Engineering x AI',
    lines: content.person.title.split('|').map((part) => part.trim()),
    footer: `${content.tracks.bio.label} · ${content.tracks.data.label}`,
  });
}
