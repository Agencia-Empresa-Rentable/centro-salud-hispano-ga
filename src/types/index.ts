export interface Service {
  id: string
  icon: string
  nameEs: string
  nameEn: string
  descriptionEs: string
  descriptionEn: string
  detailsEs: string[]
  detailsEn: string[]
  faqEs: { question: string; answer: string }[]
  faqEn: { question: string; answer: string }[]
}

export interface TeamMember {
  id: string
  name: string
  titleEs: string
  titleEn: string
  specialtyEs: string
  specialtyEn: string
  bioEs: string
  bioEn: string
  languages: string[]
  photo: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  rating: number
  textEs: string
  textEn: string
}

export interface BlogPost {
  id: string
  slug: string
  titleEs: string
  titleEn: string
  excerptEs: string
  excerptEn: string
  categoryEs: string
  categoryEn: string
  date: string
  image: string
}

export interface NavLink {
  hrefEs: string
  labelEs: string
  labelEn: string
}

export interface BusinessHours {
  dayEs: string
  dayEn: string
  hours: string | null
}

export type Language = 'es' | 'en'
