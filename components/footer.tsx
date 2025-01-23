import Link from 'next/link'
import { HelpCircle, Gift } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products-and-services" className="hover:text-primary transition-colors">Products & Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <Link href="/faqs" className="flex items-center space-x-2 group">
              <div className="bg-primary rounded-full p-2 group-hover:bg-primary/80 transition-colors">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <span className="group-hover:text-primary transition-colors">FAQs</span>
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <Link href="/contact" className="flex items-center space-x-2 group">
              <div className="bg-primary rounded-full p-2 group-hover:bg-primary/80 transition-colors">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <span className="group-hover:text-primary transition-colors">Get in Touch</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

