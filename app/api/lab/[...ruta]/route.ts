// app/api/lab/[...ruta]/route.ts — cualquier ruta desconocida del Lab: 404 didáctico.
import { handleOptions, labError, normalizeClave } from '@/lib/lab-server';

function notFound(request: Request): Response {
  const clave = normalizeClave(new URL(request.url).searchParams.get('clave'));
  return labError(
    404,
    'Aquí no hay nada. Y que te lo diga también es una respuesta HTTP.',
    'Un 404 significa que la ruta no existe en este servidor. Las rutas reales del Lab están en los retos de https://protocol418.com/lab.',
    clave,
  );
}

export async function GET(request: Request) {
  return notFound(request);
}

export async function POST(request: Request) {
  return notFound(request);
}

export function OPTIONS() {
  return handleOptions();
}
