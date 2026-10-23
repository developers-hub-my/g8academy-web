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

## Photo credits

Landing photos live in `public/images/landing/` and are used under the [Unsplash License](https://unsplash.com/license).

| File | Photo | Photographer |
|---|---|---|
| `series-docker.jpg` | [unsplash.com/photos/3jtEN0ZxT4Y](https://unsplash.com/photos/3jtEN0ZxT4Y) | [Bernd Dittrich](https://unsplash.com/@hdbernd) |
| `series-laravel.jpg` | [unsplash.com/photos/OqtafYT5kTw](https://unsplash.com/photos/OqtafYT5kTw) | [Ilya Pavlov](https://unsplash.com/@ilyapavlov) |
| `series-api.jpg` | [unsplash.com/photos/ieic5Tq8YMk](https://unsplash.com/photos/ieic5Tq8YMk) | [Chris Ried](https://unsplash.com/@cdr6934) |
| `series-identity.jpg` | [unsplash.com/photos/mT7lXZPjk7U](https://unsplash.com/photos/mT7lXZPjk7U) | [FlyD](https://unsplash.com/@flyd2069) |
| `series-gateway.jpg` | [unsplash.com/photos/VHmBX7FnXw0](https://unsplash.com/photos/VHmBX7FnXw0) | [Domaintechnik](https://unsplash.com/@fslfsl) |
| `series-architecture.jpg` | [unsplash.com/photos/26MJGnCM0Wc](https://unsplash.com/photos/26MJGnCM0Wc) | [Kaleidico](https://unsplash.com/@kaleidico) |
| `teams.jpg` | [unsplash.com/photos/QckxruozjRg](https://unsplash.com/photos/QckxruozjRg) | [Annie Spratt](https://unsplash.com/@anniespratt) |
| `hero.jpg` | [unsplash.com/photos/fdGTi4IcaJc](https://unsplash.com/photos/fdGTi4IcaJc) | [Abu Saeid](https://unsplash.com/@abusaeid01) |
| `step-learn.jpg` | [unsplash.com/photos/FnR2U1lXsBQ](https://unsplash.com/photos/FnR2U1lXsBQ) | [Dan Farrell](https://unsplash.com/@farreal) |
| `step-prove.jpg` | [unsplash.com/photos/vZJdYl5JVXY](https://unsplash.com/photos/vZJdYl5JVXY) | [Kaitlyn Baker](https://unsplash.com/@kaitlynbaker) |
| `step-show.jpg` | [unsplash.com/photos/jEpZNyFSQwQ](https://unsplash.com/photos/jEpZNyFSQwQ) | [Vitaly Gariev](https://unsplash.com/@silverkblack) |
| `workshop.jpg` | [unsplash.com/photos/vBg0dxwfIYM](https://unsplash.com/photos/vBg0dxwfIYM) | [Vitaly Gariev](https://unsplash.com/@silverkblack) |
| `credentials.jpg` | [unsplash.com/photos/9si2noVCVH8](https://unsplash.com/photos/9si2noVCVH8) | [Resume Genius](https://unsplash.com/@resumegenius) |
| `cta.jpg` | [unsplash.com/photos/4mHaSX8zvJI](https://unsplash.com/photos/4mHaSX8zvJI) | [Jannis Brandt](https://unsplash.com/@jannisbrandt) |

---

*Developers Hub Sdn Bhd · devhub.my*
