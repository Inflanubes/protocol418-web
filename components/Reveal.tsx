// components/Reveal.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './Reveal.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll('.stagger').forEach((s) => {
      Array.from(s.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--stagger-i', String(i));
      });
    });
    const markInView = () => {
      el.querySelectorAll('.tw, .stagger').forEach((n) => n.classList.add('in-view'));
    };
    if (!('IntersectionObserver' in window)) {
      el.classList.add(styles.visible!, 'in-view');
      markInView();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add(styles.visible!, 'in-view');
          markInView();
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${className ?? ''}`}>
      {children}
    </div>
  );
}
