import type { Locale } from "@/i18n/config"
import { es, type Dictionary } from "@/i18n/ui/es"
import { gl } from "@/i18n/ui/gl"

const dictionaries: Record<Locale, Dictionary> = { es, gl }

export function dictionaryFor(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary }
