import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutPreview } from "@/components/about-preview"
import { products } from "@/lib/constants"

export default async function Home() {
  const subtitle = "At Beans and Pods, we specialize in the procurement and distribution of high-quality agro products, with a focus on cocoa and vanilla. Our sustainable supply chain bridges local farmers and cooperatives with international markets. By leveraging our expertise in agricultural products, logistics, and global trade, we deliver premium products to our customers while enhancing the livelihoods of farmers and contributing to the economic growth of rural communities."

  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection
        title={"Empowering Global Agro Trade"}
      />
      <FeaturedProducts />
      <AboutPreview />
    </div>
  )
}