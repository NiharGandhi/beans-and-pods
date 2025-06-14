"use client";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const imageAnim = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textAnim = {
    hidden: { x: 50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
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

  return (
    <motion.section 
      className="container mx-auto px-4 py-12 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="relative h-[400px] rounded-lg overflow-hidden"
          variants={imageAnim}
        >
          <Image
            src="/pages/about.jpg?height=400&width=600"
            alt="About Beans and Pods Trading"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div variants={textAnim}>
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
            variants={fadeIn}
          >
            About Beans and Pods Trading
          </motion.h2>
          
          <div className="prose max-w-none">
            <motion.p 
              className="text-lg text-gray-600 mb-4"
              variants={fadeIn}
            >
              Beans and Pods Trading is a dynamic and innovative general trading company specializing in the procurement and distribution of high-quality agro products, particularly cocoa and vanilla. Our business model is focused on establishing a sustainable supply chain that links local farmers and cooperatives with global markets. 
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              variants={fadeIn}
            >
              By utilizing our expertise in agricultural products, logistics, and international trade, we aim to provide premium products to our customers while enhancing the livelihoods of farmers and fostering the economic development of rural communities.
            </motion.p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}