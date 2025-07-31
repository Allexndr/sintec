import { Metadata } from 'next'
import CategoryPage from '@/components/pages/CategoryPage'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category)
  
  return {
    title: `${categoryName} - Sintec`,
    description: `Высококачественные ${categoryName.toLowerCase()} от Sintec. Широкий ассортимент, гарантия качества.`,
  }
}

export default function Category({ params }: CategoryPageProps) {
  return <CategoryPage category={params.category} />
} 