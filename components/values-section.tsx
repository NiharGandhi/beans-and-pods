import { Shield, Globe, Users, TrendingUp, Box, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants for values
const valuesContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const valueItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ValuesSection() {
  // If no values are provided, use default values
  const displayValues = [
    {
      id: "1",
      title: "Quality & Consistency",
      description: "1. Ensure the supply of high-quality cocoa and vanilla products by implementing stringent quality control measures from sourcing to delivery.\n2. Establish long-term relationships with reliable suppliers and farmers to maintain product consistency.",
      icon: "shield",
    },
    {
      id: "2",
      title: "Sustainable Practices",
      description: "1. Promote sustainable farming practices among our suppliers to ensure environmental responsibility and long-term viability of the agro products.\n2. Implement fair trade principles to ensure that farmers receive fair compensation for their products, contributing to their economic well-being.",
      icon: "globe",
    },
    {
      id: "3",
      title: "Market Expansion",
      description: "1. Develop a strong presence in both domestic and international markets, focusing on key regions known for high demand for cocoa and vanilla.\n2. Expand our customer base by targeting wholesalers, retailers, and manufacturers in the food, cosmetics, and pharmaceutical industries.",
      icon: "users",
    },
    {
      id: "4",
      title: "Operational Excellence",
      description: "1. Optimize our supply chain operations to enhance efficiency, reduce costs, and ensure timely delivery of products to our customers.\n2. Invest in advanced logistics and warehousing solutions to manage inventory effectively and meet market demands promptly.",
      icon: "trending-up",
    },
    {
      id: "5",
      title: "Customer Satisfaction",
      description: "1. Provide exceptional customer service by understanding and meeting the unique needs of each client.\n2. Offer customized solutions, such as tailored product packaging and private labeling, to enhance customer satisfaction and loyalty.",
      icon: "heart",
    },
    {
      id: "6",
      title: "Innovation & Adaptation",
      description: "1. Stay abreast of industry trends and innovations to continuously improve our product offerings and business processes.\n2. Adapt to market changes and emerging opportunities by being flexible and responsive in our business strategies.",
      icon: "target",
    },
    {
      id: "7",
      title: "Community Engagement",
      description: "1. Engage with local communities and support social initiatives that improve the quality of life for farmers and their families.\n2. Foster partnerships with NGOs and governmental organizations to promote education, healthcare, and infrastructure development in farming regions.",
      icon: "box",
    }
  ]

  const getIcon = (iconName: string) => {
    const iconClass = "h-8 w-8 text-white p-1.5 rounded-full"
    switch (iconName) {
      case "shield":
        return <Shield className={`${iconClass} bg-emerald-600`} />
      case "globe":
        return <Globe className={`${iconClass} bg-teal-600`} />
      case "users":
        return <Users className={`${iconClass} bg-blue-600`} />
      case "trending-up":
        return <TrendingUp className={`${iconClass} bg-indigo-600`} />
      case "heart":
        return <Heart className={`${iconClass} bg-rose-600`} />
      case "target":
        return <Target className={`${iconClass} bg-purple-600`} />
      case "box":
        return <Box className={`${iconClass} bg-amber-600`} />
      default:
        return <Shield className={`${iconClass} bg-emerald-600`} />
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={valuesContainer}
      className="py-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl"
    >
      <motion.div
        className="text-center mb-16"
        variants={valueItem}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business Objectives</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guiding principles that drive our success in the agro product trading industry
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayValues.map((value) => (
          <motion.div
            key={value.id}
            variants={valueItem}
            whileHover={{ y: -5 }}
            className="group flex flex-col p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full"
          >
            <div className="flex items-center mb-6">
              <div className="mr-5">
                <div className="relative">
                  {getIcon(value.icon)}
                  <div className="absolute inset-0 bg-current opacity-10 rounded-full -z-10"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
            </div>
            <div className="space-y-3">
              {value.description.split('\n').map((point, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed flex items-start"
                >
                  <span className="inline-block mr-2 mt-1 text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                    {index + 1}
                  </span>
                  {point.replace(/^\d+\.\s/, '')}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center max-w-4xl mx-auto"
        variants={valueItem}
      >
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 italic">
            "By adhering to these objectives, Beans and Pods aims to become a leading name in the agro product trading industry, known for our commitment to quality, sustainability, and social responsibility."
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}