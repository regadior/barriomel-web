export const site = {
  name: "BARRIOMEL",
  url: "https://regadior.github.io",
  basePath: "/barriomel-web",
  instagramHandle: null as string | null,
  concello: "Monterroso",
  provincia: "Lugo",
  region: "Galicia",
  hiveRegistry: null as string | null,
} as const

export type Site = typeof site
