'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ConsultationModal from './ConsultationModal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage ? (isScrolled ? 'bg-[#fd6f19]' : 'bg-transparent') : 'bg-[#fd6f19]'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-white font-bold text-xl">
              Simm
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white font-bold hover:opacity-80 transition-opacity">
                Inicio
              </Link>
              <Link href="/servicios" className="text-white font-bold hover:opacity-80 transition-opacity">
                Servicios
              </Link>
              <Link href="/valores" className="text-white font-bold hover:opacity-80 transition-opacity">
                Valores
              </Link>
              <Link href="/acerca" className="text-white font-bold hover:opacity-80 transition-opacity">
                Acerca
              </Link>
              <Link href="/contactanos" className="text-white font-bold hover:opacity-80 transition-opacity">
                Contáctanos
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-[#fd6f19] text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-[#fd6f19] transition-all duration-300"
            >
              Consulta gratis
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden absolute left-0 right-0 bg-[#fd6f19] shadow-lg`}>
            <nav className="flex flex-col space-y-4 py-4 px-4">
              <Link href="/" className="text-white font-bold hover:opacity-80 transition-opacity">
                Inicio
              </Link>
              <Link href="/servicios" className="text-white font-bold hover:opacity-80 transition-opacity">
                Servicios
              </Link>
              <Link href="/valores" className="text-white font-bold hover:opacity-80 transition-opacity">
                Valores
              </Link>
              <Link href="/acerca" className="text-white font-bold hover:opacity-80 transition-opacity">
                Acerca
              </Link>
              <Link href="/contactanos" className="text-white font-bold hover:opacity-80 transition-opacity">
                Contáctanos
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#fd6f19] text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-[#fd6f19] transition-all duration-300 w-full"
              >
                Consulta gratis
              </button>
            </nav>
          </div>
        </div>
      </header>
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
} 