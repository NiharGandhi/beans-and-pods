// app/(main)/products/[category]/page.tsx
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { CategoryTabs } from "@/components/category-tabs";
import { productCategories, products } from '@/lib/constants';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = productCategories.find(cat => cat.slug === params.category);
  return {
    title: category ? `${category.name} | Beans and Pods Trading Solutions` : "Category Not Found",
    description: category ? `Explore our range of premium ${category.name.toLowerCase()}` : "Category not found"
  };
}

export function generateStaticParams() {
  return productCategories.map(category => ({
    category: category.slug
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categoryExists = productCategories.some(cat => cat.slug === categorySlug);
  
  if (!categoryExists) {
    notFound();
  }

  const filteredProducts = products.filter(product => product.category === categorySlug);
  const categoryName = productCategories.find(cat => cat.slug === categorySlug)?.name || "";

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title={categoryName}
        description={`Premium ${categoryName.toLowerCase()} for your business needs`}
      />
      <CategoryTabs currentCategory={categorySlug} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}