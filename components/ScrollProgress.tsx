// components/ScrollProgress.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.max(0, Math.min(100, Math.round((window.scrollY / max) * 100))) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className={styles.wrap} aria-hidden>
      <span className={styles.load}>load: {pct}%</span>
      <div className={styles.bar} style={{ transform: `scaleX(${pct / 100})` }} />
    </div>
  );
}
