import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: string
  name: string
  slug: string
  category: string
  image: string
  shortDescription: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // If no products are provided, use default products
  const displayProducts =
    products.length > 0
      ? products
      : [
          {
            id: "1",
            name: "Premium Coffee Beans",
            slug: "premium-coffee-beans",
            category: "beans",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "High-quality Arabica coffee beans sourced from sustainable farms",
          },
          {
            id: "2",
            name: "Organic Cocoa Pods",
            slug: "organic-cocoa-pods",
            category: "pods",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "Certified organic cocoa pods for premium chocolate production",
          },
          {
            id: "3",
            name: "Vanilla Beans",
            slug: "vanilla-beans",
            category: "beans",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "Madagascar bourbon vanilla beans with exceptional flavor profile",
          },
        ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
        <p className="mt-4 text-lg text-gray-600">Discover our premium selection of agricultural trading products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{product.shortDescription}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/products/${product.slug}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  )
}
