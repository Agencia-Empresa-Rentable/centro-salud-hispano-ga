'use client'

import { Phone, MapPin, Clock, Navigation } from 'lucide-react'
import { BUSINESS, HOURS } from '@/lib/constants'
import { GHLFormEmbed } from '@/components/contacto/GHLFormEmbed'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export function ContactoClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <AnimatedSection>
            <span className="inline-block bg-brand-accent text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {t('Sin cita previa — Solo venga', 'No appointment needed — Just walk in')}
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              {t('Contáctenos', 'Contact Us')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t(
                'Estamos aquí para atenderle. Llámenos o visítenos directamente — no necesita cita.',
                'We\'re here to serve you. Call us or walk right in — no appointment needed.'
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-base">
        <div className="container-custom">

          {/* Walk-in highlight banner */}
          <AnimatedSection className="mb-10">
            <div className="bg-brand-secondary/10 border-2 border-brand-secondary/30 rounded-3xl p-6 text-center">
              <p className="text-2xl font-heading font-bold text-brand-secondary mb-1">
                🚶 {t('Atención a Walk-Ins', 'Walk-In Care')}
              </p>
              <p className="text-gray-700">
                {t(
                  'Todos nuestros pacientes son bienvenidos sin cita previa. Llegue, regístrese y lo atendemos en orden de llegada.',
                  'All our patients are welcome without a prior appointment. Come in, register, and we\'ll see you in order of arrival.'
                )}
              </p>
            </div>
          </AnimatedSection>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <AnimatedSection>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-primary transition-colors">
                  <Phone className="w-5 h-5 text-brand-primary group-hover:text-white" />
                </div>
                <p className="font-bold text-gray-900">{t('Llámenos', 'Call Us')}</p>
                <p className="text-brand-primary font-semibold">{BUSINESS.phoneDisplay}</p>
                <p className="text-gray-400 text-xs mt-1">{t('Para consultas rápidas', 'For quick questions')}</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm text-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-brand-secondary" />
                </div>
                <p className="font-bold text-gray-900">{t('Sin Cita Previa', 'No Appointment')}</p>
                <p className="text-brand-secondary font-semibold text-sm">{t('¡Solo venga!', 'Just walk in!')}</p>
                <p className="text-gray-400 text-xs mt-1">{t('Atendemos en orden de llegada', 'First come, first served')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-accent transition-colors">
                  <MapPin className="w-5 h-5 text-brand-accent group-hover:text-white" />
                </div>
                <p className="font-bold text-gray-900">{t('Nuestra Dirección', 'Our Address')}</p>
                <p className="text-gray-600 text-sm">{BUSINESS.addressLine1}</p>
                <p className="text-gray-600 text-sm">{BUSINESS.addressLine2}</p>
              </a>
            </AnimatedSection>
          </div>

          {/* Main grid: form + hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <AnimatedSection>
              <GHLFormEmbed />
            </AnimatedSection>

            {/* Hours + directions */}
            <div className="space-y-6">
              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-heading text-xl font-bold text-brand-primary">
                      {t('Horario de Atención', 'Office Hours')}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {HOURS.map((h) => (
                      <li key={h.dayEs} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-0">
                        <span className="text-gray-600 text-sm">{t(h.dayEs, h.dayEn)}</span>
                        <span className={`text-sm font-semibold ${h.hours ? 'text-gray-900' : 'text-red-500'}`}>
                          {h.hours ?? t('Cerrado', 'Closed')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100 bg-brand-secondary/5 rounded-xl p-3">
                    <p className="text-brand-secondary text-sm font-semibold text-center">
                      🚶 {t('No necesita cita — Llegue y lo atendemos', 'No appointment needed — Walk in and we\'ll see you')}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Navigation className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-heading text-xl font-bold text-brand-primary">
                      {t('Cómo Llegar', 'How to Get Here')}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {BUSINESS.address}
                  </p>
                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-xl text-sm justify-center hover:bg-blue-900 transition-colors w-full"
                  >
                    <Navigation className="w-4 h-4" />
                    {t('Abrir en Google Maps', 'Open in Google Maps')}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Map */}
          <AnimatedSection className="mt-12" delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[21/9]">
              <iframe
                src={BUSINESS.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t(
                  'Mapa de ubicación del Centro de Salud Hispano de Georgia',
                  'Location map of Centro de Salud Hispano de Georgia'
                )}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
