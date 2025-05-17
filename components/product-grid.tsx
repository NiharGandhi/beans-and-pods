import { ProductCard } from "@/components/product-card"

interface Product {
  id: string
  name: string
  slug: string
  category: string
  image: string
  shortDescription: string
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  // If no products are found, show a message
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-2 text-sm text-gray-500">
          We couldn't find any products in this category. Please check back later or browse other categories.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
