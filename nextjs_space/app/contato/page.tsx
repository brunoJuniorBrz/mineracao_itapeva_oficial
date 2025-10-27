import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import Reveal from '@/components/ui/reveal'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    details: ['(15) 3521-9550'],
    action: 'tel:+551535219550'
  },
  {
    icon: Mail,
    title: 'E-mail',
    details: ['contato@mineracaoitapeva.com.br', 'comercial@mineracaoitapeva.com.br'],
    action: 'mailto:contato@mineracaoitapeva.com.br'
  },
  {
    icon: MapPin,
    title: 'Endereço',
    details: [
      'Estrada Municipal Luis José Sguario, Km 5',
      'Bairro do Rosário',
      'Itapeva/SP'
    ]
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h', 'Domingo: Fechado']
  }
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Reveal className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Entre em Contato</h1>
            <p className="text-xl md:text-2xl text-red-500 font-semibold">
              Estamos prontos para atender suas necessidades
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Nossa equipe especializada está disponível para esclarecer dúvidas, fornecer
              orçamentos e apresentar as melhores soluções em filito para o seu negócio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl bg-gray-50 p-8 shadow-lg shadow-gray-200/50">
                <Reveal className="mb-8 space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900">Solicite um Orçamento</h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <ContactForm formType="geral" />
                </Reveal>
              </div>
            </Reveal>

            {/* Contact Information */}
            <Reveal className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Informações de Contato</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Reveal key={info.title} delay={index * 0.1} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <div className="mt-2 space-y-1 text-left">
                          {info.details.map((detail, detailIndex) => (
                            <p key={`${info.title}-${detail}`} className="text-gray-600">
                              {info.action && detailIndex === 0 ? (
                                <a
                                  href={info.action}
                                  className="transition-colors hover:text-red-600"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>

              {/* Social Media */}
              <Reveal delay={0.3} className="rounded-xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/mineracaoitapeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                    aria-label="Instagram Mineração Itapeva"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/5515999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors hover:bg-green-100"
                    aria-label="WhatsApp Mineração Itapeva"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </Reveal>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="mb-12 text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Outras Formas de Contato</h2>
            <p className="text-xl text-gray-600">Escolha a forma mais conveniente para você</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="rounded-xl bg-white p-8 text-center shadow-lg" delay={0.05}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Departamento Comercial</h3>
              <p className="text-gray-600 mb-4">
                Para orçamentos, pedidos e informações comerciais
              </p>
              <a
                href="mailto:comercial@mineracaoitapeva.com.br"
                className="font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                comercial@mineracaoitapeva.com.br
              </a>
            </Reveal>

            <Reveal className="rounded-xl bg-white p-8 text-center shadow-lg" delay={0.1}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Atendimento Técnico</h3>
              <p className="text-gray-600 mb-4">Suporte técnico e especificações de produtos</p>
              <a
                href="tel:+551535219550"
                className="font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                (15) 3521-9550
              </a>
            </Reveal>

            <Reveal className="rounded-xl bg-white p-8 text-center shadow-lg" delay={0.15}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Informações Gerais</h3>
              <p className="text-gray-600 mb-4">Dúvidas gerais, parcerias e outras informações</p>
              <a
                href="mailto:contato@mineracaoitapeva.com.br"
                className="font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                contato@mineracaoitapeva.com.br
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal className="mb-12 text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite-nos em Itapeva, São Paulo</p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14566.458472738903!2d-48.876165!3d-23.983889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c571e1b9e4e9c5%3A0x5b0e8c8e8e8e8e8e!2sItapeva%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Mineração Itapeva"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 rounded-xl bg-white p-6 shadow-md">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-3 text-left">
                <MapPin className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">
                    Estrada Municipal Luis José Sguario, Km 5 – Bairro do Rosário – Itapeva/SP
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//Itapeva,+SP/@-23.983889,-48.876165,14z"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Como Chegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
