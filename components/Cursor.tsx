// components/Cursor.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary';
const TEXTUAL = 'input, textarea';

export function Cursor() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<'rest' | 'hover' | 'text'>('rest');
  const el = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    const motionOn = () => document.documentElement.dataset.motion !== 'off';

    const activate = () => {
      setActive(true);
      document.documentElement.classList.add(styles.hideNative!);
    };
    const deactivate = () => {
      setActive(false);
      document.documentElement.classList.remove(styles.hideNative!);
    };

    if (motionOn()) activate();

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const t = e.target as Element | null;
      const hit = t?.closest?.(INTERACTIVE) ?? null;
      setMode(hit ? (hit.matches(TEXTUAL) ? 'text' : 'hover') : 'rest');
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.35;
      pos.current.y += (target.current.y - pos.current.y) * 0.35;
      if (el.current) {
        el.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const observer = new MutationObserver(() => {
      if (motionOn()) {
        activate();
      } else {
        deactivate();
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.documentElement.classList.remove(styles.hideNative!);
    };
  }, []);

  if (!active) return null;

  return (
    <div ref={el} className={styles.cursor} aria-hidden data-mode={mode}>
      <span className={styles.open}>&lt;</span>
      <span className={styles.dot}>{mode === 'text' ? '_' : '·'}</span>
      <span className={styles.close}>&gt;</span>
    </div>
  );
}
