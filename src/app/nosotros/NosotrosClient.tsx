'use client'

import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motion'
import { TEAM, VALUES } from '@/lib/constants'
import { TeamCard } from '@/components/nosotros/TeamCard'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export function NosotrosClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              {t('Sobre Nosotros', 'About Us')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t(
                'Conoce la historia, misión y el equipo detrás del Centro de Salud Hispano de Georgia.',
                'Meet the story, mission, and team behind Centro de Salud Hispano de Georgia.'
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & History */}
      <section className="section-padding bg-brand-base">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                {t('Nuestra Historia', 'Our Story')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                {t(
                  'Nacidos de la necesidad de nuestra comunidad',
                  'Born from our community\'s need'
                )}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t(
                    'El Centro de Salud Hispano de Georgia nació con un propósito claro: brindar atención médica de calidad a la comunidad hispana del norte de Atlanta, en su idioma y sin las barreras que normalmente enfrentan.',
                    'Centro de Salud Hispano de Georgia was founded with a clear purpose: to provide quality medical care to the Hispanic community of north Atlanta, in their language and without the barriers they typically face.'
                  )}
                </p>
                <p>
                  {t(
                    'Ubicados estratégicamente en Peachtree Corners, Georgia, atendemos a pacientes de toda la región metropolitana de Atlanta, incluyendo Norcross, Duluth, Lawrenceville y más allá.',
                    'Strategically located in Peachtree Corners, Georgia, we serve patients from throughout the greater Atlanta metropolitan area, including Norcross, Duluth, Lawrenceville and beyond.'
                  )}
                </p>
                <p>
                  {t(
                    'Nuestro compromiso es simple: tratar a cada paciente como si fuera de la familia, con respeto, calidez y la mejor medicina disponible. Sin importar su seguro médico, su estatus migratorio o su situación económica.',
                    'Our commitment is simple: treat every patient as if they were family, with respect, warmth, and the best medicine available. Regardless of insurance, immigration status, or financial situation.'
                  )}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {VALUES.map((value) => (
                  <div key={value.titleEs} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="font-heading font-bold text-brand-primary mb-2">
                      {t(value.titleEs, value.titleEn)}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {t(value.descEs, value.descEn)}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              {t('Nuestro Equipo', 'Our Team')}
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              {t('Médicos que se Preocupan por Usted', 'Doctors Who Care for You')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t(
                'Profesionales bilingües y comprometidos con la salud y bienestar de nuestra comunidad.',
                'Bilingual professionals committed to the health and wellbeing of our community.'
              )}
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission values banner */}
      <section className="bg-brand-primary py-16 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <p className="font-heading text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
              {t(
                '"Nuestra misión es ser el puente entre la comunidad hispana y el sistema de salud de Georgia."',
                '"Our mission is to be the bridge between the Hispanic community and Georgia\'s health system."'
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
