// components/ClassSpec.tsx
// Ficha técnica de una clase: Problema → Build → Stack. Look mono tipo PromptBlock.
import type { ClassEntry } from '@/lib/classes';
import styles from './ClassSpec.module.css';

type Props = {
  entry: Pick<ClassEntry, 'problema' | 'build' | 'stack'>;
};

export function ClassSpec({ entry }: Props) {
  return (
    <dl className={styles.spec}>
      <div className={styles.row}>
        <dt className={styles.label}>Problema</dt>
        <dd className={styles.value}>{entry.problema}</dd>
      </div>
      <div className={styles.row}>
        <dt className={styles.label}>Build</dt>
        <dd className={styles.value}>{entry.build}</dd>
      </div>
      <div className={styles.row}>
        <dt className={styles.label}>Stack</dt>
        <dd className={styles.value}>
          <ul className={styles.chips}>
            {entry.stack.map((tool) => (
              <li key={tool} className={styles.chip}>
                {tool}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
}
