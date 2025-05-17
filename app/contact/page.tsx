import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact Us | Beans and Pods Trading Solutions",
  description: "Get in touch with our team for inquiries about our agricultural trading products",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Contact Us" description="Get in touch with our team for inquiries about our products" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
