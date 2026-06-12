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
  breachling: string; // ruta de la imagen en /public
  width: number; // px intrínsecos del PNG (para next/image)
  height: number;
  desarrollo?: string; // texto extra opcional — reservado, sin usar todavía
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
  },
];
