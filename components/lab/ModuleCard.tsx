// components/lab/ModuleCard.tsx — un nivel del Lab como módulo del sistema.
'use client';

import { useState } from 'react';
import type { LabNivel } from '@/lib/lab';
import { RetoRow } from './RetoRow';
import styles from './lab.module.css';

type Props = {
  nivel: LabNivel;
  clave: string;
  completados: Record<string, number>;
  onComplete: (retoId: string, puntos: number) => void;
};

export function ModuleCard({ nivel, clave, completados, onComplete }: Props) {
  const enCamino = nivel.estado === 'en-camino';
  const hechos = nivel.retos.filter((r) => completados[r.id] !== undefined).length;
  const encendido = !enCamino && nivel.retos.length > 0 && hechos === nivel.retos.length;
  const estadoLabel = enCamino ? '[EN CAMINO]' : encendido ? '[OK]' : `[${hechos}/${nivel.retos.length}]`;

  // Estado propio del panel: completar el último reto no lo cierra de golpe
  // (un `open` derivado forzaría el cierre en el mismo render del éxito).
  const [abierto, setAbierto] = useState(!enCamino && !encendido);

  return (
    <details
      className={`${styles.modulo} ${encendido ? styles.moduloOk : ''}`}
      open={abierto}
      onToggle={(e) => setAbierto(e.currentTarget.open)}
    >
      <summary className={styles.moduloSummary}>
        <span className={styles.moduloTag}>
          [MÓDULO {String(nivel.numero).padStart(2, '0')} · {nivel.modulo}]
        </span>
        <span className={styles.moduloTitulo}>{nivel.titulo}</span>
        <span className={`${styles.moduloEstado} ${encendido ? styles.moduloEstadoOk : ''}`}>{estadoLabel}</span>
      </summary>
      <p className={styles.moduloResumen}>{nivel.resumen}</p>
      {enCamino ? (
        <p className={styles.moduloEnCamino}>Este módulo se publica después de la clase. Atento al canal Brew.</p>
      ) : (
        nivel.retos.map((reto) => (
          <RetoRow
            key={reto.id}
            {...reto}
            clave={clave}
            completado={completados[reto.id] !== undefined}
            onComplete={onComplete}
          />
        ))
      )}
    </details>
  );
}
