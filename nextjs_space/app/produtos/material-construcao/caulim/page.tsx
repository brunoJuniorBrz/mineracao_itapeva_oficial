
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ShieldCheck, Palette } from 'lucide-react'

export default function CaulimConstrucaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-700/80 z-10"></div>
        <Image
          src="/images/produtos/caulim-capa.jpg"
          alt="Caulim - Silicato de Alumínio para Construção"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full w-full text-white">
          <div className="max-w-6xl mx-auto h-full flex flex-col px-4 pt-28 pb-12">
            <Link
              href="/produtos/material-construcao"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors font-semibold text-sm mb-8 w-fit"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Caulim
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl">
                Silicato de Alumínio para Construção Civil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Description */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Caulim de Alta Pureza para Construção Civil
            </h2>
            <p className="text-xl text-gray-600">
              Material mineral de excepcional qualidade para diversas aplicações na construção
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src="/images/produtos/caulim.webp"
                alt="Caulim - Pó fino claro"
                fill
                className="object-contain p-8"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sobre o Produto</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Caulim é um silicato de alumínio hidratado de alta pureza, caracterizado por 
                seu pó fino claro. É amplamente utilizado na indústria de construção civil como 
                carga mineral, pigmento e aditivo em diversos materiais.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0" />
                  <span className="text-gray-700">Material mineral ≥ 97%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0" />
                  <span className="text-gray-700">Alta brancura e pureza</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0" />
                  <span className="text-gray-700">Granulometria controlada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Aplicações na Construção Civil
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Tintas e Revestimentos</h3>
              </div>
              <p className="text-gray-600">
                Utilizado como carga e pigmento branco em tintas, proporcionando brancura, 
                opacidade e melhora na cobertura.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Cerâmica e Porcelanato</h3>
              </div>
              <p className="text-gray-600">
                Matéria-prima essencial na produção de cerâmicas, louças sanitárias e 
                porcelanatos de alta qualidade.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Argamassas</h3>
              </div>
              <p className="text-gray-600">
                Aditivo mineral que melhora a trabalhabilidade e as propriedades das 
                argamassas de assentamento e revestimento.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Cimento e Concreto</h3>
              </div>
              <p className="text-gray-600">
                Adição pozolânica que pode melhorar características específicas do cimento 
                e concreto.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Papel de Parede</h3>
              </div>
              <p className="text-gray-600">
                Utilizado na produção e revestimento de papéis de parede, proporcionando 
                textura e brancura.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-slate-600 mr-3" />
                <h3 className="font-bold text-lg text-gray-800">Impermeabilizantes</h3>
              </div>
              <p className="text-gray-600">
                Carga mineral em composições de impermeabilizantes e produtos de proteção.
              </p>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Vantagens do Caulim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Alta Brancura</h3>
                  <p className="text-gray-600">
                    Excelente índice de brancura, ideal para aplicações que exigem cor clara
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Pureza Elevada</h3>
                  <p className="text-gray-600">
                    Material mineral com pureza ≥ 97%, garantindo qualidade superior
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Granulometria Controlada</h3>
                  <p className="text-gray-600">
                    Distribuição granulométrica otimizada para cada aplicação
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Versatilidade</h3>
                  <p className="text-gray-600">
                    Aplicável em diversos segmentos da construção civil
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Especificações Técnicas</h2>
          
          {/* Basic Specs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">Material Mineral</p>
              <p className="text-3xl font-bold text-slate-800">≥ 97%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">SiO₂</p>
              <p className="text-3xl font-bold text-slate-800">≥ 62%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">Al₂O₃</p>
              <p className="text-3xl font-bold text-slate-800">≥ 11%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">Umidade</p>
              <p className="text-3xl font-bold text-slate-800">Máx 1%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">Cor</p>
              <p className="text-2xl font-bold text-slate-800">Branco/Claro</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-2">Validade</p>
              <p className="text-2xl font-bold text-slate-800">18 meses</p>
            </div>
          </div>

          {/* Granulometry Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-600 to-slate-800 p-6 text-white">
              <h3 className="text-2xl font-bold flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" />
                Especificações Granulométricas
              </h3>
              <p className="text-slate-200 mt-2">
                Controle rigoroso de granulometria para garantir qualidade
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-4 font-bold text-gray-700">Peneira (ABNT)</th>
                    <th className="text-left p-4 font-bold text-gray-700">Abertura (mm)</th>
                    <th className="text-right p-4 font-bold text-gray-700">% Retido</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mesh: "20", size: "0,850", retention: "10% máx" },
                    { mesh: "40", size: "0,425", retention: "15% máx" },
                    { mesh: "80", size: "0,180", retention: "20% máx" },
                    { mesh: "Fundo", size: "-", retention: "55% mín" }
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="p-4 font-bold text-gray-900">Malha {row.mesh}</td>
                      <td className="p-4 text-gray-700">{row.size !== "-" ? `${row.size} mm` : "-"}</td>
                      <td className="p-4 text-right">
                        <span className="inline-block bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-semibold">
                          {row.retention}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-slate-600 to-slate-800 text-white p-12">
            <h2 className="text-3xl font-bold mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-lg mb-8 text-slate-100">
              Entre em contato conosco e conheça mais sobre o Caulim para Construção
            </p>
            <Link href="/contato">
              <Button size="lg" variant="secondary" className="bg-white text-slate-700 hover:bg-gray-100">
                Falar com Especialista
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  )
}
