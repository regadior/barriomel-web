import Footer from "@/app/components/footer/Footer"
import Header from "@/app/components/header/Header"
import "@/app/globals.css"
import { defaultLang, getDictionary, isValidLang } from "@/app/lib/i18n/i18n"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface LangLayoutProps {
  children: ReactNode
  params: { lang: string }
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = params

  if (!isValidLang(lang)) redirect(`/${defaultLang}`)

  const dict = getDictionary(lang)

  return (
    <html lang={lang}>
      <body className="bg-amber-50 text-gray-800">
        <Header lang={lang} />

        <main className="pt-28">{children}</main>

        <Footer lang={lang} />
      </body>
    </html>
  )
}
