// app/api/lab/pedido/route.ts — Nivel 2: POST con body JSON. GET aquí es un 405.
import { desbloqueo, handleOptions, labError, labJson, normalizeClave } from '@/lib/lab-server';

export async function POST(request: Request) {
  const url = new URL(request.url);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const clave = normalizeClave(url.searchParams.get('clave'));
    return labError(
      400,
      'El body no es JSON válido.',
      'Un POST lleva los datos en el body. Envía JSON con el header Content-Type: application/json. Ejemplo: {"clave": "tu-clave", "te": "earl-grey"}.',
      clave,
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const clave = normalizeClave(
    typeof data.clave === 'string' ? data.clave : url.searchParams.get('clave'),
  );
  if (!clave) {
    return labError(
      400,
      'Tu pedido no dice quién eres.',
      'Incluye tu clave en el body: {"clave": "tu-clave", "te": "earl-grey"}.',
    );
  }

  const te = typeof data.te === 'string' ? data.te : null;
  if (!te) {
    return labError(
      400,
      'Tu pedido no dice qué té quieres.',
      'El body debe incluir el campo "te". Ejemplo: {"clave": "tu-clave", "te": "earl-grey"}.',
      clave,
    );
  }

  return labJson(201, {
    mensaje: `Pedido de ${te} recibido. Fíjate en el código: 201 significa "Created" — tu POST ha creado algo en el servidor, no solo ha pedido datos.`,
    desbloqueo: desbloqueo(clave, 'n2-pedido'),
  });
}

function metodoProhibido(request: Request): Response {
  const clave = normalizeClave(new URL(request.url).searchParams.get('clave'));
  return labError(
    405,
    'Los pedidos no se consultan con GET: se envían con POST.',
    'GET pide, POST envía. Repite la petición con método POST y un body JSON. (Y sí: acabas de coleccionar un 405.)',
    clave,
    { Allow: 'POST' },
  );
}

export async function GET(request: Request) {
  return metodoProhibido(request);
}

export async function PUT(request: Request) {
  return metodoProhibido(request);
}

export async function DELETE(request: Request) {
  return metodoProhibido(request);
}

export function OPTIONS() {
  return handleOptions();
}
