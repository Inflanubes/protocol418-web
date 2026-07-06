// components/lab/ClaveGate.tsx — registro de la clave de alumno.
'use client';

import { useState } from 'react';
import { CLAVE_REGEX_CLIENT } from './labStorage';
import styles from './lab.module.css';

type Props = { onRegister: (clave: string) => void };

export function ClaveGate({ onRegister }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const clave = value.trim().toLowerCase();
    if (!CLAVE_REGEX_CLIENT.test(clave)) {
      setError('Solo minúsculas, números y guiones. Entre 3 y 24 caracteres. Ejemplo: tetera-042');
      return;
    }
    onRegister(clave);
  }

  return (
    <div className={styles.gate}>
      <p className={styles.gatePrompt}>$ registrar clave de alumno</p>
      <p className={styles.gateText}>
        Tu clave es tu identidad en el Lab: viaja en cada petición que hagas y suma tus puntos
        en el ranking. Elígela corta y <strong>apúntala en un sitio físico</strong> — sin ella no
        hay Breachling.
      </p>
      <form onSubmit={submit} className={styles.gateForm}>
        <input
          className={styles.gateInput}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(null);
          }}
          placeholder="tetera-042"
          aria-label="Tu clave de alumno"
          aria-invalid={error !== null}
          aria-describedby={error ? 'clave-error' : undefined}
          autoComplete="off"
          spellCheck={false}
        />
        <button type="submit" className={styles.gateButton}>
          iniciar sistema →
        </button>
      </form>
      {error ? (
        <p id="clave-error" role="alert" className={styles.gateError}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
