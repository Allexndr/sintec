'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'

// Моковые данные товаров
const mockProducts = {
  'motor-oils': [
    {
      id: 'motor-1',
      name: 'Моторное масло Sintec 5W-30',
      description: 'Высококачественное синтетическое моторное масло для современных двигателей',
      category: 'Моторные масла',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Вязкость': '5W-30',
        'API': 'SN/CF',
        'ACEA': 'A3/B4',
        'Объем': '1L, 4L, 20L'
      }
    },
    {
      id: 'motor-2',
      name: 'Моторное масло Sintec 10W-40',
      description: 'Полусинтетическое моторное масло для бензиновых и дизельных двигателей',
      category: 'Моторные масла',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Вязкость': '10W-40',
        'API': 'SN/CF',
        'ACEA': 'A3/B4',
        'Объем': '1L, 4L, 20L'
      }
    },
    {
      id: 'motor-3',
      name: 'Моторное масло Sintec 15W-40',
      description: 'Минеральное моторное масло для старых двигателей',
      category: 'Моторные масла',
      hasPdf: true,
      hasMsds: false,
      specifications: {
        'Вязкость': '15W-40',
        'API': 'SG/CD',
        'ACEA': 'A2/B2',
        'Объем': '1L, 4L, 20L'
      }
    }
  ],
  'transmission-oils': [
    {
      id: 'trans-1',
      name: 'Трансмиссионное масло Sintec 75W-90',
      description: 'Синтетическое трансмиссионное масло для механических коробок передач',
      category: 'Трансмиссионные масла',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Вязкость': '75W-90',
        'API': 'GL-4',
        'Объем': '1L, 4L'
      }
    },
    {
      id: 'trans-2',
      name: 'Трансмиссионное масло Sintec 80W-90',
      description: 'Минеральное трансмиссионное масло для редукторов',
      category: 'Трансмиссионные масла',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Вязкость': '80W-90',
        'API': 'GL-5',
        'Объем': '1L, 4L'
      }
    }
  ],
  'greases': [
    {
      id: 'grease-1',
      name: 'Пластичная смазка Sintec EP-2',
      description: 'Многоцелевая пластичная смазка с противозадирными присадками',
      category: 'Пластичные смазки',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Класс консистентности': '2',
        'Температурный диапазон': '-20°C до +120°C',
        'Упаковка': '400г, 1кг, 18кг'
      }
    },
    {
      id: 'grease-2',
      name: 'Пластичная смазка Sintec EP-3',
      description: 'Высокотемпературная пластичная смазка для промышленного применения',
      category: 'Пластичные смазки',
      hasPdf: true,
      hasMsds: true,
      specifications: {
        'Класс консистентности': '3',
        'Температурный диапазон': '-10°C до +150°C',
        'Упаковка': '400г, 1кг, 18кг'
      }
    }
  ]
}

const categoryNames: Record<string, string> = {
  'motor-oils': 'Моторные масла',
  'transmission-oils': 'Трансмиссионные масла',
  'greases': 'Пластичные смазки',
  'hydraulic-oils': 'Гидравлические масла',
  'special-oils': 'Специальные масла',
  'industrial-oils': 'Промышленные масла'
}

interface CategoryPageProps {
  category: string
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({})

  const categoryName = categoryNames[category] || category
  const products = mockProducts[category as keyof typeof mockProducts] || []

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSpecs = Object.entries(selectedSpecs).every(([key, value]) => {
        if (!value) return true
        return (product.specifications as Record<string, string>)[key]?.toLowerCase().includes(value.toLowerCase())
      })
      
      return matchesSearch && matchesSpecs
    })
  }, [products, searchQuery, selectedSpecs])

  const availableSpecs = useMemo(() => {
    const specs: Record<string, Set<string>> = {}
    products.forEach(product => {
      Object.entries(product.specifications).forEach(([key, value]) => {
        if (!specs[key]) specs[key] = new Set()
        specs[key].add(value)
      })
    })
    return specs
  }, [products])

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-500 transition-colors duration-200">
            Главная
          </Link>
          <ChevronLeft className="w-4 h-4" />
          <Link href="/catalog" className="hover:text-primary-500 transition-colors duration-200">
            Каталог
          </Link>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-gray-900">{categoryName}</span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Высококачественные {categoryName.toLowerCase()} от Sintec. 
            Широкий ассортимент для всех типов оборудования.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary"
            >
              <Filter className="w-5 h-5" />
              Фильтры
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-gray-50 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(availableSpecs).map(([specKey, values]) => (
                  <div key={specKey}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {specKey}
                    </label>
                    <select
                      value={selectedSpecs[specKey] || ''}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        [specKey]: e.target.value
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Все</option>
                      {Array.from(values).map(value => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              
              {Object.keys(selectedSpecs).some(key => selectedSpecs[key]) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedSpecs({})}
                    className="text-sm text-primary-500 hover:text-primary-600 transition-colors duration-200"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Найдено {filteredProducts.length} товаров
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска или фильтры
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 