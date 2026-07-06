// components/lab/RetoRow.tsx — un reto: instrucciones, comando y validación del código.
'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import styles from './lab.module.css';

type Props = {
  id: string;
  titulo: string;
  puntos: number;
  instrucciones: string[];
  comando?: string;
  clave: string;
  completado: boolean;
  onComplete: (retoId: string, puntos: number) => void;
};

export function RetoRow({ id, titulo, puntos, instrucciones, comando, clave, completado, onComplete }: Props) {
  const [codigo, setCodigo] = useState('');
  const [estado, setEstado] = useState<'idle' | 'checking' | 'error'>('idle');
  const [mensaje, setMensaje] = useState<string | null>(null);

  async function validar(e: React.FormEvent) {
    e.preventDefault();
    setEstado('checking');
    setMensaje(null);
    try {
      const res = await fetch('/api/lab/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clave, reto: id, codigo: codigo.trim() }),
      });
      const data = (await res.json()) as { valido?: boolean; puntos?: number; mensaje?: string; error?: string };
      if (data.valido) {
        onComplete(id, data.puntos ?? puntos);
        setEstado('idle');
      } else {
        setEstado('error');
        setMensaje(data.mensaje ?? data.error ?? 'Código incorrecto.');
      }
    } catch {
      setEstado('error');
      setMensaje('No se ha podido validar. ¿Sin conexión? Prueba otra vez.');
    }
  }

  return (
    <div className={`${styles.reto} ${completado ? styles.retoDone : ''}`}>
      <div className={styles.retoHead}>
        <span className={styles.retoTitulo}>{titulo}</span>
        <span className={styles.retoPuntos}>
          {completado ? <Check size={14} strokeWidth={1.75} aria-hidden /> : null} {puntos} pts
        </span>
      </div>
      {!completado ? (
        <>
          <ol className={styles.retoPasos}>
            {instrucciones.map((paso, i) => (
              <li key={i}>{paso.replaceAll('TU-CLAVE', clave)}</li>
            ))}
          </ol>
          {comando ? <code className={styles.retoComando}>{comando.replaceAll('TU-CLAVE', clave)}</code> : null}
          <form onSubmit={validar} className={styles.retoForm}>
            <input
              className={styles.retoInput}
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
                setEstado('idle');
              }}
              placeholder="418-XXXXXX"
              aria-label={`Código del reto ${titulo}`}
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" className={styles.retoButton} disabled={estado === 'checking' || codigo.trim() === ''}>
              {estado === 'checking' ? 'validando…' : 'validar'}
            </button>
          </form>
          {estado === 'error' && mensaje ? <p className={styles.retoError}>{mensaje}</p> : null}
        </>
      ) : (
        <p className={styles.retoOk}>[OK] módulo alimentado.</p>
      )}
    </div>
  );
}
