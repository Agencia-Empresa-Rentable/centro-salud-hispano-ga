'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { itemVariants, cardHoverVariants } from '@/lib/motion'
import type { BlogPost } from '@/types'
import { useLanguage } from '@/context/LanguageContext'
import { Calendar } from 'lucide-react'

function formatDate(dateStr: string, lang: string) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-US' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))
}

export function BlogCard({ post }: { post: BlogPost }) {
  const { t, lang } = useLanguage()

  return (
    <motion.article variants={itemVariants}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 h-full flex flex-col"
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={post.image}
            alt={t(post.titleEs, post.titleEn)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
            {t(post.categoryEs, post.categoryEn)}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
          </div>
          <h2 className="font-heading text-xl font-bold text-brand-primary mb-3 leading-tight">
            {t(post.titleEs, post.titleEn)}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {t(post.excerptEs, post.excerptEn)}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
          >
            {t('Leer más', 'Read more')} →
          </Link>
        </div>
      </motion.div>
    </motion.article>
  )
}
