import { productCategories } from "@/lib/constants"
import Link from "next/link"

interface CategoryTabsProps {
  currentCategory: string
}

export function CategoryTabs({ currentCategory }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 my-8 border-b">
      <Link
        href="/products"
        className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
          currentCategory === "all" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        All Products
      </Link>

      {productCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/${category.slug}`}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
            currentCategory === category.slug ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
