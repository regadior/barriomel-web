# barriomel-web

Web escaparate de BARRIOMEL: catálogo de miel de cosecha propia y contacto directo por
WhatsApp o email. **Sin carrito ni pasarela de pago** — cada venta se cierra tú a tú.

Astro 7 · React 19 (solo en una isla) · Tailwind 4 · TypeScript estricto · salida estática.

## Empezar

Usa **pnpm** (hay `pnpm-lock.yaml` y `packageManager` fijado; npm crearía un segundo
lockfile y Vercel podría coger el que no toca).

```bash
pnpm install
pnpm run dev
```

| Comando | Qué hace |
| --- | --- |
| `pnpm run dev` | Servidor de desarrollo en http://localhost:4321 |
| `pnpm run build` | Typecheck y build estático a `dist/` |
| `pnpm run preview` | Sirve el `dist/` ya construido |
| `pnpm test` | Tests del núcleo puro |
| `pnpm run check` | Solo typecheck |

`pnpm-workspace.yaml` aprueba el script de instalación de `esbuild`, que pnpm 11 bloquea por
defecto. Y `sharp` está en `dependencies` aunque no se importe en el código: Astro lo usa
para optimizar las fotos y con el `node_modules` aislado de pnpm no lo encuentra si no está
declarado.

## Datos de contacto

El teléfono y el email **no están en el repositorio**: se leen del entorno, así que no quedan
en el código fuente ni en el historial de git. Para trabajar en local, copia el ejemplo y
rellénalo:

```bash
cp .env.example .env
```

`.env` está en `.gitignore`. En GitHub Actions los mismos dos nombres se configuran como
secretos del repositorio: *Settings → Secrets and variables → Actions*.

Están declarados en `astro.config.mjs` como `context: "server", access: "secret"`, de modo que
Astro los lee al construir y **nunca** entran en un bundle de JavaScript de cliente. Si falta
alguno, o tiene mal formato, el build falla con un error claro en vez de publicar un enlace
roto.

Ojo con lo que esto sí y no consigue: el número acaba en el HTML publicado, porque tiene que
estar ahí para que funcione el enlace de WhatsApp. Lo que evitas es que esté en el código
fuente de un repo público y en su historial permanente.

## Antes de publicar

Rellena el `concello` en `src/data/site.ts`. Hasta que lo hagas, `pnpm test` **falla a
propósito** en el bloque `site config is ready to publish`.

Revisa también:

- **Precios** en `src/data/products.ts`. Los que hay puestos (12 € / 7 € / 4,50 €) son
  inventados a modo de ejemplo.
- **El coste del envío.** Ahora la web dice que los portes los paga el comprador y que el
  importe depende del peso, y que se confirma antes de cerrar el pedido. Si prefieres anunciar
  una tarifa fija, o aclarar si llegas a islas, dímelo y lo cambio.
- **El número de registro del colmenar** (`hiveRegistry` en `site.ts`), si quieres enseñarlo.

La descripción de la miel (mil flores de silva, castaño y eucalipto) sí está confirmada. **No
menciona el color a propósito**: cambia de una cosecha a otra, y en la foto actual parece más
oscura de lo que es. No lo reintroduzcas.
- **`site.url`** si el dominio final no va a ser `barriomel.com`. Se usa en el canonical, el
  hreflang y el sitemap.

## Estructura

Tres capas que no se mezclan: los datos no tienen lógica, la lógica no sabe de framework, y
los componentes solo pintan.

```
src/
├── data/          datos y configuración, sin lógica — es lo que tocas para cambiar contenido
│   ├── site.ts        dominio, base, ubicación, redes
│   ├── products.ts    catálogo: tamaños de tarro y precios
│   ├── photos.ts      registro de fotos
│   ├── navigation.ts  menú
│   └── icons.ts       paths SVG
├── config/
│   └── contact.ts     teléfono y email, leídos del entorno
├── lib/           funciones puras, testeadas, sin dependencias de framework
│   ├── order.ts       construye el mensaje de pedido
│   ├── pricing.ts     formatea pesos, precios y precio por kilo
│   ├── contact.ts     enlaces de WhatsApp y mailto, y validación
│   ├── i18n.ts        rutas por idioma
│   ├── links.ts       enlaces con el base path aplicado
│   ├── routing.ts     getStaticPaths
│   └── seo.ts         JSON-LD
├── i18n/
│   ├── config.ts      idiomas disponibles (única fuente de verdad)
│   ├── dictionaries.ts
│   └── ui/{es,gl}.ts  todos los textos de la web
├── components/    presentación
├── layouts/
├── pages/[...lang]/  index, productos, contacto
├── assets/photos/ ver FOTOS.md
└── styles/global.css  paleta y tipografías

test/              espejo de src: test/lib/order.test.ts prueba src/lib/order.ts
├── lib/
├── i18n/
└── data/
```

