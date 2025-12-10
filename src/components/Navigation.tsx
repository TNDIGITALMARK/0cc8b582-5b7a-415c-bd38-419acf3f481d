'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">Michelle Louis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/showcases"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Showcases
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/submit"
              className="btn-primary px-6 py-3 text-sm"
            >
              Submit Your Brand
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link
              href="/"
              className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/showcases"
              className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showcases
            </Link>
            <Link
              href="/blog"
              className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/submit"
              className="block btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit Your Brand
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
