import { productCategories } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

export function ProductCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/${category.slug}`}
          className="group relative block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* Image container with gradient overlay */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={category.image || "/images/category-placeholder.jpg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-white/90 mb-4 line-clamp-2">{category.description}</p>
            <span className="inline-flex items-center font-medium text-white/90 group-hover:text-white transition-colors">
              Explore {category.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}