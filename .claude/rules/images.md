---
paths:
  - "src/components/**"
  - "src/layouts/**"
  - "src/data/photos.ts"
  - "src/assets/**"
---

# Images

The photographs are Rodrigo's own, shot in Galicia. `FOTOS.md` maps each slot to the photo it
needs and how to shoot it.

## Rules

- Photos live in `src/assets/photos/`, never `public/`, so Astro optimises them.
- **Always pass explicit `width` and `height`.** Without them the fallback `src` is generated
  at native resolution and produces files of 700 kB or more — larger than the source.
- **Always pass explicit `quality`.** The default re-encodes noisy nature photos above the size
  of the original JPEG.
- Cap `widths` at what the layout actually displays. Never request a width above the source's
  own dimensions.
- `getImage` needs `layout: "none"`, or the global constrained layout emits unreferenced
  responsive variants of it.
- Replacing a photo means overwriting the file with the same name. Do not rename.

## Adding one

1. File into `src/assets/photos/`.
2. Register it in `src/data/photos.ts`.
3. Alt text in **both** dictionaries — `Record<PhotoKey, string>` will not compile otherwise.

## Verify

After a build, the number of files in `dist/_astro/` must equal the number of distinct image
URLs referenced across `dist/**/*.html`. Search recursively: pages build to
`dist/<name>.html` and `dist/gl/<name>.html`.
