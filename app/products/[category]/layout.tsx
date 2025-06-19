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