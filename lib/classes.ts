// lib/classes.ts
//
// Catálogo de clases (los "tés"). /brew es el hub: cada clase tiene su ficha
// en /brew/[slug] con el vídeo de YouTube embebido + sus recursos.
//
// Para publicar una clase nueva: añade una entrada a CLASSES. Nada más.
//
// Matcha y Chai completas: vídeo de clase (youtubeId) + recursos enlazados.
import { Sparkles, MessageSquare, FolderGit2, FileJson, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ClassResourceType = 'skill' | 'prompt' | 'repo' | 'blueprint' | 'link';

export type ClassResource = {
  label: string;
  href: string; // URL externa (Drive, GitHub, etc.)
  type: ClassResourceType; // determina el icono
};

export type ClassEntry = {
  slug: string; // 'matcha' — usado en /brew/[slug]
  tea: string; // 'Matcha' (display)
  title: string; // 'Agente de Hermes en Telegram'
  date: string; // ISO '2026-06-04'
  excerpt: string; // descripción corta (tarjeta del índice)
  description: string; // descripción larga (ficha)
  // Ficha técnica (se muestra en la ficha; el stack también, resumido, en la tarjeta).
  problema: string; // la premisa: qué dolor resuelve la clase
  build: string; // qué construyes en la clase (el output)
  stack: string[]; // herramientas/tecnología, una por chip
  youtubeId: string; // id del vídeo de YouTube ('' → placeholder "vídeo en camino")
  noVideo?: boolean; // true → la clase no tendrá vídeo nunca (se oculta el bloque, sin placeholder)
  resources?: ClassResource[];
};

// Icono lucide por tipo de recurso. Se renderiza en ResourceList.
export const RESOURCE_ICONS: Record<ClassResourceType, LucideIcon> = {
  skill: Sparkles,
  prompt: MessageSquare,
  repo: FolderGit2,
  blueprint: FileJson,
  link: ExternalLink,
};

export const CLASSES: ClassEntry[] = [
  {
    slug: 'rooibos',
    tea: 'Rooibos',
    title: 'Junior 418 Agents: internet e IA para niños',
    date: '2026-07-17',
    excerpt:
      'La clase para niños de 6 a 11 años: cómo funciona internet de verdad, por qué la IA no piensa, y un juego de mesa imprimible para cazar mentiras. Lista para que la des tú.',
    description:
      'Rooibos es el té sin teína: la clase de los niños. Nació como clase de verano para Arkeidia (una escuela de inglés que enseña con juegos de mesa) y aquí está entera para que la des tú — a tus hijos, a tus sobrinos, a un aula. Los niños se convierten en Junior 418 Agents y cazan Breaches: mentiras que la gente cree sobre internet y la IA. Todo en inglés sencillo (A1–A2), 90–100 minutos, sin sentarse quietos más de 8 minutos seguidos. El final es BREACH HUNT!, un juego de mesa imprimible que después se queda en casa. Descarga, imprime y da la clase: guión minuto a minuto, prompts kid-safe para los juegos de IA en vivo y el kit completo.',
    problema:
      'Los niños usan internet y la IA todos los días, pero nadie les ha contado qué hay debajo — y las charlas de mayores les aburren.',
    build:
      'Una clase completa de 90–100 min lista para dar: guión, juegos de IA en vivo con ROOI y el juego de mesa BREACH HUNT! imprimible (20 hojas A4).',
    stack: ['Print & play', 'Claude', 'Inglés A1–A2'],
    youtubeId: '',
    noVideo: true, // clase con niños: no habrá vídeo — el recurso ES la clase imprimible
    resources: [
      {
        label: 'BREACH HUNT! — kit imprimible completo (ZIP)',
        href: '/rooibos/breach-hunt-kit.zip',
        type: 'link',
      },
      {
        label: 'Guía de directo — la clase minuto a minuto, en color (PDF)',
        href: '/rooibos/guia-directo.pdf',
        type: 'link',
      },
      {
        label: 'Preparación — checklist, montar a ROOI y dry run (PDF)',
        href: '/rooibos/preparacion.pdf',
        type: 'link',
      },
      {
        label: 'Material de clase — cartas del juego de internet, para recortar (PDF)',
        href: '/rooibos/material-clase.pdf',
        type: 'link',
      },
      {
        label: 'Ver el deck de la clase',
        href: 'https://rooibos.protocol418.com',
        type: 'link',
      },
    ],
  },
  {
    slug: 'earl-grey',
    tea: 'Earl Grey',
    title: 'Habla HTTP: de la petición al agente',
    date: '2026-07-17', // AJUSTAR cuando Sonia convoque la clase
    excerpt:
      'Cómo habla internet de verdad: HTTP, GET, POST y tu primera petición real. La clase que enciende El Lab.',
    description:
      'Todo lo que usas —webs, apps, automatizaciones, IA— habla el mismo idioma por debajo: HTTP. En esta clase lo hablas tú: haces tu primer GET y tu primer POST reales contra la API del 418, coleccionas tu primer error con historia y sales con tu clave de alumno registrada en El Lab, el track gamificado donde el camino sigue hasta los agentes.',
    problema:
      'Usas la IA y las automatizaciones por encima, pero nadie te ha enseñado lo de debajo: qué es una petición, qué diferencia hay entre GET y POST, o por qué las APIs piden llave.',
    build:
      'Tu clave de alumno, tu primer GET y tu primer POST reales contra la API del 418, y el tier Básico de El Lab desbloqueado.',
    stack: ['HTTP', 'curl', 'El Lab'],
    youtubeId: '', // vídeo en camino: se graba en la clase
    resources: [
      {
        label: 'Ver el deck de la clase',
        href: 'https://earl-grey.protocol418.com',
        type: 'link',
      },
      {
        label: 'El Lab — el track de retos',
        href: '/lab',
        type: 'link',
      },
    ],
  },
  {
    slug: 'matcha',
    tea: 'Matcha',
    title: 'Tu agente de Hermes en Telegram',
    date: '2026-06-04',
    excerpt:
      'Construimos un agente con Hermes y lo ponemos a funcionar dentro de Telegram. De la idea al bot, en una sesión.',
    description:
      'En esta clase montamos un agente de Hermes desde cero y lo desplegamos en Telegram. Cómo se estructura, cómo se conecta y cómo lo dejas funcionando. Sin humo: lo construimos en vivo.',
    problema:
      'Quieres usar tu agente estés donde estés —en la calle, desde el móvil— sin depender de tener el ordenador delante.',
    build:
      'Un agente de Hermes funcionando dentro de Telegram. De la idea al bot, en una sola sesión.',
    stack: ['Hermes', 'Telegram'],
    youtubeId: 'Bm1cCfQJBbA', // https://www.youtube.com/watch?v=Bm1cCfQJBbA
    resources: [
      {
        label: 'Presentaciones de la clase',
        href: 'https://www.youtube.com/playlist?list=PLYMXpeqrZV2TrmUjhv7MejfpsdlDf5eG1', // playlist YouTube (oculta)
        type: 'link',
      },
      {
        label: 'Presentación: la arquitectura de Hermes',
        href: 'https://youtu.be/gYGDC6dWcpc', // vídeo YouTube (oculto)
        type: 'link',
      },
    ],
  },
  {
    slug: 'chai',
    tea: 'Chai',
    title: 'Crea tu web con Claude Code',
    date: '2026-05-22',
    excerpt:
      'Las cuatro maneras de usar Claude Code (Web, App, VS Code, Terminal) y cómo arrancar tu primera web con él.',
    description:
      'La primera clase de la serie. Repasamos las cuatro formas de trabajar con Claude Code y damos los primeros pasos para construir una web. El deck completo sigue disponible como recurso.',
    problema:
      'Quieres tu primera web pero no sabes ni por dónde empezar ni qué herramienta usar.',
    build:
      'Tus primeros pasos para construir una web con Claude Code, conociendo sus cuatro formas de trabajar.',
    stack: ['Claude Code'],
    youtubeId: '4QHWhY5RwHw', // https://www.youtube.com/watch?v=4QHWhY5RwHw
    resources: [
      {
        label: 'Ver el deck de la clase',
        href: 'https://chai.protocol418.com',
        type: 'link',
      },
      {
        label: 'Skill: vídeo → web',
        href: '/skills/video-to-website.zip', // skill curada (AIS School) servida desde el dominio
        type: 'skill',
      },
      {
        label: 'Skill: Seedance loop',
        href: '/skills/seedance-loop.zip', // skill curada (AIS School) servida desde el dominio
        type: 'skill',
      },
    ],
  },
];

// Clases ordenadas de más reciente a más antigua (para el índice).
export const CLASSES_BY_DATE: ClassEntry[] = [...CLASSES].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getClassBySlug(slug: string): ClassEntry | undefined {
  return CLASSES.find((c) => c.slug === slug);
}

const MONTHS_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

// Formatea una fecha ISO ('2026-06-04') a '4 de junio de 2026' sin depender de
// la zona horaria (determinista para el render estático).
export function formatClassDate(iso: string): string {
  const parts = iso.split('-');
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  return `${day} de ${MONTHS_ES[month - 1] ?? ''} de ${year}`;
}
