'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { sectionVariants } from '@/lib/motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article'
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const MotionTag = motion[Tag]

  return (
    <MotionTag
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
