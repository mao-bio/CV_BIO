import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/mario-perfil.jpg'));
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

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
            Bio-Engineering x AI
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: '#0f172a', marginTop: 16, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 36, color: '#2563eb', marginTop: 20 }}>
            <span>Ingeniero Biomédico</span>
            <span>Especialista en IA</span>
          </div>
          <div style={{ fontSize: 24, color: '#475569', marginTop: 28 }}>
            Ingeniería clínica · Análisis de datos · ML en salud
          </div>
        </div>
        <img
          src={photoSrc}
          width={360}
          height={360}
          style={{ borderRadius: 9999, objectFit: 'cover', objectPosition: 'top', border: '10px solid white' }}
        />
      </div>
    ),
    size,
  );
}
