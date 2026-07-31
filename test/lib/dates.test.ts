import { formatLongDate } from "@/lib/dates"
import { describe, expect, it } from "vitest"

describe("formatLongDate", () => {
  it("keeps the day and year of the given date", () => {
    const formatted = formatLongDate("2026-07-31", "es")

    expect(formatted).toContain("31")
    expect(formatted).toContain("2026")
  })

  it("does not slip to the previous day west of UTC", () => {
    const formatted = formatLongDate("2026-01-01", "es")

    expect(formatted).toContain("2026")
    expect(formatted).not.toContain("2025")
    expect(formatted).not.toContain("31")
  })

  it("writes the month as a word rather than a number", () => {
    expect(formatLongDate("2026-07-31", "es")).toMatch(/[a-záéíóú]{4,}/i)
  })
})
