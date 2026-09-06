# g8academy-web

The marketing site and landing page for **G8Academy** — the micro-credential learning platform by Developers Hub Sdn Bhd.

Static Astro build. No client-side JavaScript ships: the FAQ uses native `<details>`, and theming is CSS-only via `prefers-color-scheme`.

## Stack

| Piece | Choice |
|-------|--------|
| Framework | Astro 7 (static output) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| SEO | `@astrojs/sitemap`, canonical URLs, Open Graph |

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # serve dist/
```

## Design tokens

All tokens live in `src/styles/global.css` and mirror
[`../../documentation/02-design/02-ui-design-system.md`](../../documentation/02-design/02-ui-design-system.md).

Two rules govern colour, and both come from the product, not from taste:

1. **One interactive colour.** `primary` is the only clickable hue. `verified` / `expired` / `revoked` are reserved exclusively for credential status.
2. **Status never rides on colour alone.** Every state carries its word. See `src/components/VerifyCard.astro`.

### Theming gotcha

Tailwind v4 does **not** support `@theme` nested inside `@media` — doing so silently hoists the dark values and drops the light palette entirely. Dark mode overrides plain custom properties on `:root` inside a normal media query instead.

`--color-navy` flips light in dark mode, so it must **never** back white text. Use `--color-invert` (dark in both themes) for inverted bands — see `src/components/sections/Cta.astro`.

## Content

Copy, levels, pricing and FAQ live in `src/data/site.ts`. Sections are in `src/components/sections/` and composed in `src/pages/index.astro`.

---

*Developers Hub Sdn Bhd · devhub.my*
