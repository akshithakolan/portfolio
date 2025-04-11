'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-gray-700 font-semibold hover:text-gray-900 transition-colors text-base sm:text-lg">
            The Kolanupaka&apos;s Konsole 🖥️
          </Link>
          <div className="hidden sm:flex gap-4 lg:gap-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#education" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              Certifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors relative group text-sm lg:text-base">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-gray-600 hover:text-gray-900 p-3"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 space-y-3">
          <Link 
            href="#about" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#education" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Education
          </Link>
          <Link 
            href="#skills" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            href="#certifications" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Certifications
          </Link>
          <Link 
            href="#projects" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="block text-gray-600 hover:text-blue-600 transition-colors py-3 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 