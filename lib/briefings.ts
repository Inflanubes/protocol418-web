// lib/briefings.ts
//
// Canon del Changelog. /changelog es una PÁGINA ÚNICA: cada entrada es un
// briefing de clase sobre novedades del sector — presentación HTML
// autocontenida (fuentes incrustadas, sin dependencias) servida desde
// public/briefings/.
//
// Para añadir un briefing: copia el deck a public/briefings/, añade la
// entrada a BRIEFINGS. Nada más. Fuente de los decks: repo
// protocol418-briefings.

export type Briefing = {
  slug: string; // 'openai-2026' — identidad corta, se usa en el prompt de apertura
  fecha: string; // ISO 'YYYY-MM-DD' — fecha de los datos, no de publicación
  titulo: string;
  resumen: string; // qué cuenta, en una o dos frases anti-humo
  temas: string[]; // tags mono estilo [tema]
  deck: string; // ruta del deck en /public
};

export const BRIEFINGS: Briefing[] = [
  {
    slug: 'openai-2026',
    fecha: '2026-08-12',
    titulo: 'OpenAI: GPT-5.6, ChatGPT Work y dónde no usarlos',
    resumen:
      'La familia Sol · Terra · Luna, el modo agente que entrega trabajo terminado, los fallos documentados de tools con la API antigua — con caso propio incluido — y la comparativa honesta con Claude: convergencia, no plagio, pero el orden de llegada es el que es.',
    temas: ['gpt-5.6', 'chatgpt-work', 'agentes', 'claude'],
    deck: '/briefings/openai-2026-briefing.html',
  },
];

// Orden editorial: lo más reciente primero.
export const BRIEFINGS_BY_DATE: Briefing[] = [...BRIEFINGS].sort((a, b) =>
  b.fecha.localeCompare(a.fecha),
);
