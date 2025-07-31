import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Sintec - Производство высококачественных смазочных материалов',
  description: 'Ведущий производитель смазочных материалов в Казахстане. Инновационные решения для промышленности и транспорта.',
  keywords: 'смазочные материалы, моторные масла, трансмиссионные масла, пластичные смазки, Sintec, Казахстан',
  openGraph: {
    title: 'Sintec - Производство высококачественных смазочных материалов',
    description: 'Ведущий производитель смазочных материалов в Казахстане',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </>
  )
} 