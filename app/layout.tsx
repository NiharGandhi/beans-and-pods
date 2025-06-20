import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Beans and Pods Trading Solutions | Premium Cocoa, Vanilla & Agricultural Products",
    template: "%s | Beans and Pods Trading Solutions"
  },
  description: "Explore our range of premium cocoa beans, vanilla pods, and essential agricultural products. Beans & Pods ensures quality, traceability, and ethical sourcing.",
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
    "Vanilla Extract Supplier",
    "beans",
    "cocoa",
    "vanilla",
    "pods",
    "products",
    "essential oil",
    "cocoa beans",
    "beans pods",
    "agricultural products",
    "explore"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Beans & Pods Trading Solutions",
              "image": "https://www.beansandpods.com/logo.png",
              "@id": "https://www.beansandpods.com",
              "url": "https://www.beansandpods.com",
              "telephone": "+97145521464",
              "email": "info@beansandpods.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 2812, Churchill Tower, Marasi Drive",
                "addressLocality": "Business Bay",
                "addressRegion": "Dubai",
                "postalCode": "",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.1870,
                "longitude": 55.2732
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            {
              __html: JSON.stringify(
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Beans and Pods Trading Solutions",
                  "url": "https://www.beansandpods.com"
                }
              )
            }
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            {
              __html: JSON.stringify(
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Beans and Pods Trading Solutions",
                  "url": "https://www.beansandpods.com",
                  "logo": "https://www.beansandpods.com/logo.png"
                }
              )
            }
          }
        />
        <link rel="preload" href="/product_categories/cocoa.webp" as="image" />
        <link rel="preload" href="/product_categories/vanilla.webp" as="image" />
        <link rel="preload" href="/product_categories/coffee.webp" as="image" />
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
