'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()

  const quickLinks = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.catalog'), href: '/catalog' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contacts'), href: '/contacts' },
  ]

  const categories = [
    { name: t('catalog.categories.motor-oils'), href: '/catalog/motor-oils' },
    { name: t('catalog.categories.transmission-oils'), href: '/catalog/transmission-oils' },
    { name: t('catalog.categories.greases'), href: '/catalog/greases' },
    { name: t('catalog.categories.hydraulic-oils'), href: '/catalog/hydraulic-oils' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Sintec</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+7 (727) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>info@sintec.kz</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{t('contacts.info.addressValue')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.categories')}</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
} 