import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { ContactoClient } from './ContactoClient'

export const metadata: Metadata = buildMetadata({
  title: 'Contáctenos — Sin Cita Previa',
  description:
    'Visítenos sin cita en el Centro de Salud Hispano de Georgia. Todos los pacientes son bienvenidos por orden de llegada. Peachtree Corners, GA — (470) 448-1172.',
  path: '/contacto',
})

export default function ContactoPage() {
  return <ContactoClient />
}
