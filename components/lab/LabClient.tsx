// components/lab/LabClient.tsx — el tablero del Lab. Todo el estado vive aquí.
'use client';

import { useEffect, useState } from 'react';
import { COLECCIONABLES, TIER_LABELS, nivelesByTier } from '@/lib/lab';
import { ClaveGate } from './ClaveGate';
import { loadProgress, saveProgress, type LabProgress } from './labStorage';
import { StatusBoard } from './StatusBoard';
import { ModuleCard } from './ModuleCard';
import { RetoRow } from './RetoRow';
import styles from './lab.module.css';

export function LabClient() {
  // null = aún no hidratado; sin clave = gate; con clave = tablero.
  const [progress, setProgress] = useState<LabProgress | null | undefined>(undefined);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  function register(clave: string) {
    const fresh: LabProgress = { clave, completados: {} };
    saveProgress(fresh);
    setProgress(fresh);
  }

  if (progress === undefined) {
    return <p className={styles.booting}>cargando módulos…</p>;
  }

  if (progress === null) {
    return <ClaveGate onRegister={register} />;
  }

  function markComplete(retoId: string, puntos: number) {
    setProgress((prev) => {
      if (!prev) return prev;
      const next = { ...prev, completados: { ...prev.completados, [retoId]: puntos } };
      saveProgress(next);
      return next;
    });
  }

  return (
    <div className={styles.lab}>
      <StatusBoard clave={progress.clave} completados={progress.completados} />
      {nivelesByTier().map(({ tier, niveles }) => (
        <section key={tier} className={styles.tier}>
          <h2 className={styles.tierTitle}>{TIER_LABELS[tier]}</h2>
          {niveles.map((nivel) => (
            <ModuleCard
              key={nivel.numero}
              nivel={nivel}
              clave={progress.clave}
              completados={progress.completados}
              onComplete={markComplete}
            />
          ))}
        </section>
      ))}
      <section className={styles.tier}>
        <h2 className={styles.tierTitle}>COLECCIÓN — errores con historia</h2>
        <p className={styles.coleccionIntro}>
          Romper cosas también enseña. Provoca estos errores (con tu clave en la petición) y
          colecciona sus códigos.
        </p>
        {COLECCIONABLES.map((c) => (
          <RetoRow
            key={c.id}
            id={c.id}
            titulo={`${c.codigo} — ${c.titulo}`}
            puntos={c.puntos}
            instrucciones={[c.pista]}
            clave={progress.clave}
            completado={progress.completados[c.id] !== undefined}
            onComplete={markComplete}
          />
        ))}
      </section>
    </div>
  );
}
