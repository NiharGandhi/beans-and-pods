import ContactPage from "@/components/pages/contact-page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us"
}

export default function Page() {
  return <ContactPage />
}