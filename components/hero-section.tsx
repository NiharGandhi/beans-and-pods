import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string 
}

export function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg?height=800&width=1920"
          alt="Agricultural field"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl my-4 tracking-tight text-white">Welcome to Beans & Pods</h1>
          <h1 className="text-6xl my-4 font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          <h2 className="text-white mb-8">{subtitle}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
