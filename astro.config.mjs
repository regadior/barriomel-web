import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
import { site } from "./src/data/site.ts"
import { defaultLocale, htmlLangByLocale } from "./src/i18n/config.ts"

export default defineConfig({
  site: site.url,
  base: site.basePath,
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  env: {
    schema: {
      CONTACT_WHATSAPP: envField.string({ context: "server", access: "secret" }),
      CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
    },
  },
  integrations: [
    react(),
    sitemap({ i18n: { defaultLocale, locales: htmlLangByLocale } }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { "@": new URL("./src", import.meta.url).pathname } },
  },
  image: { responsiveStyles: true, layout: "constrained" },
})
