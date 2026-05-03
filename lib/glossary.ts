// lib/glossary.ts
export type GlossaryTerm = {
  term: string;
  emoji: string;
  definition: string;
  examples: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Brew',
    emoji: '☕',
    definition: 'Algo que estás construyendo. Aunque esté roto.',
    examples: ['Sube eso a Brew', 'Estoy con un Brew nuevo'],
  },
  {
    term: 'Protocol',
    emoji: '⚙️',
    definition: 'La forma correcta. Probada en la realidad.',
    examples: ['Esto ya es protocolo', 'Hazlo así, es más protocolo'],
  },
  {
    term: 'Vibe',
    emoji: '🧠',
    definition: 'Hecho sin pensar. Sugerido por IA. Sin criterio.',
    examples: ['Esto es puro vibe', 'Huele a vibe aquí'],
  },
  {
    term: 'Hotfix',
    emoji: '🔥',
    definition: 'Solución rápida. No siempre limpia.',
    examples: ['Haz un hotfix y seguimos', 'Esto es un hotfix claro'],
  },
  {
    term: '418',
    emoji: '💥',
    definition: 'Mal planteado desde la base. No importa cuánto lo arregles.',
    examples: ['Esto es un 418', 'Huele a 418 desde lejos'],
  },
  {
    term: '418 Moments',
    emoji: '🥇',
    definition:
      'Cuando algo se rompe porque nunca tuvo sentido desde el principio. Se comparte para entenderlo y no repetirlo.',
    examples: ['Esto es un 418 Moment', 'Esto fue un 418 Moment claro'],
  },
  {
    term: 'Fran',
    emoji: '🧱',
    definition: 'Sólido. Bien pensado. Sin fisuras.',
    examples: ['Esto está Fran', 'Hay que franificar esto más'],
  },
  {
    term: 'GIGO',
    emoji: '🗑️',
    definition: 'Garbage In, Garbage Out. Input malo → output malo.',
    examples: ['Esto es GIGO', 'Revisa el input'],
  },
  {
    term: 'Overkill',
    emoji: '🧨',
    definition: 'Demasiada solución para un problema simple.',
    examples: ['Esto es overkill', 'Te has complicado de más'],
  },
  {
    term: 'Blackbox',
    emoji: '🕳️',
    definition: 'Funciona, pero no sabes por qué.',
    examples: ['Esto es una blackbox', 'No dependas de blackboxes'],
  },
];
