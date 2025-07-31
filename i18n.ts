import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Список поддерживаемых локалей
export const locales = ['ru', 'en'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  // Проверяем, что локаль поддерживается
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
}) 