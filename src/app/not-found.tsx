import Link from 'next/link'
import { Home, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-base flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-heading font-bold text-brand-primary/20 mb-4">404</div>
        <h1 className="font-heading text-3xl font-bold text-brand-primary mb-3">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que busca no existe. Pero podemos ayudarle a encontrar lo que necesita.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 justify-center bg-brand-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            Ir al Inicio
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 justify-center bg-brand-secondary text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
