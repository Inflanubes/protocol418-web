// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const alt = 'Protocol 418 — Esto no es teoría. Esto es protocolo.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0B0B0B',
          color: '#F0EBE2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            display: 'flex',
            letterSpacing: '0.03em',
          }}
        >
          <span>&lt;4</span>
          <span style={{ color: '#EA5A1F' }}>|</span>
          <span>8&gt;</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#7A7A7A',
            letterSpacing: '0.3em',
            marginTop: 24,
            textTransform: 'uppercase',
          }}
        >
          CONSTRUIR · AUTOMATIZAR · COMPARTIR
        </div>
        <div
          style={{
            fontSize: 42,
            marginTop: 48,
            color: '#F0EBE2',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Esto no es teoría.</span>
          <span>Esto es protocolo.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
