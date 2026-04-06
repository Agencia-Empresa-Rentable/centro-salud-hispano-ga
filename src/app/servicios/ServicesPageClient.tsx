'use client'

import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motion'
import { SERVICES, BUSINESS } from '@/lib/constants'
import { ServiceDetailCard } from '@/components/servicios/ServiceDetailCard'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { Phone } from 'lucide-react'

export function ServicesPageClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              {t('Nuestros Servicios', 'Our Services')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t(
                'Atención médica completa y personalizada para toda la familia hispana en Georgia.',
                'Complete, personalized medical care for the whole Hispanic family in Georgia.'
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-brand-base">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-heading text-xl font-bold text-brand-primary mb-4">
                  {t('Servicios', 'Services')}
                </h2>
                <nav className="space-y-1" aria-label={t('Menú de servicios', 'Services menu')}>
                  {SERVICES.map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span>{t(service.nameEs, service.nameEn)}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">
                    {t('¿Preguntas? Llámenos:', 'Questions? Call us:')}
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-xl text-sm justify-center hover:bg-blue-900 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {BUSINESS.phoneDisplay}
                  </a>
                  <p className="text-xs text-brand-secondary font-semibold text-center mt-2">
                    🚶 {t('Sin cita — Solo venga', 'No appointment — Just walk in')}
                  </p>
                </div>
              </div>
            </aside>

            {/* Services list */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {SERVICES.map((service) => (
                <ServiceDetailCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
