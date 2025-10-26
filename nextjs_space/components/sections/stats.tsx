

"use client"

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Factory, Calendar, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    number: 300000,
    suffix: '+',
    label: 'Toneladas Produzidas',
    subLabel: 'Anualmente'
  },
  {
    icon: Calendar,
    number: 65,
    suffix: '+',
    label: 'Anos de Tradição',
    subLabel: 'Desde 1959'
  },
  {
    icon: Users,
    number: 100,
    suffix: '+',
    label: 'Empregos Gerados',
    subLabel: 'Equipe especializada'
  },
  {
    icon: Award,
    number: 5,
    suffix: '',
    label: 'Decretos de Mineração',
    subLabel: 'Autorização oficial'
  }
]

interface AnimatedCounterProps {
  end: number
  suffix: string
  duration?: number
  inView: boolean
}

function AnimatedCounter({ end, suffix, duration = 2000, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return (
    <span className="text-4xl md:text-5xl font-bold text-red-600">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Trajetória em Números
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Décadas de experiência na produção de filito de alta qualidade
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                
                <div className="mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.subLabel}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
