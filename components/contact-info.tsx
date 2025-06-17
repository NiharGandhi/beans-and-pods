"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

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
                Office 2812, Churchill Tower,
                <br />
                Marasi Drive, Business Bay, 
                <br />
                Dubai, UAE.
              </p>
            </div>
          </div>

          {/* Add the Google Map here */}
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            height={200}
            width="100%"
            mode="place"
            q="Churchil+Tower,Dubai,UAE"
          />

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+971 4 552 1464</p>
            </div>
          </div>

          <div className="flex items-start">
            <BsWhatsapp className="h-5 w-5 text-primary mt-1 mr-3"/>
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="text-gray-600">+971 50 481 2613</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
            <div>
              <Link href={'mailto:info@beansandpods.com'} className="text-gray-600">info@beansandpods.com</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}