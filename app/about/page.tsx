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
          title={"About Us - Beans & Pods"}
          description={"Empowering Global Agro Trade through Ethical Partnerships"}
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
          <motion.h3
            className="font-semibold mb-4"
          >
            Where Excellence Begins - In Every Harvest
          </motion.h3>
          <div className="prose max-w-none">
            <motion.p
              className="text-lg text-gray-700 mb-4"
              variants={fadeIn}
            >
              <strong>Beans & Pods</strong> is a dynamic and forward-thinking general trading company, specializing in the procurement and distribution of high-quality <strong>Agro Commodities</strong> — with a strong focus on <strong>Agro Commodities</strong>.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mb-4"
              variants={fadeIn}
            >
              Our business model is built around a <strong>sustainable supply chain</strong> that connects <strong>local farmers and cooperatives</strong> with buyers in global markets. Through direct sourcing and long-term partnerships, we ensure product integrity while uplifting rural economies.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700"
              variants={fadeIn}
            >
              By leveraging our expertise in <strong>agricultural products, logistics, and international trade,</strong> we aim to deliver <strong>premium products</strong> to our customers — all while improving farmer livelihoods and contributing to the <strong>economic development of farming communities</strong> across Africa and beyond.
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
            src="/pages/about2.webp?height=400&width=600"
            alt="Beans and Pods Trading facility"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="my-16"
        variants={item}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 className="text-3xl font-bold mb-6">
          Our Trading Facility
        </motion.h2>
        <motion.p className="text-lg text-gray-700 mb-4">
          Our facility is strategically designed to support the end-to-end handling of agro products. From <strong>quality control and packaging to logistics coordination,</strong> it serves as a central hub that enables us to <strong>streamline operations, maintain product integrity,</strong> and respond quickly to market demands.
        </motion.p>
      </motion.div>

      <motion.div variants={item}>
        <ValuesSection />
      </motion.div>
      <motion.div variants={item}>
        <TeamSection />
      </motion.div>
    </motion.div>
  );
}