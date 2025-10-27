"use client"

import { motion } from 'framer-motion'

type TimelineEvent = {
  year: string
  title: string
  description: string
}

interface TimelineVerticalProps {
  events: TimelineEvent[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

export default function TimelineVertical({ events }: TimelineVerticalProps) {
  return (
    <div className="relative mx-auto max-w-5xl px-4 md:px-0">
      {/* Linha central */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-[#C30000] md:left-1/2 md:-translate-x-1" />

      <div className="flex flex-col gap-10 pl-10 md:gap-16 md:pl-0">
        {events?.map((event, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.article
              key={`${event.year}-${event.title}`}
              className={`relative pl-6 md:pl-0 md:flex md:items-center ${
                isEven ? 'md:justify-start' : 'md:justify-end'
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={cardVariants}
            >
              {/* Marcador do eixo */}
              <div className="absolute left-4 top-8 z-10 flex h-4 w-4 -translate-x-[7px] items-center justify-center rounded-full border-2 border-white bg-[#C30000] shadow-md md:left-1/2 md:top-1/2 md:-translate-x-2 md:-translate-y-2" />

              <div
                className={`relative w-full rounded-3xl border border-red-100 bg-white p-6 shadow-lg shadow-red-900/5 md:w-[calc(50%-2rem)] md:p-8 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#C30000]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#C30000]">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {event.description}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
