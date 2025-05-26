"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const formItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.h2 
        className="text-xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Send Us a Message
      </motion.h2>

      {isSuccess ? (
        <motion.div 
          className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p>Thank you for your message! Our team will get back to you shortly.</p>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={() => console.log("Submitted")} 
          className="space-y-6"
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
          {error && (
            <motion.div 
              className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>{error}</p>
            </motion.div>
          )}

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={formItem}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" required />
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={formItem}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" />
            </div>
          </motion.div>

          <motion.div className="space-y-2" variants={formItem}>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required />
          </motion.div>

          <motion.div className="space-y-2" variants={formItem}>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
          </motion.div>

          <motion.div variants={formItem}>
            <Button 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </motion.div>
  );
}