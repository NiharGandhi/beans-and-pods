// app/(main)/products/[category]/layout.tsx
import { productCategories } from '@/lib/constants';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { category: string } }) {
  // Destructure after awaiting (though params is usually synchronous)
  const category = params.category;

  const matchedCategory = productCategories.find(cat => cat.slug === category);
  if (!matchedCategory) {
    return {
      title: 'Category Not Found',
      description: 'Category not found',
    };
  }

  return {
    title: `${matchedCategory.name} | Beans and Pods Trading Solutions`,
    description: `Explore our range of premium ${matchedCategory.name.toLowerCase()}`,
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}