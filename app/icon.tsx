// app/icon.tsx
import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: '#0B0B0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F0EBE2',
          fontWeight: 700,
          fontFamily: 'monospace',
        }}
      >
        <span>&lt;4</span>
        <span style={{ color: '#EA5A1F' }}>|</span>
        <span>8&gt;</span>
      </div>
    ),
    { ...size }
  );
}
