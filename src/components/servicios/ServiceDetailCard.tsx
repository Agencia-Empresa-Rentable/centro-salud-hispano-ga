'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import { itemVariants } from '@/lib/motion'
import type { Service } from '@/types'
import { useLanguage } from '@/context/LanguageContext'
import { BUSINESS } from '@/lib/constants'
import { FaqAccordion } from './FaqAccordion'

interface ServiceDetailCardProps {
  service: Service
}

export function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  const { t, lang } = useLanguage()

  return (
    <motion.div
      id={service.id}
      variants={itemVariants}
      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 scroll-mt-24"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl flex-shrink-0">{service.icon}</div>
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary">
            {t(service.nameEs, service.nameEn)}
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            {t(service.descriptionEs, service.descriptionEn)}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          {t('¿Qué incluye?', 'What does it include?')}
        </h3>
        <ul className="space-y-2">
          {(lang === 'es' ? service.detailsEs : service.detailsEn).map((detail: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span className="text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {(service.faqEs.length > 0 || service.faqEn.length > 0) && (
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            {t('Preguntas Frecuentes', 'Frequently Asked Questions')}
          </h3>
          <FaqAccordion items={service} />
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-100">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
        >
          <Phone className="w-4 h-4" />
          {t('Llamar para más información:', 'Call for more information:')} {BUSINESS.phoneDisplay}
        </a>
      </div>
    </motion.div>
  )
}
