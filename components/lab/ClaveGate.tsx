// components/lab/ClaveGate.tsx — registro de la clave de alumno.
// Nombre + teléfono son OPCIONALES: solo para optar al Breachling.
'use client';

import { useState } from 'react';
import { CLAVE_REGEX_CLIENT } from './labStorage';
import styles from './lab.module.css';

type Props = { onRegister: (clave: string) => void };

const TELEFONO_REGEX = /^[+0-9][0-9 ()-]{6,19}$/;

export function ClaveGate({ onRegister }: Props) {
  const [value, setValue] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const clave = value.trim().toLowerCase();
    if (!CLAVE_REGEX_CLIENT.test(clave)) {
      setError('Solo minúsculas, números y guiones. Entre 3 y 24 caracteres. Ejemplo: tetera-042');
      return;
    }
    const tel = telefono.trim();
    if (tel && !TELEFONO_REGEX.test(tel)) {
      setError('Ese teléfono no parece válido. Ejemplo: +34 600 000 000');
      return;
    }
    if (nombre.trim() || tel) {
      // Optar al premio: si esta petición falla, no bloquea la entrada al Lab.
      void fetch('/api/lab/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clave, nombre: nombre.trim(), telefono: tel }),
      }).catch(() => {});
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
        <p className={styles.gateOptionalTitle}>¿Quieres optar al Breachling? — opcional</p>
        <input
          className={styles.gateInput}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="tu nombre"
          aria-label="Tu nombre (opcional, para el premio)"
          autoComplete="name"
          maxLength={60}
        />
        <input
          className={styles.gateInput}
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
            setError(null);
          }}
          placeholder="+34 600 000 000"
          aria-label="Tu teléfono (opcional, para el premio)"
          autoComplete="tel"
          inputMode="tel"
          maxLength={20}
        />
        <p className={styles.gateNote}>
          Solo los usamos para avisarte si ganas. No aparecen en la web ni se comparten.
        </p>
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
