

"use client"

import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import Image from 'next/image'
import { CheckCircle, Award, ArrowLeft, Package } from 'lucide-react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '@/components/ui/reveal'

export default function CaulimPage() {
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
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Product Photo */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/capa-caulim-certa.png"
          alt="CAULIM - Silicato de Alumínio para Nutrição Animal"
          fill
          className="object-cover object-left sm:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25 sm:bg-black/45 md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
          <Link
            href="/produtos/racao-animal"
            className="inline-flex items-center text-green-100 hover:text-white transition-colors font-semibold text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>

          <motion.div
            className="bg-black/35 sm:bg-black/50 md:bg-black/45 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-white space-y-6 max-w-3xl"
            {...heroWrapperProps}
          >
            <motion.p className="uppercase tracking-[0.35em] text-xs text-green-300 hidden sm:block" {...heroItemProps(0)}>
              Linha Nutrição Animal
            </motion.p>
            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight" {...heroItemProps(0.15)}>
              CAULIM
            </motion.h1>
            <motion.p className="text-xl text-green-300 font-semibold" {...heroItemProps(0.3)}>
              Silicato de Alumínio de Alta Pureza
            </motion.p>
            <motion.p className="hidden sm:block text-base md:text-lg text-gray-100 leading-relaxed" {...heroItemProps(0.45)}>
              Produto isento de registro no MAPA, perfeito para formulações de ração que exigem homogeneidade e estabilidade.
              Pó fino claro com granulometria controlada e suporte técnico especializado.
            </motion.p>
            <motion.p className="sm:hidden text-sm text-gray-100 leading-relaxed" {...heroItemProps(0.45)}>
              Produto para formulações de ração com homogeneidade, estabilidade e granulometria controlada.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" {...heroItemProps(0.6)}>
              {['Pureza ≥ 97%', 'Malha controlada', 'Validade 18 meses'].map((pill) => (
                <div key={pill} className="rounded-full border border-white/30 px-4 py-1 text-sm tracking-[0.2em]">
                  {pill}
                </div>
              ))}
            </motion.div>
            <motion.div {...heroItemProps(0.75)}>
              <a
                href="#caracteristicas"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all duration-200 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
              >
                Conhecer detalhes
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Product Section - Image + Content Side by Side */}
      <section id="caracteristicas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <Reveal>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Caulim de Alta Pureza
                  </h2>
                  <p className="text-xl text-green-600 font-semibold mb-4">
                    Material mineral ≥ 97%
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Silicato de Alumínio de alta qualidade, isento de registro no MAPA, especialmente desenvolvido para aplicações em nutrição animal.
                    Pó fino claro com prazo de validade de 18 meses e desempenho consistente em misturas.
                  </p>
                </div>
              </Reveal>

              {/* Packaging */}
              <Reveal>
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-gray-50 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <Package className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Embalagem Disponível</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">BAG (Big Bag)</span>
                  </div>
                </div>
              </Reveal>

              {/* Features */}
              <Reveal>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Características</h3>
                  <ul className="space-y-3">
                    {[
                      "Pó fino claro de alta qualidade",
                      "Material mineral ≥ 97%",
                      "Produto não classificado como perigoso",
                      "Prazo de validade: 18 meses"
                    ].map((feature, index) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Benefits */}
              <Reveal>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefícios</h3>
                  <ul className="space-y-3">
                    {[
                      "Preenchimento de fórmulas em ração",
                      "Melhora homogeneização da mistura",
                      "Ganho de peso e conversão alimentar",
                      "Fortalecimento do sistema imunológico"
                    ].map((benefit, index) => (
                      <li key={benefit} className="flex items-start text-gray-700">
                        <Award className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right: Large Image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-green-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/produtos/caulim.webp"
                  alt="Caulim - Silicato de Alumínio para Nutrição Animal"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especificações Técnicas
            </h2>
            <p className="text-xl text-gray-600">
              Controle de qualidade rigoroso em todas as etapas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              {/* Basic Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Material Mineral", value: "≥ 97%", highlight: true },
                  { label: "SiO₂", value: "≥ 62%" },
                  { label: "Al₂O₃", value: "≥ 11%" },
                  { label: "Umidade", value: "Máximo 1%" },
                  { label: "Cor", value: "Branco/Claro" },
                  { label: "Validade", value: "18 meses" }
                ].map((spec, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-lg ${spec.highlight ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200' : 'bg-gray-50'}`}
                  >
                    <p className={`text-sm font-semibold ${spec.highlight ? 'text-green-700' : 'text-gray-600'} mb-1`}>
                      {spec.label}
                    </p>
                    <p className={`text-2xl font-bold ${spec.highlight ? 'text-green-700' : 'text-gray-900'}`}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Granulometry Table */}
              <div className="bg-gradient-to-r from-green-50 to-gray-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Especificações Granulométricas Detalhadas
                </h3>
                <p className="text-gray-600 mb-6">
                  Controle granulométrico rigoroso para garantir qualidade e performance
                </p>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="text-left p-4 font-bold text-lg">Peneira (ABNT)</th>
                        <th className="text-left p-4 font-bold text-lg">Abertura (mm)</th>
                        <th className="text-right p-4 font-bold text-lg">% Retido</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { mesh: "20", size: "0,850", retention: "10% máx" },
                        { mesh: "40", size: "0,425", retention: "15% máx" },
                        { mesh: "80", size: "0,180", retention: "20% máx" },
                        { mesh: "Fundo", size: "-", retention: "55% mín" }
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-green-50 transition-colors`}>
                          <td className="p-4">
                            <span className="font-bold text-gray-900">Malha {row.mesh}</span>
                          </td>
                          <td className="p-4 text-gray-700 font-medium">
                            {row.size !== "-" ? `${row.size} mm` : "-"}
                          </td>
                          <td className="p-4 text-right">
                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                              {row.retention}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-green-700">Nota:</strong> A distribuição granulométrica garante 
                    homogeneidade na mistura e facilita a absorção dos nutrientes pelos animais. O controle 
                    rigoroso do tamanho de partículas é fundamental para a eficácia do produto na ração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicações do Caulim
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600">
                Versatilidade para diferentes tipos de ração
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Ração para Aves", desc: "Frangos, galinhas poedeiras e outras aves"},
              {title: "Ração para Suínos", desc: "Todas as fases de crescimento"},
              {title: "Ração para Bovinos", desc: "Corte, leite e suplementação mineral"},
              {title: "Concentrados Minerais", desc: "Formulações concentradas de minerais"},
              {title: "Suplementos Vitamínicos", desc: "Base para suplementos nutricionais"},
              {title: "Premixes", desc: "Misturas de vitaminas e minerais"}
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
                Entre em contato para receber uma proposta personalizada de Caulim
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ContactForm formType="caulim" />
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
