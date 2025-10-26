import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import Reveal from '@/components/ui/reveal'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Material de Construção | Plastificantes — Mineração Itapeva',
  description: 'Ligamil e Calgeo: plastificantes minerais de alta performance para argamassas de assentamento e reboco. Testados em normas NBR, qualidade controlada.'
}

const heroHighlights = [
  'Testados em normas NBR',
  '65+ anos de tradição',
  'Qualidade controlada em todos os lotes'
]

const constructionProducts = [
  {
    name: 'Ligamil MAX e PLUS',
    subtitle: 'Plastificantes para argamassas (assentamento e reboco).',
    benefits: [
      'Substitui a cal com desempenho superior e mistura homogênea',
      'Reduz o consumo de cimento e o retrabalho na obra',
      'Aumenta plasticidade e a trabalhabilidade da argamassa'
    ],
    link: '/produtos/material-construcao/ligamil'
  },
  {
    name: 'Calgeo',
    subtitle: 'Plastificante mineral para argamassas consistentes e uniformes.',
    benefits: [
      'Mantém a massa leve e fácil de aplicar durante toda a jornada',
      'Entrega aderência superior em rebocos e assentamentos',
      'Disponibilidade contínua com laudos e rastreabilidade'
    ],
    link: '/produtos/material-construcao/calgeo'
  }
]

export default function MaterialConstructionPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/capa-material de cons.png"
          alt="Profissionais em um canteiro de obras com formas e gruas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24 text-white">
          <Reveal className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
              Linha Profissional
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Material de Construção para obras em ritmo acelerado
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Plastificantes minerais que acompanham o canteiro e entregam acabamento impecável.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            <div className="space-y-4">
              {heroHighlights.map((item, index) => (
                <Reveal key={item} delay={0.15 * (index + 1)} className="flex items-center gap-3 text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#produtos"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  aria-label="Ir para a seção de produtos"
                >
                  Ver produtos
                </Link>
                <Link
                  href="#orcamento"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
                  aria-label="Ir para o formulário de orçamento"
                >
                  Solicitar orçamento
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="pt-20 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-8 space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
                Nossa Linha de Produtos
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Plastificantes para resultados profissionais
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções desenvolvidas para argamassas de assentamento e reboco que exigem padronização,
              produtividade e assistência técnica em todas as etapas do projeto.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {constructionProducts.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.15} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {product.subtitle}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {product.benefits.map(benefit => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-1">
                    <Link
                      href={product.link}
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                      aria-label={`Ver detalhes de ${product.name}`}
                    >
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Form */}
      <section id="orcamento" className="pt-20 md:pt-24 pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal className="text-center mb-10 space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
                Orçamento sob medida
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Fale com nossos especialistas
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Envie os detalhes da sua demanda e receba orientação técnica para escolher entre Ligamil MAX,
              Ligamil PLUS ou Calgeo, além de prazos e condições comerciais atualizadas.
            </p>
          </Reveal>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ContactForm formType="material_construcao" />
          </div>
        </div>
      </section>
    </main>
  )
}
