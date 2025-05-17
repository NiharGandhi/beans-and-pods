import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/about.jpg?height=400&width=600"
            alt="About Beans and Pods Trading"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            About Beans and Pods Trading
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Universal Trade Solutions is a dynamic and innovative general trading company specializing in the procurement and distribution of high-quality agro products, particularly cocoa and vanilla. Our business model is focused on establishing a sustainable supply chain that links local farmers and cooperatives with global markets. 
            </p>
            <p className="text-lg text-gray-600 mb-6">
              By utilizing our expertise in agricultural products, logistics, and international trade, we aim to provide premium products to our customers while enhancing the livelihoods of farmers and fostering the economic development of rural communities.
            </p>
          </div>
          <Button asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
