// lib/lab.ts
//
// El Lab: niveles, retos, coleccionables y badges. Datos puros — se importan
// desde el servidor (puntos) y desde el cliente (render del tablero).
// Añadir un reto = añadir una entrada aquí. Los códigos los genera el servidor.

export type LabTier = 'basico' | 'medio' | 'avanzado';

export type LabReto = {
  id: string; // 'n0-hola' — el servidor firma códigos contra este id
  titulo: string;
  puntos: number;
  instrucciones: string[]; // pasos en castellano, sin humo
  comando?: string; // ejemplo copiable (URL o curl)
};

export type LabNivel = {
  numero: number; // 0–7
  modulo: string; // etiqueta del módulo en el tablero: 'HTTP', 'GET'…
  titulo: string;
  resumen: string; // qué aprendes; visible también en niveles en camino
  tier: LabTier;
  estado: 'jugable' | 'en-camino';
  retos: LabReto[];
};

export type LabColeccionable = {
  id: string; // 'err-418'
  codigo: string; // '418'
  titulo: string;
  puntos: number;
  pista: string;
};

export type LabBadge = {
  id: string;
  nombre: string;
  descripcion: string;
  retos: string[]; // se gana al completar TODOS estos retos
};

export const TIER_LABELS: Record<LabTier, string> = {
  basico: 'BÁSICO — Hablar HTTP',
  medio: 'MEDIO — Que trabajen las máquinas',
  avanzado: 'AVANZADO — IA y agentes',
};

export const NIVELES: LabNivel[] = [
  {
    numero: 0,
    modulo: 'HTTP',
    titulo: 'El viaje de una petición',
    resumen:
      'Qué pasa de verdad al abrir una URL: tu navegador (cliente) pide, un servidor responde. Método, ruta, código de estado. Tu primera petición consciente.',
    tier: 'basico',
    estado: 'jugable',
    retos: [
      {
        id: 'n0-hola',
        titulo: 'Di hola al servidor',
        puntos: 10,
        instrucciones: [
          'Abre esta URL en tu navegador, con tu clave al final.',
          'Lo que ves es la respuesta del servidor: JSON, el idioma en el que se hablan las máquinas.',
          'Busca el campo "desbloqueo" y pega aquí el código.',
        ],
        comando: 'https://protocol418.com/api/lab/saludo?clave=TU-CLAVE',
      },
    ],
  },
  {
    numero: 1,
    modulo: 'GET',
    titulo: 'GET: pedir cosas',
    resumen:
      'La barra del navegador es una máquina de GETs. Los query params (?tipo=...) cambian lo que el servidor te devuelve: así se pasan datos en un GET.',
    tier: 'basico',
    estado: 'jugable',
    retos: [
      {
        id: 'n1-carta',
        titulo: 'Pide la carta',
        puntos: 10,
        instrucciones: [
          'Haz un GET a la carta de tés del 418.',
          'La respuesta trae la carta… y tu código.',
        ],
        comando: 'https://protocol418.com/api/lab/te?clave=TU-CLAVE',
      },
      {
        id: 'n1-parametros',
        titulo: 'Pide un té concreto',
        puntos: 10,
        instrucciones: [
          'Añade un query param a la misma URL: &tipo= y uno de los tés de la carta.',
          'Fíjate: misma ruta, distinto parámetro, distinta respuesta. Eso es pasar datos por la URL.',
          'Consejo de exploradores: prueba también a pedir lo que una tetera nunca serviría.',
        ],
        comando: 'https://protocol418.com/api/lab/te?clave=TU-CLAVE&tipo=earl-grey',
      },
    ],
  },
  {
    numero: 2,
    modulo: 'VERBOS',
    titulo: 'Los verbos: POST y compañía',
    resumen:
      'GET pide, POST envía, PUT/PATCH cambian, DELETE borra. La barra del navegador solo sabe GET: para el resto hace falta tu primera herramienta — la terminal y curl.',
    tier: 'basico',
    estado: 'jugable',
    retos: [
      {
        id: 'n2-pedido',
        titulo: 'Envía tu primer POST',
        puntos: 15,
        instrucciones: [
          'Esto ya no se puede hacer desde la barra del navegador: abre la terminal de tu ordenador (esa ventana negra tiene nombre, y curl es tu primera CLI).',
          'Copia el comando, cambia TU-CLAVE por la tuya, y ejecútalo.',
          'El body JSON viaja dentro de la petición, y el header Content-Type le dice al servidor qué formato lleva.',
          'Si te devuelve un 201, enhorabuena: has creado algo en un servidor. Pega el código.',
        ],
        comando:
          'curl -X POST "https://protocol418.com/api/lab/pedido" -H "Content-Type: application/json" -d \'{"clave": "TU-CLAVE", "te": "earl-grey"}\'',
      },
    ],
  },
  {
    numero: 3,
    modulo: 'AUTH',
    titulo: 'Identifícate: auth y API keys',
    resumen:
      'Por qué las APIs piden llave: el header Authorization, los Bearer tokens y la higiene de secretos. Tu primer 401 y tu primera API key personal.',
    tier: 'medio',
    estado: 'en-camino',
    retos: [],
  },
  {
    numero: 4,
    modulo: 'AUTO',
    titulo: 'Automatiza',
    resumen:
      'El módulo HTTP de Make hace lo mismo que curl, pero con triggers y sin que tú estés delante. Montarás un escenario que llama al 418 y le responde por webhook.',
    tier: 'medio',
    estado: 'en-camino',
    retos: [],
  },
  {
    numero: 5,
    modulo: 'IA',
    titulo: 'La IA es un endpoint más',
    resumen:
      'Llamar a un LLM es un POST con tu prompt en el body. Te sacarás tu propia API key gratuita y llamarás a una IA sin intermediarios.',
    tier: 'avanzado',
    estado: 'en-camino',
    retos: [],
  },
  {
    numero: 6,
    modulo: 'MCP',
    titulo: 'MCP: darle manos a la IA',
    resumen:
      'En el nivel 5 tú llamas a la IA; aquí la IA llama a herramientas. Conectarás el servidor MCP del 418 a tu Claude y verás a tu IA usar una herramienta nueva.',
    tier: 'avanzado',
    estado: 'en-camino',
    retos: [],
  },
  {
    numero: 7,
    modulo: 'AGENTE',
    titulo: 'Agentes: el jefe final',
    resumen:
      'Agente = LLM + herramientas + bucle de decisión. Tu agente completará una misión contra la API del 418 él solo, decidiendo sus propias llamadas.',
    tier: 'avanzado',
    estado: 'en-camino',
    retos: [],
  },
];

