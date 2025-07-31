'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Search, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SearchModal from '@/components/ui/SearchModal'

export default function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.catalog'), href: '/catalog' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contacts'), href: '/contacts' },
  ]

  const toggleLanguage = () => {
    const newLocale = locale === 'ru' ? 'en' : 'ru'
    window.location.href = `/${newLocale}${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Sintec</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{locale.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setSearchOpen(true)
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                  >
                    <Search className="w-5 h-5" />
                    <span className="text-sm">{t('search.title')}</span>
                  </button>
                  <button 
                    onClick={() => {
                      toggleLanguage()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{locale.toUpperCase()}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
} 