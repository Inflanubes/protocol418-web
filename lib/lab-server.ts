// lib/lab-server.ts
//
// Helpers de servidor de El Lab: códigos de desbloqueo (HMAC, sin base de
// datos) y respuestas didácticas. Solo para route handlers — nunca importar
// desde componentes de cliente.
import { createHmac } from 'node:crypto';

const SECRET = process.env.LAB_SECRET ?? 'dev-secret-418';

export const CLAVE_REGEX = /^[a-z0-9][a-z0-9-]{2,23}$/;

export function normalizeClave(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const clave = raw.trim().toLowerCase();
  return CLAVE_REGEX.test(clave) ? clave : null;
}

// Código personalizado: el de otro alumno no vale. HMAC(clave:reto) → 418-XXXXXX.
export function unlockCode(clave: string, retoId: string): string {
  const hex = createHmac('sha256', SECRET).update(`${clave}:${retoId}`).digest('hex');
  return `418-${hex.slice(0, 6).toUpperCase()}`;
}

export function isValidCode(clave: string, retoId: string, codigo: string): boolean {
  return unlockCode(clave, retoId) === codigo.trim().toUpperCase();
}

// CORS abierto: los alumnos llaman desde curl, Make y clientes web tipo Hoppscotch.
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
} as const;

export function desbloqueo(clave: string, retoId: string) {
  return {
    reto: retoId,
    codigo: unlockCode(clave, retoId),
    siguiente: 'Pega este código en https://protocol418.com/lab para encender el módulo.',
  };
}

export function labJson(status: number, body: Record<string, unknown>): Response {
  return Response.json({ status, ...body }, { status, headers: CORS_HEADERS });
}

// Error didáctico. Con clave, el error se convierte en coleccionable (err-NNN).
export function labError(
  status: number,
  error: string,
  pista: string,
  clave?: string | null,
  headers?: Record<string, string>,
): Response {
  const body: Record<string, unknown> = { status, error, pista };
  body.coleccionable = clave
    ? desbloqueo(clave, `err-${status}`)
    : 'Añade tu clave de alumno a la petición y este error se podrá coleccionar.';
  return Response.json({ ...body }, { status, headers: { ...CORS_HEADERS, ...headers } });
}

export function handleOptions(): Response {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
