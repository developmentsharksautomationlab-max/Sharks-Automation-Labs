"use client";

import React, { useState } from 'react';

// --- Reusable Icon Components ---

// Official Shark Retail logo
const SharkRetailLogo = () => (
  <img
    src="/images/sharks-retail-logo.png"
    alt="Shark Retail Logo"
    className="h-12 w-auto lg:h-16"
  />
);

// Simple theme toggle switch
const ThemeToggle = () => (
  <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false">
    <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out" />
  </button>
);

// Chevron down icon for dropdowns
const ChevronDownIcon = () => (
  <svg
    className="h-4 w-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// --- Main Header Component ---

const Header: React.FC = () => {
  const [isAutomationOpen, setIsAutomationOpen] = useState(false);
  const [isAdditionalServicesOpen, setIsAdditionalServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'Home Page',
    'Our Story',
    'Automation Solutions',
    'Additional Services',
    'Contact Information',
  ];

  const automationSolutions = [
    { name: 'Amazon Automation', href: '/automation/amazon' },
    { name: 'Shopify Automation', href: '/automation/shopify' },
    { name: 'TikTok Shop Automation', href: '/automation/tiktok' },
    { name: 'Walmart Automation', href: '/automation/walmart' },
  ];

  const additionalServices = [
    { name: 'PPC Management', href: '/services/ppc-management' },
    { name: 'Virtual Assistant', href: '/services/virtual-assistant' },
    { name: 'Account Reinstatement', href: '/services/account-reinstatement' },
    { name: 'Content Creation', href: '/services/content-creation' },
    { name: 'Deep Keyword Research', href: '/services/keyword-research' },
    { name: 'Product Hunting', href: '/services/product-hunting' },
  ];

  return (
    <header className="bg-black text-white font-avant-garde sticky top-0 z-50">
      {/* 
        CUSTOM FONT INSTRUCTIONS:
        1. Add your font file (e.g., itcavantgardestd-bk.woff2) to `/public/fonts`.
        2. In `globals.css`, define the font-face:
           @font-face {
             font-family: 'Itcavantgardestd Bk';
             src: url('/fonts/itcavantgardestd-bk.woff2') format('woff2');
             font-weight: normal;
             font-style: normal;
           }
        3. In `tailwind.config.ts`, extend the theme:
           theme: {
             extend: {
               fontFamily: {
                 'avant-garde': ['Itcavantgardestd Bk', 'sans-serif'],
               },
             },
           },
      */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="group relative">
            <div className="flex items-center gap-2">
              <div className="transition-transform duration-700 ease-in-out group-hover:-translate-x-2">
                <SharkRetailLogo />
              </div>
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-x-2 group-hover:translate-x-0">
                <span className="font-bold text-base lg:text-lg">
                  <span className="text-teal-400">Shark</span> <span className="text-white">Retail</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-sm font-light tracking-wider">
            {navLinks.map((link) => (
              <li key={link} className="relative">
                {link === "Automation Solutions" ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsAutomationOpen(true)}
                      onMouseLeave={() => setIsAutomationOpen(false)}
                      className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                    >
                      {link}
                      <ChevronDownIcon />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isAutomationOpen && (
                      <div 
                        className="absolute top-full left-0 w-64 bg-black rounded-lg shadow-xl border border-gray-700 z-50 bg-gradient-to-tl from-teal-400/20 via-black to-black"
                        onMouseEnter={() => setIsAutomationOpen(true)}
                        onMouseLeave={() => setIsAutomationOpen(false)}
                      >
                        <div className="pt-2 pb-3">
                          {automationSolutions.map((solution) => (
                            <a
                              key={solution.name}
                              href={solution.href}
                              className="block px-6 py-4 text-white hover:bg-teal-400/20 hover:text-teal-400 transition-colors"
                            >
                              <div className="font-semibold">{solution.name}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : link === "Additional Services" ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsAdditionalServicesOpen(true)}
                      onMouseLeave={() => setIsAdditionalServicesOpen(false)}
                      className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                    >
                      {link}
                      <ChevronDownIcon />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isAdditionalServicesOpen && (
                      <div 
                        className="absolute top-full left-0 w-64 bg-black rounded-lg shadow-xl border border-gray-700 z-50 bg-gradient-to-tl from-teal-400/20 via-black to-black"
                        onMouseEnter={() => setIsAdditionalServicesOpen(true)}
                        onMouseLeave={() => setIsAdditionalServicesOpen(false)}
                      >
                        <div className="pt-2 pb-3">
                          {additionalServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-6 py-4 text-white hover:bg-teal-400/20 hover:text-teal-400 transition-colors"
                            >
                              <div className="font-semibold">{service.name}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={
                      link === "Home Page" ? "/" : 
                      link === "Our Story" ? "/about" :
                      link === "Contact Information" ? "/contact" : 
                      "#"
                    } 
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a href="/contact" className="border border-teal-400 bg-teal-400 text-white font-light py-2.5 lg:py-3 px-4 lg:px-6 rounded-full text-xs lg:text-sm hover:bg-white hover:text-black transition-colors">
              Explore Careers
            </a>
            <a href="/contact" className="border border-teal-400 text-teal-400 font-light py-2.5 lg:py-3 px-4 lg:px-6 rounded-full text-xs lg:text-sm hover:bg-teal-400 hover:text-black transition-colors">
              Let's Talk Business
            </a>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-teal-400 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-teal-400 lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden border-t border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={`m-${link}`} className="">
                {link === 'Automation Solutions' ? (
                  <div className="">
                    <button
                      onClick={() => setIsAutomationOpen((o) => !o)}
                      className="w-full flex items-center justify-between py-3 text-left hover:text-teal-400"
                    >
                      <span>Automation Solutions</span>
                      <ChevronDownIcon />
                    </button>
                    {isAutomationOpen && (
                      <div className="mt-2 rounded-lg border border-gray-700 bg-gradient-to-tl from-teal-400/20 via-black to-black p-2">
                        {automationSolutions.map((solution) => (
                          <a
                            key={`m-${solution.name}`}
                            href={solution.href}
                            className="block py-2 text-white/90 hover:text-teal-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {solution.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link === 'Additional Services' ? (
                  <div className="">
                    <button
                      onClick={() => setIsAdditionalServicesOpen((o) => !o)}
                      className="w-full flex items-center justify-between py-3 text-left hover:text-teal-400"
                    >
                      <span>Additional Services</span>
                      <ChevronDownIcon />
                    </button>
                    {isAdditionalServicesOpen && (
                      <div className="mt-2 rounded-lg border border-gray-700 bg-gradient-to-tl from-teal-400/20 via-black to-black p-2">
                        {additionalServices.map((service) => (
                          <a
                            key={`m-${service.name}`}
                            href={service.href}
                            className="block py-2 text-white/90 hover:text-teal-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={
                      link === 'Home Page' ? '/' :
                      link === 'Our Story' ? '/about' :
                      link === 'Contact Information' ? '/contact' : '#'
                    }
                    className="block py-3 hover:text-teal-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-center gap-2 md:hidden">
            <a href="/contact" className="inline-flex w-full items-center justify-center border border-teal-400 bg-teal-400 text-white font-light py-2.5 px-4 rounded-full text-xs hover:bg-white hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Explore Careers
            </a>
            <a href="/contact" className="inline-flex w-full items-center justify-center border border-teal-400 text-teal-400 font-light py-2.5 px-4 rounded-full text-xs hover:bg-teal-400 hover:text-black transition-colors">
              Let's Talk Business
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;