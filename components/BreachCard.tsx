// components/BreachCard.tsx
import Image from 'next/image';
import type { Breach } from '@/lib/breaches';
import styles from './BreachCard.module.css';

type Props = {
  breach: Breach;
  flip?: boolean; // true → Breachling a la derecha (alternancia de ritmo)
};

export function BreachCard({ breach, flip = false }: Props) {
  return (
    <article id={breach.slug} className={`${styles.card} ${flip ? styles.flip : ''}`}>
      <div className={styles.media}>
        <Image
          src={breach.breachling}
          alt={`Breachling de la breach ${breach.number}: ${breach.label}`}
          width={breach.width}
          height={breach.height}
          className={styles.breachling}
          sizes="(max-width: 720px) 80vw, 40vw"
        />
      </div>
      <div className={styles.body}>
        <span className={styles.number}>BREACH #{breach.number}</span>
        <h2 className={styles.label}>{breach.label}</h2>
        <p className={styles.hook}>{breach.hook}</p>
        <p className={styles.remate}>{breach.remate}</p>
      </div>
    </article>
  );
}
