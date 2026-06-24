// lib/fundamentos.ts
//
// Fundamentos: el camino de cero a lo básico. /fundamentos es una página única;
// cada mini-clase es una card que se despliega en el sitio (ancla #NN-slug).
//
// Para publicar una mini-clase: añade una entrada a FUNDAMENTOS. Nada más.
// Un esquema con src '' muestra el placeholder "esquema en camino".

export type Block =
  | { type: 'texto'; body: string }
  | {
      type: 'esquema';
      src: string; // '' → placeholder
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { type: 'galeria'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'gotcha'; body: string }
  | { type: 'terminos'; items: { term: string; def: string }[] };

export type Fundamento = {
  level: string; // '01' — orden global, inmutable
  slug: string; // 'como-viaja-una-web' → ancla /fundamentos#01-como-viaja-una-web
  movement: string; // debe existir en MOVEMENTS
  title: string;
  hook: string; // teaser del gotcha (card colapsada)
  summary: string; // una línea (card colapsada)
  blocks: Block[];
  sources: string[]; // procedencia: nº de la lectura original
};

export const MOVEMENTS = [
  'Cómo funciona esto de verdad',
  'Cómo se construye',
  'IA, sensores y voz',
  'Protegerlo y rentabilizarlo',
  'Datos (y quién los tiene)',
] as const;

export const FUNDAMENTOS: Fundamento[] = [
  {
    level: '01',
    slug: 'como-viaja-una-web',
    movement: 'Cómo funciona esto de verdad',
    title: 'Cómo viaja una página web',
    hook: 'Tu IP no eres tú.',
    summary: 'Cliente, servidor, DNS y HTTP: lo que pasa de verdad cuando escribes una dirección.',
    blocks: [
      {
        type: 'texto',
        body:
          'Cuando abres una web no “entras” a ningún sitio: tu navegador (el cliente) le pide una copia a un servidor, que es un ordenador encendido en algún edificio. Internet es una red de redes, y para encontrar ese ordenador hace falta traducir el nombre del dominio a una dirección numérica (la IP). De eso se encarga el DNS, la agenda de internet, antes de cada visita.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/01-como-viaja-una-web.png',
        alt: 'Flujo: navegador pide el dominio, el DNS lo traduce a IP, el servidor responde con el HTML.',
        width: 1376,
        height: 768,
        caption: 'Una petición, cuatro pasos: cliente → DNS → servidor → HTML.',
      },
      {
        type: 'texto',
        body:
          'HTTP es solo un acuerdo de normas: una petición y una respuesta. Una sola página dispara decenas de estas transacciones (el texto, cada imagen, los estilos, el JavaScript). Y la dirección que ves arriba tiene estructura: protocolo, dominio, ruta y, a veces, una “query string” que lleva datos —incluido el de seguimiento (utm_…)—.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'DNS', def: 'La agenda que traduce un dominio (texto) a una IP (números).' },
          { term: 'IP', def: 'La dirección numérica de un dispositivo en la red. Suele ser dinámica.' },
          { term: 'HTTP', def: 'El protocolo de petición/respuesta entre tu navegador y el servidor.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Tu IP no te identifica como persona: es dinámica y toda tu casa sale a internet con la misma IP del router. Por eso, para reconocerte, hizo falta inventar otra cosa: las cookies.',
      },
    ],
    sources: ['4', '5'],
  },
  {
    level: '02',
    slug: 'la-nube-es-el-ordenador-de-otro',
    movement: 'Cómo funciona esto de verdad',
    title: 'La nube es el ordenador de otro',
    hook: '“La nube” es un edificio lleno de servidores.',
    summary: 'Qué es el cloud de verdad: pago por uso, IaaS/PaaS/SaaS y por qué una web carga rápido.',
    blocks: [
      {
        type: 'texto',
        body:
          'El cloud es tecnología como servicio: usas computación como usas la luz —enchufas y pagas por lo que consumes— en vez de comprar la central. Eso convierte una gran inversión inicial en un gasto mensual variable, y te deja crecer o encoger con la demanda (por eso un Black Friday no tumba la web).',
      },
      {
        type: 'esquema',
        src: '/fundamentos/02-iaas-paas-saas.png',
        alt: 'Pirámide IaaS / PaaS / SaaS con la analogía de la pizza casera, congelada y en restaurante.',
        width: 1376,
        height: 768,
        caption: 'IaaS, PaaS, SaaS: cuánto pones tú y cuánto te lo dan hecho.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'IaaS', def: 'Te alquilan la máquina; tú montas todo lo demás.' },
          { term: 'PaaS', def: 'Te dan la plataforma lista; tú solo subes tu aplicación.' },
          { term: 'SaaS', def: 'Software ya funcionando; solo lo usas (Gmail, Notion).' },
          { term: 'CDN', def: 'Copias de tu web repartidas por el mundo para que cargue rápido.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          '“La nube” no es etérea: es un edificio físico lleno de servidores con seguridad de búnker. Y cuando una web carga rápido no suele ser por tu conexión, sino por una CDN sirviéndote una copia cacheada a 50 km, no el servidor original a 9.000.',
      },
    ],
    sources: ['10'],
  },
  {
    level: '03',
    slug: 'cookies-y-tracking',
    movement: 'Cómo funciona esto de verdad',
    title: 'Por qué te siguen: cookies y tracking',
    hook: 'Una cookie no es una persona: es un navegador.',
    summary: 'Cómo te reconocen sin que te registres, y qué hay detrás del banner de cookies.',
    blocks: [
      {
        type: 'texto',
        body:
          'Como la IP no te identifica, las webs necesitaban otra forma de reconocerte entre visitas: una cookie, que es un número único que el servidor te pide guardar en tu navegador y que este le devuelve siempre igual. Hay tres niveles de seguimiento: registro (tú das tus datos), seguimiento (cookies, sin registrarte) y analítica (datos agregados y anónimos).',
      },
      {
        type: 'esquema',
        src: '/fundamentos/03-modelo-tracking.png',
        alt: 'Modelo publicitario: anunciante → píxel → ad server de un tercero → banner en una web cualquiera.',
        width: 1376,
        height: 768,
        caption: 'La cookie de tercero: el mismo píxel repetido en miles de webs.',
      },
      {
        type: 'gotcha',
        body:
          'Una cookie no identifica a una persona, sino a un navegador concreto en un dispositivo concreto: cambia de navegador o de móvil y eres “otro”. La cookie de tercero es el mismo píxel repetido en miles de sitios; por eso un anunciante que nunca visitaste sabe por dónde navegas.',
      },
    ],
    sources: ['6'],
  },
  {
    level: '04',
    slug: 'como-hablan-las-apps-apis',
    movement: 'Cómo funciona esto de verdad',
    title: 'Cómo hablan las apps: APIs',
    hook: 'Google Analytics es, técnicamente, una API metida en tu web.',
    summary: 'Por qué ninguna app vive aislada y cómo se conectan entre sí para compartir datos.',
    blocks: [
      {
        type: 'texto',
        body:
          'Ninguna app vive aislada: integrar es conectar la salida de una con la entrada de otra. Una API es la “interfaz” de un servicio dirigida a otros programas (no a humanos): expone parte de su funcionalidad para que otros la usen. Uno la ofrece (provider) y otro la consume (consumer); tú disfrutas la función del primero a través del producto del segundo —Cabify usando los mapas de Google—.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/04-provider-consumer.png',
        alt: 'Triángulo provider ↔ consumer ↔ usuario final en una llamada a una API.',
        width: 1376,
        height: 768,
        caption: 'Provider expone, consumer consume, el usuario final disfruta.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Endpoint', def: 'La URL concreta a la que se le pide algo a la API.' },
          { term: 'REST', def: 'El estilo de API más común hoy: ligero, sobre HTTP.' },
          { term: 'Scraping', def: 'Cuando no hay API, un bot lee el HTML como si fuera humano.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Google Analytics y el píxel de seguimiento son, técnicamente, una API de un tercero metida en tu HTML: el mismo mecanismo que un mapa embebido o un “iniciar sesión con Google”.',
      },
    ],
    sources: ['16'],
  },
];

export function getByLevel(level: string): Fundamento | undefined {
  return FUNDAMENTOS.find((f) => f.level === level);
}

// Agrupa por movement respetando el orden de MOVEMENTS; omite movements vacíos.
export function fundamentosByMovement(): { movement: string; items: Fundamento[] }[] {
  return MOVEMENTS.map((movement) => ({
    movement,
    items: FUNDAMENTOS.filter((f) => f.movement === movement),
  })).filter((group) => group.items.length > 0);
}
