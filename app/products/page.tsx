import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/product-grid"
import { CategoryTabs } from "@/components/category-tabs"
import { getProducts } from "@/lib/redis"
import { AllProducts } from "@/components/all-products"

export const metadata = {
  title: "Products | Beans and Pods Trading Solutions",
  description: "Explore our range of premium agricultural trading products for your business needs",
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Our Products" description="Premium agricultural commodities for your business needs" />

      <CategoryTabs currentCategory="all" />

      {/* Show different component for "all" category */}
      <AllProducts products={products} />
    </div>
  )
}