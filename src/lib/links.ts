import { site } from "@/data/site"
import type { Locale } from "@/i18n/config"
import { alternatePaths, localizedPath } from "@/lib/i18n"

export function linkTo(locale: Locale, route: string): string {
  return localizedPath(locale, route, site.basePath)
}

export function alternateLinks(route: string): Record<Locale, string> {
  return alternatePaths(route, site.basePath)
}

export function absoluteUrl(locale: Locale, route: string): URL {
  return new URL(linkTo(locale, route), site.url)
}

export function publicAsset(file: string): string {
  const base = site.basePath.replace(/\/+$/, "")
  return `${base}/${file.replace(/^\/+/, "")}`
}
