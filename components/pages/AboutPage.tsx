'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Award, Users, Target, Globe, Factory, Truck } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'about.stats.years' },
  { icon: Users, value: '500+', label: 'about.stats.clients' },
  { icon: Target, value: '50+', label: 'about.stats.products' },
  { icon: Truck, value: '100%', label: 'about.stats.quality' }
]

const values = [
  {
    icon: Award,
    title: 'about.values.quality.title',
    description: 'about.values.quality.description'
  },
  {
    icon: Target,
    title: 'about.values.innovation.title',
    description: 'about.values.innovation.description'
  },
  {
    icon: Users,
    title: 'about.values.clients.title',
    description: 'about.values.clients.description'
  },
  {
    icon: Globe,
    title: 'about.values.sustainability.title',
    description: 'about.values.sustainability.description'
  }
]

const timeline = [
  {
    year: '2009',
    title: 'Основание компании',
    description: 'Создание компании Sintec и начало производства смазочных материалов'
  },
  {
    year: '2012',
    title: 'Расширение ассортимента',
    description: 'Запуск производства трансмиссионных и гидравлических масел'
  },
  {
    year: '2015',
    title: 'Международная сертификация',
    description: 'Получение сертификатов ISO 9001 и соответствие стандартам API'
  },
  {
    year: '2018',
    title: 'Новые технологии',
    description: 'Внедрение передовых технологий производства и контроля качества'
  },
  {
    year: '2021',
    title: 'Экспорт продукции',
    description: 'Начало экспорта продукции в страны СНГ и дальнего зарубежья'
  },
  {
    year: '2024',
    title: 'Цифровая трансформация',
    description: 'Запуск современного веб-сайта и цифровых сервисов для клиентов'
  }
]

export default function AboutPage() {
  const t = useTranslations()

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{t(stat.label)}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            {t('about.values.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{t(value.title)}</h4>
                <p className="text-gray-600 leading-relaxed">{t(value.description)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            История развития
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-primary-500 mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 