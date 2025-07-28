"use client";

import React, { useState } from 'react';
import { FileImage, FileText, Image, File, ChevronDown, Home, Info, HelpCircle } from 'lucide-react';

export default function ConverterNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const converterOptions = [
    {
      icon: <FileImage className="w-4 h-4 text-red-600" />,
      title: "Image to PDF",
      href: "image-to-pdf"
    },
    {
      icon: <FileText className="w-4 h-4 text-green-600" />,
      title: "Word to PDF",
      href: "word-to-pdf"
    },
    {
      icon: <File className="w-4 h-4 text-purple-600" />,
      title: "PDF Tools",
      href: "pdf-tools"
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-999">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="bg-gray-900 p-2 rounded-lg">
                <File className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-medium text-gray-900">FileConverter</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Home Link */}
            <a 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </a>

            {/* Converters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
              >
                <span className="font-medium">Converters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {converterOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex-shrink-0">
                        {option.icon}
                      </div>
                      <span className="font-medium">{option.title}</span>
                    </a>
                  ))}
                  
                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* All Tools Link */}
                  <a
                    href="/tools"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <File className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-medium">All Tools</span>
                  </a>
                </div>
              )}
            </div>

            {/* About Link */}
            <a 
              href="/about" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span className="font-medium">About</span>
            </a>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {/* {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-99" 
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )} */}
    </nav>
  );
}