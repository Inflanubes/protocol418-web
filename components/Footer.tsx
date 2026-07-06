import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { MotionToggle } from './MotionToggle';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.shutdown}>
          <span className={styles.cmd}>$ shutdown --never</span>
          <span className={styles.sep}>·</span>
          <span>el protocolo sigue</span>
          <span className={styles.sep}>·</span>
          <span className={styles.status}>● 418</span>
          <MotionToggle className={styles.motion} />
        </div>
        <nav className={styles.links} aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link} aria-label={l.label}>
              {l.href === '/' ? '~' : l.href}
            </Link>
          ))}
        </nav>
        <div className={styles.legal}>
          <span>
            © {year} {SITE.name}
          </span>
          <span className={styles.tagline}>INVESTIGAR · CONSTRUIR · COMPARTIR</span>
        </div>
      </div>
    </footer>
  );
}
