// components/lab/labStorage.ts — progreso del alumno en localStorage.
// La verdad de los puntos vive en el Sheets del ranking; esto es la vista local.

export type LabProgress = {
  clave: string;
  completados: Record<string, number>; // retoId -> puntos conseguidos
};

const KEY = 'p418.lab.v1';

// Copia cliente de la regex del servidor (lib/lab-server.ts no se puede
// importar aquí: usa node:crypto).
export const CLAVE_REGEX_CLIENT = /^[a-z0-9][a-z0-9-]{2,23}$/;

export function loadProgress(): LabProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LabProgress;
    if (
      typeof parsed.clave !== 'string' ||
      typeof parsed.completados !== 'object' ||
      parsed.completados === null ||
      Array.isArray(parsed.completados)
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveProgress(p: LabProgress): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // localStorage lleno o bloqueado: el Lab sigue funcionando, sin persistencia.
  }
}
