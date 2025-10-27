
"use client"

import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import Reveal from '@/components/ui/reveal'
import Image from 'next/image'
import { Wheat, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Award,
    title: "Pureza Garantida",
    description: "Produtos com alta pureza mineral, isentos de contaminantes e metais pesados."
  },
  {
    icon: Wheat,
    title: "Nutrição Otimizada",
    description: "Cargas minerais que contribuem para a saúde e desenvolvimento animal."
  },
  {
    icon: CheckCircle,
    title: "Qualidade Certificada",
    description: "Controle rigoroso de qualidade em todas as etapas do processo produtivo."
  }
]

const products = [
  {
    id: 1,
    name: "ITAGEO",
    subtitle: "Filito Caulim de Alta Pureza",
    description: "Produto mineral inerte de excepcional qualidade para nutrição animal, disponível em três variações de cor (Creme, Cinza e Branco).",
    image: "/images/produtos/itageo.webp",
    link: "/produtos/racao-animal/itageo",
    highlights: [
      "Três variações de cor",
      "Alta pureza (≥ 97%)",
      "Granulometria Malha 200",
      "Disponível em 20kg, BAG e Granel"
    ]
  },
  {
    id: 2,
    name: "CAULIM",
    subtitle: "Silicato de Alumínio de Alta Pureza",
    description: "Material mineral de alta qualidade para nutrição animal - Produto isento de registro no MAPA.",
    image: "/images/produtos/caulim.webp",
    link: "/produtos/racao-animal/caulim",
    highlights: [
      "Material mineral ≥ 97%",
      "Granulometria controlada",
      "Pó fino claro de alta qualidade",
      "Disponível em 25kg, BAG e Granel"
    ]
  }
]

export default function AnimalNutritionPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/capa-nutricao-animal.png"
          alt="Nutrição animal - Minerais para ração animal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="relative z-10 flex items-center justify-center px-4 py-24">
          <Reveal className="max-w-3xl text-center px-6 py-8 bg-black/45 backdrop-blur-sm rounded-lg shadow-md space-y-6">
            <p className="uppercase tracking-[0.4em] text-green-300 text-xs font-semibold">
              Linha Nutrição Animal
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Minerais premium para rações mais eficientes
            </h1>
            <p className="text-gray-100 text-lg leading-relaxed">
              ITAGEO e Caulim garantem homogeneidade, estabilidade e pureza superiores nas formulações.
              Produzimos minerais inertes com granulometria controlada e suporte técnico especializado.
            </p>
            <Link
              href="#produtos"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all duration-200 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
            >
              Conhecer portfólio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens dos Nossos Minerais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualidade superior que contribui para a saúde e desenvolvimento animal
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => {
              const Icon = benefit?.icon
              return (
                <Reveal
                  key={index}
                  delay={index * 0.1}
                  className="text-center rounded-xl border border-gray-100 p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit?.title || ''}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit?.description || ''}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos para Nutrição Animal
            </h2>
            <p className="text-xl text-gray-600">
              Minerais de alta qualidade desenvolvidos especialmente para ração animal
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products?.map((product, index) => (
              <Reveal key={product?.id ?? index} delay={index * 0.1} className="h-full">
                <Link
                  href={product?.link || '#'}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative h-80 bg-gradient-to-br from-green-50 to-gray-50">
                    <Image
                      src={product?.image || '/placeholder-product.jpg'}
                      alt={product?.name || 'Produto'}
                      fill
                      className="object-contain p-8"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {product?.name || ''}
                    </h3>
                    <p className="text-lg text-green-600 font-semibold mb-4">
                      {product?.subtitle || ''}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product?.description || ''}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {product?.highlights?.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-green-600 font-semibold transition-colors group-hover:text-green-700">
                        Ver Detalhes Completos
                      </span>
                      <ArrowRight className="h-5 w-5 text-green-600 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicitar Orçamento
            </h2>
            <p className="text-xl text-gray-600">
              Entre em contato para receber uma proposta personalizada
            </p>
          </Reveal>

          <Reveal className="rounded-2xl bg-gray-50 p-8 shadow-lg">
            <ContactForm formType="racao_animal" />
          </Reveal>
        </div>
      </section>

    </main>
  )
}
