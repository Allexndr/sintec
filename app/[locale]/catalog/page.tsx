import { Metadata } from 'next'
import CatalogPage from '@/components/pages/CatalogPage'

export const metadata: Metadata = {
  title: 'Каталог продукции - Sintec',
  description: 'Полный ассортимент смазочных материалов для различных применений',
}

export default function Catalog() {
  return <CatalogPage />
} 