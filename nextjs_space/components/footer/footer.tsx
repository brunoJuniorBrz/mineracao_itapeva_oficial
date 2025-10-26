import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image 
                src="/images/logos/logo-mineracao-itapeva-branco.png"
                alt="Mineração Itapeva"
                width={220}
                height={80}
                className="mb-3"
              />
              <p className="text-sm text-gray-400">Maior produtora de filito do Brasil</p>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Há mais de 65 anos produzindo filito de alta qualidade para construção civil e nutrição animal. 
              Tradição, qualidade e inovação em cada produto.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mineracaoitapeva" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-red-500 transition-colors">
                  Sobre a Mineração
                </Link>
              </li>
              <li>
                <Link href="/produtos/material-construcao" className="text-gray-300 hover:text-red-500 transition-colors">
                  Material de Construção
                </Link>
              </li>
              <li>
                <Link href="/produtos/racao-animal" className="text-gray-300 hover:text-red-500 transition-colors">
                  Ração Animal
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Estrada Municipal Luis José Sguario, Km 5</p>
                  <p>Bairro do Rosário</p>
                  <p>Itapeva/SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <a href="tel:+551535219550" className="hover:text-red-500 transition-colors">
                    (15) 3521-9550
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <a href="mailto:contato@mineracaoitapeva.com.br" className="hover:text-red-500 transition-colors">
                    contato@mineracaoitapeva.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Mineração Itapeva. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-gray-400">CNPJ: XX.XXX.XXX/0001-XX</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Desde 1959</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
