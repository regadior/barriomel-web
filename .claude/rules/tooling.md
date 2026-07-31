# Tooling

## Package manager

- **pnpm only.** `pnpm-lock.yaml` is the lockfile and `packageManager` is pinned in
  `package.json`. Never run `npm install` here — it creates a second lockfile and the Pages
  workflow may resolve the wrong one.
- Install scripts are blocked by default in pnpm 11 and an ignored build is a hard error.
  Approve them in `pnpm-workspace.yaml` under `allowBuilds`, never via the interactive
  `pnpm approve-builds`. `esbuild` is already approved.
- **`sharp` is a direct dependency on purpose.** Astro uses it internally to optimise images,
  and pnpm's isolated `node_modules` hides it unless it is declared. Never remove it for being
  unimported — the image build fails without it.

## Contact details come from the environment

- `CONTACT_WHATSAPP` and `CONTACT_EMAIL` are **not** in the repo. They live in `.env` locally
  (gitignored) and in GitHub Actions secrets in CI. `.env.example` documents them.
- Declared in `astro.config.mjs` under `env.schema` as `context: "server", access: "secret"`,
  so they are read at build time and never enter a client bundle.
- Read them **only** through `src/config/contact.ts`. Never import `astro:env/server` anywhere
  else, and never from a `.tsx` island — the island receives the value as a prop.
- Never import `src/config/contact.ts` from a Vitest test or from `astro.config.mjs`: neither
  can resolve `astro:env/server`. Test the parsers in `src/lib/contact.ts` instead.
- A missing or malformed value fails the build loudly. That is the gate; do not soften it with
  a default or a fallback value.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm run dev` | Dev server, served under the `base` path |
| `pnpm run check` | Typecheck; must report 0 errors, 0 warnings, 0 hints |
| `pnpm test` | Unit tests plus the publish gate |
| `pnpm run build` | Static build to `dist/` |

## Before reporting work done

- `pnpm run check` clean, `pnpm run build` clean, and `pnpm test` failing **only** in
  `site config is ready to publish`.
- Confirm the build produced no orphaned images and none larger than its source: compare the
  count of files in `dist/_astro/` against the URLs referenced across `dist/**/*.html`.

## Deployment

- GitHub Pages via `.github/workflows/deploy.yml`, triggered by push to `main`.
- The workflow runs `pnpm test`, so the publish gate blocks deployment until
  `src/data/site.ts` holds real data. That is intended.
- `public/.nojekyll` must exist or Pages drops the `_astro/` directory and every asset 404s.
