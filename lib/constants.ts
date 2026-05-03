// lib/constants.ts
export const WHATSAPP_INVITE_URL = 'https://chat.whatsapp.com/Jpd9VnBsIk5HQ6ucLFfKxd';

export const NAV_LINKS = [
  { href: '/', label: 'Manifiesto' },
  { href: '/protocol', label: 'Protocol' },
  { href: '/comunidad', label: 'Comunidad' },
] as const;

export const SITE = {
  name: 'Protocol 418',
  url: 'https://protocol418.com',
  description: 'Esto no es teoría. Esto es protocolo.',
  defaultOgImage: '/og.png',
} as const;
