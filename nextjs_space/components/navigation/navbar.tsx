"use client"

import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'

import { ChevronDown, Menu, X } from 'lucide-react'

import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openProductsMenu = () => {

    if (closeMenuTimeout.current) {

      clearTimeout(closeMenuTimeout.current)

      closeMenuTimeout.current = null

    }

    setIsProductsOpen(true)

  }

  const scheduleProductsClose = () => {

    if (closeMenuTimeout.current) {

      clearTimeout(closeMenuTimeout.current)

    }

    closeMenuTimeout.current = setTimeout(() => {

      setIsProductsOpen(false)

      closeMenuTimeout.current = null

    }, 150)

  }

  useEffect(() => {

    const handleScroll = () => {

      // Fecha o dropdown ao rolar

      if (isProductsOpen) {

        setIsProductsOpen(false)

      }

      if (window.scrollY > 100) {

        setIsScrolled(true)

      } else {

        setIsScrolled(false)

      }

    }

    const handleClickOutside = (event: MouseEvent) => {

      // Fecha o dropdown ao clicar fora

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {

        setIsProductsOpen(false)

      }

    }

    window.addEventListener('scroll', handleScroll)

    document.addEventListener('mousedown', handleClickOutside)

    return () => {

      window.removeEventListener('scroll', handleScroll)

      document.removeEventListener('mousedown', handleClickOutside)

      if (closeMenuTimeout.current) {

        clearTimeout(closeMenuTimeout.current)

      }

    }

  }, [isProductsOpen])

  const mobilePrimaryLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Produtos', href: '/#linhas' },
    { label: 'Sustentabilidade', href: '/#sustentabilidade' },
    { label: 'Contato', href: '/contato' }
  ]

  useEffect(() => {

    if (typeof document === 'undefined') {

      return

    }

    if (isOpen) {

      document.body.style.overflow = 'hidden'

    } else {

      document.body.style.overflow = ''

    }

    return () => {

      document.body.style.overflow = ''

    }

  }, [isOpen])

  return (

    <>

      {/* Main navbar */}

      <nav 

        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

          isScrolled 

            ? 'bg-white shadow-md' 

            : 'bg-gradient-to-b from-black/60 to-transparent'

        }`}

      >

        <div className="max-w-6xl mx-auto px-4">

          <div className="flex justify-between items-center h-20">

            {/* Logo */}

            <Link href="/" className="flex items-center z-10">

              <Image
                src={isScrolled ? "/images/logos/logo-mineracao-itapeva-preto.png" : "/images/logos/logo-mineracao-itapeva-branco.png"}
                alt="Mineração Itapeva"
                width={180}
                height={60}
                className="h-14 w-auto transition-all duration-300"
                priority
              />

            </Link>

            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center space-x-8">

              <Link 

                href="/" 

                className={`font-medium transition-colors ${

                  isScrolled 

                    ? 'text-gray-700 hover:text-red-600' 

                    : 'text-white hover:text-red-200'

                }`}

              >

                Início

              </Link>

              <Link 

                href="/sobre" 

                className={`font-medium transition-colors ${

                  isScrolled 

                    ? 'text-gray-700 hover:text-red-600' 

                    : 'text-white hover:text-red-200'

                }`}

              >

                Sobre

              </Link>

              {/* Products Dropdown - Mega Menu */}

              <div 

                ref={dropdownRef}

                className="relative"
                onMouseEnter={openProductsMenu}

                onMouseLeave={scheduleProductsClose}

              >

                <button

                  className={`flex items-center font-medium transition-colors ${

                    isScrolled 

                      ? 'text-gray-700 hover:text-red-600' 

                      : 'text-white hover:text-red-200'

                  }`}

                >

                  Produtos

                  <ChevronDown size={16} className={`ml-1 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />

                </button>

                {isProductsOpen && (

                  <div 

                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-200 p-4"

                    onMouseEnter={openProductsMenu}

                    onMouseLeave={scheduleProductsClose}

                  >

                    <div className="grid grid-cols-2 gap-6">

                      {/* Material de Construção */}

                      <div>

                        <Link

                          href="/produtos/material-construcao"

                          className="block font-bold text-red-600 mb-3 hover:text-red-700 transition-colors"

                        >

                          Material de Construção

                        </Link>

                        <div className="space-y-2">

                          <Link

                            href="/produtos/material-construcao/ligamil"

                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded transition-colors"

                            onClick={() => setIsProductsOpen(false)}

                          >

                            Ligamil (Plus e Max)

                          </Link>

                          <Link

                            href="/produtos/material-construcao/calgeo"

                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded transition-colors"

                            onClick={() => setIsProductsOpen(false)}

                          >

                            Calgeo

                          </Link>

                          <Link

                            href="/produtos/material-construcao/caulim"

                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded transition-colors"

                            onClick={() => setIsProductsOpen(false)}

                          >

                            Caulim

                          </Link>

                        </div>

                      </div>

                      {/* Ração Animal */}

                      <div>

                        <Link

                          href="/produtos/racao-animal"

                          className="block font-bold text-red-600 mb-3 hover:text-red-700 transition-colors"

                        >

                          Ração Animal

                        </Link>

                        <div className="space-y-2">

                          <Link

                            href="/produtos/racao-animal/caulim"

                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded transition-colors"

                            onClick={() => setIsProductsOpen(false)}

                          >

                            Caulim

                          </Link>

                          <Link

                            href="/produtos/racao-animal/itageo"

                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded transition-colors"

                            onClick={() => setIsProductsOpen(false)}

                          >

                            Itageo

                          </Link>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </div>

              <Link 

                href="/contato" 

                className={`font-medium transition-colors ${

                  isScrolled 

                    ? 'text-gray-700 hover:text-red-600' 

                    : 'text-white hover:text-red-200'

                }`}

              >

                Contato

              </Link>

              {/* Botão só aparece quando scrolled */}

              {isScrolled && (

                <Link

                  href="/contato"

                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-md"

                >

                  Solicite um Orçamento

                </Link>

              )}

            </div>

            {/* Mobile menu button */}

            <button

              onClick={() => setIsOpen(!isOpen)}

              className={`md:hidden p-2 rounded-md transition-colors ${

                isScrolled 

                  ? 'text-gray-700 hover:text-gray-900' 

                  : 'text-white hover:text-gray-200'

              }`}

            >

              {isOpen ? <X size={24} /> : <Menu size={24} />}

            </button>

          </div>

        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/45 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="mx-4 mt-6 overflow-hidden rounded-3xl bg-white text-gray-900 shadow-xl ring-1 ring-black/5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <span className="text-base font-semibold text-gray-700">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav>
                <ul>
                  {mobilePrimaryLinks.map((item, index) => (
                    <li
                      key={item.label}
                      className={index !== mobilePrimaryLinks.length - 1 ? 'border-b border-gray-100' : undefined}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-4 text-lg font-medium text-gray-900 transition-colors hover:text-red-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-gray-100 px-6 py-5">
                <div className="flex justify-center">
                  <Image
                    src="/images/logos/logo-mineracao-itapeva-preto.png"
                    alt="Logo Mineração Itapeva"
                    width={150}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}


