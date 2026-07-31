import { htmlLangByLocale, type Locale } from "@/i18n/config"

const GRAMS_PER_KILO = 1000

export function formatWeight(weightGrams: number): string {
  if (weightGrams % GRAMS_PER_KILO === 0) return `${weightGrams / GRAMS_PER_KILO} kg`
  return `${weightGrams} g`
}

export function formatPrice(priceEur: number, locale: Locale): string {
  return new Intl.NumberFormat(htmlLangByLocale[locale], {
    style: "currency",
    currency: "EUR",
  }).format(priceEur)
}

export function pricePerKilo(priceEur: number, weightGrams: number): number {
  return (priceEur * GRAMS_PER_KILO) / weightGrams
}
