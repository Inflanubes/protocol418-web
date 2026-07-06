// app/not-found.tsx
import Link from 'next/link';
import { Section } from '@/components/Section';
import { CTAButton } from '@/components/CTAButton';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main>
      <Section>
        <div className={styles.wrap}>
          <p className={styles.errorLine}>$ GET /esta-ruta → ERROR 404</p>
          <h1 className={styles.code}>404</h1>
          <p className={styles.message}>
            Ruta no encontrada. ¿Seguro que no buscabas un <span className={styles.accent}>418</span>?
          </p>
          <div className={styles.actions}>
            <CTAButton variant="outline" href="/">
              $ cd ~
            </CTAButton>
            <Link href="/protocol" className={styles.link}>
              o lee el protocol →
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
