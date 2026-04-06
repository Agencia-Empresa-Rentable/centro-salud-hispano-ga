'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
      ))}
    </div>
  )
}

export function TestimonialCarousel() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="section-padding bg-brand-primary text-white" aria-labelledby="testimonios-heading">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {t('Testimonios', 'Testimonials')}
          </span>
          <h2 id="testimonios-heading" className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('Lo que Dicen Nuestros Pacientes', 'What Our Patients Say')}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            {t(
              'La confianza de nuestra comunidad es nuestro mayor orgullo.',
              'The trust of our community is our greatest pride.'
            )}
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1)
                if (info.offset.x > 80) paginate(-1)
              }}
              className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-10 cursor-grab active:cursor-grabbing"
            >
              <div className="mb-4">
                <StarRating rating={TESTIMONIALS[current].rating} />
              </div>
              <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-light mb-6 italic">
                &ldquo;{t(TESTIMONIALS[current].textEs, TESTIMONIALS[current].textEn)}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-white text-lg">{TESTIMONIALS[current].name}</p>
                <p className="text-white/60 text-sm">{TESTIMONIALS[current].city}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              aria-label={t('Testimonio anterior', 'Previous testimonial')}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  aria-label={`${t('Ir al testimonio', 'Go to testimonial')} ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-brand-accent w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              aria-label={t('Siguiente testimonio', 'Next testimonial')}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
