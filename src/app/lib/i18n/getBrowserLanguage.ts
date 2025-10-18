import { Languages } from "@/app/lib/i18n/models/languages.model"
import { defaultLang, locales } from "./i18n"

export function getBrowserLanguage(): Languages {
  if (typeof window === "undefined") return defaultLang
  const browserLang = navigator.language.slice(0, 2)
  return browserLang in locales ? (browserLang as Languages) : defaultLang
}
