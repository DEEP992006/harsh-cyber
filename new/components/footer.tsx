import { Facebook, Twitter, Instagram, Youtube, CreditCard, ShieldCheck, Truck, Headphones } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Features Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Truck className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Free Shipping</p>
                <p className="text-xs text-gray-400">On orders over ₹5000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Secure Payment</p>
                <p className="text-xs text-gray-400">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Easy Returns</p>
                <p className="text-xs text-gray-400">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Headphones className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">24/7 Support</p>
                <p className="text-xs text-gray-400">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold text-white">TechStore</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted destination for premium tech products at competitive prices.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/?category=Phones" className="hover:text-white transition-colors">Phones</Link></li>
              <li><Link href="/?category=Laptops" className="hover:text-white transition-colors">Laptops</Link></li>
              <li><Link href="/?category=Audio" className="hover:text-white transition-colors">Audio</Link></li>
              <li><Link href="/?category=Gaming" className="hover:text-white transition-colors">Gaming</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers and exclusive deals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 TechStore. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
