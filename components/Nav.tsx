// components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { CTAButton } from './CTAButton';
import { NAV_LINKS } from '@/lib/constants';
import styles from './Nav.module.css';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Protocol 418 — home">
          <Logo size="sm" />
        </Link>

        <button
          className={styles.toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <CTAButton variant="outline" className={styles.cta}>
            Entrar →
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
