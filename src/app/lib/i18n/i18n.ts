import { Dictionary } from "@/app/lib/i18n/models/dictionary.model"
import { Languages } from "@/app/lib/i18n/models/languages.model"
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import gl from "@/locales/gl.json"

export const locales = { es, en, gl } as const

export const defaultLang = "es"

export function getDictionary(lang: string): Dictionary {
  if (isValidLang(lang)) {
    return locales[lang as Languages]
  }
  return locales[defaultLang]
}

export function isValidLang(lang: string): lang is Languages {
  return Object.keys(locales).includes(lang)
}
