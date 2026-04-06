'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motion'
import { WHY_US } from '@/lib/constants'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export function WhyUsSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-white" aria-labelledby="por-que-heading">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {t('¿Por qué elegirnos?', 'Why choose us?')}
          </span>
          <h2 id="por-que-heading" className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            {t('Atención que Marca la Diferencia', 'Care That Makes a Difference')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t(
              'No somos solo una clínica. Somos su aliado en salud, que habla su idioma y entiende su cultura.',
              'We\'re not just a clinic. We\'re your health ally, speaking your language and understanding your culture.'
            )}
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {WHY_US.map((item) => (
            <motion.div
              key={item.titleEs}
              variants={itemVariants}
              className="text-center p-8 rounded-3xl bg-brand-base hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{item.icon}</div>
              <h3 className="font-heading text-2xl font-bold text-brand-primary mb-3">
                {t(item.titleEs, item.titleEn)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(item.descEs, item.descEn)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
