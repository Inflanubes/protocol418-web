// components/BreachCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Breach } from '@/lib/breaches';
import styles from './BreachCard.module.css';

type Props = {
  breach: Breach;
  mirror?: boolean; // true → imagen a la derecha (alternancia de ritmo)
};

export function BreachCard({ breach, mirror = false }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div id={breach.slug} className={styles.scene}>
      <button
        type="button"
        className={[styles.card, mirror ? styles.mirror : '', flipped ? styles.isFlipped : '']
          .filter(Boolean)
          .join(' ')}
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`Breach ${breach.number}: ${breach.label}. Pulsa para ${
          flipped ? 'volver al frente' : 'ver la explicación'
        }.`}
      >
        {/* Cara frontal — Breachling + rótulo + hook + remate */}
        <div className={`${styles.face} ${styles.front}`} aria-hidden={flipped}>
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
            <span className={styles.number}>⚠ BREACH {breach.number} — DETECTED</span>
            <h2 className={styles.label}>{breach.label}</h2>
            <p className={styles.hook}>{breach.hook}</p>
            <p className={styles.remate}>{breach.remate}</p>
          </div>
        </div>

        {/* Cara trasera — aviso (en el lugar del muñeco) + explicación */}
        <div className={`${styles.face} ${styles.back}`} aria-hidden={!flipped}>
          <div className={styles.media}>
            <Image
              src={breach.aviso}
              alt={`Aviso de la breach ${breach.number}: ${breach.label}`}
              width={breach.avisoWidth}
              height={breach.avisoHeight}
              className={styles.aviso}
              sizes="(max-width: 720px) 60vw, 30vw"
            />
          </div>
          <div className={styles.body}>
            <span className={styles.number}>BREACH #{breach.number}</span>
            <p className={styles.desarrollo}>{breach.desarrollo}</p>
            {breach.reflexion && <p className={styles.reflexion}>{breach.reflexion}</p>}
          </div>
        </div>
      </button>

      {(breach.caso || breach.recursos) && (
        <div className={styles.evidence}>
          <span className={styles.evidenceFile} aria-hidden>
            incident_report.txt
          </span>
          {breach.caso && (
            <div className={styles.evidenceBlock}>
              <span className={styles.evidenceLabel}>Caso real</span>
              <p className={styles.casoTexto}>{breach.caso.texto}</p>
              <div className={styles.links}>
                {breach.caso.fuentes.map((f) => (
                  <a
                    key={f.href}
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {f.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
          {breach.recursos && (
            <div className={styles.evidenceBlock}>
              <span className={styles.evidenceLabel}>Recursos</span>
              <div className={styles.links}>
                {breach.recursos.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {r.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
