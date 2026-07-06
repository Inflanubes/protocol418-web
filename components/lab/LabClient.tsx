// components/lab/LabClient.tsx — el tablero del Lab. Todo el estado vive aquí.
'use client';

import { useEffect, useState } from 'react';
import { ClaveGate } from './ClaveGate';
import { loadProgress, saveProgress, type LabProgress } from './labStorage';
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

  return (
    <div>
      <p className={styles.claveLine}>
        clave registrada: <span className={styles.claveValue}>{progress.clave}</span>
      </p>
      {/* Task 6: StatusBoard + módulos + colección */}
    </div>
  );
}
