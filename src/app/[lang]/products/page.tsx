import { getDictionary } from "@/app/lib/i18n/i18n"
import Image from "next/image"
import Link from "next/link"

interface ProductsPageProps {
  params: { lang: string }
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { lang } = params
  const dict = getDictionary(lang)

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-amber-800 mb-8">
        {dict.products.title || "Nuestros Productos"}
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        {dict.products.subtitle ||
          "Selecciona un producto para ver más detalles."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        <Link
          href={`/${lang}/products/honey`}
          className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
        >
          <div className="relative w-full h-64">
            <Image
              src="/products/miel.jpg"
              alt={dict.products.honey}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-semibold drop-shadow-md">
              🍯 {dict.products.honey || "Miel Natural"}
            </h2>
          </div>
        </Link>

        <Link
          href={`/${lang}/productos/pollen`}
          className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
        >
          <div className="relative w-full h-64">
            <Image
              src="/productos/polen.jpg"
              alt="Polen"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-semibold drop-shadow-md">
              🌼 {dict.products.pollen || "Polen"}
            </h2>
          </div>
        </Link>
      </div>
    </main>
  )
}
