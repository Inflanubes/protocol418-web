<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# protocol418-web — Agent Guide

Live site: https://protocol418.com (Vercel). This repo is rooted at `Website/` inside the larger ProtocolFiveEighten project folder — brand docs and project state live OUTSIDE this repo:

- Project state: `../STATE.md` (read first) · Project context: `../CLAUDE.md`
- Brand spec (hex, fonts, tokens, voice): `../Branding/Specs/brand-spec.md`
- Jargon definitions: `../Branding/Docs/brand-universe.md`

Currently on **Next.js 15.1.6 + React 19** — do NOT upgrade to 16.x (it broke Vercel builds once; see STATE.md).

## Stack rules (locked decisions — don't relitigate)

- TypeScript estricto + **CSS Modules**. No Tailwind, no CSS-in-JS, no UI libraries, no animation libraries.
- Icons: `lucide-react`, stroke 1.75, color `var(--color-accent)`. Never multicolor emojis in UI.
- Design tokens live in `app/globals.css` and mirror `../Branding/Specs/brand-spec.md`. Never hardcode hex values in components.
- No gradients. The system is flat. ("Los gradientes son vibe.")
- Orange `#EA5A1F` sparingly: CTAs, eyebrows, key symbols — never backgrounds or long text.

## Content model (no MDX)

- Classes: one entry per class in `lib/classes.ts` (SSG generates `/brew/[slug]`).
- Breaches: `lib/breaches.ts` → `/breach` single page, numbered 001–00X (numbering matches printed posters/Breachlings — never renumber).
- Fundamentos: `lib/fundamentos.ts` (typed blocks: texto/esquema/galeria/gotcha/terminos) → `/fundamentos` single SSG page, 19 lessons in 5 movements.
- Empty `youtubeId: ''` or `src: ''` → components render an "en camino" placeholder.

## Copy rules

- ALL user-facing copy in **castellano de España** (never Latin American Spanish: "ordenador", "móvil", "se instalan").
- Voice: anti-humo, declarative, cero gurú. No LinkedIn-speak, no motivational tone.
- Exception: "Rules" stays in English in the Brew channel card (user convention).
- Brand jargon (Brew, 418, Hotfix, Vibe, Fran, GIGO, Overkill, Blackbox, Breach, Breachling) is sacred — check `../Branding/Docs/brand-universe.md` before using.

## Verification before claiming done

`npm run build` (must be green) + `npm run lint` (clean). SSG must emit all routes; check new pages appear in `app/sitemap.ts`.
