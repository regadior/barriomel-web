"use client"

import { navLinks } from "@/app/components/constants/navLinks"
import { getDictionary } from "@/app/lib/i18n/i18n"
import { Languages } from "@/app/lib/i18n/models/languages.model"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

interface HeaderProps {
  lang: Languages
}

export default function Header({ lang: initialLang }: HeaderProps) {
  const [lang, setLang] = useState<Languages>(initialLang)
  const [dict, setDict] = useState(getDictionary(initialLang))
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setDict(getDictionary(lang))
  }, [lang])

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Languages
    setLang(selected)
    router.push(`/${selected}`)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-amber-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-2xl font-extrabold text-amber-800 flex items-center gap-2"
        >
          <Icon icon="mdi:honey" className="text-3xl" /> BARRIOMEL
        </Link>

        {/* Botón móvil */}
        <button
          className="md:hidden text-amber-800 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* NAV */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-amber-100 border-t border-amber-300 p-4 space-y-4"
              : "hidden"
          } md:flex md:flex-row md:static md:bg-transparent md:space-x-6 md:p-0 md:items-center text-amber-800 transition-all duration-300`}
        >
          {navLinks.map(({ key, path }) => {
            if (key === "products") {
              return (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 group-hover:text-amber-950 transition cursor-pointer">
                    {dict.header[key as keyof typeof dict.header]}
                    <Icon
                      icon="mdi:chevron-down"
                      className={`text-sm transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ZONA INVISIBLE que evita el hueco */}
                  <div className="absolute left-0 top-full w-full h-3" />

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-1 bg-amber-50 border border-amber-300 rounded-lg shadow-lg py-2 w-44 z-50 transition-all duration-200 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <Link
                      href={`/${lang}/products/honey`}
                      className="block px-4 py-2 text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                      onClick={() => {
                        setMenuOpen(false)
                        setDropdownOpen(false)
                      }}
                    >
                      🍯 {dict.products?.honey || "Miel Natural"}
                    </Link>
                    <Link
                      href={`/${lang}/productos/pollen`}
                      className="block px-4 py-2 text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                      onClick={() => {
                        setMenuOpen(false)
                        setDropdownOpen(false)
                      }}
                    >
                      🌼 {"Polen"}
                    </Link>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={key}
                href={`/${lang}/${path}`}
                className="relative group transition"
                onClick={() => setMenuOpen(false)}
              >
                <span className="group-hover:text-amber-950 transition cursor-pointer">
                  {dict.header[key as keyof typeof dict.header]}
                </span>
                <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-700 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          })}

          {/* Selector de idioma */}
          <div className="flex items-center gap-2 md:ml-4">
            <select
              value={lang}
              onChange={handleLangChange}
              className="bg-transparent border border-amber-400 rounded-md px-2 py-1 text-amber-800 font-medium cursor-pointer hover:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition"
            >
              <option value="es">ES</option>
              <option value="gl">GL</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  )
}
