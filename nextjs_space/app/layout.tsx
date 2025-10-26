
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mineração Itapeva - Maior Produtora de Filito do Brasil',
  description: 'Há mais de 65 anos produzindo filito de alta qualidade para construção civil e nutrição animal. Tradição, qualidade e inovação.',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Mineração Itapeva - Maior Produtora de Filito do Brasil',
    description: 'Há mais de 65 anos produzindo filito de alta qualidade para construção civil e nutrição animal. Tradição, qualidade e inovação.',
    images: '/og-image.png',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
