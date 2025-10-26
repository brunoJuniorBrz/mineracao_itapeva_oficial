
"use client"

import Image from 'next/image'
import { Factory, Calendar, Users } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    number: '300k',
    label: 'Toneladas/Ano'
  },
  {
    icon: Calendar,
    number: '65+',
    label: 'Anos de História'
  },
  {
    icon: Users,
    number: '100+',
    label: 'Empregos Gerados'
  }
]

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-mineracao-aerea.jpg"
          alt="Mineração Itapeva - Vista Aérea da Jazida"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Red Overlay Filter */}
      <div className="absolute inset-0 bg-red-900 opacity-60"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Mineração Itapeva
          </h1>
          <p className="text-3xl md:text-4xl mb-4 font-bold text-white">
            Da jazida à indústria: qualidade que move o Brasil
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/90">
            Desde 1959, produzindo com excelência e sustentabilidade
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-red-950/40 backdrop-blur-sm p-8 rounded-2xl hover:bg-red-950/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
