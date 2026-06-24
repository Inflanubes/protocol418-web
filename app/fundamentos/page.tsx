// app/fundamentos/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import { MovementHeader } from '@/components/fundamentos/MovementHeader';
import { FundamentoCard } from '@/components/fundamentos/FundamentoCard';
import { fundamentosByMovement } from '@/lib/fundamentos';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fundamentos — Protocol 418',
  description:
    'De cero a lo básico: cómo funciona de verdad la tecnología que usas todos los días. Seguro que no te han contado que…',
};

export default function FundamentosPage() {
  const groups = fundamentosByMovement();

  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>Seguro que no te han contado que…</Eyebrow>
          <h1 className={styles.title}>Fundamentos.</h1>
          <p className={styles.lead}>
            De cero a lo básico. Lo que de verdad pasa por debajo de la tecnología que usas
            cada día, sin humo y sin gurús.
          </p>
        </div>
      </Section>

      {groups.map((group, gi) => (
        <Section key={group.movement} variant={gi % 2 === 0 ? 'surface' : 'default'}>
          <MovementHeader index={gi + 1} title={group.movement} />
          <ul className={styles.cards}>
            {group.items.map((entry) => (
              <li key={entry.slug}>
                <FundamentoCard entry={entry} />
              </li>
            ))}
          </ul>
        </Section>
      ))}

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
