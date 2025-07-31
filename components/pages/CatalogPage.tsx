'use client'

import { useTranslations } from 'next-intl'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function CatalogPage() {
  const t = useTranslations()
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    {
      id: 'motor-oils',
      name: 'catalog.categories.motor-oils',
      description: 'catalog.descriptions.motor-oils',
      image: '/images/motor-oils.jpg',
      productCount: 12
    },
    {
      id: 'transmission-oils',
      name: 'catalog.categories.transmission-oils',
      description: 'catalog.descriptions.transmission-oils',
      image: '/images/transmission-oils.jpg',
      productCount: 8
    },
    {
      id: 'greases',
      name: 'catalog.categories.greases',
      description: 'catalog.descriptions.greases',
      image: '/images/greases.jpg',
      productCount: 15
    },
    {
      id: 'hydraulic-oils',
      name: 'catalog.categories.hydraulic-oils',
      description: 'catalog.descriptions.hydraulic-oils',
      image: '/images/hydraulic-oils.jpg',
      productCount: 6
    },
    {
      id: 'special-oils',
      name: 'catalog.categories.special-oils',
      description: 'catalog.descriptions.special-oils',
      image: '/images/special-oils.jpg',
      productCount: 10
    },
    {
      id: 'industrial-oils',
      name: 'catalog.categories.industrial-oils',
      description: 'catalog.descriptions.industrial-oils',
      image: '/images/industrial-oils.jpg',
      productCount: 14
    }
  ]

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories
    
    return categories.filter(category => 
      t(category.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(category.description).toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, t])

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('catalog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('catalog.description')}
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('catalog.search')}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/catalog/${category.id}`}
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-primary-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-primary-600 text-4xl font-bold">
                      {t(category.name).charAt(0)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {t(category.name)}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {t(category.description)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.productCount} {t('catalog.productsCount')}
                      </span>
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-200">
                        <Filter className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('catalog.noResults')}
            </h3>
            <p className="text-gray-600">
              {t('catalog.noResultsDescription')}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 