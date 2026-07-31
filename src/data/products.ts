import type { PhotoKey } from "@/data/photos"

export const productIds = ["mel", "polen", "propoleo"] as const

export type ProductId = (typeof productIds)[number]

export type Jar = {
  readonly weightGrams: number
  readonly priceEur: number
}

type ProductIdentity = {
  readonly id: ProductId
  readonly photo: PhotoKey | null
}

export type Product =
  | (ProductIdentity & { readonly status: "available"; readonly jars: readonly Jar[] })
  | (ProductIdentity & { readonly status: "planned" })

export type AvailableProduct = Extract<Product, { status: "available" }>

export const products: readonly Product[] = [
  {
    id: "mel",
    status: "available",
    photo: "tarros",
    jars: [
      { weightGrams: 1000, priceEur: 10 },
      { weightGrams: 500, priceEur: 6 },
      { weightGrams: 300, priceEur: 4 },
    ],
  },
  { id: "polen", status: "planned", photo: null },
  { id: "propoleo", status: "planned", photo: null },
]

export const availableProducts: readonly AvailableProduct[] = products.filter(
  (product): product is AvailableProduct => product.status === "available",
)

export const plannedProducts: readonly Product[] = products.filter(
  (product) => product.status === "planned",
)
