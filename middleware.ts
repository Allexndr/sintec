import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  // Список поддерживаемых локалей
  locales,
  
  // Локаль по умолчанию
  defaultLocale: 'ru',
  
  // Локальная стратегия
  localePrefix: 'always'
})

export const config = {
  // Обрабатываем все пути, кроме статических файлов и API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
} 