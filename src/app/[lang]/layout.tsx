import Footer from "@/app/components/footer/Footer"
import Header from "@/app/components/header/Header"
import "@/app/globals.css"
import { defaultLang, isValidLang } from "@/app/lib/i18n/i18n"
import { redirect } from "next/navigation"
import { ReactNode, use } from "react"

interface LangLayoutProps {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = use(params)

  if (!isValidLang(lang)) redirect(`/${defaultLang}`)

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
