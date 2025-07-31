'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('contacts.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contacts.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('contacts.form.title')}
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field w-full"
                  placeholder={t('contacts.form.name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field w-full"
                  placeholder={t('contacts.form.email')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field w-full"
                  placeholder={t('contacts.form.phone')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field w-full resize-none"
                  placeholder={t('contacts.form.message')}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t('contacts.form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contacts.info.address')}
              </h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">{t('contacts.info.addressValue')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contacts.info.phone')}
              </h3>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="text-gray-900 font-medium">+7 (727) 123-45-67</p>
                  <p className="text-gray-600">+7 (727) 123-45-68</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contacts.info.email')}
              </h3>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="text-gray-900 font-medium">info@sintec.kz</p>
                  <p className="text-gray-600">sales@sintec.kz</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contacts.info.workingHours')}
              </h3>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="text-gray-900 font-medium">{t('contacts.info.workingHoursValue')}</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Карта будет добавлена позже</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 