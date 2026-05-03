// components/Logo.tsx
import styles from './Logo.module.css';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  size?: Size;
  className?: string;
};

export function Logo({ size = 'md', className }: Props) {
  return (
    <span
      className={`${styles.logo} ${styles[size]} ${className ?? ''}`}
      aria-label="Protocol 418"
    >
      <span className={styles.bracket}>&lt;</span>
      <span className={styles.digit}>4</span>
      <span className={styles.pipe}>|</span>
      <span className={styles.digit}>8</span>
      <span className={styles.bracket}>&gt;</span>
    </span>
  );
}
