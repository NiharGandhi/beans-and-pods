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
    title: `${product.name}`,
    description: product.shortDescription,
    keywords: [
      product.name,
      `${product.name} Dubai`,
      `buy ${product.name} online`,
      `${product.name} wholesale supplier`,
      `wholesale ${product.name} Dubai`,
      `where to buy ${product.name}`,
      `best ${product.name} price`,
      `${category?.name} products`,
      `bulk ${product.name} supplier`,
      `buy ${product.name} in UAE`,
      `order ${product.name} online`,
      `${product.name} for cafes and restaurants`,
      `${product.name} distributor`,
      `top ${category?.name} suppliers Dubai`,
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