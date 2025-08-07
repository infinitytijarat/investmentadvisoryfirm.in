import Link from "next/link"
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Investment Advisory Firm is a leading financial management company in India, providing a wide range of financial services to a large and diverse client base.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" /> +91 8828792729
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" /> info@investmentadvisoryfirm.in
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> Mohile chawl no 5 Room No. 42 Jivan Baug, Mumbra Thane, Maharashtra 400612
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-white">Services</Link></li>
              <li><Link href="/packages" className="text-sm hover:text-white">Packages</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <p className="text-xs">
              This Website is NOT a part of Meta or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta in any way.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row gap-4 items-center">
                    <p className="text-xs text-center sm:text-left">&copy; {new Date().getFullYear()} Investment Advisory Firm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
