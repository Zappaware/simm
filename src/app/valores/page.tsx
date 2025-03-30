'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Valores() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Nuestros Valores</h1>
          
          {/* Misión */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#fd6f19] mb-4">Misión</h2>
            <p className="text-gray-600 text-lg">
              Proporcionar soluciones energéticas sostenibles y eficientes que contribuyan 
              a un futuro más limpio y sostenible, mientras ayudamos a nuestros clientes 
              a reducir sus costos energéticos y su huella de carbono.
            </p>
          </section>

          {/* Visión */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#fd6f19] mb-4">Visión</h2>
            <p className="text-gray-600 text-lg">
              Ser líderes en la implementación de soluciones solares innovadoras, 
              estableciendo nuevos estándares en eficiencia energética y sostenibilidad 
              en México y más allá.
            </p>
          </section>

          {/* Valores Fundamentales */}
          <section>
            <h2 className="text-3xl font-bold text-[#fd6f19] mb-6">Valores Fundamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sostenibilidad</h3>
                <p className="text-gray-600">
                  Comprometidos con el desarrollo sostenible y la protección del medio ambiente.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovación</h3>
                <p className="text-gray-600">
                  Buscamos constantemente nuevas tecnologías y soluciones para mejorar nuestros servicios.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Calidad</h3>
                <p className="text-gray-600">
                  Mantenemos los más altos estándares en cada proyecto que realizamos.
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