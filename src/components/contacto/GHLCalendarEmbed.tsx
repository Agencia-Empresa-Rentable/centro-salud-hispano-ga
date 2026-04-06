'use client'

import { useLanguage } from '@/context/LanguageContext'
import { BUSINESS } from '@/lib/constants'
import Link from 'next/link'
import { Phone, Clock } from 'lucide-react'
import { HOURS } from '@/lib/constants'

const GHL_CALENDAR_URL = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL

function PlaceholderCalendar() {
  const { t } = useLanguage()

  return (
    <div className="bg-brand-primary/5 border-2 border-dashed border-brand-primary/30 rounded-3xl p-8 text-center">
      <div className="text-5xl mb-4">📅</div>
      <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">
        {t('Reserve su Cita', 'Book Your Appointment')}
      </h3>
      <p className="text-gray-600 mb-6">
        {t(
          'El sistema de reservas en línea estará disponible muy pronto. Por ahora, puede agendar su cita llamándonos.',
          'The online booking system will be available soon. For now, you can schedule your appointment by calling us.'
        )}
      </p>
      <a
        href={`tel:${BUSINESS.phone}`}
        className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-900 transition-colors"
      >
        <Phone className="w-5 h-5" />
        {BUSINESS.phoneDisplay}
      </a>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-3">
          <Clock className="w-4 h-4" />
          <span>{t('Horario de atención', 'Office hours')}</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-sm max-w-xs mx-auto">
          {HOURS.filter((h) => h.hours).map((h) => (
            <div key={h.dayEs} className="flex justify-between gap-2">
              <span className="text-gray-500">{t(h.dayEs.slice(0, 3), h.dayEn.slice(0, 3))}</span>
              <span className="text-gray-700 font-medium text-xs">{h.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GHLCalendarEmbed() {
  if (!GHL_CALENDAR_URL) {
    return <PlaceholderCalendar />
  }

  return (
    <div className="ghl-calendar-wrapper rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      <iframe
        src={GHL_CALENDAR_URL}
        title="Calendario de citas"
        loading="lazy"
        className="w-full min-h-[600px] border-0"
      />
    </div>
  )
}
