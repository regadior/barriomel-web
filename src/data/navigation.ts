import type { Dictionary } from "@/i18n/ui/es"

export type NavItem = {
  readonly route: string
  readonly labelKey: keyof Dictionary["nav"]
}

export const navItems: readonly NavItem[] = [
  { route: "", labelKey: "home" },
  { route: "productos", labelKey: "products" },
  { route: "contacto", labelKey: "contact" },
]
