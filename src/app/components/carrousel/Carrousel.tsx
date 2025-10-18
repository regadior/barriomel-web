"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface CarouselProps {
  images: string[]
  interval?: number
}

export default function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = images.length

  const prev = () => setCurrentIndex((currentIndex - 1 + total) % total)
  const next = () => setCurrentIndex((currentIndex + 1) % total)

  useEffect(() => {
    if (isPaused || total === 0) return
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total)
    }, interval)
    return () => clearInterval(timer)
  }, [isPaused, interval, total])

  if (total === 0) return null

  return (
    <div
      className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        fill
        className="object-cover w-full h-full transition-all duration-700 ease-in-out"
      />

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-amber-700/50 hover:bg-amber-700 text-white p-2 rounded-full cursor-pointer"
      >
        <Icon icon="akar-icons:chevron-left" className="w-5 h-5" />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-amber-700/50 hover:bg-amber-700 text-white p-2 rounded-full cursor-pointer"
      >
        <Icon icon="akar-icons:chevron-right" className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              i === currentIndex ? "bg-amber-700 scale-110" : "bg-amber-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
