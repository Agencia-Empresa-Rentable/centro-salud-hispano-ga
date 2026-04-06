'use client'

import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { BUSINESS, NAV_LINKS, HOURS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-heading text-white text-xl font-bold block leading-tight">
                Centro de Salud
              </span>
              <span className="text-brand-accent font-bold tracking-wide">
                Hispano de Georgia
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t(
                'Atención médica bilingüe y de calidad para toda la comunidad hispana en Georgia.',
                'Bilingual, quality medical care for the entire Hispanic community in Georgia.'
              )}
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4">
              {t('Navegación', 'Navigation')}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.hrefEs}>
                  <Link
                    href={link.hrefEs}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {t(link.labelEs, link.labelEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-accent" />
              {t('Horario', 'Hours')}
            </h3>
            <ul className="space-y-1.5">
              {HOURS.map((h) => (
                <li key={h.dayEs} className="flex justify-between text-sm gap-4">
                  <span className="text-gray-400">{t(h.dayEs, h.dayEn)}</span>
                  <span className={h.hours ? 'text-white' : 'text-red-400'}>
                    {h.hours ?? t('Cerrado', 'Closed')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4">
              {t('Contacto', 'Contact')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-accent flex-shrink-0" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-accent flex-shrink-0" />
                  <span>{BUSINESS.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            {t(
              '⚠️ No ofrecemos servicios de emergencia. Para emergencias llame al',
              '⚠️ We do not offer emergency services. For emergencies call'
            )}{' '}
            <strong className="text-white">911</strong>
          </p>
          <p>
            © {currentYear} {BUSINESS.name}. {t('Operado por', 'Operated by')}{' '}
            <span className="text-gray-400">{BUSINESS.copyright}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
