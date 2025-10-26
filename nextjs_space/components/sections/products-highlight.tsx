

"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Wheat } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Material de Construção",
    subtitle: "Plastificantes",
    description: "Plastificantes para argamassa de alta performance. Ligamil Max, Ligamil Plus e Calgeo para construção civil.",
    image: "/images/produtos/ligamil-max.webp",
    alt: "Plastificantes para construção civil",
    icon: Package,
    link: "/produtos/material-construcao",
    products: ["Ligamil MAX", "Ligamil PLUS", "Calgeo"],
    color: "from-red-600 to-red-700"
  },
  {
    id: 2,
    title: "Nutrição Animal",
    subtitle: "ITAGEO/CAULIM",
    description: "Minerais inertes de alta pureza com granulometria controlada para ração animal e pet food.",
    image: "/images/produtos/itageo.webp",
    alt: "Minerais para nutrição animal",
    icon: Wheat,
    link: "/produtos/racao-animal",
    products: ["Itageo", "Caulim"],
    color: "from-green-600 to-green-700"
  }
]

export default function ProductsHighlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Linhas de Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Duas linhas comerciais principais que atendem diferentes segmentos industriais com qualidade superior
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-60`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-white/90 rounded-full">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>

                  {/* Subtitle badge */}
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {product.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Products list */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Principais Produtos:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.products.map((productName, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {productName}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - More subtle */}
                  <Link
                    href={product.link}
                    className="group/btn w-full bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-medium"
                  >
                    Conheça nossos produtos
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Filito de Alta Qualidade
          </h3>
          <p className="text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            Nosso filito é extraído de uma das maiores jazidas do Brasil, com rigoroso controle de qualidade em todas as etapas de produção. 
            Aplicado em construção civil, ração animal, indústrias cimenteiras e cerâmicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="btn-primary"
            >
              Solicite um Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
