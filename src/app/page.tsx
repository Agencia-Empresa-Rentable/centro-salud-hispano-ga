import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { MapSection } from '@/components/home/MapSection'
import { CtaBanner } from '@/components/home/CtaBanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Clínica Hispana en Peachtree Corners, Georgia',
  description:
    'Centro de Salud Hispano de Georgia — Clínica médica bilingüe en Peachtree Corners, GA. Medicina familiar, pediatría, diabetes, hipertensión, sueros vitaminados y más. Llame: (470) 448-1172.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyUsSection />
      <TestimonialCarousel />
      <MapSection />
      <CtaBanner />
    </>
  )
}
