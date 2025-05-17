"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { productCategories } from "@/lib/constants"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Beans and Pods Trading</span>
            <div className="flex items-center">
              <Image src={"/logo.jpeg"} height={0} width={0} className="w-10 h-10" alt="" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Beans & Pods</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                          pathname === item.href ? "text-primary" : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Products dropdown for mobile */}
                    <div className="space-y-2">
                      <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                        Products
                      </div>
                      <div className="pl-4 space-y-2">
                        {productCategories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/products/${category.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {category.name}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          All Products
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-primary" : "text-gray-900 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Products dropdown for desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center text-sm font-semibold leading-6 ${
                  pathname.startsWith("/products") ? "text-primary" : "text-gray-900 hover:text-primary"
                }`}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {productCategories.map((category) => (
                <DropdownMenuItem key={category.slug} asChild>
                  <Link href={`/products/${category.slug}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/products">All Products</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
