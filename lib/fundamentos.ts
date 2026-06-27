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
  {
    level: '09',
    slug: 'que-es-la-ia-de-verdad',
    movement: 'IA, sensores y voz',
    title: 'Qué es la IA de verdad',
    hook: 'La IA no da certezas: da probabilidades.',
    summary: 'IA, machine learning y deep learning no son lo mismo — y por qué todo sale como un número.',
    blocks: [
      {
        type: 'texto',
        body:
          'Llamamos IA a que un ordenador haga algo que en una persona llamaríamos inteligente. Pero IA, machine learning y deep learning no son sinónimos: son círculos concéntricos. La IA es el círculo grande; dentro está el machine learning (programas que mejoran cuanto más los entrenas con datos); y dentro de ese, el deep learning. Casi todo lo que hoy llaman “IA” es, en realidad, machine learning resolviendo UNA tarea concreta.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/09-ia-ml-dl.png',
        alt: 'Círculos concéntricos: Inteligencia Artificial contiene Machine Learning, que contiene Deep Learning.',
        width: 1376,
        height: 768,
        caption: 'IA ⊃ Machine Learning ⊃ Deep Learning: no son sinónimos.',
      },
      {
        type: 'texto',
        body:
          'Una IA no entiende: detecta patrones del pasado y los proyecta. Y no devuelve verdades, devuelve probabilidades: detrás de “esto es una cara sonriente” hay un número de confianza tipo 0,99, no un sí rotundo. Además, un modelo no se termina: si dejas de reentrenarlo con datos nuevos, se degrada.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'IA', def: 'Que un ordenador haga algo que en un humano llamaríamos inteligente.' },
          { term: 'Machine Learning', def: 'Programas que mejoran cuanto más datos procesan.' },
          { term: 'Deep Learning', def: 'Una forma de machine learning para problemas más complejos.' },
          { term: 'Modelo', def: 'El resultado de entrenar con datos; predice, no entiende.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'La IA no da certezas, da probabilidades: todo lo que “reconoce” es en el fondo un número de confianza. Y casi todo lo que se vende como “IA” es machine learning haciendo una sola cosa —no una mente—.',
      },
    ],
    sources: ['22'],
  },
  {
    level: '10',
    slug: 'de-donde-salen-los-datos-iot',
    movement: 'IA, sensores y voz',
    title: 'De dónde salen los datos: IoT',
    hook: 'El valor no está en el sensor, sino en cruzar datos de muchos.',
    summary: 'Qué es el IoT, de qué piezas se compone y por qué no todo va al cloud.',
    blocks: [
      {
        type: 'texto',
        body:
          'IoT (internet de las cosas) son objetos físicos que, al conectarse a internet, dejan una huella de datos y permiten automatizar cosas. Un sistema IoT tiene siempre las mismas piezas: el objeto, sensores que miden, conectividad que transmite, un sitio donde se procesa (normalmente el cloud) y una API que abre esos datos a otros. Cada cacharro necesita además energía y algo de memoria para decidir por sí mismo.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/10-iot-end-to-end.png',
        alt: 'Flujo IoT de extremo a extremo: sensor → conectividad → procesado (cloud o edge) → API hacia terceros.',
        width: 1376,
        height: 768,
        caption: 'Sensor → conectividad → procesado (cloud o edge) → API hacia otros.',
      },
      {
        type: 'texto',
        body:
          'El valor no está en un sensor suelto, sino en cruzar los datos de muchos dispositivos y compararlos con el histórico: tu pulsera te avisa de algo gracias a los datos de miles de otras. Y mandarlo TODO al cloud es ineficiente: lo inteligente es procesar cerca del aparato (edge computing) y enviar solo lo que importa. Más dispositivos también significan más superficie de ataque: el mayor freno del IoT no es técnico, es la privacidad.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'IoT', def: 'Objetos físicos conectados a internet que generan datos.' },
          { term: 'Sensor', def: 'El componente que mide algo del mundo real (temperatura, movimiento…).' },
          { term: 'Edge computing', def: 'Procesar cerca del dispositivo en vez de mandarlo todo al cloud.' },
          { term: 'Big Data', def: 'Volúmenes de datos tan grandes que piden otras herramientas.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'El valor del IoT no está en el sensor, sino en agregar los datos de muchos: un dispositivo solo no vale casi nada. Y por eso existe el edge computing —mandarlo todo a la nube sería lento y caro—.',
      },
    ],
    sources: ['2'],
  },
  {
    level: '11',
    slug: 'hablar-con-maquinas-asistentes-de-voz',
    movement: 'IA, sensores y voz',
    title: 'Hablar con máquinas: asistentes de voz',
    hook: 'El asistente no “sabe” la respuesta: la saca de algún sitio.',
    summary: 'Qué pasa entre que hablas y te responde, y por qué un asistente es un intermediario, no un oráculo.',
    blocks: [
      {
        type: 'texto',
        body:
          'Un asistente —de voz o de texto— es software con IA que ejecuta lo que le pides. Hablarle en vez de clicar es un cambio de interfaz (de la pantalla gráfica a la voz) tan grande como lo fueron la web o las apps. Por dentro, una conversación pasa por una cadena: pasar tu voz a texto, entender qué quieres, decidir qué hacer y de dónde sacar el dato, generar la respuesta y volverla a convertir en voz.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/11-pipeline-voz.png',
        alt: 'Cadena de un sistema conversacional: ASR → NLU → gestión del diálogo → NLG → TTS.',
        width: 1376,
        height: 768,
        caption: 'Voz → texto → intención → decisión → respuesta → voz.',
      },
      {
        type: 'texto',
        body:
          'Hay dos familias: los de reglas (baratos, predecibles, limitados) y los de IA conversacional (manejan preguntas abiertas pero necesitan muchos datos). Y una conversación “controlada” —un menú, una tarea concreta— es muchísimo más fácil que una abierta sobre cualquier tema.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'VUI', def: 'Interfaz de voz: hablas en vez de tocar una pantalla.' },
          { term: 'ASR', def: 'Reconocimiento de voz: convierte lo que dices en texto.' },
          { term: 'NLU', def: 'Comprensión del lenguaje: entiende qué quieres decir.' },
          { term: 'Wake word', def: 'La palabra que activa al asistente (“Ok, Google”).' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'El asistente no “sabe” la respuesta: la saca de fuentes —funciones propias, skills de terceros o lo que los buscadores tienen indexado—. Es un intermediario, no un oráculo. Y quien controla ese intermediario controla todas tus interacciones digitales.',
      },
    ],
    sources: ['21'],
  },
  {
    level: '12',
    slug: 'ciberseguridad-basica',
    movement: 'Protegerlo y rentabilizarlo',
    title: 'Ciberseguridad básica',
    hook: 'La longitud de la contraseña importa más que los símbolos raros.',
    summary: 'Las bases de la seguridad: la tríada CIA, el eslabón humano y por qué la longitud manda.',
    blocks: [
      {
        type: 'texto',
        body:
          'Toda la ciberseguridad se reduce a proteger tres cosas —la tríada CIA—: que la información sea Confidencial (solo la ve quien debe), Íntegra (nadie la altera sin permiso) y esté Disponible (puedes acceder cuando la necesitas). Y conviene separar tres palabras que se confunden: una vulnerabilidad es la debilidad (un fallo, una mala configuración, un descuido), la amenaza es lo que podría aprovecharla, y el ataque es cuando ocurre.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/12-triada-cia.png',
        alt: 'Tríada CIA: triángulo con Confidencialidad, Integridad y Disponibilidad.',
        width: 1376,
        height: 768,
        caption: 'Confidencialidad, Integridad, Disponibilidad: las tres patas de todo.',
      },
      {
        type: 'texto',
        body:
          'El eslabón más débil casi nunca es la máquina: es la persona. El phishing ataca a la gente, no al sistema, así que la concienciación es una defensa tan real como un firewall. Por eso la estrategia no es solo levantar muros (prevención): es detectar pronto y saber responder. Se asume que te van a atacar; no es “si”, es “cuándo”.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Tríada CIA', def: 'Confidencialidad, Integridad y Disponibilidad de la información.' },
          { term: 'Vulnerabilidad', def: 'Una debilidad que alguien podría aprovechar.' },
          { term: 'Phishing', def: 'Engañar a una persona para que entregue datos o acceso.' },
          { term: 'Brecha', def: 'Cuando alguien accede a datos que no debería.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'La longitud de una contraseña importa muchísimo más que meterle símbolos raros: una larga aunque sencilla aguanta años; una corta con “P@ssw0rd!” cae en horas. Y probablemente tus credenciales ya están filtradas de alguna fuga anterior (míralo en haveibeenpwned.com): los ataques no las adivinan, las reutilizan.',
      },
    ],
    sources: ['9'],
  },
  {
    level: '13',
    slug: 'por-que-ganan-los-gigantes-efectos-de-red',
    movement: 'Protegerlo y rentabilizarlo',
    title: 'Por qué ganan los gigantes: efectos de red',
    hook: 'Viralidad y efectos de red no son lo mismo.',
    summary: 'Por qué unas pocas plataformas se lo llevan todo: efectos de red, masa crítica y defensa.',
    blocks: [
      {
        type: 'texto',
        body:
          'Los gigantes no ganan solo por buen producto: ganan por efectos de red. Un producto vale más cuanto más gente lo usa —un teléfono solo no sirve de nada—. Eso no abarata producir; multiplica el valor para cada usuario nuevo. En un marketplace hay dos lados (oferta y demanda) que se alimentan: más conductores atraen más pasajeros, y al revés.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/13-efectos-de-red.png',
        alt: 'Una red pequeña con pocas conexiones frente a una red grande y densa: el valor crece con los nodos.',
        width: 1672,
        height: 941,
        caption: 'Más usuarios, más valor para cada uno: el efecto de red.',
      },
      {
        type: 'texto',
        body:
          'Pero el efecto solo se activa a partir de cierta masa crítica: antes de ese punto, el producto tiene que ser útil por sí solo (el problema del huevo y la gallina). Y una vez encendido, no es solo una ventaja: es una defensa, un foso que hace crecer el negocio de forma exponencial y lo protege de los rivales.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Efecto de red', def: 'El valor crece con cada usuario nuevo.' },
          { term: 'Masa crítica', def: 'El punto a partir del cual el efecto de red despega.' },
          { term: 'Plataforma', def: 'Una base sobre la que otros construyen su propio negocio.' },
          { term: 'Red de dos lados', def: 'Un mercado con oferta y demanda que se alimentan (Uber, Airbnb).' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Viralidad y efectos de red no son lo mismo: la viralidad trae usuarios (crecimiento); los efectos de red los retienen (defensa). Y más usuarios no siempre es mejor: las redes se saturan y pueden volverse un efecto negativo.',
      },
    ],
    sources: ['1'],
  },
  {
    level: '14',
    slug: 'como-gana-dinero-una-app',
    movement: 'Protegerlo y rentabilizarlo',
    title: 'Cómo gana dinero una app',
    hook: 'El 1% de los desarrolladores se lleva el 91% de los ingresos.',
    summary: 'Los modelos para ganar dinero con una app, el reparto 70/30 y por qué “gratis” es el más difícil.',
    blocks: [
      {
        type: 'texto',
        body:
          'Una app gana dinero de cuatro maneras básicas: gratis con publicidad (Free), gratis con compras dentro (Freemium), de pago al descargar (Paid) o de pago + compras (Paymium). En el freemium, la decisión clave es el “pay-wall”: dónde pones el muro entre lo gratis y lo de pago. Muy generoso y nadie paga; muy tacaño y nadie se queda.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/14-modelos-monetizacion.png',
        alt: 'Cuadrícula de los cuatro modelos de monetización: Free, Freemium, Paid, Paymium.',
        width: 1376,
        height: 768,
        caption: 'Free, Freemium, Paid, Paymium: captar y cobrar de formas distintas.',
      },
      {
        type: 'texto',
        body:
          'Y hay un peaje que pocos ven: las tiendas se quedan históricamente el 30% de cada pago —tú ingresas el 70%—. Además, no toda app tiene que ganar dinero por sí misma: a veces es solo otro canal para vender tu producto de siempre.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Freemium', def: 'Gratis de base, con funciones o extras de pago.' },
          { term: 'Pay-wall', def: 'El punto donde lo gratis se vuelve de pago.' },
          { term: 'Reparto 70/30', def: 'De cada pago en la tienda, tú te llevas el 70%; la tienda, el 30%.' },
          { term: 'ARPU', def: 'Ingreso medio por usuario.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'El mercado de apps es de ganadores absolutos: más del 70% no cubre ni su coste de desarrollo, y el 1% de los desarrolladores genera el 91% de los ingresos. Y ojo: “gratis” suele ser el modelo más difícil de rentabilizar —los ingresos por anuncios son tan bajos que necesitas muchísimo tráfico—.',
      },
    ],
    sources: ['17', '7'],
  },
  {
    level: '15',
    slug: 'estrategia-tech-sin-humo',
    movement: 'Protegerlo y rentabilizarlo',
    title: 'Estrategia tech sin humo',
    hook: 'Migrar al cloud no garantiza ahorrar.',
    summary: 'Tecnología como motor (no gasto): CAPEX vs OPEX, monolito vs piezas y dónde va el presupuesto.',
    blocks: [
      {
        type: 'texto',
        body:
          'Durante años la tecnología se trató como un centro de costes —algo que solo gasta—. Hoy es la palanca que hace crecer el negocio, y eso cambia hasta cómo se paga. El cloud convierte la gran inversión inicial de comprar máquinas (CAPEX) en un gasto mensual variable (OPEX): no es solo un cambio técnico, es financiero.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/15-capex-opex.png',
        alt: 'Dos curvas de coste: CAPEX como un gran desembolso inicial frente a OPEX como pago gradual por uso.',
        width: 1376,
        height: 768,
        caption: 'CAPEX: gran desembolso de golpe. OPEX: pagas por uso, mes a mes.',
      },
      {
        type: 'texto',
        body:
          'También cambia cómo se construye: de un monolito (un bloque único que, si se rompe, se cae entero) a piezas independientes que hablan por APIs y se cambian sin tocar el resto. Y el presupuesto no es solo “operar”: se reparte entre mantener, crecer, cumplir normas e innovar. Si solo presupuestas operación, la tecnología envejece sin que lo veas.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'CAPEX', def: 'Inversión grande de golpe (comprar servidores).' },
          { term: 'OPEX', def: 'Gasto operativo recurrente (pagar el cloud por uso).' },
          { term: 'Monolito', def: 'Un bloque único de software; si falla algo, cae todo.' },
          { term: 'Componible', def: 'Piezas independientes conectadas por APIs, cambiables por separado.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Migrar al cloud no garantiza ahorrar: mal planificado, acabas pagando dos veces (tu sistema viejo + un cloud sin optimizar). El ahorro no es automático, es un trabajo continuo —y hay potencia de sobra con 90% de descuento que casi nadie usa porque no sabe que existe—.',
      },
    ],
    sources: ['14', '11'],
  },
  {
    level: '16',
    slug: 'leer-datos-sin-que-te-enganen',
    movement: 'Datos (y quién los tiene)',
    title: 'Leer datos sin que te engañen',
    hook: 'Casi todo lo que llaman “insight de datos” es correlación disfrazada.',
    summary: 'Correlación no es causa, y lo que la gente dice no es lo que hace.',
    blocks: [
      {
        type: 'texto',
        body:
          'Antes de fiarte de un número, dos trampas básicas. La primera: correlación no es causalidad. Que dos cosas suban a la vez no significa que una cause la otra —puede haber un tercer factor, o pura casualidad—. La única forma honesta de saber si un cambio causa algo es un experimento con grupo de control (un A/B test): cambias una cosa para unos y no para otros, y comparas.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/16-correlacion-causalidad.png',
        alt: 'Dos líneas que suben juntas con un símbolo de “distinto”: correlación no implica causalidad.',
        width: 1672,
        height: 941,
        caption: 'Que vayan juntas no significa que una cause la otra.',
      },
      {
        type: 'texto',
        body:
          'La segunda trampa: lo que la gente dice no es lo que hace. Las encuestas capturan lo que creemos de nosotros mismos; la conducta real se observa, no se pregunta. Por eso preguntar directamente suele ser de las peores fuentes de datos. Y antes de predecir nada, conviene segmentar: no todos tus usuarios son iguales.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Correlación', def: 'Dos cosas se mueven juntas. No implica que una cause la otra.' },
          { term: 'Causalidad', def: 'Una cosa provoca la otra. Solo se prueba con experimentos.' },
          { term: 'A/B test', def: 'Probar un cambio en un grupo y compararlo con otro de control.' },
          { term: 'Sesgo', def: 'Una inclinación en los datos o el método que tuerce el resultado.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Casi todo lo que se vende como “insight de datos” es correlación disfrazada: sin un grupo de control, no sabes si tu cambio causó algo o fue casualidad. Y preguntarle a la gente qué hará es de las peores fuentes que hay —te dice lo que quiere creer de sí misma—.',
      },
    ],
    sources: ['30.01', '26.01'],
  },
  {
    level: '17',
    slug: 'metricas-que-no-mienten',
    movement: 'Datos (y quién los tiene)',
    title: 'Métricas que no mienten',
    hook: 'Las vanity metrics suben siempre y no significan nada.',
    summary: 'El embudo, la retención y por qué el 80% del trabajo es limpiar datos.',
    blocks: [
      {
        type: 'texto',
        body:
          'La vida de un usuario es un embudo, no un número: te descubre, se activa, vuelve, te recomienda y, al final, paga. Captar es fácil; el negocio vive o muere en la retención —en si vuelven—. Por eso una métrica suelta no dice nada: primero entiendes cómo gana dinero el negocio y luego eliges qué medir.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/17-embudo-metricas.png',
        alt: 'Embudo de métricas: adquisición arriba, retención destacada en el centro, revenue abajo.',
        width: 1672,
        height: 941,
        caption: 'El usuario es un embudo: la retención es donde está el valor.',
      },
      {
        type: 'texto',
        body:
          'Y un secreto poco glamuroso: en un proyecto de datos, el 80% del trabajo es recoger, limpiar y ordenar los datos —no entrenar modelos elegantes—. Tener “muchos datos” no sirve de nada si están sucios o descoordinados. Ahí, y en no tener una estrategia clara, es donde fracasa la mayoría.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Embudo', def: 'El recorrido del usuario: descubrir → activarse → volver → pagar.' },
          { term: 'Retención', def: 'Que la gente vuelva. Donde de verdad está el valor.' },
          { term: 'Vanity metric', def: 'Un número que impresiona pero no significa nada (seguidores, descargas).' },
          { term: 'Cohorte', def: 'Un grupo de usuarios que empezó a la vez, para medir su evolución.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Las vanity metrics —seguidores, descargas totales, registros— suben siempre y no significan casi nada; lo que importa es la retención por cohortes. Una métrica sin un modelo de negocio detrás es solo decoración.',
      },
    ],
    sources: ['02.02', '25.1'],
  },
  {
    level: '18',
    slug: 'tus-datos-son-poder',
    movement: 'Datos (y quién los tiene)',
    title: 'Tus datos son poder: privacidad y ética',
    hook: 'Los datos “anonimizados” casi nunca lo están.',
    summary: 'Qué es un dato personal, tus derechos, y por qué el anonimato es un mito.',
    blocks: [
      {
        type: 'texto',
        body:
          'Un dato personal es cualquier información que permite identificarte, directa o indirectamente: tu nombre, sí, pero también tu ubicación o un identificador online. La ley (RGPD) parte de unos principios: recoger solo lo necesario, para una finalidad clara, con transparencia. Y para tratar tus datos hace falta una base legal —no basta con “los tengo”—.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/18-reidentificacion.png',
        alt: 'Una silueta anónima que, cruzando edad, sexo y código postal, se convierte en una persona identificada.',
        width: 1672,
        height: 941,
        caption: 'Edad + sexo + código postal suelen bastar para ponerte nombre.',
      },
      {
        type: 'texto',
        body:
          'Tienes derechos sobre ellos: acceder, rectificar, que los borren (“derecho al olvido”), llevártelos. Pero hay un mito peligroso: “datos anonimizados”. Quitarte el nombre no es anonimizar si se te puede volver a identificar. Y los algoritmos heredan los sesgos de los datos con que se entrenan: la “neutralidad de la máquina” es falsa.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'Dato personal', def: 'Cualquier información que permite identificarte.' },
          { term: 'RGPD', def: 'La ley europea que regula cómo se tratan tus datos.' },
          { term: 'Anonimizar', def: 'Eliminar de verdad la posibilidad de reidentificar a alguien.' },
          { term: 'Sesgo algorítmico', def: 'Cuando un modelo hereda y repite prejuicios de sus datos.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'Los datos “anonimizados” casi nunca lo están: cruzando solo edad, sexo y código postal se vuelve a poner nombre y apellidos a la mayoría. La privacidad no va de ocultar: va de quién decide sobre ti.',
      },
    ],
    sources: ['09.02', '26.01'],
  },
  {
    level: '19',
    slug: 'quien-tiene-los-datos-gafam',
    movement: 'Datos (y quién los tiene)',
    title: '¿Quién tiene los datos? GAFAM',
    hook: 'Quien gana dinero con la IA no es quien hace los chatbots: es quien vende las palas.',
    summary: 'Cómo unos pocos gigantes concentran los datos —y el poder—.',
    blocks: [
      {
        type: 'texto',
        body:
          'GAFAM son los cinco gigantes —Google, Amazon, Facebook/Meta, Apple, Microsoft—. Cada uno nació de una sola cosa (un buscador, una tienda, una red social, un fabricante, un sistema operativo) y creció hasta ser un ecosistema entero: publicidad, cloud, hardware, medios. La clave de su poder: controlar la tecnología base sobre la que construyen los demás.',
      },
      {
        type: 'esquema',
        src: '/fundamentos/19-gafam.png',
        alt: 'Unos pocos gigantes enormes sobre figuras diminutas que les envían sus datos hacia arriba.',
        width: 1672,
        height: 941,
        caption: 'Unos pocos gigantes concentran los datos —y el poder—.',
      },
      {
        type: 'texto',
        body:
          'Su modelo central, en varios casos, es publicidad alimentada por tus datos: si no pagas por el producto, el producto eres tú. Y los ecosistemas se diseñan abiertos o cerrados precisamente para retenerte. El boom de la IA no rompe esto: lo concentra más.',
      },
      {
        type: 'terminos',
        items: [
          { term: 'GAFAM', def: 'Google, Amazon, Facebook/Meta, Apple y Microsoft.' },
          { term: 'Ecosistema', def: 'Un conjunto de productos enganchados que te retienen dentro.' },
          { term: 'Eres el producto', def: 'Si el servicio es gratis, lo que se vende son tus datos.' },
          { term: 'Lock-in', def: 'La dificultad de salir de un ecosistema una vez dentro.' },
        ],
      },
      {
        type: 'gotcha',
        body:
          'El boom de la IA generativa no es una guerra de startups libres: las tecnologías clave están compradas o financiadas por Google y Microsoft. Y quien gana dinero de verdad no es quien hace los chatbots, sino quien vende las palas: los fabricantes de chips.',
      },
    ],
    sources: ['30.05'],
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
