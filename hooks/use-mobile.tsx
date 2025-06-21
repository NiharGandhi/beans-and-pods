import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Utility to disable animations on mobile
export function useReducedMotion() {
  const isMobile = useIsMobile()
  
  // Check for user's motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return isMobile || prefersReducedMotion
}

// Animation variants that respect reduced motion
export function useAnimationVariants() {
  const reducedMotion = useReducedMotion()
  
  const fadeIn = {
    hidden: { opacity: reducedMotion ? 1 : 0 },
    show: { 
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
  
  const slideUp = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  }
  
  const scale = {
    hidden: { opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.9 },
    show: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.5,
        ease: "easeOut"
      }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: reducedMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.3
      }
    }
  }
  
  const hoverScale = {
    hover: {
      scale: reducedMotion ? 1 : 1.05,
      transition: {
        duration: reducedMotion ? 0 : 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
  
  const tapScale = {
    tap: {
      scale: reducedMotion ? 1 : 0.95,
      transition: {
        duration: reducedMotion ? 0 : 0.1
      }
    }
  }
  
  return {
    fadeIn,
    slideUp,
    scale,
    staggerContainer,
    hoverScale,
    tapScale,
    reducedMotion
  }
}
