
"use client"

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "5515997877035" // Número no formato internacional sem + e sem espaços
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </button>
  )
}
