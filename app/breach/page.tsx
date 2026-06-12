// app/breach/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import { BreachCard } from '@/components/BreachCard';
import { BREACHES } from '@/lib/breaches';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Breach — Protocol 418',
  description:
    'Protocol Breach: verdades incómodas sobre la tecnología que todos repiten sin entender. Cada breach rompe un mito.',
};

export default function BreachPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>Protocol Breach</Eyebrow>
          <h1 className={styles.title}>Breach.</h1>
          <p className={styles.lead}>
            Verdades incómodas sobre la tecnología que todos repiten sin entender.
            Cada breach rompe un mito.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <ul className={styles.stack}>
          {BREACHES.map((breach, i) => (
            <li key={breach.slug}>
              <BreachCard breach={breach} mirror={i % 2 === 1} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className={styles.cta}>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso a la comunidad de WhatsApp">
            Entrar a la comunidad →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
