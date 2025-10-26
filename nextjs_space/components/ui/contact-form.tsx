
"use client"

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormProps {
  formType?: string
  productFocus?: string
}

export default function ContactForm({ formType = 'geral', productFocus }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '',
    product: productFocus || ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType
        })
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(result?.message || 'Mensagem enviada com sucesso!')
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          company: '',
          product: productFocus || ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result?.error || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Erro de conexão. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-green-700">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700">{submitMessage}</p>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name || ''}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Seu nome completo"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData?.email || ''}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="seu@email.com"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone || ''}
            onChange={handleChange}
            className="form-input"
            placeholder="(XX) XXXXX-XXXX"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData?.company || ''}
            onChange={handleChange}
            className="form-input"
            placeholder="Nome da sua empresa"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData?.subject || ''}
          onChange={handleChange}
          className="form-input"
          placeholder="Assunto da sua mensagem"
          disabled={isSubmitting}
        />
      </div>

      {(formType === 'material_construcao' || formType === 'racao_animal') && (
        <div>
          <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
            Produto de Interesse
          </label>
          <select
            id="product"
            name="product"
            value={formData?.product || ''}
            onChange={handleChange}
            className="form-input"
            disabled={isSubmitting}
          >
            <option value="">Selecione um produto</option>
            {formType === 'material_construcao' && (
              <>
                <option value="Ligamil MAX">Ligamil MAX</option>
                <option value="Ligamil PLUS">Ligamil PLUS</option>
                <option value="Calgeo">Calgeo</option>
              </>
            )}
            {formType === 'racao_animal' && (
              <>
                <option value="Filito Branco">Filito Branco</option>
                <option value="Filito Cinza">Filito Cinza</option>
                <option value="Filito Creme">Filito Creme</option>
                <option value="Caulim">Caulim</option>
              </>
            )}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData?.message || ''}
          onChange={handleChange}
          required
          rows={6}
          className="form-textarea"
          placeholder="Descreva sua necessidade, quantidade desejada, prazo ou qualquer outra informação relevante..."
          disabled={isSubmitting}
        />
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Política de Privacidade:</strong> Seus dados serão utilizados exclusivamente para responder sua solicitação 
          e não serão compartilhados com terceiros. Garantimos a segurança e confidencialidade das informações fornecidas.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </>
        )}
      </button>
    </form>
  )
}
