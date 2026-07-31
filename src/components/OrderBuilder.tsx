import Icon from "@/components/ui/Icon"
import type { Jar } from "@/data/products"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/ui/es"
import { mailtoLink, whatsappLink } from "@/lib/contact"
import { buildOrderMessage, orderJarCount, orderTotalEur, type OrderLine } from "@/lib/order"
import { formatPrice, formatWeight } from "@/lib/pricing"
import { useState } from "react"

type OrderBuilderProps = {
  jars: readonly Jar[]
  locale: Locale
  whatsappDigits: string
  email: string
  copy: Dictionary["order"]
}

export default function OrderBuilder({
  jars,
  locale,
  whatsappDigits,
  email,
  copy,
}: OrderBuilderProps) {
  const [quantityByWeight, setQuantityByWeight] = useState<Record<number, number>>({})

  const changeQuantity = (weightGrams: number, delta: number) =>
    setQuantityByWeight((current) => ({
      ...current,
      [weightGrams]: Math.max(0, (current[weightGrams] ?? 0) + delta),
    }))

  const lines: readonly OrderLine[] = jars.map((jar) => ({
    jar,
    quantity: quantityByWeight[jar.weightGrams] ?? 0,
  }))

  const total = orderTotalEur(lines)
  const jarCount = orderJarCount(lines)
  const isEmpty = jarCount === 0

  const message = buildOrderMessage({
    lines,
    copy: { greeting: copy.greeting, totalLabel: copy.total },
    formatWeight,
    formatPrice: (priceEur) => formatPrice(priceEur, locale),
  })

  return (
    <div className="rounded-card border border-cream-200 bg-cream-50 p-7 shadow-lifted">
      <ul className="flex flex-col divide-y divide-cream-200">
        {jars.map((jar) => {
          const quantity = quantityByWeight[jar.weightGrams] ?? 0
          const weightLabel = formatWeight(jar.weightGrams)
          return (
            <li key={jar.weightGrams} className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="font-medium text-bark-900">{weightLabel}</p>
                <p className="text-sm text-bark-600">{formatPrice(jar.priceEur, locale)}</p>
              </div>

              <div
                className="flex items-center gap-1 rounded-full border border-cream-300 p-1"
                role="group"
                aria-label={`${copy.quantityFor} ${weightLabel}`}
              >
                <button
                  type="button"
                  onClick={() => changeQuantity(jar.weightGrams, -1)}
                  disabled={quantity === 0}
                  aria-label={`${copy.decrease} — ${weightLabel}`}
                  className="flex size-9 items-center justify-center rounded-full text-bark-800 transition-colors enabled:hover:bg-cream-200 disabled:opacity-30"
                >
                  <Icon name="minus" className="size-4" />
                </button>
                <output className="w-8 text-center font-display text-lg font-semibold text-bark-900">
                  {quantity}
                </output>
                <button
                  type="button"
                  onClick={() => changeQuantity(jar.weightGrams, 1)}
                  aria-label={`${copy.increase} — ${weightLabel}`}
                  className="flex size-9 items-center justify-center rounded-full bg-honey-400 text-bark-900 transition-colors hover:bg-honey-300"
                >
                  <Icon name="plus" className="size-4" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <div aria-live="polite" className="mt-5 border-t border-cream-300 pt-5">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-bark-600">
            {jarCount} {copy.jarCount}
          </span>
          <span className="font-display text-2xl font-semibold text-bark-900">
            {copy.total}: {formatPrice(total, locale)}
          </span>
        </div>
        <p className="mt-1 text-right text-xs text-bark-600">{copy.shippingNote}</p>
      </div>

      {isEmpty ? (
        <p className="mt-5 rounded-xl bg-cream-100 px-4 py-3 text-sm text-bark-600">{copy.empty}</p>
      ) : (
        <>
          <figure className="mt-5">
            <figcaption className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-bark-600">
              {copy.preview}
            </figcaption>
            <pre className="whitespace-pre-wrap rounded-xl bg-cream-100 px-4 py-3 font-sans text-sm leading-relaxed text-bark-800">
              {message}
            </pre>
          </figure>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={whatsappLink(whatsappDigits, message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-bark-900 px-6 py-3.5 font-semibold text-cream-50 transition-colors hover:bg-bark-800"
            >
              {copy.sendWhatsapp}
            </a>
            <a
              href={mailtoLink(email, copy.emailSubject, message)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-bark-900/20 px-6 py-3.5 font-semibold text-bark-900 transition-colors hover:bg-cream-100"
            >
              {copy.sendEmail}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setQuantityByWeight({})}
            className="mt-4 text-sm text-bark-600 underline underline-offset-4 transition-colors hover:text-bark-900"
          >
            {copy.reset}
          </button>
        </>
      )}
    </div>
  )
}
