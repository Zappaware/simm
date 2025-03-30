'use client'
import { useState } from 'react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-5 max-w-sm w-full mx-auto overflow-y-auto max-h-[90vh] relative">
        <div className="absolute top-3 right-3">
          <button
            onClick={onClose}
            className="bg-[#fd6f19] rounded-full p-1 shadow-md hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4 text-white hover:text-[#fd6f19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800">Consulta Gratuita</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-0.5">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-7 px-2.5 text-xs"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-0.5">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-7 px-2.5 text-xs"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-0.5">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-7 px-2.5 text-xs"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-0.5">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              required
              className="mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] h-7 px-2.5 text-xs"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-0.5">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              rows={2}
              className="mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fd6f19] focus:ring-[#fd6f19] px-2.5 py-1 text-xs"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#fd6f19] text-white font-bold py-1.5 px-3 rounded-md hover:bg-opacity-90 transition-all duration-300 text-xs"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </div>
  )
} 