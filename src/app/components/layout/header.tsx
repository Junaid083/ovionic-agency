'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-purple-600 text-2xl font-bold">O</span>
            <span className="text-2xl font-bold">vionic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
            >
              About US
            </Link>
            <Link 
              href="/services" 
              className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-10">
                <Link 
                  href="/" 
                  className="text-purple-600 font-medium text-lg"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-900 font-medium text-lg"
                >
                  About US
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-900 font-medium text-lg"
                >
                  Our Services
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-900 font-medium text-lg"
                >
                  Contact Us
                </Link>
              </nav>
              <div className="flex gap-4 mt-8">
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

