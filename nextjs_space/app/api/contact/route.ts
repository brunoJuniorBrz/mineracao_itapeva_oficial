
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = "force-dynamic";

const isDatabaseEnabled = process.env.CONTACT_DB_ENABLED === 'true'
const prisma = isDatabaseEnabled ? new PrismaClient() : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { 
      name, 
      email, 
      phone, 
      subject, 
      message, 
      company, 
      product, 
      formType 
    } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    let persistedId: string | null = null

    if (isDatabaseEnabled && prisma) {
      const contact = await prisma.contact.create({
        data: {
          name: name?.trim() || '',
          email: email?.trim()?.toLowerCase() || '',
          phone: phone?.trim() || null,
          subject: subject?.trim() || null,
          message: message?.trim() || '',
          company: company?.trim() || null,
          product: product?.trim() || null,
          formType: formType || 'geral',
          status: 'novo'
        }
      })

      persistedId = contact.id
    } else {
      console.info('[contact-api] Banco de dados desabilitado – ignorando persistência.', {
        name,
        email,
        phone,
        subject,
        product,
        formType
      })
    }

    return NextResponse.json({
      success: true,
      message: isDatabaseEnabled
        ? 'Contato enviado com sucesso! Entraremos em contato em breve.'
        : 'Contato recebido em modo demonstração. Nenhum dado foi salvo.',
      ...(persistedId ? { contactId: persistedId } : {})
    })

  } catch (error) {
    console.error('Erro ao processar contato:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  } finally {
    if (prisma) {
      await prisma.$disconnect()
    }
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'API de contato funcionando' 
  })
}
