// app/api/lab/saludo/route.ts — Nivel 0: tu primera petición HTTP real.
import { desbloqueo, handleOptions, labError, labJson, normalizeClave } from '@/lib/lab-server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const clave = normalizeClave(url.searchParams.get('clave'));
  if (!clave) {
    return labError(
      400,
      'Falta tu clave de alumno.',
      'Añade ?clave=tu-clave al final de la URL. Si aún no tienes clave, regístrala en https://protocol418.com/lab.',
    );
  }
  return labJson(200, {
    mensaje: `Hola, ${clave}. Acabas de hacer una petición HTTP de verdad: tu navegador (el cliente) ha pedido, y este servidor ha respondido con este JSON.`,
    tu_peticion: { metodo: 'GET', ruta: '/api/lab/saludo', query: { clave } },
    desbloqueo: desbloqueo(clave, 'n0-hola'),
  });
}

export function OPTIONS() {
  return handleOptions();
}
