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
  specifications?: Record<string, string | undefined>
  origin?: string
  certifications?: string[]
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": [product.image],
            "description": product.shortDescription,
            "sku": product.id,
            "brand": {
              "@type": "Brand",
              "name": "Beans and Pods"
            },
            "category": product.category
          })
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=600"}
            alt={`Premium ${product.name} from Beans and Pods`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <p className="text-lg text-gray-700">{product.shortDescription}</p>
          </div>

          <Tabs defaultValue="description" className="mb-8">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              {product.certifications && product.certifications.length > 0 && (
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="description" className="mt-4">
              <div className="prose max-w-none text-gray-700">
                {product.description ? (
                  product.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))
                ) : (
                  <p>Detailed product description not available.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-4">
              {product.specifications ? (
                <div className="space-y-3">
                  {Object.entries(product.specifications)
                    .filter(([_, value]) => value)
                    .map(([key, value]) => (
                      <div key={key} className="flex gap-2">
                        <span className="font-medium text-gray-700 min-w-[160px]">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-600">Specifications not available for this product.</p>
              )}

              {product.origin && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <span className="font-medium text-gray-700 min-w-[160px]">Origin:</span>
                    <span className="text-gray-600">{product.origin}</span>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="certifications" className="mt-4">
              {product.certifications && product.certifications.length > 0 ? (
                <ul className="space-y-2">
                  {product.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-gray-600">{cert}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Certification information not available for this product.</p>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href={`/contact?product=${product.slug}`}>Request Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}