// app/protocol/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { GlossaryEntry } from '@/components/GlossaryEntry';
import { CTAButton } from '@/components/CTAButton';
import { GLOSSARY } from '@/lib/glossary';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protocol — Lenguaje y convenciones — Protocol 418',
  description:
    'Principios, tipos de post, vocabulario. La operación interna de Protocol 418 explicada.',
};

const PRINCIPLES = [
  'Esto no es teoría. Esto es protocolo.',
  'Si no funciona, no es protocolo.',
  'No necesitas más IA. Necesitas mejor estructura.',
  'Menos herramientas, más sistema.',
];

const CONVENTIONS = [
  'Compartir es ayudar. Be open source, my friend.',
  'Si no lo has probado, es opinión.',
  'Contexto > rapidez.',
  'Si lo complicas → probablemente es un 418.',
];

const POST_TYPES = [
  {
    name: 'Brew Logs',
    emoji: '☕',
    description: 'Lo que se está montando. Posts en proceso, con sus warts. Se comparte mientras se construye, no después.',
  },
  {
    name: 'Hotfix',
    emoji: '🔥',
    description: 'Soluciones rápidas a problemas concretos. No siempre limpias, pero funcionan y desbloquean.',
  },
  {
    name: 'Protocol',
    emoji: '⚙️',
    description: 'Mejores prácticas. Probadas en la realidad, no especuladas. La forma correcta de hacer algo.',
  },
  {
    name: '418 Moments',
    emoji: '💥',
    description: 'Cuando algo se rompe porque nunca tuvo sentido desde el principio. Se comparte para entenderlo y no repetirlo.',
  },
];

export default function ProtocolPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>El sistema</Eyebrow>
          <h1 className={styles.title}>Aquí está el protocolo.</h1>
          <p className={styles.lead}>Léelo antes de escribir.</p>
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
        <div className={styles.contentBlock}>
          <Eyebrow>Categorías</Eyebrow>
          <h2 className={styles.h2}>Tipos de post.</h2>
          <p className={styles.lead}>
            Cuando empecemos a publicar en el feed, cada post pertenece a una de estas 4
            categorías. Los nombres también se usan dentro del community para etiquetar
            mensajes.
          </p>
          <ul className={styles.postTypes}>
            {POST_TYPES.map((t) => (
              <li key={t.name}>
                <span className={styles.postTypeEmoji} aria-hidden>
                  {t.emoji}
                </span>
                <div className={styles.postTypeBody}>
                  <span className={styles.postTypeName}>{t.name}</span>
                  <p className={styles.postTypeDesc}>{t.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className={styles.glossarySection}>
          <Eyebrow>Lenguaje · {GLOSSARY.length} términos</Eyebrow>
          <h2 className={styles.h2}>El vocabulario del protocolo.</h2>
          <p className={styles.lead}>
            Jerga propia que se usa con naturalidad en el community. No se sobreexplica en línea —
            si el contexto la hace clara, basta. Estos términos también clasifican los posts del
            feed.
          </p>
          <div className={styles.grid}>
            {GLOSSARY.map((term) => (
              <GlossaryEntry key={term.term} entry={term} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.cta}>
          <CTAButton variant="outline" ariaLabel="Solicitar acceso al community de WhatsApp">
            Entrar al community →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
