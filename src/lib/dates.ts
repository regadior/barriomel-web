import { htmlLangByLocale, type Locale } from "@/i18n/config"

export function formatLongDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(htmlLangByLocale[locale], {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(isoDate))
}
