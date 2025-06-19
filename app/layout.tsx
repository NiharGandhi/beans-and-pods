import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Beans and Pods Trading Solutions | Premium Agricultural Commodities",
    template: "%s | Beans and Pods Trading Solutions"
  },
  description: "Global supplier of premium cocoa beans, vanilla, spices, coffee, grains & pulses, and essential oils. B2B wholesale distributor based in Dubai.",
  keywords: [
    "Cocoa Beans Dubai",
    "Vanilla Beans Supplier",
    "Premium Spices Wholesale",
    "Arabica Coffee Beans",
    "Essential Oils Export",
    "Grains and Pulses Supplier",
    "B2B Agricultural Products",
    "Beans and Pods Dubai",
    "Cocoa Nibs Wholesale",
    "Vanilla Extract Supplier"
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.beansandpods.com',
    siteName: 'Beans and Pods Trading Solutions',
    title: 'Premium Agricultural Commodities Supplier',
    description: 'Global B2B supplier of premium cocoa, vanilla, spices, coffee, grains and essential oils',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Beans and Pods Trading Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beans and Pods Trading Solutions',
    description: 'Premium Agricultural Commodities Supplier',
    images: ['/logo.png'],
  },
  metadataBase: new URL('https://www.beansandpods.com'),
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Beans and Pods Trading Solutions",
          "url": "https://www.beansandpods.com",
          "logo": "https://www.beansandpods.com/logo.png",
          "sameAs": [
            // Add your social profiles here
          ],
          "description": "Global supplier of premium cocoa beans, vanilla, spices, coffee, grains & pulses, and essential oils. B2B wholesale distributor based in Dubai."
        }) }} />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
