// lib/metadata-utils.ts
import { productCategories, products } from './constants';

export const generateCategoryMetadata = (categorySlug: string) => {
  const category = productCategories.find(cat => cat.slug === categorySlug);
  if (!category) return null;

  return {
    title: `${category.name} Products`,
    description: `Explore our premium ${category.name} products. ${category.description || 'High-quality, naturally sourced products for your needs.'}`,
    openGraph: {
      title: `${category.name} Products`,
      description: `Browse our collection of ${category.name} products - premium quality and natural ingredients.`,
      images: [
        {
          url: category.image,
          width: 800,
          height: 600,
          alt: `${category.name} products`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Products`,
      description: `Premium ${category.name} products for your needs`,
      images: [category.image],
    },
  };
};

export const generateProductMetadata = (productSlug: string) => {
  const product = products.find(p => p.slug === productSlug);
  if (!product) return null;

  return {
    title: `${product.name} | ${product.category}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name}`,
      description: product.shortDescription,
      images: [
        {
          url: product.image.split('?')[0], // Remove query params from image URL
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name}`,
      description: product.shortDescription,
      images: [product.image.split('?')[0]],
    },
  };
};

export const defaultMetadata = {
  title: 'Premium Natural Products',
  description: 'Discover our range of high-quality natural products including cocoa, vanilla, coffee, spices, grains, and essential oils.',
  openGraph: {
    title: 'Premium Natural Products',
    description: 'Supplier of premium natural products sourced from the finest origins worldwide.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Your Company Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Company Name | Premium Natural Products',
    description: 'Supplier of premium natural products sourced from the finest origins worldwide.',
    images: ['/logo.png'],
  },
};