// components/Boot.tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Boot.module.css';

const LINES = [
  '$ boot protocol418 --no-humo',
  '✓ protocolo cargado',
  '✓ humo purgado (97.2%)',
  '✓ tetera lista — status 418',
];
const LINE_DELAY_MS = 420; // 4 líneas + salida ≈ 2s

export function Boot() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(1);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    try {
      localStorage.setItem('p418-booted', '1');
    } catch {
      /* modo privado: el boot se repetirá — aceptado en spec §8 */
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem('p418-booted')) return;
    } catch {
      /* sin storage seguimos: boot corto y saltable */
    }
    if (document.documentElement.dataset.motion === 'off') {
      finish();
      return;
    }
    setVisible(true);
  }, [finish]);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setCount((c) => c + 1), LINE_DELAY_MS);
    const onKey = () => finish();
    window.addEventListener('keydown', onKey);
    return () => {
      clearInterval(id);
      window.removeEventListener('keydown', onKey);
    };
  }, [visible, finish]);

  useEffect(() => {
    if (visible && count > LINES.length + 1) finish();
  }, [count, visible, finish]);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={finish} role="status" aria-live="polite">
      <div className={styles.term}>
        {LINES.slice(0, count).map((line) => (
          <p key={line} className={line.startsWith('✓') ? styles.ok : styles.cmd}>
            {line}
          </p>
        ))}
        <span className={styles.cursor} aria-hidden>
          _
        </span>
      </div>
      <span className={styles.skip}>clic para saltar</span>
    </div>
  );
}
