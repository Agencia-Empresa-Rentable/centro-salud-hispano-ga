'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motion'
import { BLOG_POSTS } from '@/lib/constants'
import { BlogCard } from '@/components/blog/BlogCard'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

const categories = {
  es: ['Todos', 'Prevención', 'Nutrición', 'Salud Familiar', 'Salud Mental', 'Recursos'],
  en: ['All', 'Prevention', 'Nutrition', 'Family Health', 'Mental Health', 'Resources'],
}

export function BlogClient() {
  const { t, lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(lang === 'es' ? 'Todos' : 'All')

  const cats = lang === 'es' ? categories.es : categories.en

  const filtered =
    activeCategory === 'Todos' || activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) =>
          lang === 'es'
            ? post.categoryEs === activeCategory
            : post.categoryEn === activeCategory
        )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              {t('Blog de Salud', 'Health Blog')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t(
                'Consejos, recursos y artículos de salud para su familia.',
                'Tips, resources and health articles for your family.'
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-base">
        <div className="container-custom">
          {/* Category filter */}
          <AnimatedSection className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-brand-primary/10 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              {t('No hay artículos en esta categoría.', 'No articles in this category.')}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
