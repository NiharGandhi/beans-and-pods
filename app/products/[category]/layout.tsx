import { productCategories } from '@/lib/constants';
import { Metadata } from 'next';


export async function generateMetadata(
  props: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const category = params.category;

  const matchedCategory = productCategories.find(cat => cat.slug === category);
  if (!matchedCategory) {
    return {
      title: 'Category Not Found',
      description: 'Category not found',
    };
  }

  return {
    title: `${matchedCategory.name} Products | Wholesale Supplier`,
    description: `Premium ${matchedCategory.name} products for wholesale and B2B customers. ${matchedCategory.description || ''}`,
    keywords: [
      `${matchedCategory.name} wholesale`,
      `buy ${matchedCategory.name} in Dubai`,
      `${matchedCategory.name} supplier`,
      `bulk ${matchedCategory.name}`,
      `export quality ${matchedCategory.name}`
    ],
    openGraph: {
      title: `${matchedCategory.name} Products | Beans and Pods`,
      description: `Premium ${matchedCategory.name} products for wholesale and B2B customers`,
      url: `/products/category/${matchedCategory.slug}`,
      images: [
        {
          url: matchedCategory.image,
          width: 800,
          height: 600,
          alt: matchedCategory.name,
        }
      ],
    },
    alternates: {
      canonical: `/products/category/${matchedCategory.slug}`,
    }
  };
}


export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}