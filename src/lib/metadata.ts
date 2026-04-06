import type { Metadata } from 'next'
import { BUSINESS } from './constants'

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  const url = `${BUSINESS.siteUrl}${path}`
  const fullTitle = `${title} | ${BUSINESS.name}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BUSINESS.siteUrl),
    alternates: { canonical: url },
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    keywords: [
      'clinica hispana georgia',
      'medico familiar peachtree corners',
      'clinica latina georgia',
      'medico habla español georgia',
      'clinica bilingüe atlanta',
      'medico sin seguro georgia',
      'pediatria hispana georgia',
      'diabetes hipertension georgia',
      'centro de salud hispano',
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: 'es_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — Clínica Médica Bilingüe en Georgia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/og-image.jpg'],
    },
  }
}
