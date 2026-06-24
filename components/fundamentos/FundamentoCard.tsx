// components/fundamentos/FundamentoCard.tsx
'use client';

import { useEffect, useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Fundamento } from '@/lib/fundamentos';
import { BlockRenderer } from './BlockRenderer';
import styles from './FundamentoCard.module.css';

export function FundamentoCard({ entry }: { entry: Fundamento }) {
  const anchor = `${entry.level}-${entry.slug}`;
  const panelId = useId();
  const [open, setOpen] = useState(false);

  // Abrir si el hash de la URL apunta a esta card (deep-link compartible).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash === `#${anchor}`) {
      setOpen(true);
      // Scroll suave a la card ya abierta.
      document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
    }
  }, [anchor]);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (typeof window !== 'undefined') {
      const url = next ? `#${anchor}` : window.location.pathname;
      window.history.replaceState(null, '', url);
    }
  }

  return (
    <article id={anchor} className={`${styles.card} ${open ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        <span className={styles.level}>{entry.level}</span>
        <span className={styles.headerText}>
          <span className={styles.title}>{entry.title}</span>
          <span className={styles.summary}>{entry.summary}</span>
          {!open ? (
            <span className={styles.hook}>Seguro que no te han contado que… {entry.hook}</span>
          ) : null}
        </span>
        <ChevronDown className={styles.chevron} size={20} strokeWidth={1.75} aria-hidden />
      </button>

      {open ? (
        <div id={panelId} className={styles.panel}>
          {entry.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
