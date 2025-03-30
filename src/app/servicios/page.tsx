'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Servicios() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Nuestros Servicios</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio Residencial */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#fd6f19] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Residencial</h2>
              <p className="text-gray-600">
                Instalación de sistemas solares para hogares, optimizando el consumo energético 
                y reduciendo las facturas de electricidad. Soluciones personalizadas para cada 
                vivienda.
              </p>
            </div>

            {/* Servicio Comercial */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#fd6f19] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Comercial</h2>
              <p className="text-gray-600">
                Soluciones solares para empresas y negocios, diseñadas para maximizar el 
                retorno de inversión y reducir los costos operativos. Sistemas escalables 
                para cualquier tamaño de negocio.
              </p>
            </div>

            {/* Servicio Personalizado */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#fd6f19] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Personalizado</h2>
              <p className="text-gray-600">
                Diseño e implementación de soluciones solares a medida, adaptadas a las 
                necesidades específicas de cada cliente. Incluye asesoría técnica y 
                seguimiento personalizado.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 