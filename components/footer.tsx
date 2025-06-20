import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"
import { productCategories } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul className="mt-6 space-y-4">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
            <ul className="mt-6 space-y-4">
              {productCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/products/${category.slug}`} className="text-sm text-gray-300 hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Office 2812, Churchill Tower, <br />
                  Marasi Drive, Business Bay, <br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+97145521464" className="hover:text-white">+971 4 552 1464</a>
              </li>
              <li className="flex items-center gap-2">
                <BsWhatsapp className="h-4 w-4" />
                <a href="https://wa.me/971504812613" className="hover:text-white">+971 50 481 2613</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@beansandpods.com" className="hover:text-white">info@beansandpods.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-white/10">
        <div className="text-center text-xs leading-5 text-gray-400 w-full">
          &copy; {new Date().getFullYear()} Beans & Pods Trading Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
