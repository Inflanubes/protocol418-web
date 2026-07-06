// components/ClassCard.tsx
import Link from 'next/link';
import { formatClassDate, type ClassEntry } from '@/lib/classes';
import styles from './ClassCard.module.css';

type Props = {
  entry: ClassEntry;
};

export function ClassCard({ entry }: Props) {
  return (
    <Link href={`/brew/${entry.slug}`} className={styles.card}>
      <div className={styles.chrome} aria-hidden>
        <span className={styles.chromeDots}>●●●</span>
        <span className={styles.chromeTitle}>{entry.tea}.sh</span>
        <span className={entry.youtubeId ? styles.statusOn : styles.statusOff}>
          {entry.youtubeId ? '● emitida' : '○ en camino'}
        </span>
      </div>
      <div className={styles.head}>
        <span className={styles.tea}>{entry.tea}</span>
        <span className={styles.date}>{formatClassDate(entry.date)}</span>
      </div>
      <h3 className={styles.title}>{entry.title}</h3>
      <p className={styles.excerpt}>{entry.excerpt}</p>
      {entry.stack.length > 0 && (
        <ul className={styles.stack}>
          {entry.stack.map((tool) => (
            <li key={tool} className={styles.chip}>
              {tool}
            </li>
          ))}
        </ul>
      )}
      <span className={styles.cta} aria-hidden>
        ver la clase →
      </span>
    </Link>
  );
}
