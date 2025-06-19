"use client";

import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
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

export default function ContactPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-12"
    >
      <motion.div variants={item}>
        <PageHeader 
          title="Contact Us" 
          description="Get in touch with our team for inquiries about our products" 
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
        variants={container}
      >
        <motion.div variants={item}>
          <ContactForm />
        </motion.div>
        
        <motion.div variants={item}>
          <ContactInfo />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}