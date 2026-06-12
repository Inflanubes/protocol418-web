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
  },
];
