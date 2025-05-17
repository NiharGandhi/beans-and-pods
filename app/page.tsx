import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutPreview } from "@/components/about-preview"
import { products } from "@/lib/constants"

export default async function Home() {
  // Select featured products from different categories
  const featuredProducts = [
    products.find(product => product.id === "cocoa-beans-1"), // Cocoa Nibs
    products.find(product => product.id === "vanilla-1"),     // Black Bourbon Grade A
    products.find(product => product.id === "spices-1")
  ].filter(Boolean); // Filter out any undefined values in case IDs don't match

  const subtitle = "At Universal Trade Solutions, we specialize in the procurement and distribution of high-quality agro products, with a focus on cocoa and vanilla. Our sustainable supply chain bridges local farmers and cooperatives with international markets. By leveraging our expertise in agricultural products, logistics, and global trade, we deliver premium products to our customers while enhancing the livelihoods of farmers and contributing to the economic growth of rural communities."

  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection
        title={"Empowering Global Agro Trade"}
        subtitle={subtitle}
        description={"Supplying high-quality beans, pods, and agricultural products to businesses worldwide"}
      />
      <FeaturedProducts products={featuredProducts!} />
      <AboutPreview />
    </div>
  )
}