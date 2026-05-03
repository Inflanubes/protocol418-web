// app/not-found.tsx
import Link from 'next/link';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main>
      <Section>
        <div className={styles.wrap}>
          <Eyebrow>418 detected</Eyebrow>
          <h1 className={styles.code}>404</h1>
          <p className={styles.message}>Esta ruta no existe. Volver al protocolo.</p>
          <div className={styles.actions}>
            <CTAButton variant="outline" href="/">
              Volver al manifiesto
            </CTAButton>
            <Link href="/protocol" className={styles.link}>
              O lee el protocol →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
