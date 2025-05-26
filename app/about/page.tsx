"use client";

import { PageHeader } from "@/components/page-header";
import { TeamSection } from "@/components/team-section";
import { ValuesSection } from "@/components/values-section";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-12"
    >
      <motion.div variants={item}>
        <PageHeader
          title={"About Beans and Pods Trading"}
          description={"A trusted partner in agricultural trading for over 15 years"}
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 items-center"
        variants={container}
      >
        <motion.div variants={item}>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
          >
            Our Story
          </motion.h2>
          <div className="prose max-w-none">
            <motion.p 
              className="text-lg text-gray-700 mb-4"
              variants={fadeIn}
            >
              {"Beans & Pods is a dynamic and innovative general trading company specializing in the procurement and distribution of high-quality agro products, particularly cocoa and vanilla. Our business model is focused on establishing a sustainable supply chain that links local farmers and cooperatives with global markets."}
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700"
              variants={fadeIn}
            >
              {
                "By leveraging our expertise in agricultural products, logistics, and international trade, we aim to deliver premium products to our customers while supporting the livelihoods of farmers and contributing to the economic development of rural communities."
              }
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative h-[400px] rounded-lg overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/about2.jpg?height=400&width=600"
            alt="Beans and Pods Trading facility"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <ValuesSection />
      </motion.div>
    </motion.div>
  );
}