'use client'
import { useEffect, useState } from 'react'
import ConsultationModal from './ConsultationModal'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section 
        className={`min-h-screen flex items-center justify-center text-white transition-all duration-1000 pt-16 md:pt-0 ${
          isScrolled ? 'bg-[#fd6f19]' : 'bg-[url("/volcan-de-colima.jpg")] bg-cover bg-center bg-no-repeat'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Energía Solar para un Futuro Sostenible
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Transformamos la energía del sol en ahorro y sostenibilidad para tu hogar o negocio. 
            Soluciones personalizadas de paneles solares con la mejor tecnología del mercado.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#fd6f19] text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-[#fd6f19] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto"
          >
            Obtén tu Evaluación Gratuita
          </button>
        </div>
      </section>
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
} 