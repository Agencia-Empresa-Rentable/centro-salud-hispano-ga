'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1 pt-[calc(2.5rem+4rem)] md:pt-[calc(2rem+4rem)]">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  )
}
