
"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, Package, ShieldCheck, PhoneCall } from 'lucide-react'
import Navbar from '@/components/navigation/navbar'

const SECTION_MENU = [
  { id: 'hero', label: 'Capa Ligamil' },
  { id: 'comparativo', label: 'Comparativo' },
  { id: 'tracos', label: 'Traços' },
  { id: 'caracteristicas', label: 'Características' },
  { id: 'composicao', label: 'Composição' },
  { id: 'cta', label: 'Contato' }
]

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut', delay }
})

export default function LigamilPage() {
  const [activeSection, setActiveSection] = useState(SECTION_MENU[0].id)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.3, 0.45, 0.6]
      }
    )

    SECTION_MENU.forEach(({ id }) => {
      const target = document.getElementById(id)
      if (target) {
        observer.observe(target)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (sectionId: string) => {
    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    const offset = window.innerWidth < 768 ? 72 : 96
    const topPosition = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: topPosition < 0 ? 0 : topPosition,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Navbar />
      {/* Hero Section - Modern Geometric Design */}
      <section
        id="hero"
        className="relative min-h-[70vh] md:h-[85vh] w-full overflow-hidden bg-[#1a1a1a]"
      >
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Yellow Triangle - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-[#FDB913] opacity-90"
               style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
          
          {/* Blue Shape - Right Side */}
          <div className="absolute top-0 right-0 w-[300px] h-[100%] md:w-[600px] bg-[#4A90E2] opacity-20"
               style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
          
          {/* Yellow accent - Top - Hidden on mobile */}
          <div className="hidden md:block absolute top-0 right-[200px] w-[400px] h-[300px] bg-[#FDB913] opacity-40"
               style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }}></div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-12 flex items-center">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
            {/* Left - Text Content */}
            <motion.div {...fadeInProps()} className="text-white space-y-6 md:space-y-8">
              <Link href="/produtos/material-construcao" className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors mb-4 md:mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">PLASTIFICANTE</span>
                <br/>
                <span className="relative inline-block text-5xl md:text-6xl lg:text-7xl mt-2" style={{
                  WebkitTextStroke: '1.5px white',
                  textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white, 1px 1px 0px white, -1px -1px 0px white'
                }}>
                  <span className="text-[#E31E24]">Liga</span>
                  <span className="text-[#2B5C8A]">mil</span>
                </span>
              </h1>

              <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#FDB913] flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white font-medium">Testado e aprovado pela NBR 13529</span>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#FDB913] flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white font-medium">Ideal para assentamento e reboco</span>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#FDB913] flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-white font-medium">Duas versões disponíveis</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Product Images (desktop only) */}
            <motion.div
              {...fadeInProps(0.1)}
              className="relative hidden md:flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8"
            >
              {/* Ligamil Plus wrapper */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-52 h-80 lg:w-60 lg:h-[24rem] rotate-2 transform transition-all duration-500 hover:scale-105 hover:rotate-0">
                  <Image
                    src="/images/produtos/ligamil-plus-sem-fundo.png"
                    alt="Ligamil Plus 20kg"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 30vw, 25vw"
                    style={{ filter: 'drop-shadow(0 24px 36px rgba(0,0,0,0.25))' }}
                    priority
                  />
                </div>
              </div>

              {/* Ligamil Max wrapper */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-64 h-[28rem] lg:w-[30rem] lg:h-[36rem] -rotate-2 transform transition-all duration-500 hover:scale-105 hover:rotate-0">
                  <Image
                    src="/images/produtos/ligamil-max-lateral.png"
                    alt="Ligamil Max 10kg"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 30vw, 25vw"
                    style={{ filter: 'drop-shadow(0 24px 36px rgba(0,0,0,0.25))' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Menu */}
      <div className="sticky top-0 z-30 border-y border-gray-200/70 bg-white/80 backdrop-blur-lg shadow-sm dark:border-white/10 dark:bg-slate-900/80">
        <nav className="max-w-7xl mx-auto px-4" aria-label="Seções da página Ligamil">
          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto py-3 text-sm md:gap-3">
            {SECTION_MENU.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleScrollTo(section.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`shrink-0 rounded-xl px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-gray-600 hover:bg-red-50 hover:text-red-700 dark:text-gray-300 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {section.label}
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Comparação dos Produtos - Lado a Lado */}
        <motion.section
          id="comparativo"
          className="relative mb-16 rounded-3xl overflow-hidden scroll-mt-32 bg-white"
          {...fadeInProps()}
        >
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[70%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-red-500 lg:block" aria-hidden="true"></div>
            <div className="grid gap-8 lg:grid-cols-2 min-h-[560px]">
              {/* Ligamil Plus - 20kg */}
              <motion.div
                {...fadeInProps(0.05)}
                className="relative flex flex-col items-center justify-center p-10 text-center"
              >
              <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg md:left-10 md:translate-x-0">
                20 KG
              </div>
              <div className="group relative w-full max-w-[320px] h-[400px] mb-8 mt-12 sm:mt-16 overflow-hidden rounded-3xl">
                <Image
                  src="/images/produtos/ligamil-plus-sem-fundo.png"
                  alt="Ligamil Plus 20kg"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 45vw, 320px"
                  style={{ filter: 'drop-shadow(0 20px 36px rgba(0,0,0,0.18))' }}
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Ligamil Plus</h3>
              <p className="text-center text-gray-600 mb-6 max-w-md">
                A primeira liga com silicato do Brasil
              </p>
              <div className="w-full max-w-md rounded-2xl bg-gray-50 p-5 text-left shadow-sm ring-1 ring-gray-200">
                <div className="grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="font-semibold text-gray-500">Aplicação</span>
                    <span className="text-gray-800">Ligamil Plus</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Ideal para obras residenciais e reformas que precisam de massa mais trabalhável e rendimento alto.
                  </p>
                  <div className="grid gap-1 pt-1">
                    <div className="flex items-center justify-between">
                      <span>Dá mais liga que a cal</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Massa com maior rendimento</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Testado pela NBR 13529</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

              {/* Ligamil Max - 10kg */}
              <motion.div
                {...fadeInProps(0.1)}
                className="relative flex flex-col items-center justify-center p-10 text-center"
              >
              <div className="absolute top-6 right-6 rounded-full bg-yellow-600 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg md:text-sm">
                10 KG • CONCENTRADO
              </div>
              <div className="group relative w-full max-w-[500px] h-[440px] mb-8 mt-12 overflow-hidden rounded-3xl">
                <Image
                  src="/images/produtos/ligamil-max-sem-fundo.png"
                  alt="Ligamil Max 10kg"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 45vw, 360px"
                  style={{ filter: 'drop-shadow(0 22px 40px rgba(0,0,0,0.2))' }}
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Ligamil Max</h3>
              <p className="text-center text-gray-600 mb-6 max-w-md">
                Versão concentrada — mesma qualidade em uma embalagem menor
              </p>
              <div className="w-full max-w-md rounded-2xl bg-gray-50 p-5 text-left shadow-sm ring-1 ring-gray-200">
                <div className="grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="font-semibold text-gray-500">Aplicação</span>
                    <span className="text-gray-800">Ligamil Max</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Indicado para canteiros com pouco espaço e obras que precisam transportar menos volume sem perder desempenho.
                  </p>
                  <div className="grid gap-1 pt-1">
                    <div className="flex items-center justify-between">
                      <span>Economia de espaço na obra</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rendimento concentrado</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fácil de transportar</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mini CTA */}
        <motion.section
          className="mb-16 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 px-8 py-10 text-white shadow-lg"
          {...fadeInProps()}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.div {...fadeInProps(0.05)}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">Impacto imediato</p>
              <h3 className="mt-2 text-3xl font-bold">Reduza retrabalho e consumo de cimento</h3>
              <p className="mt-3 text-blue-100">
                Ao migrar para Ligamil, clientes relatam até <span className="font-semibold text-white">15% de economia</span> por m² e rebocos mais homogêneos em menos tempo.
              </p>
            </motion.div>
              <motion.div
                {...fadeInProps(0.1)}
                className="grid grid-cols-2 gap-3 text-center sm:max-w-xs sm:mx-auto md:flex md:flex-wrap md:gap-6"
              >
                <div className="rounded-2xl bg-white/10 px-4 py-3 md:min-w-[160px] md:px-6 md:py-4">
                  <p className="text-3xl font-bold text-white md:text-4xl">+30%</p>
                  <p className="text-xs uppercase tracking-wide text-blue-100">Trabalhabilidade</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 md:min-w-[160px] md:px-6 md:py-4">
                  <p className="text-3xl font-bold text-white md:text-4xl">-2x</p>
                  <p className="text-xs uppercase tracking-wide text-blue-100">Retrabalho</p>
                </div>
              </motion.div>
            <motion.div {...fadeInProps(0.15)} className="inline-flex justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
                  Quero turbinar minha obra
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Traços Recomendados - Lado a Lado */}
        <section id="tracos" className="mb-16 scroll-mt-32">
          <motion.div {...fadeInProps()} className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Aplicações práticas
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Traços recomendados</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traços Ligamil Plus */}
            <motion.div {...fadeInProps(0.05)} className="h-full">
              <Card className="border-blue-200 shadow-lg h-full">
                <div className="bg-[#2b5c8a] p-6 text-white">
                  <h3 className="text-2xl font-bold">Traços Recomendados - Plus</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Assentamento</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 8 latas areia</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Reboco interno</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 7 latas areia</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Reboco externo</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 6 latas areia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Traços Ligamil Max */}
            <motion.div {...fadeInProps(0.1)} className="h-full">
              <Card className="border-yellow-200 shadow-lg h-full">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-6 text-white">
                  <h3 className="text-2xl font-bold">Traços Recomendados - Max</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Assentamento</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 8 latas areia</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Reboco interno</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 7 latas areia</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Reboco externo</span>
                      <span className="text-gray-600">1 saco + 1 cimento + 6 latas areia</span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                    <h5 className="mb-2 text-sm font-bold text-yellow-900">Rendimento indicado</h5>
                    <ul className="text-xs text-yellow-900 space-y-1">
                      <li>- 220 tijolos ou 105 blocos</li>
                      <li>- 56m² de reboco (2cm de espessura)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Características Comuns */}
        <motion.section
          id="caracteristicas"
          className="mb-16 scroll-mt-32"
          {...fadeInProps()}
        >
          <motion.h2
            {...fadeInProps()}
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            Características Técnicas
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div {...fadeInProps(0.05)}>
              <Card className="p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <ShieldCheck className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-800">Produto inerte</h3>
                <p className="text-sm text-gray-600">
                  Não agride a pele, não causa ferimentos nas mãos e não oxida ferragens, esquadrias ou caixas de
                  luminárias.
                </p>
              </Card>
            </motion.div>

            <motion.div {...fadeInProps(0.1)}>
              <Card className="p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <CheckCircle className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-800">Evita trincas</h3>
                <p className="text-sm text-gray-600">
                  Melhora a plasticidade e a coesão da massa, evitando fissuras no reboco mesmo em ambientes de alta
                  variação térmica.
                </p>
              </Card>
            </motion.div>

            <motion.div {...fadeInProps(0.15)}>
              <Card className="p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <Package className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-800">Pronto para uso</h3>
                <p className="text-sm text-gray-600">
                  Não é preciso deixar a massa curtir ou descansar: misture e utilize imediatamente, com consistência
                  uniforme.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Composição */}
        <motion.section
          id="composicao"
          className="mb-16 rounded-2xl bg-gray-50 p-8 scroll-mt-32 dark:bg-slate-900/40"
          {...fadeInProps()}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Composição Química</h2>
          <p className="text-lg text-gray-700 mb-6">
            Silicato de alumínio hidratado (Al₂ · 4SiO₂ · H₂O)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-4 py-3 text-left font-bold text-gray-700">SiO₂</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Al₂O₃</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Fe₂O₃</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">TiO₂</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">CaO</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">MgO</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">K₂O</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">P.F.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-600">70,26%</td>
                  <td className="px-4 py-3 text-gray-600">17,67%</td>
                  <td className="px-4 py-3 text-gray-600">1,38%</td>
                  <td className="px-4 py-3 text-gray-600">0,70%</td>
                  <td className="px-4 py-3 text-gray-600">0,31%</td>
                  <td className="px-4 py-3 text-gray-600">2,04%</td>
                  <td className="px-4 py-3 text-gray-600">4,35%</td>
                  <td className="px-4 py-3 text-gray-600">3,33%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Ligamil é uma adição para argamassa conforme <strong>ABNT NBR 13529</strong>
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          id="cta"
          className="text-center scroll-mt-32"
          {...fadeInProps()}
        >
          <Card className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-12 text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4), transparent 45%)' }}></div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Contato rápido</p>
              <h2 className="mb-4 mt-2 text-3xl font-bold">Solicite um orçamento</h2>
              <p className="mb-8 text-lg text-blue-100">
                Nossa equipe responde em até 2 horas úteis.
              </p>
              <Link href="/contato">
                <Button
                  size="lg"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  <PhoneCall className="h-5 w-5" />
                  Falar com especialista
                </Button>
              </Link>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
