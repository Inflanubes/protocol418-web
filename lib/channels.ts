// lib/channels.ts
export type ChannelKey = 'system' | 'brew' | 'core';

export type ChannelData = {
  key: ChannelKey;
  name: string;
  tag: string;
  symbol: string;
  verb: string;
  essence: string;
  badge: string;
  description: string;
  rules?: string[];
  youCan?: string[];
  routes?: string[];
  closingQuote?: string;
};

export const CHANNELS: Record<ChannelKey, ChannelData> = {
  system: {
    key: 'system',
    name: 'System',
    tag: '#SYSTEM-418',
    symbol: '🔒',
    verb: 'Lee · entiende · respeta',
    essence: 'Las normas. El protocolo.',
    badge: '/brand/system-badge.png',
    description:
      'Aquí está el protocolo. Qué es esto, cómo funciona y qué significa cada cosa. Léelo antes de escribir. Si entiendes el sistema → estás en el work-flow.',
    closingQuote: 'Si entiendes el sistema, estás en el work-flow.',
  },
  brew: {
    key: 'brew',
    name: 'Brew',
    tag: '#BREW-418',
    symbol: '☕',
    verb: 'Construye · comparte · mejora',
    essence: 'Lo que se está montando.',
    badge: '/brand/brew-badge.png',
    description:
      'Aquí se construye. Comparte lo que estás montando y resuelve lo que no funciona. Contexto > rapidez. Si no estás construyendo → no va aquí.',
    rules: [
      'Contexto > rapidez',
      'Evita preguntas vagas',
      'Si no lo has probado → es opinión',
      'Si lo complicas → probablemente es un 418',
    ],
    routes: [
      'Si es algo que quieres comentar → Core',
      'Si no sabes las normas → System',
    ],
    closingQuote: 'Aquí no buscamos respuestas rápidas. Buscamos soluciones que funcionen.',
  },
  core: {
    key: 'core',
    name: 'Core',
    tag: '#CORE-418',
    symbol: '👥',
    verb: 'Habla · pregunta · conecta',
    essence: 'Las personas.',
    badge: '/brand/core-badge.png',
    description:
      'Aquí estamos nosotros. Habla, pregunta, conecta. Sin filtros. Sin humo. Si estás dentro → formas parte del core de FourEighteen.',
    youCan: ['Preguntar', 'Hablar', 'Compartir ideas', 'Conectar con otros'],
    routes: ['Si lo que vas a escribir es algo que estás construyendo → muévelo a Brew'],
    closingQuote: 'El Core no es para consumir. Es para formar parte. Si estás aquí, estás dentro.',
  },
};

export const CHANNEL_ORDER: ChannelKey[] = ['system', 'brew', 'core'];
