# ojaswishere.in

Portfolio site. Astro, static output, no framework runtime.

- **Design tokens:** `src/styles/tokens.css` — day (Swiss Flux) / night (Phosphor Editorial). All colors and type voices live here; components never hardcode them.
- **Content:** `src/content/projects/*.md` — one markdown file per project. Edit like a vault note; frontmatter is schema-validated at build time (`src/content.config.ts`).
- **Run:** `npm run dev` → http://localhost:4321
- **Build:** `npm run build` → `dist/`

Design direction locked 2026-07-03 (mockup v0.4 "Swiss × Phosphor").
