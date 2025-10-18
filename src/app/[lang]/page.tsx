import Carousel from "@/app/components/carrousel/Carrousel"
import { getDictionary } from "@/app/lib/i18n/i18n"
import fs from "fs"
import Link from "next/link"
import path from "path"

interface HomeProps {
  params: { lang: string }
}

export default async function Home({ params }: HomeProps) {
  const { lang } = params
  const dict = getDictionary(lang)

  const dir = path.join(process.cwd(), "public/carrousel")
  const files = fs.readdirSync(dir)
  const images = files.map((file) => `/carrousel/${file}`)

  return (
    <section className="text-center px-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <Carousel images={images} />
      </div>

      <Link
        href={`/${lang}/products`}
        className="inline-block mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl transition-colors"
      >
        {dict.home.seeProducts}
      </Link>
    </section>
  )
}
