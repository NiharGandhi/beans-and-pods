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
      description: "1. Implement strict quality control measures from sourcing to delivery.\n2. Foster long-term relationships with trusted farmers and cooperatives to ensure product uniformity and reliability.",
      icon: "shield",
    },
    {
      id: "2",
      title: "Sustainable Practices",
      description: "1. Promote environmentally responsible farming through training and support.\n2. Uphold fair trade principles, ensuring farmers receive fair compensation and stable incomes.",
      icon: "globe",
    },
    {
      id: "3",
      title: "Market Expansion",
      description: "1. Build a strong presence in high-demand regions across domestic and international markets.\n2. Target wholesalers, retailers, and manufacturers in the food, cosmetics, and pharmaceutical industries.",
      icon: "users",
    },
    {
      id: "4",
      title: "Operational Excellence",
      description: "1. Optimize our supply chain to reduce costs, improve efficiency, and ensure timely delivery.\n2. Invest in advanced logistics and warehousing systems to effectively manage inventory and distribution.",
      icon: "trending-up",
    },
    {
      id: "5",
      title: "Customer Satisfaction",
      description: "1. Deliver tailored customer service by understanding and meeting specific client needs.\n2. Offer flexible solutions such as custom packaging, private labeling, and bespoke sourcing.",
      icon: "heart",
    },
    {
      id: "6",
      title: "Innovation & Adaptation",
      description: "1. Stay ahead of industry trends to enhance our product range and operational strategies.\n2. Embrace flexibility to adapt to market dynamics and emerging global opportunities.",
      icon: "target",
    },
    {
      id: "7",
      title: "Community Engagement",
      description: "1. Invest in the well-being of farming communities through education, healthcare, and infrastructure support.\n2. Partner with NGOs and government bodies to implement social development initiatives in sourcing regions.",
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
          Guiding Principles That Drive Our Success
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
      
      {/* <motion.div
        className="mt-16 text-center max-w-4xl mx-auto"
        variants={valueItem}
      >
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 italic">
            "By adhering to these objectives, Beans and Pods aims to become a leading name in the agro product trading industry, known for our commitment to quality, sustainability, and social responsibility."
          </p>
        </div>
      </motion.div> */}
    </motion.section>
  )
}