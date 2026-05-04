// lib/glossary.ts
import {
  Coffee,
  Cog,
  Sparkles,
  Flame,
  Bug,
  Bomb,
  Compass,
  Trash2,
  Zap,
  EyeOff,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type GlossaryTerm = {
  term: string;
  Icon: LucideIcon;
  definition: string;
  examples: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Brew',
    Icon: Coffee,
    definition: 'Algo que estás construyendo. Aunque esté roto.',
    examples: ['Sube eso a Brew', 'Estoy con un Brew nuevo'],
  },
  {
    term: 'Protocol',
    Icon: Cog,
    definition: 'La forma correcta. Probada en la realidad.',
    examples: ['Esto ya es protocolo', 'Hazlo así, es más protocolo'],
  },
  {
    term: 'Vibe',
    Icon: Sparkles,
    definition: 'Hecho sin pensar. Sugerido por IA. Sin criterio.',
    examples: ['Esto es puro vibe', 'Huele a vibe aquí'],
  },
  {
    term: 'Hotfix',
    Icon: Flame,
    definition: 'Solución rápida. No siempre limpia.',
    examples: ['Haz un hotfix y seguimos', 'Esto es un hotfix claro'],
  },
  {
    term: '418',
    Icon: Bug,
    definition: 'Mal planteado desde la base. No importa cuánto lo arregles.',
    examples: ['Esto es un 418', 'Huele a 418 desde lejos'],
  },
  {
    term: '418 Moments',
    Icon: Bomb,
    definition:
      'Cuando algo se rompe porque nunca tuvo sentido desde el principio. Se comparte para entenderlo y no repetirlo.',
    examples: ['Esto es un 418 Moment', 'Esto fue un 418 Moment claro'],
  },
  {
    term: 'Fran',
    Icon: Compass,
    definition: 'Sólido. Bien pensado. Sin fisuras.',
    examples: ['Esto está Fran', 'Hay que franificar esto más'],
  },
  {
    term: 'GIGO',
    Icon: Trash2,
    definition: 'Garbage In, Garbage Out. Input malo → output malo.',
    examples: ['Esto es GIGO', 'Revisa el input'],
  },
  {
    term: 'Overkill',
    Icon: Zap,
    definition: 'Demasiada solución para un problema simple.',
    examples: ['Esto es overkill', 'Te has complicado de más'],
  },
  {
    term: 'Blackbox',
    Icon: EyeOff,
    definition: 'Funciona, pero no sabes por qué.',
    examples: ['Esto es una blackbox', 'No dependas de blackboxes'],
  },
];
