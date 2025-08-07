'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { useScrollTop } from "@/hooks/use-scroll-top"

export function Header() {
  const router = useRouter()
  const [sheetOpen, setSheetOpen] = useState(false)
  
  // Use our custom hook to automatically scroll to top on route change
  useScrollTop()
  
  // Function to handle link clicks and scroll to top
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSheetOpen(false) // Close the mobile menu when a link is clicked
  }
  
  return (
    <header className="sticky top-0 z-50 w-full h-16 flex items-center justify-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between w-full">
        <a href="/" className="flex items-center justify-center" onClick={(e) => handleLinkClick(e, '/')}>
          <Image src="/logo.jpg" alt="Investment Advisory Firm Logo" width={32} height={32} className="h-8 w-8 flex-shrink-0 rounded-md" />
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50 hidden sm:inline">Investment Advisory Firm</span>
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50 sm:hidden">IAF</span>
        </a>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <a href="/services" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" onClick={(e) => handleLinkClick(e, '/services')}>
            Services
          </a>
          <a href="/packages" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" onClick={(e) => handleLinkClick(e, '/packages')}>
            Packages
          </a>
          <a href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" onClick={(e) => handleLinkClick(e, '/about')}>
            About Us
          </a>
          <a href="/contact" className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" onClick={(e) => handleLinkClick(e, '/contact')}>
            Contact Us
          </a>
        </nav>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[80vw] sm:max-w-[300px]">
            <nav className="grid gap-6 text-lg font-medium pt-6">
              <a href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={(e) => handleLinkClick(e, '/')}>
                <Image src="/logo.jpg" alt="Investment Advisory Firm Logo" width={24} height={24} className="h-6 w-6 rounded-md" />
                <span>Investment Advisory Firm</span>
              </a>
              <SheetClose asChild>
                <a href="/services" className="hover:text-green-500" onClick={(e) => handleLinkClick(e, '/services')}>
                  Services
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="/packages" className="hover:text-green-500" onClick={(e) => handleLinkClick(e, '/packages')}>
                  Packages
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="/about" className="hover:text-green-500" onClick={(e) => handleLinkClick(e, '/about')}>
                  About Us
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="/contact" className="hover:text-green-500" onClick={(e) => handleLinkClick(e, '/contact')}>
                  Contact Us
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
