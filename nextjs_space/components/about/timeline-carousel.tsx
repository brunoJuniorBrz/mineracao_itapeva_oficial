"use client"

import { useCallback, useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type TimelineEvent = {
  year: string
  title: string
  description: string
}

interface TimelineCarouselProps {
  events: TimelineEvent[]
}

const AUTOPLAY_INTERVAL = 6000

export default function TimelineCarousel({ events }: TimelineCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps'
  })

  const slides = useMemo(() => events ?? [], [events])

    // Fallback events (useful if component is rendered without a prop)
    const defaultEvents: TimelineEvent[] = [
      {
        year: '1959',
        title: '1959 – Fundação da Mineração Itapeva',
        description:
          'Início das operações pela família Ykeuti, com foco em qualidade mineral e respeito ao meio ambiente.'
      },
      {
        year: '1978',
        title: '1978 – Ampliação das Operações',
        description:
          'A nova geração assume a empresa e moderniza os processos, ampliando a capacidade de produção.'
      },
      {
        year: '1990',
        title: '1990 – Expansão para Novos Segmentos',
        description:
          'Entrada decisiva nos mercados cerâmico e de construção civil, com soluções minerais de alta performance.'
      },
      {
        year: '2024',
        title: '2024 – Referência em Filito Premium',
        description:
          'Consolidação como detentora da maior jazida de filito do Brasil, com tecnologia de ponta e excelência operacional.'
      }
    ]

    const renderedSlides = useMemo(() => (slides.length ? slides : defaultEvents), [slides])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    let autoplayId: ReturnType<typeof setInterval> | null = null

    const play = () => {
      autoplayId = setInterval(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
      }, AUTOPLAY_INTERVAL)
    }

    const stop = () => {
      if (!autoplayId) return
      clearInterval(autoplayId)
      autoplayId = null
    }

    play()

  emblaApi.on('pointerDown', stop)
  emblaApi.on('pointerUp', play)
  // `pointerLeave` exists at runtime but is not present in the Embla TS union type
  // Cast the event name to any to satisfy the typechecker without changing runtime behavior
  emblaApi.on('pointerLeave' as any, play)

    return () => {
      stop()
    }
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {slides.map((event) => (
            <article
              key={`${event.year}-${event.title}`}
              className="flex min-w-[82%] flex-col rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:min-w-[420px] lg:min-w-[480px]"
            >
              <div className="mb-4 flex items-center gap-3 text-red-600">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-lg font-bold">
                  {event.year}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
                  Marco
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{event.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-12 right-0 hidden gap-3 md:flex">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
          aria-label="Evento anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50"
          aria-label="Próximo evento"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
