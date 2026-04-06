'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      )}
    >
      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" aria-label={BUSINESS.name}>
            <Image
              src="/images/logo.png"
              alt={BUSINESS.name}
              width={340}
              height={96}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hrefEs}
                href={link.hrefEs}
                className="px-3 py-2 text-sm font-semibold text-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all"
              >
                {t(link.labelEs, link.labelEn)}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3 text-brand-primary">
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
          <div className="flex items-center gap-2 text-brand-primary md:hidden">
            <a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Llamar al ${BUSINESS.phoneDisplay}`}
              className="p-2 hover:bg-brand-primary/10 rounded-lg transition-colors"
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
