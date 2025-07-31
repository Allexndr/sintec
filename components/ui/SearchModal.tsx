'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const mockProducts = [
  { id: 1, name: 'Моторное масло Sintec 5W-30', category: 'Моторные масла', url: '/catalog/motor-oils/5w-30' },
  { id: 2, name: 'Трансмиссионное масло Sintec 75W-90', category: 'Трансмиссионные масла', url: '/catalog/transmission-oils/75w-90' },
  { id: 3, name: 'Пластичная смазка Sintec EP-2', category: 'Пластичные смазки', url: '/catalog/greases/ep-2' },
  { id: 4, name: 'Гидравлическое масло Sintec HM-46', category: 'Гидравлические масла', url: '/catalog/hydraulic-oils/hm-46' },
  { id: 5, name: 'Моторное масло Sintec 10W-40', category: 'Моторные масла', url: '/catalog/motor-oils/10w-40' },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const t = useTranslations()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof mockProducts>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true)
      // Имитация поиска
      setTimeout(() => {
        const filtered = mockProducts.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleResultClick = () => {
    onClose()
    setQuery('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative max-w-2xl mx-auto mt-20 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{t('search.title')}</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('search.placeholder')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    autoFocus
                  />
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-6 text-center text-gray-500">
                    {t('search.loading')}
                  </div>
                ) : query.trim() ? (
                  results.length > 0 ? (
                    <div className="p-6 space-y-4">
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          href={product.url}
                          onClick={handleResultClick}
                          className="block p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{product.name}</h3>
                              <p className="text-sm text-gray-500">{product.category}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      {t('search.noResults')}
                    </div>
                  )
                ) : (
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 mb-4">{t('search.popularCategories')}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['motor-oils', 'transmission-oils', 'greases', 'hydraulic-oils'].map((category) => (
                        <Link
                          key={category}
                          href={`/catalog/${category}`}
                          onClick={handleResultClick}
                          className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-center"
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {t(`catalog.categories.${category}`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 