
import Navbar from '@/components/navigation/navbar'
import ContactForm from '@/components/ui/contact-form'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    details: ["(15) 3521-9550"],
    action: "tel:+551535219550"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contato@mineracaoitapeva.com.br", "comercial@mineracaoitapeva.com.br"],
    action: "mailto:contato@mineracaoitapeva.com.br"
  },
  {
    icon: MapPin,
    title: "Endereço",
    details: [
      "Estrada Municipal Luis José Sguario, Km 5",
      "Bairro do Rosário",
      "Itapeva/SP"
    ]
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    details: [
      "Segunda a Sexta: 8h às 18h",
      "Sábado: 8h às 12h",
      "Domingo: Fechado"
    ]
  }
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-red-500 font-semibold mb-8">
            Estamos prontos para atender suas necessidades
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa equipe especializada está disponível para esclarecer dúvidas, 
            fornecer orçamentos e apresentar as melhores soluções em filito para seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Solicite um Orçamento
                  </h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>
                </div>
                
                <ContactForm formType="geral" />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo?.map((info, index) => {
                  const Icon = info?.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info?.title || ''}
                        </h3>
                        <div className="space-y-1">
                          {info?.details?.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {info?.action && detailIndex === 0 ? (
                                <a 
                                  href={info.action} 
                                  className="hover:text-red-600 transition-colors"
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
                    </div>
                  )
                })}
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/mineracaoitapeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white p-3 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700 text-sm">@mineracaoitapeva</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+551535219550"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
                
                <a
                  href="mailto:contato@mineracaoitapeva.com.br?subject=Consulta sobre produtos&body=Olá, gostaria de saber mais sobre os produtos da Mineração Itapeva."
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors border border-gray-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outras Formas de Contato
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vendas */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Departamento Comercial
              </h3>
              <p className="text-gray-600 mb-4">
                Para orçamentos, pedidos e informações comerciais
              </p>
              <a 
                href="mailto:comercial@mineracaoitapeva.com.br"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                comercial@mineracaoitapeva.com.br
              </a>
            </div>

            {/* Technical Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Atendimento Técnico
              </h3>
              <p className="text-gray-600 mb-4">
                Suporte técnico e especificações de produtos
              </p>
              <a 
                href="tel:+551535219550"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                (15) 3521-9550
              </a>
            </div>

            {/* General */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Informações Gerais
              </h3>
              <p className="text-gray-600 mb-4">
                Dúvidas gerais, parcerias e outras informações
              </p>
              <a 
                href="mailto:contato@mineracaoitapeva.com.br"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                contato@mineracaoitapeva.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Visite-nos em Itapeva, São Paulo
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">
                    Estrada Municipal Luis José Sguario, Km 5 - Bairro do Rosário - Itapeva/SP
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//Itapeva,+SP/@-23.983889,-48.876165,14z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
