"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function FeaturedProducts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayProducts = [
    {
      id: "1",
      name: "Cocoa Beans",
      slug: "cocoa-beans",
      category: "Cocoa Beans",
      image: "/cocoa-nibs.webp?height=300&width=400",
      shortDescription: "Cocoa is a highly valued agricultural commodity derived from the seeds of the cacao tree (Theobroma cacao). Primarily grown in tropical regions such as West Africa, South America, and parts of Asia, cocoa is the essential raw material for chocolate production. Beyond confectionery, it is also used in cosmetics, pharmaceuticals, and beverages due to its rich flavor and health benefits. With growing global demand, cocoa plays a crucial role in international trade and supports millions of smallholder farmers worldwide.",
    },
    {
      id: "2",
      name: "Vanilla",
      slug: "vanilla",
      category: "Vanilla",
      image: "/vanilla-cuts.png?height=300&width=400",
      shortDescription: "Vanilla is one of the world’s most prized and aromatic spices, derived from the cured beans of the Vanilla planifolia orchid. Native to Mexico and now cultivated in tropical regions like Madagascar, Uganda, and Indonesia, vanilla is cherished for its rich, sweet flavor and fragrant aroma. Widely used in food, beverages, cosmetics, and perfumery, vanilla is a high-value crop with strong global demand, making it an important commodity in the flavor and fragrance industry.",
    },
    {
      id: "3",
      name: "Coffee",
      slug: "coffee",
      category: "Coffee",
      image: "/vanilla-cuts.png?height=300&width=400",
      shortDescription: "Coffee is one of the most widely consumed beverages in the world, made from the roasted seeds of the Coffea plant. Grown primarily in tropical regions such as Latin America, Africa, and Asia, coffee is a key global commodity that supports millions of farmers and contributes significantly to many economies. Renowned for its rich flavor, stimulating effects, and cultural significance, coffee is a staple in both everyday life and the international trade of agricultural products.",
    },
    {
      id: "4",
      name: "Spices",
      slug: "spices",
      category: "Spices",
      image: "/black-pepper.jpg?height=300&width=400",
      shortDescription: "Spices are aromatic plant-derived ingredients used to enhance the flavor, color, and aroma of food. Sourced from seeds, roots, bark, and fruits, spices like black pepper, turmeric, cinnamon, cardamom, and cloves have been traded globally for centuries. Beyond culinary use, many spices offer medicinal and preservative properties, making them valuable in food, pharmaceutical, and cosmetic industries. With diverse origins across Asia, Africa, and Latin America, spices remain a vital component of global trade and cultural heritage.",
    },
    {
      id: "5",
      name: "Dry Beans/Pulse",
      slug: "dry-beans",
      category: "Dry Beans",
      image: "/red-kidney-bean.jpg?height=300&width=400",
      shortDescription: "Grains and dry beans are essential agricultural staples that form the foundation of diets around the world. Grains such as wheat, rice, corn, and barley provide key sources of carbohydrates and nutrients, while dry beans—including kidney beans, chickpeas, lentils, and black beans—are rich in protein, fiber, and essential minerals. Widely cultivated across diverse climates, these crops are crucial for food security, animal feed, and industrial use. Their global trade supports sustainable agriculture and meets the nutritional needs of a growing population.",
    },
    {
      id: "6",
      name: "Essential Oil",
      slug: "essential-oil",
      category: "Essential Oil",
      image: "/lavender-oil.jpg?height=300&width=400",
      shortDescription: "Essential oils are concentrated plant extracts obtained through distillation or cold pressing, capturing the natural aroma and beneficial properties of herbs, flowers, fruits, and spices. Used extensively in aromatherapy, cosmetics, personal care, and natural medicine, essential oils such as lavender, peppermint, tea tree, and eucalyptus offer therapeutic, antibacterial, and calming effects. With increasing demand for natural and wellness products, essential oils play a vital role in the global health, beauty, and fragrance industries.",
    },
  ];

  // Update scroll button states
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Auto-scroll effect with smooth infinite loop
  useEffect(() => {
    if (!isAutoPlaying || isHovered || !carouselRef.current) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const cardWidth = 320; // Card width (80 * 4px) + gap
        const nextIndex = (currentIndex + 1) % displayProducts.length;
        
        if (currentIndex === displayProducts.length - 1) {
          // Smooth reset to beginning
          carouselRef.current.scrollTo({ 
            left: 0, 
            behavior: 'smooth' 
          });
          setCurrentIndex(0);
        } else {
          // Scroll to next card
          carouselRef.current.scrollTo({ 
            left: nextIndex * cardWidth, 
            behavior: 'smooth' 
          });
          setCurrentIndex(nextIndex);
        }
      }
    }, 4000); // Increased interval for better UX

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentIndex, displayProducts.length]);

  // Handle scroll events
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      updateScrollButtons();
      
      // Update current index based on scroll position
      const cardWidth = 320;
      const scrollLeft = carousel.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    updateScrollButtons();

    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320;
      carouselRef.current.scrollTo({ 
        left: index * cardWidth, 
        behavior: 'smooth' 
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(displayProducts.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -8,
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 relative">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our premium selection of agricultural trading products sourced from trusted global partners
        </p>
      </motion.div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <motion.button 
          onClick={scrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
            !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
          whileTap={{ scale: canScrollLeft ? 0.95 : 1 }}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </motion.button>

        {/* Carousel */}
        <motion.div 
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 py-6 px-4 snap-x snap-mandatory"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="flex-shrink-0 w-80 snap-start"
              variants={cardItem}
            >
              <motion.div
                className="h-full"
                whileHover="hover"
                initial="hidden"
                animate="show"
              >
                <Card className="overflow-hidden flex flex-col h-full group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm">
                  <motion.div 
                    className="relative h-64 w-full overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-800 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </motion.div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <motion.div 
                      className="w-full"
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        <Link href={`/products/${product.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <motion.button 
          onClick={scrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
            !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          aria-label="Scroll right"
          disabled={!canScrollRight}
          whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
          whileTap={{ scale: canScrollRight ? 0.95 : 1 }}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </motion.button>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {displayProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <motion.button
          onClick={toggleAutoPlay}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 text-gray-700" />
          ) : (
            <Play className="h-4 w-4 text-gray-700" />
          )}
          <span className="text-sm font-medium text-gray-700">
            {isAutoPlaying ? 'Pause' : 'Play'}
          </span>
        </motion.button>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary text-primary hover:text-white hover:bg-primary font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}