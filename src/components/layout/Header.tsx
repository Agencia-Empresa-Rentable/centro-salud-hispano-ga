'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAV_LINKS, BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from './LanguageToggle'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-primary/98 backdrop-blur-md shadow-lg'
          : 'bg-brand-primary'
      )}
    >
      {/* Top bar */}
      <div className="bg-brand-primary-dark text-white text-sm py-1.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span className="text-white/80">
            {t('Atendemos sin importar su estatus migratorio', 'We serve regardless of immigration status')}
          </span>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-1.5 font-semibold text-brand-accent hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label={BUSINESS.name}>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-white font-bold text-lg leading-none">
                Centro de Salud
              </span>
              <span className="text-brand-accent font-bold text-sm tracking-wide">
                Hispano de Georgia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hrefEs}
                href={link.hrefEs}
                className="px-3 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {t(link.labelEs, link.labelEn)}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3 text-white">
            <LanguageToggle />
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-brand-accent hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              {t('Visítenos Hoy', 'Visit Us Today')}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 text-white md:hidden">
            <a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Llamar al ${BUSINESS.phoneDisplay}`}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
