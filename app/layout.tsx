// app/layout.tsx
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { Boot } from '@/components/Boot';
import { Cursor } from '@/components/Cursor';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/constants';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Protocol 418 — Esto no es teoría. Esto es protocolo.',
    template: '%s — Protocol 418',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: 'Protocol 418' }],
  generator: 'Next.js',
  keywords: ['IA', 'automatización', 'comunidad', 'protocolo', 'building', 'sin humo'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Protocol 418',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protocol 418',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          // Sets motion + js flags before paint. User override (localStorage)
          // wins over prefers-reduced-motion — see spec §5 (Chrome false-positive bug).
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.dataset.js='1';var m=null;try{m=localStorage.getItem('p418-motion');}catch(e){}if(m!=='on'&&m!=='off'){m=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches?'off':'on';}d.dataset.motion=m;})();`,
          }}
        />
        <Boot />
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
