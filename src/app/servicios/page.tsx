import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { SERVICES, BUSINESS } from '@/lib/constants'
import { SchemaOrg } from '@/components/shared/SchemaOrg'
import { ServicesPageClient } from './ServicesPageClient'

export const metadata: Metadata = buildMetadata({
  title: 'Nuestros Servicios Médicos',
  description:
    'Medicina familiar, pediatría, sueros vitaminados, tratamiento de diabetes e hipertensión, suturas, cirugías menores y laboratorios en Peachtree Corners, GA. Sin seguro requerido.',
  path: '/servicios',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICES.flatMap((service) =>
    service.faqEs.map((faq, i) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
}

export default function ServiciosPage() {
  return (
    <>
      <SchemaOrg schema={faqSchema} />
      <ServicesPageClient />
    </>
  )
}
