import { products } from "@/data/products"
import { site } from "@/data/site"
import { pricePerKilo } from "@/lib/pricing"
import { describe, expect, it } from "vitest"

const exampleConcello = "O Teu Concello"

describe("site config is ready to publish", () => {
  it("names the actual concello", () => {
    expect(site.concello).not.toBe(exampleConcello)
  })
})

describe("site config is well formed", () => {
  it("has a url with no trailing slash, so canonical links do not double up", () => {
    expect(site.url).toMatch(/^https:\/\/[^/]+$/)
  })

  it("has a base path starting with a slash", () => {
    expect(site.basePath.startsWith("/")).toBe(true)
  })

  it("stores the Instagram handle without the at sign", () => {
    expect(site.instagramHandle?.startsWith("@")).not.toBe(true)
  })
})

describe("the catalogue", () => {
  const jars = products.flatMap((product) => (product.status === "available" ? product.jars : []))

  it("offers at least one jar for sale", () => {
    expect(jars.length).toBeGreaterThan(0)
  })

  it("prices every jar above zero", () => {
    for (const jar of jars) {
      expect(jar.priceEur).toBeGreaterThan(0)
      expect(jar.weightGrams).toBeGreaterThan(0)
    }
  })

  it("lists jars from largest to smallest", () => {
    const weights = jars.map((jar) => jar.weightGrams)

    expect(weights).toEqual([...weights].sort((a, b) => b - a))
  })

  it("makes the bigger jar the better deal per kilo", () => {
    const pricesPerKilo = jars.map((jar) => pricePerKilo(jar.priceEur, jar.weightGrams))

    expect(pricesPerKilo).toEqual([...pricesPerKilo].sort((a, b) => a - b))
  })

  it("has no duplicate jar sizes", () => {
    const weights = jars.map((jar) => jar.weightGrams)

    expect(new Set(weights).size).toBe(weights.length)
  })
})
