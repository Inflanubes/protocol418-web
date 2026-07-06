// components/fundamentos/MovementHeader.tsx
import styles from './MovementHeader.module.css';

export function MovementHeader({ index, title }: { index: number; title: string }) {
  const tag = `[MOVIMIENTO ${index}/5]`;
  return (
    <div className={styles.wrap}>
      <span
        className={`${styles.index} tw`}
        style={{ '--tw-steps': tag.length, '--tw-ch': `${tag.length}ch` } as React.CSSProperties}
      >
        {tag}
      </span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
