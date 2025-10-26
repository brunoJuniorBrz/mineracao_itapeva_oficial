

"use client"

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

const highlights = [
  "Uma das maiores produtoras de filito do Brasil",
  "Tradição consolidada desde 1959",
  "Controle rigoroso de qualidade em todas as etapas",
  "Localização estratégica em Itapeva/SP",
  "Atendimento a múltiplos segmentos industriais",
  "Compromisso com práticas sustentáveis"
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tradição e Qualidade em
              <span className="text-red-600"> Mineração de Filito</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com início de operações em 1959, a Mineração Itapeva construiu uma sólida 
              reputação no mercado nacional pela qualidade superior de seus produtos e pelo 
              compromisso com a excelência operacional.
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Por que escolher a Mineração Itapeva?</h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sobre"
                className="btn-primary inline-flex items-center justify-center"
              >
                Conheça Nossa História
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contato"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              >
                <source src="/videos/mineracao-itapeva.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
