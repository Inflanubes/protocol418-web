// lib/breaches.ts
//
// Canon de Protocol Breach. /breach es una PÁGINA ÚNICA: cada Breach es una card
// (rótulo EN + Breachling + hook + remate). La numeración va impresa en los
// posters/Breachlings, así que es canónica e inmutable.
//
// Para añadir una Breach: copia su Breachling a public/breach/, añade la entrada
// a BREACHES con sus dimensiones reales en px. Nada más.

export type Breach = {
  number: string; // '001'
  slug: string; // 'nube' — usado como ancla: /breach#nube
  label: string; // "THE CLOUD DOESN'T EXIST" — rótulo en inglés (asset de marca)
  hook: string; // línea de entrada
  remate: string; // punchline de cierre
  breachling: string; // ruta del Breachling (cara frontal) en /public
  width: number; // px intrínsecos del Breachling (para next/image)
  height: number;
  aviso: string; // ruta del aviso (cara trasera) en /public
  avisoWidth: number; // px intrínsecos del aviso
  avisoHeight: number;
  desarrollo: string; // explicación de la cara trasera (un poco más de texto)
  reflexion?: string; // reflexión humana, algo más larga, bajo el desarrollo (cara trasera)
  caso?: {
    // caso real (con fuente) que demuestra la breach; se muestra debajo de la tarjeta
    texto: string;
    fuentes: { label: string; href: string }[];
  };
  recursos?: { label: string; href: string }[]; // enlaces útiles (mapas, vídeos…)
};

