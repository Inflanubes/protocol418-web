// app/brew/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import { VideoEmbed } from '@/components/VideoEmbed';
import { ClassSpec } from '@/components/ClassSpec';
import { ResourceList } from '@/components/ResourceList';
import { CLASSES, getClassBySlug, formatClassDate } from '@/lib/classes';
import styles from './page.module.css';

// SSG: una página estática por clase.
export function generateStaticParams() {
  return CLASSES.map((entry) => ({ slug: entry.slug }));
}

// En Next 15 params es una Promise.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getClassBySlug(slug);
  if (!entry) return { title: 'Clase no encontrada — Protocol 418' };
  return {
    title: `${entry.tea} — ${entry.title} — Protocol 418`,
    description: entry.excerpt,
  };
}

export default async function ClassPage({ params }: Params) {
  const { slug } = await params;
  const entry = getClassBySlug(slug);
  if (!entry) notFound();

  return (
    <main>
      <Section>
        <div className={styles.head}>
          <Link href="/brew" className={styles.back}>
            <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
            Todas las clases
          </Link>
          <Eyebrow>{entry.tea}</Eyebrow>
          <h1 className={styles.title}>{entry.title}</h1>
          <span className={styles.date}>{formatClassDate(entry.date)}</span>
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.body}>
          {!entry.noVideo && (
            <VideoEmbed youtubeId={entry.youtubeId} title={`${entry.tea} — ${entry.title}`} />
          )}
          <ClassSpec entry={entry} />
          <p className={styles.description}>{entry.description}</p>
        </div>
      </Section>

      <Section>
        <div className={styles.resources}>
          <Eyebrow>Recursos</Eyebrow>
          <ResourceList resources={entry.resources ?? []} />
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.cta}>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso a la comunidad de WhatsApp">
            Entrar a la comunidad →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
