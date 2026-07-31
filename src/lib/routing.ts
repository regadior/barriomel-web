import { defaultLocale, locales, type Locale } from "@/i18n/config"

export type LocaleRoute = {
  params: { lang: Locale | undefined }
  props: { locale: Locale }
}

export function localeRoutes(): LocaleRoute[] {
  return locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }))
}
