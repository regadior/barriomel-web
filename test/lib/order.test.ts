import { buildOrderMessage, orderJarCount, orderTotalEur, requestedLines } from "@/lib/order"
import { describe, expect, it } from "vitest"

const kiloJar = { weightGrams: 1000, priceEur: 12 }
const halfKiloJar = { weightGrams: 500, priceEur: 7 }

const copy = { greeting: "Quería encargar:", totalLabel: "Total" }
const formatWeight = (grams: number) => `${grams} g`
const formatPrice = (eur: number) => `${eur.toFixed(2)} EUR`

describe("requestedLines", () => {
  it("drops the jars nobody asked for", () => {
    const lines = [
      { jar: kiloJar, quantity: 2 },
      { jar: halfKiloJar, quantity: 0 },
    ]

    expect(requestedLines(lines)).toEqual([{ jar: kiloJar, quantity: 2 }])
  })
})

describe("orderTotalEur", () => {
  it("multiplies each jar price by its quantity", () => {
    const lines = [
      { jar: kiloJar, quantity: 2 },
      { jar: halfKiloJar, quantity: 3 },
    ]

    expect(orderTotalEur(lines)).toBe(45)
  })

  it("is zero for an order with no jars", () => {
    expect(orderTotalEur([{ jar: kiloJar, quantity: 0 }])).toBe(0)
  })

  it("ignores negative quantities instead of subtracting them", () => {
    const lines = [
      { jar: kiloJar, quantity: 1 },
      { jar: halfKiloJar, quantity: -5 },
    ]

    expect(orderTotalEur(lines)).toBe(12)
  })
})

describe("orderJarCount", () => {
  it("adds up the requested quantities", () => {
    const lines = [
      { jar: kiloJar, quantity: 2 },
      { jar: halfKiloJar, quantity: 1 },
    ]

    expect(orderJarCount(lines)).toBe(3)
  })
})

describe("buildOrderMessage", () => {
  it("lists one line per requested jar and closes with the total", () => {
    const lines = [
      { jar: kiloJar, quantity: 2 },
      { jar: halfKiloJar, quantity: 1 },
    ]

    const message = buildOrderMessage({ lines, copy, formatWeight, formatPrice })

    expect(message).toBe(
      [
        "Quería encargar:",
        "• 2 × 1000 g — 24.00 EUR",
        "• 1 × 500 g — 7.00 EUR",
        "Total: 31.00 EUR",
      ].join("\n"),
    )
  })

  it("returns only the greeting when nothing was selected", () => {
    const lines = [{ jar: kiloJar, quantity: 0 }]

    expect(buildOrderMessage({ lines, copy, formatWeight, formatPrice })).toBe(copy.greeting)
  })

  it("leaves out jars with zero quantity", () => {
    const lines = [
      { jar: kiloJar, quantity: 1 },
      { jar: halfKiloJar, quantity: 0 },
    ]

    expect(buildOrderMessage({ lines, copy, formatWeight, formatPrice })).not.toContain("500 g")
  })
})
