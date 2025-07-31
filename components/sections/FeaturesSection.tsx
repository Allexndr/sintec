'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Award, Zap, Headphones, Truck } from 'lucide-react'

export default function FeaturesSection() {
  const t = useTranslations()

  const features = [
    {
      icon: Award,
      title: t('features.quality.title'),
      description: t('features.quality.description')
    },
    {
      icon: Zap,
      title: t('features.innovation.title'),
      description: t('features.innovation.description')
    },
    {
      icon: Headphones,
      title: t('features.support.title'),
      description: t('features.support.description')
    },
    {
      icon: Truck,
      title: t('features.delivery.title'),
      description: t('features.delivery.description')
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            {t('features.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group p-4"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 