import type { Contact } from "@/config/contact"
import type { AvailableProduct } from "@/data/products"
import type { Site } from "@/data/site"
import type { Dictionary } from "@/i18n/ui/es"
import { formatWeight } from "@/lib/pricing"

type JsonLd = Record<string, unknown>

export function localBusinessSchema(
  site: Site,
  contact: Contact,
  dictionary: Dictionary,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: dictionary.meta.homeDescription,
    slogan: dictionary.footer.tagline,
    url: site.url,
    email: contact.email,
    telephone: `+${contact.whatsappDigits}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.concello,
      addressRegion: site.provincia,
      addressCountry: "ES",
    },
    areaServed: site.region,
    ...(site.instagramHandle && { sameAs: [`https://instagram.com/${site.instagramHandle}`] }),
  }
}

export function productSchema(
  product: AvailableProduct,
  site: Site,
  dictionary: Dictionary,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: dictionary.products.names[product.id],
    description: dictionary.products.descriptions[product.id],
    brand: { "@type": "Brand", name: site.name },
    offers: product.jars.map((jar) => ({
      "@type": "Offer",
      name: formatWeight(jar.weightGrams),
      price: jar.priceEur.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      availableDeliveryMethod: [
        "https://schema.org/ParcelService",
        "https://schema.org/OnSitePickup",
      ],
      seller: { "@id": `${site.url}/#business` },
    })),
  }
}

export function faqSchema(dictionary: Dictionary): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
