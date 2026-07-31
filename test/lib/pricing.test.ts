import { formatPrice, formatWeight, pricePerKilo } from "@/lib/pricing"
import { describe, expect, it } from "vitest"

describe("formatWeight", () => {
  it("shows whole kilos in kilos", () => {
    expect(formatWeight(1000)).toBe("1 kg")
    expect(formatWeight(2000)).toBe("2 kg")
  })

  it("shows anything else in grams", () => {
    expect(formatWeight(500)).toBe("500 g")
    expect(formatWeight(300)).toBe("300 g")
  })
})

describe("formatPrice", () => {
  it("uses a comma as decimal separator and the euro sign", () => {
    const formatted = formatPrice(12, "es")

    expect(formatted).toContain("12,00")
    expect(formatted).toContain("€")
  })

  it("always shows two decimals", () => {
    expect(formatPrice(4.5, "es")).toContain("4,50")
  })

  it("formats Galician the same way as Spanish", () => {
    expect(formatPrice(7, "gl")).toBe(formatPrice(7, "es"))
  })
})

describe("pricePerKilo", () => {
  it("scales a half-kilo jar up to a kilo", () => {
    expect(pricePerKilo(7, 500)).toBe(14)
  })

  it("leaves a kilo jar unchanged", () => {
    expect(pricePerKilo(12, 1000)).toBe(12)
  })

  it("scales a 300 gram jar", () => {
    expect(pricePerKilo(4.5, 300)).toBe(15)
  })
})
