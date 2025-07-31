'use client'

import { motion } from 'framer-motion'
import { Eye, Download, FileText } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  description: string
  category: string
  image?: string
  hasPdf?: boolean
  hasMsds?: boolean
  specifications?: Record<string, string>
}

export default function ProductCard({
  id,
  name,
  description,
  category,
  image,
  hasPdf = false,
  hasMsds = false,
  specifications = {}
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card hover:shadow-lg transition-all duration-300 group-hover:border-primary-200 h-full">
        {/* Product Image */}
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-primary-500 text-4xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4 flex-1 flex flex-col">
          <div>
            <div className="text-sm text-primary-500 font-medium mb-2">
              {category}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-200">
              {name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Specifications Preview */}
          {Object.keys(specifications).length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Основные характеристики:</h4>
              <div className="space-y-1">
                {Object.entries(specifications).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-500">{key}:</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
                {Object.keys(specifications).length > 3 && (
                  <div className="text-xs text-gray-400">
                    +{Object.keys(specifications).length - 3} еще
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <Link
              href={`/catalog/product/${id}`}
              className="btn-primary text-sm"
            >
              <Eye className="w-4 h-4" />
              Подробнее
            </Link>
            
            <div className="flex items-center space-x-2">
              {hasPdf && (
                <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200" title="Скачать PDF">
                  <FileText className="w-4 h-4" />
                </button>
              )}
              {hasMsds && (
                <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200" title="Скачать MSDS">
                  <Download className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 