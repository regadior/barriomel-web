import { alternatePaths, localizedPath } from "@/lib/i18n"
import { describe, expect, it } from "vitest"

describe("localizedPath without a base path", () => {
  it("leaves the default locale unprefixed so the home page is the root", () => {
    expect(localizedPath("es", "")).toBe("/")
  })

  it("leaves the default locale unprefixed on inner pages", () => {
    expect(localizedPath("es", "productos")).toBe("/productos")
  })

  it("prefixes every other locale", () => {
    expect(localizedPath("gl", "")).toBe("/gl")
    expect(localizedPath("gl", "productos")).toBe("/gl/productos")
  })

  it("does not double up slashes when the route carries them", () => {
    expect(localizedPath("gl", "/productos/")).toBe("/gl/productos")
  })
})

describe("localizedPath with a base path", () => {
  const base = "/barriomel-web"

  it("puts the base before the locale", () => {
    expect(localizedPath("gl", "productos", base)).toBe("/barriomel-web/gl/productos")
  })

  it("returns just the base for the default locale home page", () => {
    expect(localizedPath("es", "", base)).toBe("/barriomel-web")
  })

  it("skips the locale for the default locale", () => {
    expect(localizedPath("es", "contacto", base)).toBe("/barriomel-web/contacto")
  })

  it("tolerates a base with a trailing slash", () => {
    expect(localizedPath("es", "contacto", "/barriomel-web/")).toBe("/barriomel-web/contacto")
  })

  it("behaves like no base when the base is just a slash", () => {
    expect(localizedPath("es", "contacto", "/")).toBe("/contacto")
  })
})

describe("alternatePaths", () => {
  it("maps every locale to the same route so the switcher keeps the page", () => {
    expect(alternatePaths("productos")).toEqual({ es: "/productos", gl: "/gl/productos" })
  })

  it("maps the home page across locales", () => {
    expect(alternatePaths("")).toEqual({ es: "/", gl: "/gl" })
  })

  it("carries the base path into every locale", () => {
    expect(alternatePaths("contacto", "/barriomel-web")).toEqual({
      es: "/barriomel-web/contacto",
      gl: "/barriomel-web/gl/contacto",
    })
  })
})
