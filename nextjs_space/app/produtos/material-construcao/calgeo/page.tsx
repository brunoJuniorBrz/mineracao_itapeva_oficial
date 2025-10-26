
"use client"

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navigation/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '@/components/ui/reveal'

export default function CalgeoPage() {
  const prefersReducedMotion = useReducedMotion()

  const heroWrapperProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: 'easeOut' }
      }

  const heroItemProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: 'easeOut', delay }
        }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {/* Hero Section - Dynamic Background with Product */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/fundo-hero-calgeo.png"
            alt="Construção em andamento"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Back Button */}
        <Link href="/produtos/material-construcao" className="absolute top-20 left-4 md:left-8 z-20">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center pt-28 pb-12">
          <div className="grid gap-12 lg:grid-cols-2 items-center w-full">
            {/* Left Side - Text */}
            <motion.div className="text-white space-y-6 text-center lg:text-left" {...heroWrapperProps}>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" {...heroItemProps(0)}>
                CALGEO
              </motion.h1>
              <motion.div className="h-1 w-24 bg-red-600 mx-auto lg:mx-0" {...heroItemProps(0.15)} />
              <motion.p className="text-2xl md:text-3xl font-semibold text-gray-100" {...heroItemProps(0.3)}>
                Plastificante para Argamassa
              </motion.p>
              <motion.p className="text-lg md:text-xl text-gray-200 leading-relaxed" {...heroItemProps(0.45)}>
                À base de filito, promove ótima liga à massa de assentamento e reboco
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start" {...heroItemProps(0.6)}>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                  <p className="text-sm text-gray-300">Composição</p>
                  <p className="font-bold text-white">Silicato de Alumínio</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                  <p className="text-sm text-gray-300">Embalagem</p>
                  <p className="font-bold text-white">20kg</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Image */}
            <div className="relative h-[480px] hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                <Image
                  src="/images/produtos/calgeo.png"
                  alt="Calgeo - Embalagem 20kg"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Description */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Promove ótima liga à massa de assentamento e reboco
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600">
                Produto à base de silicato de alumínio, ideal para construção civil
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-blue-600" />
              </div>
              <p className="text-center text-lg text-gray-700 font-medium">
                É NECESSÁRIO O USO DE CIMENTO
              </p>
            </div>
          </Reveal>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Principais Características
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Excelente Liga',
                description: 'Promove ótima liga à massa de assentamento e reboco, garantindo maior aderência'
              },
              {
                title: 'Massa Trabalhável',
                description: 'Proporciona maior plasticidade e trabalhabilidade à argamassa'
              },
              {
                title: 'Economia',
                description: 'Reduz o consumo de cimento, proporcionando economia na obra'
              },
              {
                title: 'Durabilidade',
                description: 'Aumenta a durabilidade e resistência da argamassa'
              },
              {
                title: 'Facilidade de Aplicação',
                description: 'Melhora o espalhamento e a aplicação da argamassa'
              },
              {
                title: 'Base Mineral',
                description: 'Produto à base de filito, mineral natural de alta qualidade'
              }
            ].map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 0.1}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Technical Info */}
        <section className="mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Informações Técnicas
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Composição</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Produto à base de <strong>Silicato de Alumínio Hidratado</strong>, 
                  mineral da família dos filossilicatos, especialmente processado para 
                  uso como plastificante em argamassas de construção civil.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Embalagem</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Disponível em embalagens de <strong>20 kg</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Armazenamento: local seco e arejado, protegido da umidade
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Modo de Uso</h2>
          </Reveal>
          <div className="space-y-4">
            {[
              'Misture o Calgeo com o cimento e a areia em proporções adequadas conforme recomendação técnica',
              'Adicione água gradualmente até obter a consistência desejada',
              'Aplique a argamassa imediatamente após o preparo'
            ].map((step, idx) => (
              <Reveal key={step} delay={idx * 0.1}>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Reveal>
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12">
              <h2 className="text-3xl font-bold mb-4">
                Solicite um Orçamento
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Entre em contato conosco e conheça mais sobre o Calgeo
              </p>
              <Link href="/contato">
                <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                  Falar com Especialista
                </Button>
              </Link>
            </Card>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
