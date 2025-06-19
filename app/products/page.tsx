import { PageHeader } from "@/components/page-header"
import { CategoryTabs } from "@/components/category-tabs"
import { AllProducts } from "@/components/all-products"

export const metadata = {
  title: "Our Products | Premium Agricultural Commodities | Beans and Pods",
  description: "Explore our range of premium agricultural trading products including cocoa beans, vanilla, spices, coffee, grains and pulses, and essential oils for your business needs",
  keywords: [
    "agricultural products wholesale",
    "bulk cocoa beans",
    "vanilla beans export",
    "spices supplier Dubai",
    "coffee beans wholesale",
    "essential oils manufacturer"
  ],
  openGraph: {
    title: "Our Products | Beans and Pods",
    description: "Premium agricultural commodities for your business needs",
    url: "/products",
    images: [
      {
        url: "/product_categories/all-products.jpg",
        width: 1200,
        height: 630,
        alt: "Beans and Pods Product Range",
      }
    ],
  },
  alternates: {
    canonical: "/products",
  }
}

export default async function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Our Products" description="Premium agricultural commodities for your business needs" />

      <CategoryTabs currentCategory="all" />

      {/* Show different component for "all" category */}
      <AllProducts />
    </div>
  )
}