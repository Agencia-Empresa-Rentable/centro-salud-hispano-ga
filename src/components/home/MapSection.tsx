'use client'

import { MapPin, Clock, Navigation } from 'lucide-react'
import { BUSINESS, HOURS } from '@/lib/constants'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export function MapSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-brand-base" aria-labelledby="ubicacion-heading">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {t('Encuéntrenos', 'Find Us')}
          </span>
          <h2 id="ubicacion-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            {t('Nuestra Ubicación', 'Our Location')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Info column */}
          <AnimatedSection className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('Dirección', 'Address')}</h3>
                  <p className="text-gray-600 text-sm">{BUSINESS.addressLine1}</p>
                  <p className="text-gray-600 text-sm">{BUSINESS.addressLine2}</p>
                </div>
              </div>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-xl text-sm w-full justify-center hover:bg-blue-900 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                {t('Cómo llegar', 'Get Directions')}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-brand-primary" />
                <h3 className="font-bold text-gray-900">{t('Horario de Atención', 'Office Hours')}</h3>
              </div>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.dayEs} className="flex justify-between text-sm">
                    <span className="text-gray-500">{t(h.dayEs, h.dayEn)}</span>
                    <span className={`font-medium ${h.hours ? 'text-gray-900' : 'text-red-500'}`}>
                      {h.hours ?? t('Cerrado', 'Closed')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection className="lg:col-span-2" delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-gray-200">
              <iframe
                src={BUSINESS.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('Mapa de ubicación del Centro de Salud Hispano de Georgia', 'Location map of Centro de Salud Hispano de Georgia')}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
