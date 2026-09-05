# Codeylon

A complete Next.js agency website using the supplied Codeylon identity. The site includes the homepage, three labelled concept detail pages, a branded 404, local original imagery, accessible navigation and FAQs, and direct Instagram contact links.

## Run locally

Use Node.js 22 or newer and npm. Exact dependency versions are recorded in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To run the exported production site:

```sh
npm run build
npm start
```

`PORT=3001 npm start` selects another local preview port. Stop the development server before starting production on the same port.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm test
node scripts/browser-check.mjs
```

The browser check requires a running preview and Playwright Chromium (`npx playwright install chromium` if needed). Set `TEST_URL` to check another local URL. It checks every route, contact and anchor destinations, image loading, keyboard FAQs, mobile menu focus and dismissal, reduced motion, 404 handling, JavaScript-free core content, accessibility with axe, and viewport overflow from 320px to 1920px. Reports and screenshots go to `.impeccable/review/`. The source tests inspect the built export, so run the build first.

## Editing

- `src/lib/content.ts`: business name, domain, Instagram, services, process, FAQs, and concept information.
- `src/app/page.tsx`: homepage editorial copy and section structure.
- `src/components/concept-preview.tsx`: the three visual previews.
- `src/app/work/[slug]/page.tsx`: concept detail layout and example content.
- `src/app/globals.css`: central colour, typography, spacing, and responsive rules.
- `src/components/hero-artwork.tsx`: original pixel artwork.
- `public/images/`: optimised, self-hosted concept images.

Keep concept labels visible until examples are replaced with verified, authorised client work. Do not add prices, claims, contact channels, or service commitments without confirming them with the agency.

## Logo and fonts

`public/brand/logo-original.svg` is the supplied SVG without changes. `logo.svg` has the same path data and a tighter viewBox to remove excess padding; its shape and aspect ratio are preserved. `logo-reference.png` retains the supplied PNG. Replace the original and cropped assets together if the logo changes; update favicon assets and regenerate the social card as well. The shared `Brand` component sets its display size.

Space Grotesk and Pixelify Sans load locally through Fontsource, with `font-display: swap`; browsers make no requests to a font service. SIL Open Font License copies are in `public/fonts/licenses/`. See `ASSETS.md` for provenance.

To regenerate the 1200 × 630 social card using the supplied logo and local fonts:

```sh
node scripts/social-image.mjs
```

## Deployment

`next.config.ts` uses `output: 'export'`. The production build creates a complete static website in `out/`; there is no server, database, CMS, secret, or paid API requirement. All essential copy is prerendered. Only the navigation disclosure requires client-side JavaScript. FAQs use native HTML.

Deploy the contents of `out/` to any static host supporting directory indexes and a custom `404.html`. Keep asset paths intact and configure missing paths to return `404.html` with HTTP status 404. Do not enable an SPA fallback that returns the homepage for every unknown path.

The Sites configuration in `.openai/hosting.json` supports an owner-private hosted review. A private review URL is separate from a public deployment at **codeylon.com**. Public launch requires the domain owner to select/connect hosting, configure the registrar's DNS records as instructed by that host, enable HTTPS, and choose public access. No domain settings are changed by this project. The production title, canonical URLs, sitemap, robots, and social metadata already target `https://codeylon.com`.

Handover status: the local production preview works, but no hosted version was published. Sites returned `project_not_found` for the project created earlier in this task, both when reading it and requesting publishing access. The original project reference is retained; no other existing Site was overwritten. Reconnect the Sites account that owns that project, or deploy `out/` to the static host of your choice.

Before public launch, verify the apex/`www` redirect policy, HTTPS, the four page URLs, the custom 404, and social-image retrieval at the real domain. Private preview access restrictions prevent public crawlers from indexing it.

## Scope and assumptions

English-only site. All three featured brands, project briefs, and generated photographs are fictional concept work, not clients or evidence about Codeylon. Concept routes are finished design presentations; no live demos or online shops are advertised. Instagram is the sole supplied contact destination. Links open the actual profile in a new tab, where the visitor must compose and send their own message. There is no enquiry form, tracking, cookies added by the site, or browser persistence.

Hosting services may apply their own access or session behaviour independently of this static site. Hosting, the domain, maintenance, and future project terms must be agreed separately with Codeylon.

Implementation references: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [metadata and social images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images). The installed Next.js documentation was also checked for version-specific APIs.
