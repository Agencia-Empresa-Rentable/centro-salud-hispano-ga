'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { itemVariants, cardHoverVariants } from '@/lib/motion'
import type { TeamMember } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

export function TeamCard({ member }: { member: TeamMember }) {
  const { t } = useLanguage()

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100"
      >
        {/* Photo */}
        <div className="relative aspect-square">
          <Image
            src={member.photo}
            alt={`${member.name} — ${t(member.titleEs, member.titleEn)}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-brand-primary">{member.name}</h3>
          <p className="text-brand-secondary font-semibold text-sm mt-1">
            {t(member.titleEs, member.titleEn)}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t(member.bioEs, member.bioEn)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
