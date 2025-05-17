import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=400"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <p className="text-sm text-gray-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{product.shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/products/product/${product.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
