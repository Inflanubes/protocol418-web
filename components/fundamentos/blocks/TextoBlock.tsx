// components/fundamentos/blocks/TextoBlock.tsx
import styles from './blocks.module.css';

export function TextoBlock({ body }: { body: string }) {
  return <p className={styles.texto}>{body}</p>;
}
