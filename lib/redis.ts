// lib/data.ts
import { products } from './constants';

export async function getProducts() {
  return products;
}

export async function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug) || null;
}

export async function getRelatedProducts(category: string, excludeId: string) {
  return products
    .filter(product => product.category === category && product.id !== excludeId)
    .slice(0, 3);
}

