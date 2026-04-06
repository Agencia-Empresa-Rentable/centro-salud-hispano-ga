'use client'

import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motion'
import { SERVICES } from '@/lib/constants'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export function ServicesGrid() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-brand-base" aria-labelledby="servicios-heading">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {t('Lo que ofrecemos', 'What we offer')}
          </span>
          <h2 id="servicios-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            {t('Nuestros Servicios', 'Our Services')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t(
              'Atención médica completa para toda la familia, en español y con el calor que merece.',
              'Complete medical care for the whole family, in Spanish and with the warmth you deserve.'
            )}
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <AnimatedSection className="text-center mt-10" delay={0.2}>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            {t('Ver Todos los Servicios', 'View All Services')} →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
