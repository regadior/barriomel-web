import { parseContactEmail, parseWhatsappDigits } from "@/lib/contact"
import { CONTACT_EMAIL, CONTACT_WHATSAPP } from "astro:env/server"

export const contact = {
  whatsappDigits: parseWhatsappDigits(CONTACT_WHATSAPP),
  email: parseContactEmail(CONTACT_EMAIL),
}

export type Contact = typeof contact
