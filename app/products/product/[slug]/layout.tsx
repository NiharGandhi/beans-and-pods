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


export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}