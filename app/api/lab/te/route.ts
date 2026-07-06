// app/api/lab/te/route.ts — Nivel 1: GET y query params. Y el 418, claro.
import { desbloqueo, handleOptions, labError, labJson, normalizeClave } from '@/lib/lab-server';

const CARTA = ['earl-grey', 'matcha', 'chai', 'oolong'] as const;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const clave = normalizeClave(url.searchParams.get('clave'));
  if (!clave) {
    return labError(
      400,
      'Falta tu clave de alumno.',
      'Añade ?clave=tu-clave a la URL (si ya hay un ?, los parámetros extra van con &).',
    );
  }

  const tipo = url.searchParams.get('tipo');

  if (tipo === null) {
    return labJson(200, {
      mensaje:
        'La carta de tés del 418. Para pedir uno concreto, pásale un dato al servidor con un query param: añade &tipo=... a la URL.',
      carta: CARTA,
      desbloqueo: desbloqueo(clave, 'n1-carta'),
    });
  }

  if (tipo === 'cafe' || tipo === 'café') {
    return labError(
      418,
      'Soy una tetera. Me niego, educadamente, a preparar café.',
      'El 418 es un código de estado HTTP real (RFC 2324, 1998). Acabas de conseguir el coleccionable estrella del Lab.',
      clave,
    );
  }

  if ((CARTA as readonly string[]).includes(tipo)) {
    return labJson(200, {
      mensaje: `Un ${tipo}, marchando. Has cambiado la respuesta del servidor con un query param: así se pasan datos en una petición GET.`,
      desbloqueo: desbloqueo(clave, 'n1-parametros'),
    });
  }

  return labError(
    404,
    `"${tipo}" no está en la carta.`,
    'Pide la carta sin el parámetro tipo para ver los tés disponibles.',
    clave,
  );
}

export function OPTIONS() {
  return handleOptions();
}
