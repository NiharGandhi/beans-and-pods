import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { productCategories } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
            <ul role="list" className="mt-6 space-y-4">
              {productCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm leading-6 text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
          <p className="mt-2 text-sm leading-6 text-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="mt-6 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:w-64 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-white/10">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Beans and Pods Trading Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
