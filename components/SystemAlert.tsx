// components/SystemAlert.tsx
import Link from 'next/link';
import { Container } from './Container';
import styles from './SystemAlert.module.css';

type Props = {
  label: string;
  title: React.ReactNode;
  href: string;
  linkText: string;
  className?: string;
};

export function SystemAlert({ label, title, href, linkText, className }: Props) {
  return (
    <section className={`${styles.alert} ${className ?? ''}`}>
      <Container>
        <span className={styles.label}>⚠ {label}</span>
        <h2 className={styles.title}>{title}</h2>
        <Link href={href} className={styles.link}>
          {linkText} →
        </Link>
      </Container>
    </section>
  );
}
