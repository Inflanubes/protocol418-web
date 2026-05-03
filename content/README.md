# Content — Phase 2

Esta carpeta vivirá los posts MDX cuando se construya Phase 2.

## Estructura prevista

```
content/
└── posts/
    ├── 2026-05-15-titulo-del-post.mdx
    ├── 2026-05-16-otro-post.mdx
    └── ...
```

## Frontmatter schema (contrato para automatización)

```yaml
---
title: "El título del post"
slug: "el-titulo-del-post"        # debe coincidir con el filename (sin la fecha)
date: 2026-05-15                   # ISO date
type: protocol | brew-log | 418-moment | hotfix
excerpt: "1-2 frases para el preview"
tags: [ai, automation, claude]     # opcional
youtube_id: "dQw4w9WgXcQ"          # opcional — id del vídeo de YouTube
attachments:                       # opcional — recursos descargables
  - { name: "Blueprint X", url: "/blueprints/x.json", type: blueprint }
---

(cuerpo del post en MDX — markdown + componentes JSX como <YouTube>, <Download>)
```

## Routing futuro

- `/brew` — feed de posts (todos, ordenados por fecha desc)
- `/brew/[slug]` — post individual
- `/brew/tipo/[type]` — filtrado por type (opcional)

## Cuándo se construye

Phase 2. Hoy esta carpeta es solo el contrato. **No añadir aquí archivos hasta que Phase 2 esté en marcha** — romperían el build.
