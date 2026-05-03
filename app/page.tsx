// app/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Logo } from '@/components/Logo';
import { Tagline } from '@/components/Tagline';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protocol 418 — Esto no es teoría. Esto es protocolo.',
  description: 'Comunidad para construir con IA y automatización sin humo. Brew, Protocol, Core.',
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <div className={styles.hero}>
          <Logo size="lg" className={styles.heroLogo} />
          <Tagline className={styles.heroTagline} variant="muted" />
          <h1 className={styles.heroHook}>
            Esto no es teoría.
            <br />
            Esto es protocolo.
          </h1>
        </div>
      </Section>

      {/* TEAPOT STORY */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>01 · El origen</Eyebrow>
          <h2 className={styles.h2}>Hyper Text Coffee Pot Control Protocol</h2>
          <p className={styles.body}>
            En 1998, unos ingenieros publicaron una broma en internet: un protocolo para controlar
            cafeteras por HTTP. Dentro de esa broma apareció un código:
          </p>
          <p className={styles.quote}>418 — I&apos;m a teapot.</p>
          <p className={styles.body}>
            Significa literalmente: <em>&ldquo;me estás pidiendo café… pero soy una tetera.&rdquo;</em>{' '}
            No puedo darte lo que quieres porque no soy lo que crees. Era humor técnico. Pero hoy es
            más real que nunca.
          </p>
        </div>
      </Section>

      {/* ESO ES UN 418 */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>02 · La realidad</Eyebrow>
          <h2 className={styles.h2}>Eso es un 418.</h2>
          <ul className={styles.list}>
            <li>Te venden herramientas que no necesitas.</li>
            <li>Te prometen soluciones que no encajan con tu problema.</li>
            <li>Te dicen que todo es IA cuando muchas veces no lo es.</li>
          </ul>
          <p className={styles.body}>
            Protocol 418 nace para detectar cuándo algo no tiene sentido desde la base. Para separar
            lo que funciona de lo que solo suena bien. Para construir sistemas reales, no demos
            bonitas. Para pensar antes de automatizar.
          </p>
        </div>
      </Section>

      {/* POSTURA */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>03 · La postura</Eyebrow>
          <p className={styles.statement}>No necesitas más IA. Necesitas mejor estructura.</p>
          <p className={styles.statement}>Menos herramientas, más sistema.</p>
          <p className={styles.statement}>Si no lo has probado, es opinión.</p>
        </div>
      </Section>

      {/* QUIÉN HAY DETRÁS */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>04 · Quién hay detrás</Eyebrow>
          <p className={styles.body}>
            Detrás de 418 hay un builder que llevaba años enseñando y ahora prefiere construir y
            compartir directamente. Sin intermediarios. Sin humo.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className={styles.cta}>
          <Eyebrow>Compartir es ayudar. Be open source, my friend.</Eyebrow>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso al community de WhatsApp">
            Entrar al community →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