El tipo `Dictionary` se deriva del diccionario castellano, así que si añades un texto en
`es.ts` el compilador te obliga a traducirlo en `gl.ts`. Igual con los productos: añadir uno
a `productIds` rompe el build hasta que tenga nombre y descripción en los dos idiomas.

## Añadir un producto

Todo el catálogo se mueve por datos, no hay que tocar componentes:

1. Añade el id a `productIds` en `src/data/products.ts`.
2. Añádelo al array `products` con su `status` (`"available"` con tarros y precios, o
   `"planned"` si aún no lo vendes).
3. Ponle nombre y descripción en `src/i18n/ui/es.ts` y `gl.ts`.
4. Si tiene foto, mete el fichero en `src/assets/photos/`, regístralo en `src/data/photos.ts`
   y añade su texto alternativo a los dos diccionarios.

## Idiomas

Castellano y galego. El castellano **no lleva prefijo** y el galego sí:

| Página | Castellano | Galego |
| --- | --- | --- |
| Portada | `/` | `/gl` |
| Productos | `/productos` | `/gl/productos` |
| Contacto | `/contacto` | `/gl/contacto` |

Así no hace falta ningún redirect (GitHub Pages no los tiene) y el idioma principal se queda
con la URL corta. Lo generan las rutas `src/pages/[...lang]/`: el parámetro `lang` va a
`undefined` para el castellano, y a `gl` para el galego.

Los slugs son iguales en los dos idiomas (`productos`, `contacto`) a propósito: traducirlos
obligaría a mantener un mapa de rutas para un beneficio de SEO marginal.

El selector del cabecero mantiene la página en la que estás al cambiar de idioma.

## Deploy

GitHub Pages, con el workflow de `.github/workflows/deploy.yml`. Se dispara al hacer push a
`main` (o a mano desde la pestaña Actions) y corre typecheck, tests y build antes de publicar.

Requisitos, una sola vez:

1. El repo tiene que ser **público** (Pages en repo privado requiere GitHub Pro).
2. En *Settings → Pages*, poner **Source: GitHub Actions**.
3. En *Settings → Secrets and variables → Actions*, crear los secretos `CONTACT_WHATSAPP` y
   `CONTACT_EMAIL`.

El deploy no pasará si falta alguno de los dos secretos (falla el build) ni mientras el
`concello` siga sin rellenar (falla el test). Es a propósito.

### Mover a tu propio dominio

Está preparado para que sea un cambio mínimo en `src/data/site.ts`:

```ts
url: "https://barriomel.com",
basePath: "/",
```

Eso reconfigura solo los enlaces internos, el canonical, el hreflang y el sitemap. Aparte hay
que actualizar la URL del `Sitemap:` en `public/robots.txt`, añadir un fichero `public/CNAME`
con el dominio, y apuntar el DNS a GitHub Pages.

Ojo: `robots.txt` solo lo leen los buscadores en la raíz del dominio, así que mientras la web
viva en `regadior.github.io/barriomel-web/` el fichero se ignora. Empezará a contar cuando
tengas dominio propio.

Al ser salida estática funciona igual en Netlify, Cloudflare Pages o Vercel — cambiar de host
es apuntar otro sitio a `dist/`.

## Rendimiento

La web va sin JavaScript salvo dos cosas: el menú del móvil (unas líneas sueltas) y el
constructor de pedidos, que es la única isla React y se carga con `client:visible`, solo en
`/productos` y `/contacto` y solo al llegar a ella.

Ese React son unos 190 kB sin comprimir (~60 kB gzip). Si algún día pesa demasiado, cambiar
`@astrojs/react` por `@astrojs/preact` deja el mismo componente en unos 10 kB.
