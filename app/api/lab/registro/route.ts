// app/api/lab/registro/route.ts — registro OPCIONAL para optar al Breachling:
// nombre + teléfono asociados a una clave. Va al Sheets (pestaña alumnos) vía
// el mismo webhook de Make, con tipo:'alumno' para que el router lo separe.
import { after } from 'next/server';
import { handleOptions, labError, labJson, normalizeClave } from '@/lib/lab-server';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return labError(
      400,
      'El body no es JSON válido.',
      'Envía JSON: {"clave": "tu-clave", "nombre": "...", "telefono": "..."}.',
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const clave = normalizeClave(typeof data.clave === 'string' ? data.clave : null);
  if (!clave) {
    return labError(400, 'Falta tu clave de alumno.', 'Incluye "clave" en el body.');
  }

  const nombre = typeof data.nombre === 'string' ? data.nombre.trim().slice(0, 60) : '';
  const telefono = typeof data.telefono === 'string' ? data.telefono.trim().slice(0, 20) : '';
  if (!nombre && !telefono) {
    return labError(
      400,
      'No hay nada que registrar.',
      'Añade "nombre" y/o "telefono" si quieres optar al premio.',
    );
  }

  after(() => registrarAlumno({ clave, nombre, telefono }));
  return labJson(200, {
    ok: true,
    mensaje: 'Registrado. Si ganas, te contactamos por ese teléfono.',
  });
}

// Mismo webhook que el ranking; tipo:'alumno' → pestaña "alumnos" del Sheets.
async function registrarAlumno(row: { clave: string; nombre: string; telefono: string }) {
  const webhook = process.env.LAB_MAKE_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'alumno', ...row, fecha: new Date().toISOString() }),
      signal: AbortSignal.timeout(3000),
    });
  } catch (err) {
    // Optar al premio nunca bloquea la entrada al Lab.
    console.error('[lab] fallo del webhook de registro de alumno:', err);
  }
}

export function OPTIONS() {
  return handleOptions();
}
