import { productIds } from "@/data/products"
import { locales } from "@/i18n/config"
import { dictionaryFor } from "@/i18n/dictionaries"
import { describe, expect, it } from "vitest"

function leafStrings(value: unknown): string[] {
  if (typeof value === "string") return [value]
  if (Array.isArray(value)) return value.flatMap(leafStrings)
  if (value && typeof value === "object") return Object.values(value).flatMap(leafStrings)
  return []
}

describe.each(locales)("the %s dictionary", (locale) => {
  const dictionary = dictionaryFor(locale)

  it("has no blank text", () => {
    const blanks = leafStrings(dictionary).filter((text) => text.trim().length === 0)

    expect(blanks).toEqual([])
  })

  it("names and describes every product", () => {
    for (const id of productIds) {
      expect(dictionary.products.names[id]).toBeTruthy()
      expect(dictionary.products.descriptions[id]).toBeTruthy()
    }
  })

  it("describes every photo for screen readers", () => {
    for (const alt of Object.values(dictionary.photoAlts)) {
      expect(alt.length).toBeGreaterThan(10)
    }
  })
})

describe("the Galician dictionary", () => {
  const spanish = dictionaryFor("es")
  const galician = dictionaryFor("gl")

  it("translates the prose rather than copying the Spanish", () => {
    expect(galician.hero.title).not.toBe(spanish.hero.title)
    expect(galician.hero.subtitle).not.toBe(spanish.hero.subtitle)
    expect(galician.meta.homeDescription).not.toBe(spanish.meta.homeDescription)
    expect(galician.story.body).not.toEqual(spanish.story.body)
    expect(galician.products.names.mel).not.toBe(spanish.products.names.mel)
  })

  it("keeps the same number of list items so no section renders short", () => {
    expect(galician.values.items).toHaveLength(spanish.values.items.length)
    expect(galician.process.steps).toHaveLength(spanish.process.steps.length)
    expect(galician.faq.items).toHaveLength(spanish.faq.items.length)
    expect(galician.story.body).toHaveLength(spanish.story.body.length)
  })
})
