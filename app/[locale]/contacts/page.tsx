import { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Контакты - Sintec',
  description: 'Свяжитесь с нами для получения консультации или размещения заказа',
}

export default function Contacts() {
  return <ContactPage />
} 