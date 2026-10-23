# g8academy-web

The marketing site and landing page for **DevHub Academy** — the micro-credential learning platform by Developers Hub Sdn Bhd. (`g8academy` is the internal project code.)

Static Astro build. Client-side JavaScript is limited to three small scripts: the theme toggle, the series topic filter and the verify form. The FAQ and mobile menu use native `<details>`.

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

All tokens live in `src/styles/global.css` and follow the DevHub Academy brand kit (`07-web/brand-tokens.css`): Midnight `#0F102D` grounds, Coral `#FF637E` CTAs on midnight, Action blue `#155DFC` as the interactive colour, and the three level bars (Fundamentals / Practitioner / Architect). Type is Inter (display = ExtraBold, tight tracking) plus JetBrains Mono.

Logos are inlined verbatim from `src/assets/brand/` (text outlined — never retype the wordmark); level marks are served from `public/brand/`.

Two rules govern colour, and both come from the product, not from taste:

1. **One interactive colour.** `primary` (action blue; sky in dark mode) is the only clickable hue on light grounds; coral is the CTA on midnight bands. `verified` / `expired` / `revoked` are reserved exclusively for credential status.
2. **Status never rides on colour alone.** Every state carries its word. See `src/components/VerifyCard.astro`.

### Theming gotcha

Tailwind v4 does **not** support `@theme` nested inside `@media` — doing so silently hoists the dark values and drops the light palette entirely. Dark mode overrides plain custom properties on `:root` inside a normal media query instead.

`--color-navy` flips light in dark mode, so it must **never** back white text. Use `bg-midnight` (dark in both themes) for midnight bands — see `src/components/sections/Cta.astro`.

## Content

Copy, levels, pricing and FAQ live in `src/data/site.ts`. Sections are in `src/components/sections/` and composed in `src/pages/index.astro`.

---

*Developers Hub Sdn Bhd · devhub.my*
