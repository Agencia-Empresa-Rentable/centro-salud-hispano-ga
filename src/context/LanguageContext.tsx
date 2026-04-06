'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import type { Language } from '@/types'

interface LanguageContextValue {
  lang: Language
  toggleLang: () => void
  t: (es: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  toggleLang: () => {},
  t: (es) => es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const t = useCallback(
    (es: string, en: string) => (lang === 'es' ? es : en),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
