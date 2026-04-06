'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'

export function WhatsAppFloat() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`tel:${BUSINESS.phone}`}
        aria-label={t('Llamar a la clínica', 'Call the clinic')}
        className="relative flex items-center justify-center w-14 h-14"
      >
        {/* Pulse ring */}
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-brand-primary"
        />
        {/* Button */}
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-brand-primary shadow-lg"
        >
          <Phone className="w-6 h-6 text-white" aria-hidden="true" />
        </motion.span>
      </a>
    </div>
  )
}
