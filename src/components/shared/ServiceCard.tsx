'use client'

import { motion } from 'framer-motion'
import { itemVariants, cardHoverVariants } from '@/lib/motion'
import type { Service } from '@/types'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div variants={itemVariants} className="h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
        className="h-full bg-white rounded-2xl p-6 border border-gray-100 cursor-default"
      >
        <div className="flex flex-col h-full">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">
            {t(service.nameEs, service.nameEn)}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {t(service.descriptionEs, service.descriptionEn)}
          </p>
          <Link
            href="/servicios"
            className="mt-4 inline-flex items-center text-sm font-semibold text-brand-secondary hover:text-brand-primary transition-colors"
            aria-label={`${t('Saber más sobre', 'Learn more about')} ${t(service.nameEs, service.nameEn)}`}
          >
            {t('Saber más', 'Learn more')} →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