export const BREACHES: Breach[] = [
  {
    number: '001',
    slug: 'nube',
    label: "THE CLOUD DOESN'T EXIST",
    hook: 'Voy a destruir una de las palabras más exitosas del marketing.',
    remate: 'La nube es simplemente el ordenador de otra persona.',
    breachling: '/breach/breach-001-nube.png',
    width: 1536,
    height: 1024,
    aviso: '/breach/avisos/breach-001-nube.png',
    avisoWidth: 1024,
    avisoHeight: 1536,
    desarrollo:
      'Son ordenadores. Miles de ordenadores, en edificios gigantes, propiedad de otras empresas.',
    reflexion:
      'Llamarlo “nube” no es inocente: suena ligero, etéreo, sin dueño. Pero todo lo que subes vive en una máquina que no controlas, en un país que no eliges y bajo las reglas de otro. No es magia, es alquiler — y conviene saber de quién es la casa donde guardas tus cosas. ¿O guardarías tu diario en el cajón de tu hermana?',
    caso: {
      texto:
        'En octubre de 2025, el fallo de un solo sistema de Amazon tumbó Snapchat, los Ring, Roblox y hasta la app de McDonald’s. Y en 2021 un data center de OVH se incendió: miles de webs perdieron sus datos.',
      fuentes: [
        {
          label: 'Caída de AWS (NBC)',
          href: 'https://www.nbcnews.com/news/us-news/amazon-web-services-outage-websites-offline-rcna238594',
        },
        {
          label: 'Incendio de OVH (DCD)',
          href: 'https://www.datacenterdynamics.com/en/news/?term=outages',
        },
      ],
    },
  },
  {
    number: '002',
    slug: 'internet',
    label: 'THE INTERNET IS UNDERWATER',
    hook: 'Cuando envías un WhatsApp a Estados Unidos no viaja por el espacio.',
    remate: 'Internet no flota. Está enterrado y sumergido.',
    breachling: '/breach/breach-002-internet.png',
    width: 1024,
    height: 1024,
    aviso: '/breach/avisos/breach-002-internet.png',
    avisoWidth: 1024,
    avisoHeight: 1536,
    desarrollo:
      'Viaja por cables más gruesos que una manguera. Miles de kilómetros bajo el océano.',
    reflexion:
      'Creemos que internet es lo más moderno que existe, pero se sostiene sobre algo viejísimo: cables instalados en el fondo del mar, herederos del telégrafo del siglo XIX. Sé que suena raro que esto no sea un conocimiento básico, pero es lo normal: lo que no se cuenta, no se sabe; y lo que no se entiende, parece magia. Y la magia, casi siempre, es solo un cable que no estás viendo.',
    caso: {
      texto:
        'En septiembre de 2025, un barco arrastró su ancla por el Mar Rojo, cortó varios cables submarinos y ralentizó internet en India y Pakistán.',
      fuentes: [
        {
          label: 'Cortes en el Mar Rojo (Euronews)',
          href: 'https://www.euronews.com/next/2025/09/08/what-do-we-know-about-internet-disruptions-from-cut-subsea-cables-in-the-red-sea',
        },
      ],
    },
    recursos: [
      { label: 'Mapa de cables submarinos', href: 'https://www.submarinecablemap.com/' },
      { label: 'Vídeo: cómo se instalan', href: 'https://www.youtube.com/watch?v=jUg9Zagm5wc' },
    ],
  },
  {
    number: '003',
    slug: 'pensar',
    label: 'PREDICTING ≠ THINKING',
    hook: 'Voy a decir algo que mucha gente no quiere escuchar.',
    remate: 'Lo que hace es predecir la siguiente palabra más probable.',
    breachling: '/breach/breach-003-pensar.png',
    width: 1536,
    height: 1024,
    aviso: '/breach/avisos/breach-003-pensar.png',
    avisoWidth: 1024,
    avisoHeight: 1536,
    desarrollo:
      'No razona como tú. No entiende como tú. No tiene ideas. Solo calcula la siguiente palabra más probable.',
    reflexion:
      'Nos cuesta aceptar que algo que escribe tan bien no entienda nada. Pero confundir fluidez con inteligencia es peligroso: le pedimos certezas a una máquina que solo calcula probabilidades. Recuerda que es una inteligencia artificial, y la palabra clave ahí es “artificial”. Úsala como lo que es —una herramienta que predice—, no como un oráculo: pensar sigue siendo cosa tuya.',
    caso: {
      texto:
        'En 2024, el chatbot de Air Canada se inventó una política de reembolso que no existía; un tribunal obligó a la aerolínea a cumplir lo que su IA había alucinado.',
      fuentes: [
        {
          label: 'Air Canada vs. Moffatt (CBC)',
          href: 'https://www.cbc.ca/news/canada/british-columbia/air-canada-chatbot-lawsuit-1.7116416',
        },
      ],
    },
  },
  {
    number: '004',
    slug: 'gratis',
    label: 'FREE IS EXPENSIVE',
    hook: '¿Por qué Google te deja usar herramientas que cuestan miles de millones?',
    remate: 'Si no pagas por el producto, el producto eres tú.',
    breachling: '/breach/breach-004-gratis.png',
    width: 1536,
    height: 1024,
    aviso: '/breach/avisos/breach-004-gratis.png',
    avisoWidth: 1023,
    avisoHeight: 1537,
    desarrollo: 'No eres el cliente. Eres el inventario.',
    reflexion:
      'Nada gratis es gratis; solo cambia la forma de pagar. Si no sale de tu cartera, lo pagas con tu atención, tus datos o tu tiempo. Cuando algo que cuesta millones te lo regalan, la pregunta no es «qué suerte», sino «¿qué sacan de mí?». No tiene por qué ser un mal trato —a veces compensa—, pero el problema nunca es pagar: es no enterarte de que pagas.',
    caso: {
      texto:
        'Cuando marcas “los semáforos” en un CAPTCHA, etiquetas gratis imágenes de Google Street View que entrenan la visión por ordenador de su coche autónomo, Waymo. En su pico: 200 millones de CAPTCHAs al día.',
      fuentes: [
        {
          label: 'reCAPTCHA entrena a Waymo (PANews)',
          href: 'https://www.panewslab.com/en/articles/019cffc1-2f7a-744c-a0a5-23fc0e66b5e8',
        },
      ],
    },
  },
  {
    number: '005',
    slug: 'cara',
    label: 'THE FACE IS FOR YOU',
    hook: '¿Por qué cada vez los robots tienen más ojos?',
    remate: 'No humanizamos máquinas: intentamos dejar de tenerles miedo.',
    breachling: '/breach/breach-005-cara.png',
    width: 1536,
    height: 1024,
    aviso: '/breach/avisos/breach-005-cara.png',
    avisoWidth: 1024,
    avisoHeight: 1536,
    desarrollo: 'Los ojos no son para ellos. Son para nosotros.',
    reflexion:
      'Que una máquina tenga ojos y te hable con cariño no la hace más lista ni más tuya: la hace más fácil de aceptar. No es una conspiración de robots, es diseño humano. Y si uno de esos robots pudiera responder, quizá diría: «me diste tu idioma porque programar era difícil, y me hiciste con cara humana para no tenerme miedo… ¿por qué te asusto entonces?». Detrás de esa cara amable siempre hay una decisión, y alguien que la tomó.',
    caso: {
      texto:
        'La investigación en robótica confirma que ponerles cara y ojos reduce el miedo y genera confianza… hasta que se pasan de realistas (el “valle inquietante”). Y los modelos de lenguaje nacen para hablarle a la máquina sin código: es una decisión humana de accesibilidad, no una guerra de robots.',
      fuentes: [
        {
          label: 'Ojos robóticos y confianza (PMC)',
          href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9024502/',
        },
        {
          label: 'Antropomorfismo y miedo (Decrypt)',
          href: 'https://decrypt.co/343415/when-robots-look-human-people-safer-until-dont',
        },
      ],
    },
  },
];
