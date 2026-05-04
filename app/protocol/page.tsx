// app/protocol/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { GlossaryEntry } from '@/components/GlossaryEntry';
import { CTAButton } from '@/components/CTAButton';
import { GLOSSARY } from '@/lib/glossary';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protocol — Lenguaje y convenciones — Protocol 418',
  description: 'Principios, convenciones y vocabulario del protocolo de 418.',
};

const PRINCIPLES = [
  'Si no funciona, no es protocolo.',
  'No necesitas más IA. Necesitas mejor estructura.',
  'Menos herramientas, más sistema.',
  'Esto no es teoría. Esto es protocolo.',
];

const CONVENTIONS = [
  'Compartir es ayudar. Be open source, my friend.',
  'Si no lo has probado, es opinión.',
  'Contexto > rapidez.',
  'Si lo complicas → probablemente es un 418.',
];

export default function ProtocolPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>El sistema</Eyebrow>
          <h1 className={styles.title}>Aquí está el protocolo.</h1>
          <p className={styles.lead}>
            Lee el apartado <Link href="/comunidad">Comunidad</Link> antes de empezar a escribir y recuerda usar nuestro vocabulario (aquí abajo).
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>Principios</Eyebrow>
          <ul className={styles.principles}>
            {PRINCIPLES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>Convenciones</Eyebrow>
          <h2 className={styles.h2}>Cómo funcionamos.</h2>
          <ul className={styles.conventions}>
            {CONVENTIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.glossarySection}>
          <Eyebrow>Lenguaje · {GLOSSARY.length} términos</Eyebrow>
          <h2 className={styles.h2}>El vocabulario del protocolo.</h2>
          <p className={styles.lead}>
            Jerga propia que se usa con naturalidad en la comunidad. No se sobreexplica en línea —
            si el contexto la hace clara, basta.
          </p>
          <div className={styles.grid}>
            {GLOSSARY.map((term) => (
              <GlossaryEntry key={term.term} entry={term} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.cta}>
          <CTAButton variant="outline" ariaLabel="Solicitar acceso a la comunidad de WhatsApp">
            Entrar a la comunidad →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
