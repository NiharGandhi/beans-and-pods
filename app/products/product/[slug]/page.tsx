import { PageHeader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import { getProductBySlug, getProducts, getRelatedProducts } from "@/lib/redis";
import { notFound } from "next/navigation";
import Head from "next/head";

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug)

  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product.category, product.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
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
            ...(product.ratingValue && product.ratingCount && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": product.ratingValue,
                "ratingCount": product.ratingCount
              }
            })
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://beansandpods.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": product.category,
                "item": `https://beansandpods.com/categories/${product.category}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://beansandpods.com/products/${product.slug}`
              }
            ]
          })}
        </script>
      </Head>

      <PageHeader title={product.name} description={product.shortDescription} />
      <ProductDetails product={product} />
      {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
    </div>
  );
}
