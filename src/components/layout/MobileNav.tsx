'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS, BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={t('Abrir menú', 'Open menu')}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors md:hidden"
      >
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-brand-primary text-white border-none">
        <div className="flex flex-col h-full pt-8">
          <div className="mb-6 px-2">
            <LanguageToggle />
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hrefEs}
                href={link.hrefEs}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-lg font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                {t(link.labelEs, link.labelEn)}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-8 px-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-3 bg-brand-accent text-white font-bold py-4 px-6 rounded-2xl w-full justify-center"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phoneDisplay}
            </a>
            <p className="text-white/60 text-xs text-center mt-3">
              {t('Pacientes sin cita — Bienvenidos', 'Walk-in patients — Welcome')}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
