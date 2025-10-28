"use client";

import React, { useState } from 'react';

// --- Reusable Icon Components ---

// Official Shark Retail logo
const SharkRetailLogo = () => (
  <img
    src="/images/sharks-retail-logo.png"
    alt="Shark Retail Logo"
    className="h-16 w-auto"
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
    <header className="bg-black text-white font-avant-garde">
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
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="group relative">
            <div className="flex items-center gap-0">
              <div className="transition-transform duration-700 ease-in-out group-hover:-translate-x-2">
                <SharkRetailLogo />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-x-2 group-hover:translate-x-0">
                <span className="font-bold text-lg">
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
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                        onMouseEnter={() => setIsAutomationOpen(true)}
                        onMouseLeave={() => setIsAutomationOpen(false)}
                      >
                        <div className="py-2">
                          {automationSolutions.map((solution) => (
                            <a
                              key={solution.name}
                              href={solution.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
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
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                        onMouseEnter={() => setIsAdditionalServicesOpen(true)}
                        onMouseLeave={() => setIsAdditionalServicesOpen(false)}
                      >
                        <div className="py-2">
                          {additionalServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
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
        <div className="flex items-center gap-4">
          <button className="border border-teal-400 bg-teal-400 text-white font-light py-3 px-6 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
            Explore Careers
          </button>
          <a href="/contact" className="border border-teal-400 text-teal-400 font-light py-3 px-6 rounded-full text-sm hover:bg-teal-400 hover:text-black transition-colors">
            Let's Talk Business
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;