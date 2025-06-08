import Image from "next/image";
import { motion } from "framer-motion";

export function TeamSection() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Driven by Expertise. United by Purpose.
          </p>
          <div className="bg-primary h-1 w-20 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            At Beans & Pods, our strength lies in our people.
          </h3>
          <p className="text-gray-600 mb-4">
            We are a team of passionate professionals with deep-rooted expertise
            in agriculture, supply chain management, international trade, and
            sustainable development.
          </p>
          <p className="text-gray-600 mb-4">
            Our diverse backgrounds and shared vision empower us to operate with
            both global insight and local understanding. From sourcing regions to
            international ports, we bridge the gap between rural producers and
            global markets with efficiency, empathy, and integrity.
          </p>
          <p className="text-gray-600 mb-4">
            We work closely with farmers, processors, cooperatives, and logistics
            partners, ensuring that every product we deliver upholds our promise
            of quality, sustainability, and traceability. This collaborative
            spirit drives smooth operations, fosters long-term relationships, and
            fuels shared success for everyone involved — from farm to final
            customer.
          </p>
          <p className="text-gray-600 font-medium">
            Together, we are building more than just a business — we are building
            a better future for communities and customers alike.
          </p>
        </motion.div>
      </div>
    </section>
  );
}