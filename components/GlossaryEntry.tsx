// components/GlossaryEntry.tsx
import type { GlossaryTerm } from '@/lib/glossary';
import styles from './GlossaryEntry.module.css';

type Props = { entry: GlossaryTerm };

export function GlossaryEntry({ entry }: Props) {
  const { Icon } = entry;
  return (
    <article className={styles.entry}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden>
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <h3 className={styles.term}>{entry.term}</h3>
      </div>
      <p className={styles.definition}>{entry.definition}</p>
      <ul className={styles.examples}>
        {entry.examples.map((ex) => (
          <li key={ex}>&ldquo;{ex}&rdquo;</li>
        ))}
      </ul>
    </article>
  );
}
