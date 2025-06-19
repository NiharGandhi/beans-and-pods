import { Metadata } from "next";
import AboutPage from "@/components/pages/about-page";


export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Beans and Pods - a premier supplier of premium agricultural commodities including cocoa, vanilla, spices, coffee, grains and essential oils",
  keywords: [
    "about Beans and Pods",
    "agricultural commodities supplier",
    "our story",
    "company profile",
    "wholesale supplier Dubai"
  ],
  openGraph: {
    title: "About Us | Beans and Pods",
    description: "Our story as a premier supplier of premium agricultural commodities",
    url: "/about",
    images: [
      {
        url: "/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "About Beans and Pods",
      }
    ],
  },
  alternates: {
    canonical: "/about",
  }
}

export default function Page() {
  return <AboutPage />
}