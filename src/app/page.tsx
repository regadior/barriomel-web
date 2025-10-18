"use client"

import { getBrowserLanguage } from "@/app/lib/i18n/getBrowserLanguage"
import { useEffect } from "react"

export default function RootPage() {
  useEffect(() => {
    const lang = getBrowserLanguage()
    window.location.replace(`/${lang}`)
  }, [])

  return null
}
