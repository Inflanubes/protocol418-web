'use client';

import { useEffect, useState } from 'react';
import styles from './MotionToggle.module.css';

export function MotionToggle({ className }: { className?: string }) {
  const [motion, setMotion] = useState<'on' | 'off' | null>(null);

  useEffect(() => {
    setMotion(document.documentElement.dataset.motion === 'off' ? 'off' : 'on');
  }, []);

  if (!motion) return null;

  const toggle = () => {
    const next = motion === 'on' ? 'off' : 'on';
    document.documentElement.dataset.motion = next;
    try {
      localStorage.setItem('p418-motion', next);
    } catch {
      /* sin storage: el toggle vale para la sesión */
    }
    setMotion(next);
  };

  return (
    <button type="button" onClick={toggle} className={`${styles.toggle} ${className ?? ''}`}>
      motion: {motion}
    </button>
  );
}
