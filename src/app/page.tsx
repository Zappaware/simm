'use client'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Sobre Nosotros Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-shadow">
                  Sobre Nosotros
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-shadow-sm">
                  Somos una empresa comprometida con el futuro sostenible, especializada en la 
                  implementación de soluciones de energía solar. Con años de experiencia en el 
                  sector, nos dedicamos a proporcionar servicios de alta calidad y tecnología 
                  de vanguardia para satisfacer las necesidades energéticas de nuestros clientes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-shadow-sm">
                  Nuestra misión es facilitar la transición hacia energías renovables, 
                  contribuyendo a un futuro más limpio y sostenible para las próximas generaciones.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/panel-solar.jpg"
                    alt="Panel Solar"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
