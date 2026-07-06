// components/ModuleHeader.tsx
import styles from './ModuleHeader.module.css';

type Props = {
  index: number;
  label?: string;
  children: React.ReactNode;
};

export function ModuleHeader({ index, label = 'MODULE', children }: Props) {
  const nn = String(index).padStart(2, '0');
  const tag = `[${label} ${nn}]`;
  return (
    <div className={styles.header}>
      <span
        className={`${styles.tag} tw`}
        style={{ '--tw-steps': tag.length, '--tw-ch': `${tag.length}ch` } as React.CSSProperties}
      >
        {tag}
      </span>
      <span aria-hidden> — </span>
      <span className={styles.title}>{children}</span>
    </div>
  );
}
