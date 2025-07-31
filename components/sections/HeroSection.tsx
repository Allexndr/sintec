'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 z-10 relative"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2">{t('hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block text-primary-500">{t('hero.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="pt-4">
              <Link
                href="/catalog"
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quality Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end z-10"
          >
            <div className="bg-primary-500 rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl max-w-sm w-full">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Award className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('hero.quality')}</h3>
              <p className="text-primary-100 text-sm md:text-lg leading-relaxed">
                Соответствие международным стандартам ISO и API
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-100 rounded-full -translate-y-32 md:-translate-y-48 translate-x-32 md:translate-x-48 opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-primary-200 rounded-full translate-y-24 md:translate-y-32 -translate-x-24 md:-translate-x-32 opacity-30 pointer-events-none"></div>
    </section>
  )
} 