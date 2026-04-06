import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/layout/Providers'
import { BUSINESS } from '@/lib/constants'

const playfairDisplay = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const sourceSans3 = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | Médico Familiar Hispano en Peachtree Corners, Georgia`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Clínica médica bilingüe en Peachtree Corners, GA. Atendemos familias hispanas con o sin seguro. Medicina familiar, pediatría, diabetes, hipertensión y más. Llame hoy: (470) 448-1172.',
  keywords: [
    'clinica hispana georgia',
    'medico familiar peachtree corners',
    'clinica latina georgia',
    'medico habla español georgia',
    'clinica bilingüe atlanta',
    'medico sin seguro georgia',
    'pediatria hispana georgia',
    'diabetes hipertension georgia',
    'centro de salud hispano georgia',
    'walk in clinic peachtree corners',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Clínica Médica Bilingüe en Georgia`,
    description:
      'Atención médica bilingüe para toda la familia en Peachtree Corners, GA. Con o sin seguro. Llámenos: (470) 448-1172.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Clínica Médica Bilingüe`,
    description: 'Atención médica bilingüe para toda la familia en Georgia.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalClinic'],
  name: BUSINESS.name,
  description:
    'Clínica médica familiar bilingüe que atiende a la comunidad hispana de Georgia con servicios de medicina familiar, pediatría, diabetes, hipertensión, sueros vitaminados, suturas y laboratorios.',
  url: BUSINESS.siteUrl,
  telephone: BUSINESS.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.addressLine1,
    addressLocality: BUSINESS.city,
    addressRegion: 'GA',
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.lat,
    longitude: BUSINESS.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Sunday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD',
  priceRange: '$$',
  inLanguage: ['es', 'en'],
  medicalSpecialty: ['FamilyMedicine', 'Pediatrics', 'InternalMedicine'],
  hasMap: BUSINESS.googleMapsUrl,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-base">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
