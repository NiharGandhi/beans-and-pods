import { PageHeader } from "@/components/page-header"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import Image from "next/image"

export const metadata = {
  title: "About Us | Beans and Pods Trading Solutions",
  description: "Learn about our history, mission, and the team behind Beans and Pods Trading Solutions",
}

export default async function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title={"About Beans and Pods Trading"}
        description={"A trusted partner in agricultural trading for over 15 years"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              {"Beans & Pods is a dynamic and innovative general trading company specializing in the procurement and distribution of high-quality agro products, particularly cocoa and vanilla. Our business model is focused on establishing a sustainable supply chain that links local farmers and cooperatives with global markets."}
            </p>
            <p className="text-lg text-gray-700">
              {
                " By utilizing our expertise in agricultural products, logistics, and international trade, we aim to provide premium products to our customers while enhancing the livelihoods of farmers and fostering the economic development of rural communities."
              }
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/about2.jpg?height=400&width=600"
            alt="Beans and Pods Trading facility"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <ValuesSection />
      <TeamSection team={[]} />
    </div>
  )
}
