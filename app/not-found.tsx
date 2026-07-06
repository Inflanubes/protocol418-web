// app/not-found.tsx
import Link from 'next/link';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CTAButton } from '@/components/CTAButton';
import styles from './not-found.module.css';

const ERROR_LINE = '$ GET /esta-ruta → ERROR 404';

export default function NotFound() {
  return (
    <main>
      <Section>
        <Reveal>
          <div className={styles.wrap}>
            <p
              className={`${styles.errorLine} tw`}
              style={
                {
                  '--tw-steps': ERROR_LINE.length,
                  '--tw-ch': `${ERROR_LINE.length}ch`,
                } as React.CSSProperties
              }
            >
              {ERROR_LINE}
            </p>
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
        </Reveal>
      </Section>
    </main>
  );
}
