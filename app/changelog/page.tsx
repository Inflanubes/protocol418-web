// app/changelog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { ModuleHeader } from '@/components/ModuleHeader';
import { Reveal } from '@/components/Reveal';
import { BRIEFINGS_BY_DATE } from '@/lib/briefings';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Changelog — Novedades — Protocol 418',
  description:
    'Novedades del sector en formato briefing: qué ha salido, dónde falla y para qué no usarlo. Verificado, con fuentes, sin humo.',
};

export default function ChangelogPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Reveal>
            <ModuleHeader index={1}>novedades verificadas</ModuleHeader>
          </Reveal>
          <h1 className={styles.title}>Changelog.</h1>
          <p className={styles.lead}>
            Lo que cambia ahí fuera, contado como se cuenta un sistema: qué ha salido, dónde falla
            y para qué <em>no</em> usarlo. Cada entrada es un briefing de clase, con fuentes.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <Reveal>
          <ol className={`${styles.entries} stagger`}>
            {BRIEFINGS_BY_DATE.map((briefing) => (
              <li key={briefing.slug} className={styles.entry}>
                <div className={styles.meta}>
                  <span className={styles.date}>{briefing.fecha}</span>
                  <span className={styles.temas} aria-hidden>
                    {briefing.temas.map((tema) => (
                      <span key={tema} className={styles.tema}>
                        [{tema}]
                      </span>
                    ))}
                  </span>
                </div>
                <h2 className={styles.entryTitle}>{briefing.titulo}</h2>
                <p className={styles.resumen}>{briefing.resumen}</p>
                <a
                  className={styles.open}
                  href={briefing.deck}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Abrir briefing: ${briefing.titulo}`}
                >
                  $ open {briefing.slug}
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section>
        <div className={styles.footNote}>
          <Reveal>
            <ModuleHeader index={2}>caducidad</ModuleHeader>
          </Reveal>
          <h2 className={styles.h2}>Esto caduca. A propósito.</h2>
          <p className={styles.noteLead}>
            Un briefing cuenta el estado del sector en una fecha — por eso cada entrada lleva la
            suya. Lo que no caduca vive en{' '}
            <Link href="/fundamentos" className={styles.inlineLink}>
              Fundamentos
            </Link>
            : si un briefing te suena a chino, empieza por ahí.
          </p>
        </div>
      </Section>
    </main>
  );
}
