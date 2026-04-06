'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border border-brand-primary text-brand-primary transition-all hover:bg-brand-primary/10"
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="uppercase tracking-wide"
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </motion.span>
      <span className="text-xs opacity-60">|</span>
      <span className="uppercase tracking-wide opacity-60">
        {lang === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  )
}
