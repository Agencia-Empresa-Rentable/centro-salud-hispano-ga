import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { NosotrosClient } from './NosotrosClient'

export const metadata: Metadata = buildMetadata({
  title: 'Sobre Nosotros — Nuestro Equipo',
  description:
    'Conozca al equipo médico del Centro de Salud Hispano de Georgia. Médicos bilingües comprometidos con la salud de la comunidad hispana en Peachtree Corners, GA.',
  path: '/nosotros',
})

export default function NosotrosPage() {
  return <NosotrosClient />
}
