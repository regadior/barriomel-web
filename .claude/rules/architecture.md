# Architecture

## Layers

```
src/data/        data and configuration, zero logic
src/lib/         pure functions, tested, no framework imports
src/i18n/        locales and every visible string
src/components/  presentation, reads from the above
test/            tests, mirroring the src tree
```

- **Tests live in `test/`, never beside the code.** `src/` holds only what ships. The tree
  mirrors `src/`, so `src/lib/order.ts` is tested by `test/lib/order.test.ts`.
- Tests import through the `@/` alias, so moving a module never rewrites its test's imports.

- No logic in `src/data/`. A formatter belongs in `src/lib/`, even if one component uses it.
- No `fetch`, clock, randomness or environment read in `src/lib/`. Inject them:
  `buildOrderMessage` receives its formatters as parameters rather than importing them.
- Locales are declared **only** in `src/i18n/config.ts`. `astro.config.mjs` imports from
  there; never restate the list.
- `src/data/site.ts` is the single source for `url`, `basePath` and contact details.

## Catalogue

- Data-driven. Adding a product touches `src/data/products.ts` and the dictionaries — never a
  component and never a `switch`.
- `Product` is a discriminated union: a `planned` product has no `jars` field at all, rather
  than `jars: undefined`.
- Invariants the tests enforce: jars ordered largest to smallest, no duplicate sizes, and the
  bigger jar always cheaper per kilo.

## JavaScript budget

- The home page ships 0 bytes of JS. Keep it that way.
- Before adding a React island, check whether HTML and CSS suffice: the FAQ accordion is
  `<details>`, the language switcher is two links, the mobile menu is a few lines of script.
- `OrderBuilder` is the only island, hydrated with `client:visible`. If a second one is
  needed, propose swapping `@astrojs/react` for `@astrojs/preact` first (~10 kB vs ~190 kB).