export const COLECCIONABLES: LabColeccionable[] = [
  {
    id: 'err-400',
    codigo: '400',
    titulo: 'Bad Request',
    puntos: 5,
    pista: 'Envía un pedido al que le falte algo (o que no sea JSON).',
  },
  {
    id: 'err-404',
    codigo: '404',
    titulo: 'Not Found',
    puntos: 5,
    pista: 'Pide una ruta del Lab que no exista. Llévate tu clave.',
  },
  {
    id: 'err-405',
    codigo: '405',
    titulo: 'Method Not Allowed',
    puntos: 5,
    pista: 'Intenta consultar un pedido con GET. El servidor te dirá qué verbo tocaba.',
  },
  {
    id: 'err-418',
    codigo: '418',
    titulo: "I'm a teapot",
    puntos: 5,
    pista: 'Pídele a la tetera lo único que jamás preparará.',
  },
];

export const BADGES: LabBadge[] = [
  {
    id: 'primer-contacto',
    nombre: 'PRIMER CONTACTO',
    descripcion: 'Tu primera petición HTTP consciente.',
    retos: ['n0-hola'],
  },
  {
    id: 'cartero',
    nombre: 'CARTERO',
    descripcion: 'Tu primer POST con body. Ya no solo pides: envías.',
    retos: ['n2-pedido'],
  },
  {
    id: 'soy-una-tetera',
    nombre: 'SOY UNA TETERA',
    descripcion: 'Le pediste café a la tetera. Se negó. Con protocolo.',
    retos: ['err-418'],
  },
  {
    id: 'hotfix',
    nombre: 'HOTFIX',
    descripcion: 'Rompiste algo (405) y luego lo hiciste bien (POST). Así se aprende.',
    retos: ['err-405', 'n2-pedido'],
  },
  {
    id: 'cazador-de-errores',
    nombre: 'CAZADOR DE ERRORES',
    descripcion: 'La colección completa: 400, 404, 405 y 418.',
    retos: ['err-400', 'err-404', 'err-405', 'err-418'],
  },
];

// Puntos por reto — única fuente de verdad, la usa también /api/lab/validate.
export const RETO_PUNTOS: Record<string, number> = Object.fromEntries([
  ...NIVELES.flatMap((n) => n.retos.map((r) => [r.id, r.puntos] as const)),
  ...COLECCIONABLES.map((c) => [c.id, c.puntos] as const),
]);

export function nivelesByTier(): { tier: LabTier; niveles: LabNivel[] }[] {
  const tiers: LabTier[] = ['basico', 'medio', 'avanzado'];
  return tiers.map((tier) => ({ tier, niveles: NIVELES.filter((n) => n.tier === tier) }));
}
