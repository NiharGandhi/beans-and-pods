import { PageHeader } from "@/components/page-header"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { getProductBySlug, getProducts, getRelatedProducts } from "@/lib/redis"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  try {
    const products = await getProducts();

    return products.map((product) => ({
      slug: product.slug,
    }))

  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    }
  }

  return {
    title: `${product.name}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name}`,
      description: `${product.description}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        }
      ],
    }
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
