// components/fundamentos/MovementHeader.tsx
import styles from './MovementHeader.module.css';

export function MovementHeader({ index, title }: { index: number; title: string }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.index}>[MOVIMIENTO {index}/5]</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
