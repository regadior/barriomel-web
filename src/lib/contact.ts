const SPANISH_NUMBER = /^(\d{2})(\d{3})(\d{3})(\d{3})$/
const DIGITS_ONLY = /^\d{8,15}$/
const EMAIL_SHAPE = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i

export function parseWhatsappDigits(value: string): string {
  const digits = value.trim()
  if (!DIGITS_ONLY.test(digits)) {
    throw new Error(
      `CONTACT_WHATSAPP must be 8–15 digits with the country code and no "+" or spaces, got "${value}"`,
    )
  }
  return digits
}

export function parseContactEmail(value: string): string {
  const email = value.trim()
  if (!EMAIL_SHAPE.test(email)) {
    throw new Error(`CONTACT_EMAIL is not a valid address, got "${value}"`)
  }
  return email
}

export function formatPhoneForDisplay(digits: string): string {
  const groups = digits.match(SPANISH_NUMBER)
  if (!groups) return `+${digits}`
  const [, countryCode, first, second, third] = groups
  return `+${countryCode} ${first} ${second} ${third}`
}

export function whatsappLink(digits: string, message?: string): string {
  const conversation = `https://wa.me/${digits}`
  return message ? `${conversation}?text=${encodeURIComponent(message)}` : conversation
}

export function mailtoLink(email: string, subject?: string, body?: string): string {
  const fields = new URLSearchParams()
  if (subject) fields.set("subject", subject)
  if (body) fields.set("body", body)
  const query = fields.toString()
  return `mailto:${email}${query ? `?${query}` : ""}`
}
