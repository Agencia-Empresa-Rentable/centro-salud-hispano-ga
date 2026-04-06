import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { BlogClient } from './BlogClient'

export const metadata: Metadata = buildMetadata({
  title: 'Blog de Salud en Español',
  description:
    'Artículos de salud, consejos médicos y noticias en español para la comunidad hispana de Georgia. Prevención, nutrición, salud familiar y más.',
  path: '/blog',
})

export default function BlogPage() {
  return <BlogClient />
}
