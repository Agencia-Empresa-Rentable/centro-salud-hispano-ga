'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const items = [
  { icon: '👨‍👩‍👧‍👦', numEs: '5,000+', numEn: '5,000+', labelEs: 'Pacientes Atendidos', labelEn: 'Patients Served' },
  { icon: '📅', numEs: '10+', numEn: '10+', labelEs: 'Años de Experiencia', labelEn: 'Years of Experience' },
  { icon: '🗣️', numEs: '100%', numEn: '100%', labelEs: 'Bilingüe Español/Inglés', labelEn: 'Bilingual Spanish/English' },
  { icon: '🛡️', numEs: '✓', numEn: '✓', labelEs: 'Sin Importar su Estatus', labelEn: 'Any Immigration Status' },
]

export function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="bg-brand-primary py-10" aria-label={t('Estadísticas de confianza', 'Trust statistics')}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.labelEs}
              variants={itemVariants}
              className="text-center text-white"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
              <div className="font-heading text-3xl font-bold text-brand-accent">
                {t(item.numEs, item.numEn)}
              </div>
              <div className="text-sm text-white/80 mt-1">
                {t(item.labelEs, item.labelEn)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
