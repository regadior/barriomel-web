"use client"

import { getDictionary } from "@/app/lib/i18n/i18n"
import { Languages } from "@/app/lib/i18n/models/languages.model"

interface FooterProps {
  lang: Languages
}

export default function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang)

  return (
    <footer className="mt-20 py-6 text-center text-sm text-gray-600 border-t border-amber-200 w-full">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-amber-700">BARRIOMEL</span> ·{" "}
      {dict.footer.rights} ·{" "}
      <a
        href="https://wa.me/XXXXXXXXXX"
        className="text-amber-700 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {dict.footer.contact}
      </a>
    </footer>
  )
}
