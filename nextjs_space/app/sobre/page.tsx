
import Navbar from '@/components/navigation/navbar'
import Image from 'next/image'
import { Award, MapPin, Users, Factory, Leaf, Calendar, ExternalLink, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Reveal from '@/components/ui/reveal'

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description: "Produtos de alta qualidade com rigoroso controle em todas as etapas de produção."
  },
  {
    icon: Users,
    title: "Compromisso",
    description: "Relacionamento transparente e duradouro com clientes e parceiros."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Operações responsáveis com respeito ao meio ambiente e às comunidades."
  },
  {
    icon: Factory,
    title: "Inovação",
    description: "Investimento constante em tecnologia e melhoria dos processos produtivos."
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uma Trajetória de
                <span className="text-red-600"> Excelência</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Mineração Itapeva nasceu em 1959 com uma visão clara: ser referência nacional na 
                produção de filito de alta qualidade. Ao longo de mais de seis décadas, construímos 
                uma trajetória sólida baseada na tradição familiar, inovação tecnológica e 
                compromisso com a excelência.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Localizada estrategicamente na região de Itapeva, São Paulo, somos uma das maiores 
                produtoras de filito do Brasil, garantindo um fornecimento constante e 
                confiável para diversos segmentos industriais em todo o território nacional.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Hoje, somos uma das maiores produtoras de filito do Brasil, atendendo mercados como construção 
                civil, nutrição animal, indústrias cimenteiras e cerâmicas, sempre com foco na 
                qualidade superior e no atendimento diferenciado.
              </p>
            </Reveal>

            <Reveal className="relative">
              <Image
                src="/images/fachada-mineracao.png"
                alt="Fachada da Mineração Itapeva"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1959</div>
                  <div className="text-sm text-white font-semibold">Fundação</div>
                </div>
              </div>
            </Reveal>
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
              {/* Badge NA MÍDIA */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <Newspaper className="w-5 h-5 text-red-600" />
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
                  NA MÍDIA
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
