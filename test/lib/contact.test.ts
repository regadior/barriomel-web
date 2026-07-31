import {
  formatPhoneForDisplay,
  mailtoLink,
  parseContactEmail,
  parseWhatsappDigits,
  whatsappLink,
} from "@/lib/contact"
import { describe, expect, it } from "vitest"

describe("parseWhatsappDigits", () => {
  it("accepts a Spanish mobile with its country code", () => {
    expect(parseWhatsappDigits("34600123456")).toBe("34600123456")
  })

  it("trims surrounding whitespace, which .env files pick up easily", () => {
    expect(parseWhatsappDigits("  34600123456 ")).toBe("34600123456")
  })

  it("rejects a leading plus, because wa.me links break with it", () => {
    expect(() => parseWhatsappDigits("+34600123456")).toThrow(/CONTACT_WHATSAPP/)
  })

  it("rejects spaces between groups", () => {
    expect(() => parseWhatsappDigits("34 600 123 456")).toThrow(/CONTACT_WHATSAPP/)
  })

  it("rejects an empty value instead of building a broken link", () => {
    expect(() => parseWhatsappDigits("")).toThrow(/CONTACT_WHATSAPP/)
  })

  it("names the offending value in the error so the build output is actionable", () => {
    expect(() => parseWhatsappDigits("nope")).toThrow(/"nope"/)
  })
})

describe("parseContactEmail", () => {
  it("accepts a normal address", () => {
    expect(parseContactEmail("ola@barriomel.com")).toBe("ola@barriomel.com")
  })

  it("trims surrounding whitespace", () => {
    expect(parseContactEmail(" ola@barriomel.com ")).toBe("ola@barriomel.com")
  })

  it("rejects a value with no domain", () => {
    expect(() => parseContactEmail("ola@barriomel")).toThrow(/CONTACT_EMAIL/)
  })

  it("rejects a value with no at sign", () => {
    expect(() => parseContactEmail("barriomel.com")).toThrow(/CONTACT_EMAIL/)
  })
})

describe("formatPhoneForDisplay", () => {
  it("groups a Spanish number as country code plus three triplets", () => {
    expect(formatPhoneForDisplay("34600123456")).toBe("+34 600 123 456")
  })

  it("falls back to a plain prefixed number when the shape is unexpected", () => {
    expect(formatPhoneForDisplay("4930123456")).toBe("+4930123456")
  })
})

describe("whatsappLink", () => {
  it("builds a bare conversation link when there is no message", () => {
    expect(whatsappLink("34600123456")).toBe("https://wa.me/34600123456")
  })

  it("percent-encodes the prefilled message", () => {
    const link = whatsappLink("34600123456", "Quería 2 tarros de 1 kg")

    expect(link).toBe("https://wa.me/34600123456?text=Quer%C3%ADa%202%20tarros%20de%201%20kg")
  })

  it("encodes the newlines of a multi-line order", () => {
    expect(whatsappLink("34600123456", "Hola\n• 1 × 1 kg")).toContain("Hola%0A")
  })
})

describe("mailtoLink", () => {
  it("returns a plain mailto when there is nothing to prefill", () => {
    expect(mailtoLink("ola@barriomel.com")).toBe("mailto:ola@barriomel.com")
  })

  it("adds subject and body as query parameters", () => {
    const link = mailtoLink("ola@barriomel.com", "Pedido", "1 kg")

    expect(link).toBe("mailto:ola@barriomel.com?subject=Pedido&body=1+kg")
  })

  it("omits the body when only a subject is given", () => {
    expect(mailtoLink("ola@barriomel.com", "Pedido")).toBe("mailto:ola@barriomel.com?subject=Pedido")
  })
})
