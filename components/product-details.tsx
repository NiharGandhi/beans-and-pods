import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  slug: string
  category: string
  image: string
  shortDescription: string
  description: string
  specifications?: Record<string, string>
  origin?: string
  certifications?: string[]
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=400&width=600"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <p className="text-lg">{product.shortDescription}</p>
        </div>

        <Tabs defaultValue="description" className="mb-8">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="prose max-w-none">
              <p>{product.description || "Detailed product description not available."}</p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            {product.specifications ? (
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="py-2">
                    <span className="font-medium">{key}: </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>Specifications not available for this product.</p>
            )}

            {product.origin && (
              <div className="mt-4">
                <span className="font-medium">Origin: </span>
                <span>{product.origin}</span>
              </div>
            )}
          </TabsContent>
          <TabsContent value="certifications" className="mt-4">
            {product.certifications && product.certifications.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {product.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            ) : (
              <p>Certification information not available for this product.</p>
            )}
          </TabsContent>
        </Tabs>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact?product=${product.slug}">Request Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
