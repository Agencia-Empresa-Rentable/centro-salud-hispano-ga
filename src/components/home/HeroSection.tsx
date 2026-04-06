'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Shield } from 'lucide-react'
import { heroStagger, heroItem } from '@/lib/motion'
import { BUSINESS } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=900&fit=crop"
          alt={t('Familia hispana feliz y saludable', 'Happy, healthy Hispanic family')}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-secondary/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-brand-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 container-custom py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text content */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Badge */}
            <motion.div variants={heroItem} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold">
                <Shield className="w-4 h-4" />
                {t('Atendemos sin importar su estatus migratorio', 'We serve regardless of immigration status')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
            >
              {t('Su Salud,', 'Your Health,')}
              <span className="block text-brand-accent">
                {t('Nuestra Misión', 'Our Mission')}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItem}
              className="text-xl md:text-2xl text-white/80 font-light mb-4"
            >
              {t(
                'Atención médica bilingüe para toda la familia',
                'Bilingual medical care for the whole family'
              )}
            </motion.p>
            <motion.p
              variants={heroItem}
              className="text-white/60 text-base mb-8 max-w-lg"
            >
              {t(
                'Medicina familiar, pediatría, diabetes, hipertensión y más. Hablamos su idioma y lo atendemos con el respeto que merece.',
                'Family medicine, pediatrics, diabetes, hypertension and more. We speak your language and treat you with the respect you deserve.'
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-3 bg-brand-accent hover:bg-yellow-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100"
              >
                <Phone className="w-5 h-5" />
                {t('Llámenos:', 'Call Us:')} {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/servicios"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold py-4 px-8 rounded-2xl text-lg border border-white/30 transition-all"
              >
                {t('Ver Servicios', 'View Services')}
              </Link>
            </motion.div>

            {/* Location */}
            <motion.div variants={heroItem}>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 text-brand-accent" />
                {BUSINESS.address}
              </a>
            </motion.div>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=900&fit=crop"
                alt={t('Doctor atendiendo a paciente hispana', 'Doctor attending Hispanic patient')}
                fill
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover"
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {t('Disponibles Hoy', 'Available Today')}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {t('Lun–Jue 9:30am–6pm | Vie–Dom 9am–4pm', 'Mon–Thu 9:30am–6pm | Fri–Sun 9am–4pm')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  )
}
