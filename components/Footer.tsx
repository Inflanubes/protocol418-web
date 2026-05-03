// components/Footer.tsx
import Link from 'next/link';
import { Logo } from './Logo';
import { Tagline } from './Tagline';
import { NAV_LINKS, SITE } from '@/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size="sm" />
          <Tagline variant="muted" />
        </div>
        <nav className={styles.links} aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.legal}>
        <span>
          © {year} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
