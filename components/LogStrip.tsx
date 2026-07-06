// components/LogStrip.tsx
import Link from 'next/link';
import styles from './LogStrip.module.css';

type Item = { label: string; href: string };

export function LogStrip({ items }: { items: Item[] }) {
  return (
    <nav className={styles.strip} aria-label="Log del sistema">
      <span className={styles.prompt}>$ log —</span>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={styles.item}>
          {item.label}
        </Link>
      ))}
      <span className={styles.dot} aria-hidden>
        ●
      </span>
    </nav>
  );
}
