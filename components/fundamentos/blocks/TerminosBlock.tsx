// components/fundamentos/blocks/TerminosBlock.tsx
import styles from './blocks.module.css';

type Item = { term: string; def: string };

export function TerminosBlock({ items }: { items: Item[] }) {
  return (
    <dl className={styles.terminos}>
      {items.map((it) => (
        <div key={it.term} className={styles.terminoRow}>
          <dt className={styles.termino}>{it.term}</dt>
          <dd className={styles.definicion}>{it.def}</dd>
        </div>
      ))}
    </dl>
  );
}
