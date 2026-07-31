import { defaultLocale, locales, type Locale } from "@/i18n/config"

function withoutEdgeSlashes(segment: string): string {
  return segment.replace(/^\/+|\/+$/g, "")
}

export function localizedPath(locale: Locale, route: string, basePath = "/"): string {
  const localeSegment = locale === defaultLocale ? "" : locale
  const segments = [withoutEdgeSlashes(basePath), localeSegment, withoutEdgeSlashes(route)]

  return `/${segments.filter(Boolean).join("/")}`
}

export function alternatePaths(route: string, basePath = "/"): Record<Locale, string> {
  const entries = locales.map((locale) => [locale, localizedPath(locale, route, basePath)] as const)

  return Object.fromEntries(entries) as Record<Locale, string>
}
