import { ProductCard } from "@/components/product-card"

interface Product {
  id: string
  name: string
  slug: string
  category: string
  image: string
  shortDescription: string
}

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
