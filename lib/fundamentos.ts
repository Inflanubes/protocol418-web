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
  {
    level: '05',
    slug: 'de-que-se-hace-una-app',
    movement: 'Cómo se construye',
    title: 'De qué se hace una app',
    hook: 'Construir una app no es, necesariamente, programar.',
    summary: 'Build vs buy, piezas de LEGO y por qué open source no significa gratis.',
    blocks: [
      {
        type: 'texto',
        body:
          'Una app no se programa entera desde cero: se diseña como un montaje de piezas. Divides lo que hace en bloques —pagos, login, buscador, emailing— y para cada bloque eliges la mejor pieza. La decisión importante no es qué código escribes, sino qué arquitectura montas.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/05-build-vs-buy.png',
        alt: 'Árbol de decisión Build vs Buy: cada funcionalidad se construye a medida o se compra (producto o SaaS).',
        width: 1376,
        height: 768,
        caption: 'La regla: lo que te diferencia, constrúyelo; lo estándar, cómpralo.',
      },
      {
        type: 'texto',
        body:
          'Para cada bloque tienes dos caminos: construirlo a medida (control y diferenciación) o partir de algo ya hecho —un producto que instalas o un SaaS que ya está corriendo en el servidor de otro—. Ninguno es mejor; es coherente o no con lo que te hace distinto. La regla de oro: lo que te diferencia, constrúyelo; lo estándar (email, pagos, CRM), cómpralo. No reinventes la rueda.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Build vs Buy', def: 'Construir una pieza a medida o partir de una ya hecha.' },
          { term: 'SaaS', def: 'Software que no instalas: ya corre en el servidor del proveedor (Gmail, Shopify).' },
          { term: 'Open Source', def: 'Código que puedes ver y modificar. No es lo mismo que gratis.' },
          { term: 'TCO', def: 'Coste total de propiedad: lo que cuesta de verdad mantener algo, no solo su precio.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Open source no significa gratis, ni gratis significa open source: una habla del código (lo puedes ver y tocar), la otra del precio. Y montar una app “seria” suele ser ensamblar bien piezas de mercado y SaaS, no escribir cada línea.',
      },
    ],
    sources: ['13'],
  },
  {
    level: '06',
    slug: 'web-o-app-el-espectro',
    movement: 'Cómo se construye',
    title: 'Web o app: el espectro y sus ladrillos',
    hook: '“¿Web o app?” es la pregunta equivocada.',
    summary: 'El abanico de web a app nativa, sus ladrillos (HTML/CSS) y por qué tener app no garantiza nada.',
    blocks: [
      {
        type: 'texto',
        body:
          'Desde 2015 se busca más desde el móvil que desde el ordenador, así que se diseña primero para la pantalla pequeña y luego se escala, no al revés. Y entre “una web” y “una app” no hay dos opciones: hay un abanico —web móvil, responsive, PWA, app nativa— y cada escalón cuesta más dinero y tiempo a cambio de más integración con el dispositivo.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/06-espectro-movil.png',
        alt: 'Espectro de presencia móvil: web móvil → responsive → PWA → app nativa, con su coste creciente.',
        width: 1376,
        height: 768,
        caption: 'De web móvil a app nativa: más capacidad, más coste.',
      },
      {
        type: 'texto',
        body:
          'Por debajo, los ladrillos son siempre los mismos: el HTML pone la estructura y el contenido, el CSS pone el aspecto, y la URL te lleva ahí. Una app nativa se construye con el kit de cada sistema (iOS, Android) y depende de las tiendas para distribuirse y actualizarse; una PWA es una web que se siente como app sin pasar por la tienda.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'HTML', def: 'La estructura y el contenido de una página.' },
          { term: 'CSS', def: 'El estilo: colores, tipografías, disposición.' },
          { term: 'PWA', def: 'Una web que se instala y funciona como app, sin pasar por la tienda.' },
          { term: 'Nativa', def: 'App hecha con el kit de cada sistema; máxima integración, más coste.' },
          { term: 'ASO', def: 'El “SEO de las apps”: que te encuentren y descarguen en la tienda.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'La pregunta no es “¿web o app?”, sino en qué fase está tu cliente y cada cuánto vuelve. Y tener app no garantiza nada: la gente descarga muchísimas y usa un puñado —cinco apps acaparan el 80% del tiempo—.',
      },
    ],
    sources: ['19'],
  },
  {
    level: '07',
    slug: 'construir-sin-programar-no-code',
    movement: 'Cómo se construye',
    title: 'Construir sin (apenas) programar: No Code',
    hook: 'No Code no significa fácil.',
    summary: 'Qué es (y qué no) el No Code, dónde es ×100 y dónde choca con su techo.',
    blocks: [
      {
        type: 'texto',
        body:
          'No Code es construir software sin escribir código: en vez de líneas, encajas cajas que ya traen resueltos los servidores, la seguridad y el mantenimiento. No es lo mismo que Low Code, que sí pide algo de código pero acelera el desarrollo. En ambos casos sigues construyendo: hay que pensar flujos, datos y lógica.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/07-categorias-no-code.png',
        alt: 'Mapa de categorías No Code: web, base de datos, automatización, emailing, formularios, CRM, analytics.',
        width: 1376,
        height: 768,
        caption: 'Casi nada se monta con una sola herramienta: se ensambla un stack.',
      },
      {
        type: 'texto',
        body:
          'Casi ningún producto se monta con una sola herramienta: ensamblas un stack —web, base de datos, automatización, emailing, formularios— conectando piezas. La ventaja es arrancar barato y escalar. El límite es el techo del SaaS: solo puedes hacer lo que la herramienta permite; salirte de ahí puede ser difícil o imposible.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'No Code', def: 'Construir software sin escribir código, encajando piezas visuales.' },
          { term: 'Low Code', def: 'Como el No Code pero admite algo de código para ir más lejos.' },
          { term: 'Automatización', def: 'Conectar herramientas para que se pasen datos solas (Zapier, Make, n8n).' },
          { term: 'Stack', def: 'El conjunto de herramientas que, juntas, forman tu producto.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'No Code no significa fácil: significa multiplicar tu productividad por 10 o por 100 si dominas la herramienta —y eso lleva tiempo—. Y quien sabe algo de código exprime el No Code mejor, no peor: ve uniones que un no-técnico ni detecta.',
      },
    ],
    sources: ['12'],
  },
  {
    level: '08',
    slug: 'como-nace-un-producto-digital',
    movement: 'Cómo se construye',
    title: 'Cómo nace un producto digital',
    hook: 'No existe la arquitectura ideal.',
    summary: 'Qué es un producto digital, quién lo construye y por qué el proceso nunca es una línea recta.',
    blocks: [
      {
        type: 'texto',
        body:
          'Un producto digital vive en la intersección de tres cosas: el cliente (que lo usa), el negocio (que lo sostiene) y la tecnología (que lo hace posible). Si falta una pata, no es producto. Y no lo hace un programador en una cueva: es un deporte de equipo —producto, diseño, ingeniería, QA, research, datos—.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/08-trinomio-producto.png',
        alt: 'Trinomio de producto: Producto (deseable) + Diseño (usable) + Ingeniería (realizable) se solapan.',
        width: 1376,
        height: 768,
        caption: 'Deseable, usable, realizable: las buenas decisiones salen de los tres juntos.',
      },
      {
        type: 'texto',
        body:
          'Las buenas decisiones salen del trinomio: producto (¿es deseable para el negocio?), diseño (¿es usable?) e ingeniería (¿es realizable?). El proceso es un ciclo, no una línea: investigar, definir, construir, medir, repetir. “Cambios y más cambios” es lo normal. Se define con historias de usuario y criterios claros, pero al final la comunicación constante alinea más que cualquier documento.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Trinomio', def: 'Producto + Diseño + Ingeniería decidiendo juntos.' },
          { term: 'Historia de usuario', def: 'Una necesidad escrita como “como X, quiero Y, para Z”.' },
          { term: 'Backlog', def: 'La lista priorizada de lo que falta por hacer.' },
          { term: 'Ágil', def: 'Trabajar en ciclos cortos con rutinas (daily, demo, retro) para ajustar rápido.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'No existe la arquitectura ideal: solo soluciones que sirven a la vez al usuario y al negocio. Perseguir la perfecta es perseguir un fantasma. Y casi siempre, comunicación > documentación: priorizar bien el backlog importa más que tener papeles perfectos.',
      },
    ],
    sources: ['15'],
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
