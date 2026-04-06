'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'

const GHL_FORM_URL = process.env.NEXT_PUBLIC_GHL_FORM_URL

function PlaceholderForm() {
  const { t } = useLanguage()

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">
        {t('Envíenos un Mensaje', 'Send Us a Message')}
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        {t(
          'Complete el formulario y nos pondremos en contacto muy pronto.',
          'Fill out the form and we\'ll get back to you very soon.'
        )}
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert(t(
            'Gracias por su mensaje. Le contactaremos pronto. Para respuesta inmediata llame al ' + BUSINESS.phoneDisplay,
            'Thank you for your message. We\'ll contact you soon. For immediate response call ' + BUSINESS.phoneDisplay
          ))
        }}
        className="space-y-4"
        aria-label={t('Formulario de contacto', 'Contact form')}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
              {t('Nombre', 'First Name')} *
            </label>
            <input
              id="first-name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              placeholder={t('Su nombre', 'Your first name')}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
              {t('Apellido', 'Last Name')} *
            </label>
            <input
              id="last-name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
              placeholder={t('Su apellido', 'Your last name')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('Teléfono', 'Phone')} *
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('Correo electrónico', 'Email')}
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary"
            placeholder={t('su@correo.com', 'your@email.com')}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            {t('Servicio de interés', 'Service of interest')}
          </label>
          <select
            id="service"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary bg-white"
          >
            <option value="">{t('Seleccionar...', 'Select...')}</option>
            <option>{t('Medicina Familiar', 'Family Medicine')}</option>
            <option>{t('Pediatría', 'Pediatrics')}</option>
            <option>{t('Diabetes / Hipertensión', 'Diabetes / Hypertension')}</option>
            <option>{t('Sueros Vitaminados', 'Vitamin IV Therapy')}</option>
            <option>{t('Laboratorios', 'Lab Tests')}</option>
            <option>{t('Otro', 'Other')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t('Mensaje', 'Message')}
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary resize-none"
            placeholder={t('¿En qué podemos ayudarle?', 'How can we help you?')}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-primary hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-colors"
        >
          {t('Enviar Mensaje', 'Send Message')}
        </button>

        <p className="text-xs text-gray-400 text-center">
          {t(
            'Para respuesta inmediata, llámenos al',
            'For immediate response, call us at'
          )}{' '}
          <a href={`tel:${BUSINESS.phone}`} className="text-brand-primary font-semibold">
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  )
}

export function GHLFormEmbed() {
  if (!GHL_FORM_URL) {
    return <PlaceholderForm />
  }

  return (
    <div className="ghl-form-wrapper bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <iframe
        src={GHL_FORM_URL}
        title="Formulario de contacto"
        loading="lazy"
        className="w-full min-h-[600px] border-0"
      />
    </div>
  )
}
