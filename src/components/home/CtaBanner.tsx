'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-secondary py-16 md:py-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('¡No necesita cita — Visítenos hoy!', 'No appointment needed — Visit us today!')}
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">
            {t(
              'Atendemos a todos los pacientes por orden de llegada. Venga cuando lo necesite, estamos aquí para usted.',
              'We see all patients on a walk-in basis. Come whenever you need us, we\'re here for you.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-3 bg-white text-brand-secondary font-bold py-4 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-yellow-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all"
            >
              <MapPin className="w-5 h-5" />
              {t('Cómo llegar', 'Get Directions')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
