'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/context/LanguageContext'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: { faqEs: FaqItem[]; faqEn: FaqItem[] }
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const { lang } = useLanguage()
  const faqs = lang === 'es' ? items.faqEs : items.faqEn

  if (!faqs.length) return null

  return (
    <Accordion className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left font-semibold text-brand-primary hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
