import type { Jar } from "@/data/products"

export type OrderLine = {
  readonly jar: Jar
  readonly quantity: number
}

export type OrderCopy = {
  readonly greeting: string
  readonly totalLabel: string
}

export type OrderMessageRequest = {
  readonly lines: readonly OrderLine[]
  readonly copy: OrderCopy
  readonly formatWeight: (weightGrams: number) => string
  readonly formatPrice: (priceEur: number) => string
}

export function requestedLines(lines: readonly OrderLine[]): readonly OrderLine[] {
  return lines.filter((line) => line.quantity > 0)
}

export function orderTotalEur(lines: readonly OrderLine[]): number {
  return requestedLines(lines).reduce((total, line) => total + line.jar.priceEur * line.quantity, 0)
}

export function orderJarCount(lines: readonly OrderLine[]): number {
  return requestedLines(lines).reduce((count, line) => count + line.quantity, 0)
}

export function buildOrderMessage({
  lines,
  copy,
  formatWeight,
  formatPrice,
}: OrderMessageRequest): string {
  const requested = requestedLines(lines)
  if (requested.length === 0) return copy.greeting

  const items = requested.map(
    ({ jar, quantity }) =>
      `• ${quantity} × ${formatWeight(jar.weightGrams)} — ${formatPrice(jar.priceEur * quantity)}`,
  )
  const total = `${copy.totalLabel}: ${formatPrice(orderTotalEur(requested))}`

  return [copy.greeting, ...items, total].join("\n")
}
