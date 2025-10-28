

import Navbar from '@/components/navigation/navbar'

import Image from 'next/image'

import { Award, Users, Factory, Leaf, Calendar, ExternalLink, Newspaper } from 'lucide-react'

import { Button } from '@/components/ui/button'

import Reveal from '@/components/ui/reveal'

import TimelineVertical from '@/components/about/timeline-vertical'



const values = [

  {

    icon: Award,

    title: "Qualidade",

    description: "Produtos de alta qualidade, com rigoroso controle em todas as etapas de produo."

  },

  {

    icon: Users,

    title: "Compromisso",

    description: "Relacionamento transparente e duradouro com clientes e parceiros."

  },

  {

    icon: Leaf,

    title: "Sustentabilidade",

    description: "Operaes responsveis, com respeito ao meio ambiente e s comunidades."

  },

  {

    icon: Factory,

    title: "Inovao",

    description: "Investimento constante em tecnologia e melhoria dos processos produtivos."

  }

]





const timelineMilestones = [
  {
    year: '1959',
    title: '1959 – Fundação da Mineração Itapeva',
    description:
      'Início das operações pela família Ykeuti, com foco em qualidade mineral e respeito ao meio ambiente.'
  },
  {
    year: '1978',
    title: '1978 – Ampliação das Operações',
    description:
      'A nova geração assume a empresa e moderniza os processos, ampliando a capacidade de produção.'
  },
  {
    year: '1990',
    title: '1990 – Expansão para Novos Segmentos',
    description:
      'Entrada decisiva nos mercados cerâmico e de construção civil, com soluções minerais de alta performance.'
  },
  {
    year: '2024',
    title: '2024 – Referência em Filito Premium',
    description:
      'Consolidação como detentora da maior jazida de filito do Brasil, com tecnologia de ponta e excelência operacional.'
  }
]



export default function AboutPage() {

  return (

    <main>

      <Navbar />

      

      {/* Hero Section */}

      <section className="relative h-96 bg-gray-900 flex items-center justify-center overflow-hidden">

        <Image

          src="/images/hero/hero-mineracao-aerea.webp"

          alt="Jazida da Mineração Itapeva - Vista aérea"

          fill

          className="object-cover opacity-30"

        />

        <Reveal className="relative z-10 text-center text-white max-w-4xl px-4">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">

            Nossa História

          </h1>

          <p className="text-xl md:text-2xl text-red-500 font-semibold">

            Mais de 65 anos construindo o futuro da mineração brasileira

          </p>

        </Reveal>

      </section>



      {/* Main Story */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">

            <Reveal className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Uma Trajetória de <span className="text-red-600">Excelência</span> e Tradição Familiar
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                A Mineração Itapeva nasceu em 1959, fruto da visão empreendedora da família Ykeuti, que acreditou no
                potencial mineral da região de Itapeva (SP) e iniciou um legado que atravessa gerações. O trabalho
                iniciado por Takeyuti Ykeuti foi marcado pela dedicação, respeito ao meio ambiente e busca constante
                por qualidade — valores que permanecem no coração da empresa até hoje.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Ao longo de mais de seis décadas, a Mineração Itapeva construiu uma trajetória sólida baseada na
                tradição familiar, inovação tecnológica e compromisso com a excelência. Essa combinação entre
                experiência e modernidade consolidou a empresa como referência nacional na produção de filito de
                alta qualidade.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Localizada estrategicamente em Itapeva, a empresa detém a maior jazida de filito do Brasil,
                garantindo um fornecimento constante e confiável para diversos segmentos industriais — como
                construção civil, nutrição animal, indústrias cimenteiras e cerâmicas.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Mais do que uma empresa, a Mineração Itapeva representa uma história de família, trabalho e
                progresso, que segue crescendo com o mesmo propósito que guiou seus fundadores: transformar os
                recursos da terra em desenvolvimento sustentável e qualidade para todo o país.
              </p>
            </Reveal>



            <Reveal className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-md lg:max-w-lg">

                <Image

                  src="/images/fachada-mineracao.png"

                  alt="Fachada da Mineração Itapeva"

                  width={520}

                  height={420}

                  className="h-full w-full rounded-2xl object-cover shadow-2xl"

                />

                <div className="absolute -bottom-6 right-6 rounded-2xl bg-red-600 px-8 py-6 shadow-2xl">

                  <div className="text-center text-white">

                    <div className="text-3xl font-bold tracking-tight">1959</div>

                    <div className="text-sm font-semibold uppercase tracking-[0.2em]">Fundação</div>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>



      {/* Timeline */}

      <section className="py-20 bg-[#f8f9fb]">

        <div className="max-w-6xl mx-auto px-4">

          <Reveal className="text-center max-w-3xl mx-auto space-y-4">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">

              Linha do Tempo

            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">

              65 anos de evoluo contnua

            </h2>

            <p className="text-gray-600">

              Uma jornada de tradio familiar, solidez empresarial e evoluo tecnolgica constante.

            </p>

          </Reveal>



          <div className="mt-16">

            <TimelineVertical events={timelineMilestones} />

          </div>

        </div>

      </section>



      {/* Values */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <Reveal className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              Nossos Valores

            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

              Os princípios que guiam nossas decisões e moldam nossa cultura organizacional

            </p>

          </Reveal>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values?.map((value, index) => {

              const Icon = value?.icon

              return (

                <Reveal key={index} delay={index * 0.1} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">

                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">

                    <Icon className="w-8 h-8 text-red-600" />

                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">

                    {value?.title || ''}

                  </h3>

                  <p className="text-gray-600 leading-relaxed">

                    {value?.description || ''}

                  </p>

                </Reveal>

              )

            })}

          </div>

        </div>

      </section>



      {/* G1 News Feature - Na Mídia */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto e Botão - Esquerda */}

            <Reveal>

              {/* Badge Na Mdia */}

              <div className="inline-flex items-center space-x-2 mb-6">

                <Newspaper className="w-5 h-5 text-red-600" />

                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">

                  Na Mdia

                </span>

              </div>



              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">

                A maior jazida de filito do Brasil em destaque nacional

              </h2>



              <p className="text-lg text-gray-600 mb-8 leading-relaxed">

                Transparência e credibilidade fazem parte da nossa história. A imprensa reconhece 

                a força da Mineração Itapeva, mostrando como o filito extraído em Itapeva (SP) 

                abastece cadeias estratégicas em todo o Brasil.

              </p>



              <Button 

                asChild 

                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"

              >

                <a 

                  href="https://g1.globo.com/sao-paulo/itapetininga-regiao/noticia/2015/04/itapeva-sp-tem-maior-jazida-de-filito-com-3-milhoes-de-metros-quadrados.html"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center space-x-2"

                >

                  <span>Ler matéria completa</span>

                  <ExternalLink className="w-4 h-4" />

                </a>

              </Button>

            </Reveal>



            {/* Imagem - Direita */}

            <Reveal className="relative">

              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">

                <Image

                  src="/images/hero/hero-mineracao-aerea.webp"

                  alt="Vista aérea da jazida - Mineração Itapeva"

                  fill

                  className="object-cover"

                />

              </div>

              

              {/* Data Badge */}

              <div className="absolute -bottom-4 left-6 bg-white px-6 py-3 rounded-lg shadow-lg border border-gray-200">

                <div className="flex items-center space-x-3">

                  <Calendar className="w-5 h-5 text-red-600" />

                  <div>

                    <p className="text-xs text-gray-500 font-medium">Publicado em</p>

                    <p className="text-sm font-bold text-gray-900">21 de abril de 2015</p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>



    </main>

  )

}



