import { Metadata } from 'next'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'О компании - Sintec',
  description: 'Узнайте больше о компании Sintec - ведущем производителе смазочных материалов в Казахстане.',
}

export default function About() {
  return <AboutPage />
} 