"use client";
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface FeaturedProductsProps {
  products: any[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  // If no products are provided, use default products
  const displayProducts =
    products.length > 0
      ? products
      : [
          {
            id: "1",
            name: "Premium Coffee Beans",
            slug: "premium-coffee-beans",
            category: "beans",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "High-quality Arabica coffee beans sourced from sustainable farms",
          },
          {
            id: "2",
            name: "Organic Cocoa Pods",
            slug: "organic-cocoa-pods",
            category: "pods",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "Certified organic cocoa pods for premium chocolate production",
          },
          {
            id: "3",
            name: "Vanilla Beans",
            slug: "vanilla-beans",
            category: "beans",
            image: "/placeholder.svg?height=300&width=400",
            shortDescription: "Madagascar bourbon vanilla beans with exceptional flavor profile",
          },
        ]

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
        <p className="mt-4 text-lg text-gray-600">Discover our premium selection of agricultural trading products</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {displayProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <Card className="overflow-hidden flex flex-col h-full group">
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{product.shortDescription}</p>
              </CardContent>
              <CardFooter>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild>
                    <Link href={`/products/${product.slug}`}>Learn More</Link>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}