import { getContent } from '@/content';
import { defaultLocale, isLocale, trackFromSlug } from '@/lib/i18n';
import { ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Mario Hernández';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string; track: string }> }) {
  const { locale: raw, track: slug } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);
  const profile = content.tracks[trackFromSlug(locale, slug) ?? 'bio'];

  return renderOgImage({
    eyebrow: profile.label,
    lines: profile.role.split('·').map((part) => part.trim()).slice(0, 2),
    footer: profile.cardPoints[0],
  });
}
