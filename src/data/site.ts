export const site = {
  name: "BARRIOMEL",
  url: "https://barriomel.regadior.dev",
  basePath: "/",
  instagramHandle: null as string | null,
  concello: "Monterroso",
  provincia: "Lugo",
  region: "Galicia",
  hiveRegistry: null as string | null,
} as const

export type Site = typeof site
