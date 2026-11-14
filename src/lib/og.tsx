import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { siteConfig } from '@/lib/site';

export const ogSize = { width: 1200, height: 630 };

type OgCard = { eyebrow: string; lines: string[]; footer: string };

export async function renderOgImage({ eyebrow, lines, footer }: OgCard) {
  const photo = await readFile(join(process.cwd(), 'public/mario-perfil.jpg'));
  // The profile photo is PNG data despite its .jpg name; label it by its real signature.
  const mime = photo[0] === 0x89 ? 'image/png' : 'image/jpeg';
  const photoSrc = `data:${mime};base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 80px',
          gap: 64,
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0ecff 55%, #d4f4f0 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4, color: '#0d9488', textTransform: 'uppercase' }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: '#0f172a', marginTop: 16, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 36, color: '#2563eb', marginTop: 20 }}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ fontSize: 24, color: '#475569', marginTop: 28 }}>{footer}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={360}
          height={360}
          alt=""
          style={{ borderRadius: 9999, objectFit: 'cover', objectPosition: 'top', border: '10px solid white' }}
        />
      </div>
    ),
    ogSize,
  );
}
