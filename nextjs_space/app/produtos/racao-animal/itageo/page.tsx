

"use client"

import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import Image from 'next/image'
import { CheckCircle, Download, Award, Wheat, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '@/components/ui/reveal'

const itageoVariations = [
  {
    id: 1,
    color: "Creme",
    colorHex: "#F5DEB3",
    image: "/images/produtos/itageo.webp",
    specs: {
      granulometry: "Malha 200 (≤ 0,075 mm)",
      moisture: "Máximo 1,0%",
      purity: "≥ 97%",
      pH: "7,0 - 8,5",
      composition: {
        SiO2: "60-65%",
        Al2O3: "18-22%",
        Fe2O3: "3-5%",
        K2O: "5-7%",
        MgO: "2-3%"
      }
    },
    features: [
      "Coloração creme suave e natural",
      "Excelente estabilidade térmica",
      "Alta dispersão em misturas",
      "Baixo teor de umidade"
    ]
  },
  {
    id: 2,
    color: "Cinza",
    colorHex: "#808080",
    image: "/images/produtos/itageo.webp",
    specs: {
      granulometry: "Malha 200 (≤ 0,075 mm)",
      moisture: "Máximo 1,0%",
      purity: "≥ 97%",
      pH: "7,0 - 8,5",
      composition: {
        SiO2: "58-63%",
        Al2O3: "19-23%",
        Fe2O3: "4-6%",
        K2O: "5-8%",
        MgO: "2-4%"
      }
    },
    features: [
      "Coloração cinza característica",
      "Ótima trabalhabilidade",
      "Uniformidade garantida",
      "Controle rigoroso de qualidade"
    ]
  },
  {
    id: 3,
    color: "Branco",
    colorHex: "#FFFFFF",
    image: "/images/produtos/itageo.webp",
    specs: {
      granulometry: "Malha 200 (≤ 0,075 mm)",
      moisture: "Máximo 1,0%",
      purity: "≥ 98%",
      pH: "7,0 - 8,5",
      composition: {
        SiO2: "62-67%",
        Al2O3: "20-24%",
        Fe2O3: "2-3%",
        K2O: "4-6%",
        MgO: "1-2%"
      }
    },
    features: [
      "Alta pureza e brancura",
      "Mínimo teor de ferro",
      "Excelente qualidade premium",
      "Ideal para aplicações especiais"
    ]
  }
]

export default function ItageoPage() {
  const prefersReducedMotion = useReducedMotion()

  const heroWrapperProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: 'easeOut' }
      }

  const heroItemProps = (delay = 0) => {
    if (prefersReducedMotion) {
      return {}
    }

    return {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut', delay }
    }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Product Photo */}
      <section className="relative min-h-[75vh] w-full overflow-hidden">
        <Image
          src="/images/capa itageo.png"
          alt="ITAGEO - Filito Caulim para Nutri��o Animal"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
          <Link
            href="/produtos/racao-animal"
            className="inline-flex items-center text-green-100 hover:text-white transition-colors font-semibold text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              className="bg-black/45 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-white space-y-6"
              {...heroWrapperProps}
            >
              <motion.p
                className="uppercase tracking-[0.35em] text-xs text-green-300"
                {...heroItemProps(0)}
              >
                Linha Nutrição Animal
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight"
                {...heroItemProps(0.15)}
              >
                ITAGEO
              </motion.h1>
              <motion.p
                className="text-xl text-green-300 font-semibold"
                {...heroItemProps(0.3)}
              >
                Filito Caulim de Alta Pureza
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-gray-100 leading-relaxed"
                {...heroItemProps(0.45)}
              >
                Produto mineral inerte de excepcional qualidade, disponível em três variações (Creme, Cinza e Branco) 
                para entregar homogeneidade, estabilidade e suporte técnico completo.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" {...heroItemProps(0.6)}>
                <div className="rounded-full border border-white/30 px-4 py-1 text-sm tracking-[0.2em]">
                  Malha 200
                </div>
                <div className="rounded-full border border-white/30 px-4 py-1 text-sm tracking-[0.2em]">
                  Pureza ≥ 97%
                </div>
              </motion.div>
              <motion.div {...heroItemProps(0.75)}>
                <a
                  href="#variacoes"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all duration-200 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
                >
                  Ver variações
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative hidden h-[360px] md:flex md:h-[520px] items-center justify-center"
              {...heroItemProps(0.45)}
            >
              <div className="relative w-full h-full max-w-md">
                <Image
                  src="/images/produtos/itageo.webp"
                  alt="Embalagem ITAGEO"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefícios Comuns a Todas as Variações
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600">
                Características que garantem qualidade superior
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title: "Digestibilidade", desc: "Melhora a homogeneização e aproveitamento dos nutrientes", icon: Wheat},
              {title: "Saúde Digestiva", desc: "Contribui para o equilíbrio intestinal, mantendo a ração seca e estável", icon: CheckCircle},
              {title: "Estabilidade", desc: "Estabiliza misturas e previne segregação", icon: Award},
              {title: "Pureza", desc: "Isento de contaminantes e metais pesados", icon: CheckCircle}
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Reveal key={benefit.title} delay={idx * 0.1}>
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Three Color Variations */}
      <section id="variacoes" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Variações de Cor do ITAGEO
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cada variação mantém a mesma excelência técnica e controle de qualidade rigoroso,
                permitindo escolher a melhor opção para sua aplicação.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {itageoVariations.map((variation, idx) => (
              <Reveal key={variation.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  {/* Color Header */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div 
                    className="w-32 h-32 rounded-full shadow-2xl border-4 border-white flex items-center justify-center"
                    style={{backgroundColor: variation.colorHex}}
                  >
                    <span className="text-2xl font-bold" style={{
                      color: variation.color === "Branco" ? "#333" : "#fff",
                      textShadow: variation.color === "Branco" ? "none" : "2px 2px 4px rgba(0,0,0,0.3)"
                    }}>
                      {variation.color}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    20kg, BAG, Granel
                  </div>
                </div>

                {/* Specs */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Itageo {variation.color}
                  </h3>

                  {/* Granulometry Highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-gray-50 rounded-lg border-2 border-green-200">
                    <h4 className="text-sm font-bold text-green-700 mb-2 uppercase tracking-wide flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Especificação Granulométrica:
                    </h4>
                    <div className="bg-white p-3 rounded">
                      <p className="text-lg font-bold text-green-700">{variation.specs.granulometry}</p>
                      <p className="text-xs text-gray-600 mt-1">Malha 200 ABNT - Partículas finas ≤ 0,075 mm</p>
                    </div>
                  </div>

                  {/* Basic Specs */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Especificações Técnicas:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="font-semibold text-gray-700">Pureza:</span>
                        <span className="text-gray-900 font-semibold">{variation.specs.purity}</span>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <span className="font-semibold text-gray-700">Umidade:</span>
                        <span className="text-gray-600">{variation.specs.moisture}</span>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <span className="font-semibold text-gray-700">pH:</span>
                        <span className="text-gray-600">{variation.specs.pH}</span>
                      </div>
                    </div>
                  </div>

                  {/* Chemical Composition */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Composição Química:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {variation.specs.composition && Object.entries(variation.specs.composition).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-2 bg-white rounded">
                          <span className="font-semibold text-gray-700">{key}:</span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {variation.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => window.location.href = '/contato'}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicações do ITAGEO
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600">
                Versatilidade para diferentes segmentos da nutrição animal
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Ração para Aves", desc: "Frangos de corte, galinhas poedeiras e aves ornamentais"},
              {title: "Ração para Suínos", desc: "Todas as fases de crescimento e desenvolvimento"},
              {title: "Ração para Bovinos", desc: "Corte e leite, suplementação mineral"},
              {title: "Premixes e Núcleos", desc: "Suplementos vitamínicos e minerais concentrados"}
            ].map((app, idx) => (
              <Reveal key={app.title} delay={idx * 0.1}>
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{app.title}</h4>
                    <p className="text-sm text-gray-600">{app.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solicitar Orçamento
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600">
                Entre em contato para receber uma proposta personalizada de ITAGEO
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm formType="itageo" />
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
