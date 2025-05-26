"use client";

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
}

export function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };


  return (
    <div className="relative isolate overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/hero.jpg?height=800&width=1920"
          alt="Agricultural field"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 className="text-3xl my-4 tracking-tight text-white" variants={itemVariants}>
            Welcome to Beans & Pods
          </motion.h1>
          <motion.h1
            className="text-6xl my-4 font-bold tracking-tight text-white md:text-5xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.h2 className="text-white mb-8" variants={itemVariants}>
            {subtitle}
          </motion.h2>
          <motion.p className="mt-6 text-lg leading-8 text-gray-300" variants={itemVariants}>
            {description}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={itemVariants}
          >
            <Button asChild size="lg">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}