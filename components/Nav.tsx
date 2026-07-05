// components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import styles from './Nav.module.css';

function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('es-ES', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={styles.clock} suppressHydrationWarning>
      {time ?? '--:--:--'}
    </span>
  );
}

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
        <Link href="/" className={styles.brand} aria-label="Protocol 418 — inicio">
          &lt;4<span className={styles.pipe}>|</span>8&gt;
        </Link>

        <button
          className={styles.toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.togglePrompt}>$ menu</span>
        </button>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            const path = link.href === '/' ? '~' : link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.active : ''}`}
                onClick={() => setOpen(false)}
                aria-label={link.label}
              >
                {path}
              </Link>
            );
          })}
        </nav>

        <div className={styles.status} aria-hidden>
          <span className={styles.statusDot}>●</span>
          <span className={styles.statusCode}>418</span>
          <Clock />
        </div>
      </div>
    </header>
  );
}
