
"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface CarouselProps {
  slides: {
    id: number
    title: string
    subtitle: string
    image: string
    alt: string
  }[]
  autoPlay?: boolean
  interval?: number
}

export default function Carousel({ slides, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay || slides?.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (slides?.length || 1))
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides?.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + (slides?.length || 1)) % (slides?.length || 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides?.length || 1))
  }

  if (!slides || slides?.length === 0) {
    return <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
      <p className="text-gray-500">Nenhum slide disponível</p>
    </div>
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-none">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides?.map((slide, index) => (
          <div
            key={slide?.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide?.image || '/placeholder-mining.jpg'}
                alt={slide?.alt || 'Mineração Itapeva'}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide?.title || 'Mineração Itapeva'}
                </h1>
                <p className="text-xl md:text-2xl text-red-500 font-semibold drop-shadow-md">
                  {slide?.subtitle || 'Maior produtora de filito do Brasil'}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/produtos/material-construcao'}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl"
                  >
                    Conheça Nossos Produtos
                  </button>
                  <button 
                    onClick={() => window.location.href = '/sobre'}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
                  >
                    Sobre Nossa História
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-red-600 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
