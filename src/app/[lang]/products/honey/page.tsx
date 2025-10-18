import { getDictionary } from "@/app/lib/i18n/i18n"
import Image from "next/image"

interface HoneyPageProps {
  params: { lang: string }
}

export default async function HoneyPage({ params }: HoneyPageProps) {
  const { lang } = params
  const dict = getDictionary(lang)

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">
        🍯 {dict.products.honey}
      </h1>

      <Image
        src="/miel-hero.jpg"
        alt="Tarro de miel artesanal"
        width={500}
        height={350}
        className="rounded-2xl shadow-lg mx-auto mb-6"
      />

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {dict.honey?.description ||
          "Nuestra miel es 100% natural, recolectada de colmenas locales y sin aditivos. Pura esencia del campo gallego."}
      </p>

      <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-transform hover:scale-105">
        🛒 {dict.honey?.cta || "Añadir al carrito"}
      </button>
    </main>
  )
}
