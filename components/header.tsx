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
          <SheetContent side="left" className="max-w-[80vw] sm:max-w-[300px] p-0 border-r border-gray-200 dark:border-gray-800">
            <div className="p-6 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
              <a href="/" className="flex items-center gap-3 mb-8" onClick={(e) => handleLinkClick(e, '/')}>
                <Image src="/logo.jpg" alt="Investment Advisory Firm Logo" width={40} height={40} className="h-10 w-10 rounded-md" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Investment Advisory Firm</span>
              </a>
            </div>
            <nav className="flex flex-col py-4">
              <SheetClose asChild>
                <a 
                  href="/services" 
                  className="flex items-center px-6 py-4 text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" 
                  onClick={(e) => handleLinkClick(e, '/services')}
                >
                  <svg className="mr-3 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Services
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a 
                  href="/packages" 
                  className="flex items-center px-6 py-4 text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" 
                  onClick={(e) => handleLinkClick(e, '/packages')}
                >
                  <svg className="mr-3 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Packages
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a 
                  href="/about" 
                  className="flex items-center px-6 py-4 text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" 
                  onClick={(e) => handleLinkClick(e, '/about')}
                >
                  <svg className="mr-3 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a 
                  href="/contact" 
                  className="flex items-center px-6 py-4 text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" 
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  <svg className="mr-3 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </SheetClose>
            </nav>
            <div className="mt-auto p-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Investment Advisory Firm</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
