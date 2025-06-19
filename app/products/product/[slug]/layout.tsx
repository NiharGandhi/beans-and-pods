import { productCategories } from '@/lib/constants';
import { getProductBySlug } from '@/lib/redis';
import { Metadata } from 'next';


export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const productSlug = (await props.params).slug
  const product = await getProductBySlug(productSlug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'Product not found',
    };
  }

  const category = productCategories.find(cat => cat.slug === product.category);

  return {
    title: `${product.name} | ${category?.name || 'Product'}`,
    description: product.shortDescription,
    keywords: [
      product.name,
      `${product.name} wholesale`,
      `${product.name} supplier`,
      `${category?.name} products`,
      `buy ${product.name} in Dubai`
    ],
    openGraph: {
      title: `${product.name} | Beans and Pods`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
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
      canonical: `/products/${product.slug}`,
    }
  }
}


export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}