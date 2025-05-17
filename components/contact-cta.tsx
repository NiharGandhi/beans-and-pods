import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCta() {
  return (
    <section className="bg-green-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Ready to Partner with Us?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our team to discuss how our premium agricultural products can meet your business needs.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  )
}
