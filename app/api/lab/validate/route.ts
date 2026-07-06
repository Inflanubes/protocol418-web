// app/api/lab/validate/route.ts — valida códigos y apunta el tanto en el
// ranking (webhook de Make → Google Sheets). El ranking nunca bloquea al alumno.
import { after } from 'next/server';
import { handleOptions, isValidCode, labError, labJson, normalizeClave } from '@/lib/lab-server';
import { RETO_PUNTOS } from '@/lib/lab';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return labError(400, 'El body no es JSON válido.', 'Envía {"clave": "...", "reto": "...", "codigo": "..."}.');
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const clave = normalizeClave(typeof data.clave === 'string' ? data.clave : null);
  const reto = typeof data.reto === 'string' ? data.reto : null;
  const codigo = typeof data.codigo === 'string' ? data.codigo : null;

  if (!clave || !reto || !codigo) {
    return labError(400, 'Faltan campos.', 'Hacen falta los tres: clave, reto y codigo.');
  }

  const puntos = Object.hasOwn(RETO_PUNTOS, reto) ? RETO_PUNTOS[reto] : undefined;
  if (puntos === undefined) {
    return labError(404, 'Ese reto no existe.', 'Revisa el identificador del reto en https://protocol418.com/lab.');
  }

  if (!isValidCode(clave, reto, codigo)) {
    return labJson(200, {
      valido: false,
      mensaje:
        'Código incorrecto para esa clave y ese reto. Los códigos son personales: el de otro alumno no te vale.',
    });
  }

  // after(): la respuesta sale ya; el webhook corre después de enviarla.
  after(() => logToRanking({ clave, reto, puntos }));
  return labJson(200, { valido: true, reto, puntos });
}

// Webhook de Make → fila nueva en el Sheets del ranking. Fallo aquí = se ignora.
async function logToRanking(row: { clave: string; reto: string; puntos: number }) {
  const webhook = process.env.LAB_MAKE_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'reto', ...row, fecha: new Date().toISOString() }),
      signal: AbortSignal.timeout(3000),
    });
  } catch (err) {
    // El desbloqueo del alumno no depende del ranking.
    console.error('[lab] fallo del webhook del ranking:', err);
  }
}

export function OPTIONS() {
  return handleOptions();
}
