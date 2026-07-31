export const locales = ["es", "gl"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

export const htmlLangByLocale: Record<Locale, string> = {
  es: "es-ES",
  gl: "gl-ES",
}

export const localeLabels: Record<Locale, string> = {
  es: "Castellano",
  gl: "Galego",
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
