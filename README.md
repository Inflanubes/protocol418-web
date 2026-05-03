# Protocol 418 — Web

Web pública de Protocol 418. Phase 1: 3 páginas estáticas + puerta al community de WhatsApp.

**Producción:** https://protocol418.com

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5 (strict)
- CSS Modules + tokens globales
- Vercel hosting

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de producción
npm start            # servir build de producción local
npm run lint         # ESLint
npx tsc --noEmit     # typecheck
```

## Estructura

- `app/` — rutas (App Router): `/`, `/protocol`, `/comunidad`, plus `not-found`, `sitemap`, `robots`, `icon`, `opengraph-image`.
- `components/` — 11 componentes React + CSS Modules (Container, Section, Logo, Tagline, Eyebrow, Nav, Footer, CTAButton, ChannelCard, GlossaryEntry, PromptBlock).
- `lib/` — datos y constantes (`constants.ts`, `channels.ts`, `glossary.ts`).
- `styles/tokens.css` — variables CSS globales (single source of truth para la marca).
- `public/brand/` — badges y logos copiados de `Branding/Resources/` del proyecto padre.
- `content/` — Phase 2: MDX posts vivirán aquí. El `README.md` documenta el frontmatter schema.

## Deploy

Push a `main` → Vercel deploya automáticamente. PRs → preview deploys.

## Referencias

- Design spec: `../docs/superpowers/specs/2026-05-03-protocol418-web-phase1-design.md` (en el repo padre)
- Brand spec: `../Branding/Specs/brand-spec.md` (en el repo padre)
