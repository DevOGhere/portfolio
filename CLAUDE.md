# CLAUDE.md — ojaswishere.in portfolio

Agent-facing architecture map. Read this and you know exactly where to change what.

## What this is

Ojaswi's portfolio site. **Astro 5, static output, zero runtime dependencies** — no React, no webfonts, no analytics, no trackers. That's a public promise (the Colophon section prints the site's own KB numbers), so keep it true.

Two-mode narrative mechanic:
- **Day (default)** = recruiter mode. Swiss Flux: white/black/cobalt, caps display type. Serious.
- **Night** = the workshop. Phosphor Editorial: near-black `#090C09`, electric green `#7CF5A6`, neon accents (cyan/pink/amber), CRT scanlines, serif voice, easter eggs.

Mode = `data-mode` attribute on `<html>`, toggled by `#mode-toggle` (in `Base.astro`). Night-only content is gated via `html[data-mode=night]` CSS. **In Astro components, night selectors must be `:global()`-wrapped** or Astro's style scoping silently kills them (already bitten us once).

## Commands

```
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
```

Always run `npm run build` after changes — the content schema is validated at build time, so a broken frontmatter fails loud here and nowhere else.

## Change → file map

| You want to change… | Edit this |
|---|---|
| Add/edit a project | `src/content/projects/*.md` — one md per project. Schema in `src/content.config.ts`: `title`, `tagline`, `summary`, `order`, `receipts[]` (label/value, optional `expand: {items, note}` hover-unfold), night-only `marginalia`, night-only `learned[]`, `wip`, `link`. Body md = "THE FULL STORY" expander. |
| Colors / type voices | `src/styles/tokens.css` — ALL colors and both mode voices live here as CSS custom properties. Components never hardcode colors; canvas JS reads them via `getComputedStyle` (re-read on toggle). |
| Global layout / prose styles | `src/styles/global.css` |
| Topbar, sticky name, dot rail, mode toggle, OG/meta tags | `src/layouts/Base.astro` |
| Landing animation (particle name "OJASWI", chaos→order, wanderers, hero pixel-Kaju trot) | `src/components/HeroField.astro` — hand-rolled canvas, ~850 particles, perf-batched by font bucket. Reduced-motion = static. |
| Hero text (headline, datarow, caption) | `src/components/Hero.astro` |
| Status ticker marquee | `src/components/Ticker.astro` |
| Experience timeline (Veersa 2-phase, Indika, volunteering, route strip) | `src/components/Timeline.astro` |
| Education cards + hovering "course sky" (rotating constellation) | `src/components/Education.astro` |
| Competencies (wiring SVG diagram + receipts table + human chips) | `src/components/Competencies.astro` |
| Night-only parked-ideas shelf (Brain Decoder / Haryanvi LLM / Agent OS) | `src/components/Shelf.astro` |
| Stray-file drift strips between sections | `src/components/Drift.astro` |
| Colophon (self-measured KB numbers) | `src/components/Colophon.astro` — **numbers are real measurements, not decor. After any change that ships bytes, re-measure `dist/` (pages+assets, and JS separately) and update TOTAL SHIPPED / JAVASCRIPT.** |
| Section order / adding a section | `src/pages/index.astro` (also add its dot in the Base.astro dot rail + scrollspy list) |
| /now page (BUILDING/STUDYING/LEARNING/NEXT) | `src/pages/now.astro` — hand-updated, bump the date when touched |
| 404 | `src/pages/404.astro` |
| Photos, uni logos, cv.pdf, og.png | `public/photos/`, `public/logos/`, `public/cv.pdf`, `public/og.png` — replace files, keep names, links already wired |

Section anchor IDs (dot rail + deep links): `top`, `experience`, `work`, `education`, `competencies`, `shelf` (night-only), `research`, `colophon`.

Easter eggs inventory (don't break silently): course sky on education hover, night pixel-Kaju in hero, night `K`-key giant Kaju lick, footer "2am searches", `07:07` token in hero particles, "claude code says hi" hover in competencies.

## Hard rules

1. **No client names, ever** — Veersa clients are under NDA. Before shipping: `grep -ri "novo\|lilly" dist/` must be empty. No phone number anywhere either.
2. **No em dashes in prose** (AI-tell) — only in date ranges. Sweep after writing copy.
3. **No new dependencies / frameworks / webfonts / trackers.** The Colophon's "0 frameworks, 0 cookies" claim is load-bearing.
4. **Ask Oj before any git commit.** Standing rule.
5. Every animation needs a `prefers-reduced-motion` fallback (static or fully-drawn state).
6. Day mode stays serious — playful copy, neon, marginalia, Kaju are night-only.

## Deploy & maintenance loop

- Repo: `DevOGhere/portfolio` (GitHub) → **Vercel auto-builds on every push**. No CI config to maintain; there is no pipeline file, Vercel's default Astro build IS the pipeline.
- Domain: **ojaswishere.in** (Vercel → Settings → Domains, A/CNAME per Vercel instructions).
- Routine content update = edit md / component → `npm run build` green → Oj approves → commit + push → live in ~1 min.
- After content changes: update Colophon numbers (see table) and `/now` date if stale.

## Status (2026-07-11)

FINAL DRAFT, not yet committed/deployed. Pending from Oj: buy ojaswishere.in, real photos (headshot + Kaju), uni logo SVGs, real cv.pdf, og.png (1200×630), verify B.Tech course list in Education. Then: first commit → Vercel → domain → re-measure Colophon.

Design history + decision log lives in the vault: `OjiLLMbrains/Projects/Portfolio Website — Master Plan.md`.
