// app/(main)/products/[category]/page.tsx
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { CategoryTabs } from "@/components/category-tabs";
import { productCategories, products } from '@/lib/constants';
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return productCategories.map(category => ({
    category: category.slug
  }));
}

const categoryDescriptions = {
  'cocoa-beans': 'Indulge in the richness of our exquisite cocoa, meticulously sourced from the world\'s most fertile growing regions. Celebrated for its deep, velvety flavor and exceptional quality, our cocoa is the foundation of fine chocolate, gourmet beverages, and luxurious cosmetic formulations. A timeless ingredient, crafted to elevate every experience.',
  'vanilla': 'Discover the allure of our hand-selected vanilla beans—aromatic treasures cultivated in the lush tropics of Madagascar and Uganda. Revered for their complexity, warmth, and depth, our vanilla offerings are the gold standard for fine dining, artisanal perfumery, and premium wellness products.',
  'coffee': 'Awaken your senses with our distinguished collection of Arabica and Robusta coffee beans, harvested from the highlands of the world\'s most celebrated terroirs. Each bean reflects a harmony of flavor, aroma, and body—crafted for discerning roasters, connoisseurs, and luxury coffee experiences.',
  'spices': 'Immerse yourself in the world of rare and precious spices, hand-harvested to capture nature\'s finest expressions. From the bold warmth of black pepper to the golden glow of turmeric and the fragrant elegance of cardamom, our spice collection is a journey through culinary excellence and aromatic sophistication.',
  'grains-and-pulses': 'Our premium grains and dry beans are a celebration of purity, tradition, and nutrition. Selected for their superior quality and natural richness, these staples—such as heirloom rice, golden lentils, and gourmet chickpeas—bring elegance and wholesomeness to every table and gourmet kitchen.',
  'essential-oil': 'Experience the essence of botanical luxury with our pure, therapeutic-grade essential oils. Steam-distilled and ethically sourced, each drop offers a journey of wellness and indulgence—perfect for high-end aromatherapy, skincare rituals, and refined fragrance blends.'
};

const categoryBackgrounds = {
  'cocoa-beans': '/product_header/cocoa.webp',
  'vanilla': '/product_header/vanilla.webp',
  'coffee': '/product_header/coffee.webp',
  'spices': '/product_header/spices.webp',
  'grains-and-pulses': '/product_header/grains_and_pulses.webp',
  'essential-oil': '/product_header/essential_oils.webp'
};

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const categorySlug = params.category;
  const categoryExists = productCategories.some(cat => cat.slug === categorySlug);
  
  if (!categoryExists) {
    notFound();
  }

  const filteredProducts = products.filter(product => product.category === categorySlug);
  const categoryName = productCategories.find(cat => cat.slug === categorySlug)?.name || "";
  const categoryDescription = categoryDescriptions[categorySlug as keyof typeof categoryDescriptions] || 
    `Premium ${categoryName.toLowerCase()} for your business needs`;
  const backgroundImage = categoryBackgrounds[categorySlug as keyof typeof categoryBackgrounds] || '/images/default-category.jpg';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Products",
                "item": "https://www.beansandpods.com/products"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": categoryName,
                "item": `https://www.beansandpods.com/products/${categorySlug}`
              }
            ]
          }) }}
      />
      <div className="w-full">
        {/* Hero Section with Fading Background */}
        <div className="relative h-96 w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={categoryName}
              fill
              className="object-cover"
              priority // Keep priority to load hero image quickly
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fbf7ee]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-12">
            <div className="container mx-auto px-4">
              <PageHeader
                title={categoryName}
                description={categoryDescription}
                backgroundImage
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <CategoryTabs currentCategory={categorySlug} />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
}
