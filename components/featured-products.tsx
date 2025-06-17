"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function FeaturedProducts() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const displayProducts = [
    {
      id: "1",
      name: "Cocoa Beans",
      slug: "cocoa-beans",
      category: "Cocoa Beans",
      image: "/product_categories/cocoa.webp?height=300&width=400",
      shortDescription: "Premium cocoa beans from tropical regions, essential for chocolate production.",
      fullDescription: "Cocoa is a highly valued agricultural commodity derived from the seeds of the cacao tree. Primarily grown in tropical regions, it's the essential raw material for chocolate production and supports millions of smallholder farmers worldwide.",
    },
    {
      id: "2",
      name: "Vanilla",
      slug: "vanilla",
      category: "Vanilla",
      image: "/product_categories/vanilla.webp?height=300&width=400",
      shortDescription: "One of the world's most prized spices with rich, sweet flavor.",
      fullDescription: "Vanilla is derived from the cured beans of the Vanilla planifolia orchid. Native to Mexico and now cultivated in tropical regions, it's cherished for its rich, sweet flavor and fragrant aroma.",
    },
    {
      id: "3",
      name: "Coffee",
      slug: "coffee",
      category: "Coffee",
      image: "/product_categories/coffee.webp?height=300&width=400",
      shortDescription: "Premium coffee beans from tropical regions.",
      fullDescription: "Coffee is one of the most widely consumed beverages in the world, made from the roasted seeds of the Coffea plant. Grown primarily in tropical regions, it supports millions of farmers.",
    },
    {
      id: "4",
      name: "Spices",
      slug: "spices",
      category: "Spices",
      image: "/product_categories/spices.webp?height=300&width=400",
      shortDescription: "Aromatic spices from around the world.",
      fullDescription: "Spices are aromatic plant-derived ingredients used to enhance flavor. Sourced from seeds, roots, bark, and fruits, they have been traded globally for centuries.",
    },
    {
      id: "5",
      name: "Grains & Pulses",
      slug: "dry-beans",
      category: "Dry Beans",
      image: "/product_categories/grains_and_pulses.webp?height=300&width=400",
      shortDescription: "Essential agricultural staples.",
      fullDescription: "Grains and dry beans form the foundation of diets worldwide. They provide key sources of carbohydrates, protein, and essential minerals.",
    },
    {
      id: "6",
      name: "Essential Oil",
      slug: "essential-oil",
      category: "Essential Oil",
      image: "/product_categories/essential_oil.webp?height=300&width=400",
      shortDescription: "Concentrated plant extracts.",
      fullDescription: "Essential oils are concentrated plant extracts obtained through distillation or cold pressing, capturing the natural aroma and beneficial properties of plants.",
    },
  ];

  // Calculate card width based on screen size
  const cardWidth = isDesktop ? 320 : 280;
  const cardGap = isDesktop ? 24 : 16;

  // Update scroll button states
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying || isHovered || !carouselRef.current) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % displayProducts.length;
        
        if (currentIndex === displayProducts.length - 1) {
          carouselRef.current.scrollTo({ 
            left: 0, 
            behavior: 'smooth' 
          });
          setCurrentIndex(0);
        } else {
          carouselRef.current.scrollTo({ 
            left: nextIndex * (cardWidth + cardGap), 
            behavior: 'smooth' 
          });
          setCurrentIndex(nextIndex);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentIndex, displayProducts.length, cardWidth, cardGap]);

  // Handle scroll events
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      updateScrollButtons();
      const scrollLeft = carousel.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + cardGap));
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    updateScrollButtons();

    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [cardWidth, cardGap]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ 
        left: index * (cardWidth + cardGap), 
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
      y: isDesktop ? -8 : 0,
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

  const descriptionVariants = {
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 relative">
      <motion.div 
        className="text-center mb-12 md:mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3 md:mb-4">
          Featured Products
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Discover our premium selection of agricultural products
        </p>
      </motion.div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow - Desktop only */}
        {isDesktop && (
          <motion.button 
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.95 : 1 }}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </motion.button>
        )}

        {/* Carousel */}
        <motion.div 
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 py-4 px-2 md:py-6 md:px-4 snap-x snap-mandatory"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="flex-shrink-0 w-[280px] md:w-80 snap-start"
              variants={cardItem}
              onMouseEnter={() => isDesktop && setHoveredCard(product.id)}
              onMouseLeave={() => isDesktop && setHoveredCard(null)}
              onTouchStart={() => !isDesktop && setHoveredCard(prev => prev === product.id ? null : product.id)}
            >
              <motion.div
                className="h-full"
                whileHover="hover"
                initial="hidden"
                animate="show"
              >
                <Card className="overflow-hidden flex flex-col h-full group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                  <motion.div 
                    className="relative h-56 md:h-64 w-full overflow-hidden"
                    whileHover={{ scale: isDesktop ? 1.02 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={displayProducts.indexOf(product) < 3} // Prioritize first 3 images
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-white/90 backdrop-blur-sm text-xs md:text-sm font-semibold text-gray-800 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </motion.div>
                  
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-4 md:pb-6 relative">
                    <motion.div
                      className="overflow-hidden"
                      animate={hoveredCard === product.id ? "expanded" : "collapsed"}
                      variants={descriptionVariants}
                    >
                      <AnimatePresence mode="wait">
                        {hoveredCard === product.id ? (
                          <motion.p
                            key="full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm text-gray-600 leading-relaxed"
                          >
                            {product.fullDescription}
                          </motion.p>
                        ) : (
                          <motion.p
                            key="short"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3"
                          >
                            {product.shortDescription}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    {/* Hover indicator - Desktop only */}
                    {isDesktop && (
                      <motion.div 
                        className="absolute bottom-2 right-2 text-xs text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === product.id ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        Hover for details
                      </motion.div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <motion.div 
                      className="w-full"
                      whileHover={{ scale: isDesktop ? 1.05 : 1 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild 
                        size={isDesktop ? "default" : "sm"}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300"
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

        {/* Right Arrow - Desktop only */}
        {isDesktop && (
          <motion.button 
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Scroll right"
            disabled={!canScrollRight}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.95 : 1 }}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </motion.button>
        )}
      </div>

      {/* Carousel Controls */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-8 space-y-4 md:space-y-0 md:space-x-6">
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {displayProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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
          className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? (
            <Pause className="h-3 w-3 md:h-4 md:w-4 text-gray-700" />
          ) : (
            <Play className="h-3 w-3 md:h-4 md:w-4 text-gray-700" />
          )}
          <span className="text-xs md:text-sm font-medium text-gray-700">
            {isAutoPlaying ? 'Pause' : 'Play'}
          </span>
        </motion.button>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-12 md:mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div 
          whileHover={{ scale: isDesktop ? 1.05 : 1 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            asChild 
            variant="outline" 
            size={isDesktop ? "lg" : "default"}
            className="border-2 border-primary text-primary hover:text-white hover:bg-primary font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300"
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

// Add this hook to your hooks folder if you don't have it already
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}