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

const categoryDescriptions = {
  'cocoa-beans': 'Indulge in the richness of our exquisite cocoa, meticulously sourced from the world\'s most fertile growing regions. Celebrated for its deep, velvety flavor and exceptional quality, our cocoa is the foundation of fine chocolate, gourmet beverages, and luxurious cosmetic formulations. A timeless ingredient, crafted to elevate every experience.',
  'vanilla': 'Discover the allure of our hand-selected vanilla beans—aromatic treasures cultivated in the lush tropics of Madagascar and Uganda. Revered for their complexity, warmth, and depth, our vanilla offerings are the gold standard for fine dining, artisanal perfumery, and premium wellness products.',
  'coffee': 'Awaken your senses with our distinguished collection of Arabica and Robusta coffee beans, harvested from the highlands of the world’s most celebrated terroirs. Each bean reflects a harmony of flavor, aroma, and body—crafted for discerning roasters, connoisseurs, and luxury coffee experiences.',
  'spices': 'Immerse yourself in the world of rare and precious spices, hand-harvested to capture nature\'s finest expressions. From the bold warmth of black pepper to the golden glow of turmeric and the fragrant elegance of cardamom, our spice collection is a journey through culinary excellence and aromatic sophistication.',
  'dry-beans': 'Our premium grains and dry beans are a celebration of purity, tradition, and nutrition. Selected for their superior quality and natural richness, these staples—such as heirloom rice, golden lentils, and gourmet chickpeas—bring elegance and wholesomeness to every table and gourmet kitchen.',
  'essential-oil': 'Experience the essence of botanical luxury with our pure, therapeutic-grade essential oils. Steam-distilled and ethically sourced, each drop offers a journey of wellness and indulgence—perfect for high-end aromatherapy, skincare rituals, and refined fragrance blends.'
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categoryExists = productCategories.some(cat => cat.slug === categorySlug);
  
  if (!categoryExists) {
    notFound();
  }

  const filteredProducts = products.filter(product => product.category === categorySlug);
  const categoryName = productCategories.find(cat => cat.slug === categorySlug)?.name || "";
  const categoryDescription = categoryDescriptions[categorySlug as keyof typeof categoryDescriptions] || 
    `Premium ${categoryName.toLowerCase()} for your business needs`;

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title={categoryName}
        description={categoryDescription}
      />
      <CategoryTabs currentCategory={categorySlug} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}