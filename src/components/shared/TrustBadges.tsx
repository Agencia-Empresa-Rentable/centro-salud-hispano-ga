'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motion'

const badges = [
  { icon: '💳', es: 'Efectivo y Tarjetas', en: 'Cash & Cards' },
  { icon: '🏥', es: 'Sin Importar su Seguro', en: 'Any Insurance Status' },
  { icon: '🗣️', es: '100% Bilingüe', en: '100% Bilingual' },
  { icon: '🛡️', es: 'Atención Confidencial', en: 'Confidential Care' },
]

export function TrustBadges() {
  const { t } = useLanguage()

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3"
    >
      {badges.map((badge) => (
        <motion.div
          key={badge.es}
          variants={itemVariants}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
        >
          <span>{badge.icon}</span>
          <span>{t(badge.es, badge.en)}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
