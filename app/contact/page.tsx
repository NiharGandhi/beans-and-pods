import ContactPage from "@/components/pages/contact-page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Beans and Pods for premium agricultural commodities including cocoa, vanilla, spices, coffee, grains and essential oils",
  keywords: [
    "contact Beans and Pods",
    "agricultural commodities supplier contact",
    "wholesale inquiry",
    "bulk order contact",
    "Dubai supplier contact"
  ],
  openGraph: {
    title: "Contact Us | Beans and Pods",
    description: "Get in touch for premium agricultural commodities",
    url: "/contact",
    images: [
      {
        url: "/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Beans and Pods",
      }
    ],
  },
  alternates: {
    canonical: "/contact",
  }
}

export default function Page() {
  return <ContactPage />
}