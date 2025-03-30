'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Acerca() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Acerca de Nosotros</h1>
          
          {/* Nuestra Historia */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#fd6f19] mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 text-lg">
              Simm nació con la visión de transformar el sector energético en México. 
              Desde nuestros inicios, nos hemos dedicado a proporcionar soluciones 
              solares innovadoras y sostenibles que benefician tanto a nuestros clientes 
              como al medio ambiente.
            </p>
          </section>

          {/* Nuestro Equipo */}
          <section>
            <h2 className="text-3xl font-bold text-[#fd6f19] mb-6">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Experiencia</h3>
                <p className="text-gray-600">
                  Nuestro equipo cuenta con años de experiencia en el sector de energía 
                  renovable, combinando conocimientos técnicos con un profundo 
                  compromiso con la sostenibilidad.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compromiso</h3>
                <p className="text-gray-600">
                  Nos dedicamos a proporcionar un servicio excepcional a nuestros 
                  clientes, asegurando que cada proyecto cumpla con los más altos 
                  estándares de calidad y eficiencia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
} 