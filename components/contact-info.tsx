"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactItem = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ContactInfo() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.4
            }
          }
        }}
      >
        <motion.h2 
          className="text-xl font-semibold mb-6"
          variants={contactItem}
        >
          Contact Information
        </motion.h2>
        
        <motion.div className="space-y-4" variants={contactItem}>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">
                123 Trading Street
                <br />
                Business District
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">info@beansandpods.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM EST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}