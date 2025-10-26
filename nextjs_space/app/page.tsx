"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Navbar from '@/components/navigation/navbar'
import { Button } from '@/components/ui/button'
import Reveal from '@/components/ui/reveal'
import { CheckCircle, Factory, Leaf, ShieldCheck } from 'lucide-react'

const institutionalHighlights = [
  'Uma das maiores produtoras de filito do Brasil',
  'Tradição consolidada desde 1959',
  'Controle rigoroso em todas as etapas',
  'Localização estratégica em Itapeva/SP',
  'Compromisso com sustentabilidade'
]

const productLines = [
  {
    title: 'Material de Construção',
    description: 'Plastificantes minerais de alta performance para argamassas e rebocos.',
    href: '/produtos/material-construcao',
    tint: 'rgba(230, 30, 30, 0.25)',
    image: '/images/capa-material de cons.png'
  },
  {
    title: 'Nutrição Animal',
    description: 'Minerais inertes de alta pureza com granulometria controlada para nutrição animal.',
    href: '/produtos/racao-animal',
    tint: 'rgba(30, 160, 90, 0.25)',
    image: '/images/capa-nutricao-animal.png'
  }
]

const qualityPillars = [
  {
    icon: Factory,
    title: 'Laboratório e ensaios técnicos',
    description: 'Monitoramento constante assegura pureza mineral e performance industrial.'
  },
  {
    icon: ShieldCheck,
    title: 'Produção sustentável',
    description: 'Processos controlados reduzem impacto ambiental e preservam a jazida.'
  },
  {
    icon: Leaf,
    title: 'Rastreabilidade completa',
    description: 'Cada lote possui histórico de origem, análises e certificações disponíveis.'
  }
]

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {})
          } else {
            videoEl.pause()
          }
        })
      },
      { threshold: 0.6 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url('/images/hero/capa hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-3xl hero-text space-y-6">
          <p className="text-sm font-semibold tracking-[0.4em] uppercase text-white/80">
            Mineração Itapeva
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Minerando excelência há mais de 65 anos
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Da jazida à indústria: qualidade que constrói o Brasil
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8"
          >
            <Link href="#linhas">Conheça nossas Linhas de Produtos</Link>
          </Button>
        </div>
        <style jsx>{`
          .hero-text {
            animation: fadeInHero 1s ease-out forwards;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
          }
          @keyframes fadeInHero {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Institutional & Video */}
      <section id="sustentabilidade" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <Reveal className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                  Tradição
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Tradição e Qualidade em Mineração de Filito
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Desde 1959, extraímos e beneficiamos filito com tecnologia própria, entregando
                  consistência para indústrias de construção civil, nutrição animal e diversos outros
                  segmentos. Nossa operação integra jazida, laboratório e logística para garantir
                  fornecimento contínuo e atendimento próximo.
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                {institutionalHighlights.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 rounded-full px-6 py-3">
                  <Link href="/sobre">Conheça Nossa História</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3 border-red-600 text-red-600 hover:bg-red-50"
                  asChild
                >
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  muted
                >
                  <source src="/videos/mineracao-itapeva.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section id="linhas" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
              Linhas de Produtos
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Duas linhas que movem diferentes indústrias
            </h2>
            <p className="text-gray-600">
              Do canteiro de obras à nutrição animal, nossa qualidade está presente em cada detalhe.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {productLines.map((line, index) => (
              <Reveal key={line.title} delay={index * 0.15}>
                <Link
                  href={line.href}
                  aria-label={`Acessar linha ${line.title}`}
                  className="group block rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={line.image}
                      alt={line.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: line.tint }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.35)' }}
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                        Linha exclusiva
                      </p>
                      <h3 className="text-2xl font-bold">{line.title}</h3>
                    </div>
                  </div>
                  <div className="bg-white p-6 space-y-3 text-gray-800">
                    <p>{line.description}</p>
                    <span className="inline-flex items-center font-semibold text-red-600">
                      Saiba Mais →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Qualidade & Sustentabilidade
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Controle de Qualidade e Sustentabilidade
            </h2>
            <p className="text-gray-600">
              Com tecnologia e processos rigorosos, garantimos a pureza e o desempenho dos minerais
              produzidos.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {qualityPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={index * 0.15}>
                  <article className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-600">{pillar.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <Reveal className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              Qualidade comprovada
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Nosso filito é a base da qualidade em diversos segmentos da indústria.
            </h2>
            <p className="text-white/80">
              Fale com nossa equipe técnica e receba uma proposta personalizada para sua necessidade.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8"
              asChild
            >
              <Link href="/contato">Solicite um Orçamento</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
