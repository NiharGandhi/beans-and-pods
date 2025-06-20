import { productCategories } from '@/lib/constants';
import { getProductBySlug } from '@/lib/redis';
import { Metadata } from 'next';


export async function generateMetadata(
  props: { params: { slug: string } }
): Promise<Metadata> {
  const productSlug = (await props.params).slug
  const product = await getProductBySlug(productSlug);
  const siteUrl = 'https://beansandpods.com'

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'Product not found',
    };
  }

  const category = productCategories.find(cat => cat.slug === product.category);

  return {
    title: `Buy ${product.name} in Dubai`,
    description: product.shortDescription,
    keywords: [
      product.name,
      `${product.name} wholesale`,
      `${product.name} supplier`,
      `${category?.name} products`,
      `buy ${product.name} in Dubai`,
    ],
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: `${product.name} | Beans and Pods`,
      description: product.shortDescription,
      url: `${siteUrl}/products/${product.slug}`,
      type: 'article',
      publishedTime: new Date().toISOString(),
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        }
      ],
    },
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`,
    }
  }
}


export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}