const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки изображений
  images: {
    domains: ['localhost', 'vercel.app', '*.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },
  
  // Настройки сборки
  swcMinify: true,
  
  // Компрессия
  compress: true,
}

module.exports = withNextIntl(nextConfig) 