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
  },
};

export const CHANNEL_ORDER: ChannelKey[] = ['system', 'brew', 'core'];
