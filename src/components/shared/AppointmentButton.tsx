'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { Phone } from 'lucide-react'

export function AppointmentButton() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 left-0 right-0 z-40 flex justify-center md:hidden px-4"
        >
          <Link
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 bg-brand-accent text-white font-bold py-4 px-8 rounded-full shadow-2xl text-base w-full max-w-xs justify-center"
            aria-label={t('Llamar a la clínica', 'Call the clinic')}
          >
            <Phone className="w-5 h-5" />
            {t('Llamar Ahora', 'Call Now')} · {BUSINESS.phoneDisplay}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
