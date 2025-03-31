'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contactanos() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contáctanos</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <section>
              <h2 className="text-3xl font-bold text-[#fd6f19] mb-6">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-[#fd6f19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Dirección</h3>
                    <p className="text-gray-700">Laguna del Jabalí # 521, Col. La Rivera. Colima, México.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-[#fd6f19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Teléfono</h3>
                    <p className="text-gray-700">+52-312-145-9638</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-[#fd6f19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                    <p className="text-gray-700">facturacionsimm046@gmail.com</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Formulario de Contacto */}
            <section>
              <h2 className="text-3xl font-bold text-[#fd6f19] mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-12 px-4 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-12 px-4 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] px-4 py-3 text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fd6f19] text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 
