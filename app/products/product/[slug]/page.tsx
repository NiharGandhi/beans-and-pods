import { PageHeader } from "@/components/page-header"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { getProductBySlug, getRelatedProducts } from "@/lib/redis"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    }
  }

  return {
    title: `${product.name} | Beans and Pods Trading Solutions`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category, product.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title={product.name} description={product.shortDescription} />

      <ProductDetails product={product} />

      {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
    </div>
  )
}
