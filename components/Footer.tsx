"use client";

import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

// --- Reusable SVG Logo Component ---
const SharkRetailLogo = () => (
  <div className="flex items-center gap-3">
    <img
      src="/images/sharks-retail-logo.png"
      alt="Shark Retail Logo"
      className="hidden sm:block h-14 w-auto"
    />
    <div className="flex flex-col">
      <span className="text-2xl font-bold">
        <span className="text-teal-400">Shark</span> <span className="text-white">Retail</span>
      </span>
      <span className="text-sm text-gray-400">Retail Automation Solutions</span>
    </div>
  </div>
);


// --- Data for the Footer ---
const footerNavLinks = ["Home Page", "Our Story", "Automation Solutions", "Additional Services", "Contact Information"];

const automationSolutions = [
  { name: 'Amazon Automation', href: '/automation/amazon' },
  { name: 'Shopify Automation', href: '/automation/shopify' },
  { name: 'TikTok Shop Automation', href: '/automation/tiktok' },
  { name: 'Walmart Automation', href: '/automation/walmart' },
  { name: 'Etsy Automation', href: '/automation/etsy' },
];

const additionalServices = [
  { name: 'PPC Management', href: '/services/ppc-management' },
  { name: 'Virtual Assistant', href: '/services/virtual-assistant' },
  { name: 'Account Reinstatement', href: '/services/account-reinstatement' },
  { name: 'Content Creation', href: '/services/content-creation' },
  { name: 'Deep Keyword Research', href: '/services/keyword-research' },
  { name: 'Product Hunting', href: '/services/product-hunting' },
];

const locationsData = [
  { 
    country: "United States", 
    officeType: "Headquarters", 
    flagEmoji: "🇺🇸", 
    address: ["22023 Rustic Canyon Ln", "Richmond, TX 77469", "USA"] 
  },
  { 
    country: "Pakistan", 
    officeType: "Global Delivery Center", 
    flagEmoji: "🇵🇰", 
    address: ["DHA Commercial", "Bukhari, Karachi", "Pakistan"] 
  }
];

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61582189354952", icon: <Facebook size={20} /> },
  { href: "https://www.instagram.com/sharks_retail?igsh=MWlxZHFldGsyZW1uMA==", icon: <Instagram size={20} /> }
];

// Chevron down icon for dropdowns (matching Header)
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

// --- Reusable Child Components ---
const FooterLink: React.FC<{ 
  label: string; 
  isAutomationOpen: boolean; 
  setIsAutomationOpen: (open: boolean) => void;
  isAdditionalServicesOpen: boolean;
  setIsAdditionalServicesOpen: (open: boolean) => void;
  automationTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
  additionalServicesTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
}> = ({ label, isAutomationOpen, setIsAutomationOpen, isAdditionalServicesOpen, setIsAdditionalServicesOpen, automationTimeoutRef, additionalServicesTimeoutRef }) => {
  if (label === "Automation Solutions") {
    return (
      <div 
        className="relative"
        onMouseEnter={() => {
          // Clear any pending timeout
          if (automationTimeoutRef.current) {
            clearTimeout(automationTimeoutRef.current);
            automationTimeoutRef.current = null;
          }
          setIsAutomationOpen(true);
        }}
        onMouseLeave={() => {
          // Delay closing to allow user to move mouse to dropdown
          automationTimeoutRef.current = setTimeout(() => {
            setIsAutomationOpen(false);
            automationTimeoutRef.current = null;
          }, 200);
        }}
      >
        <button
          className="flex items-center justify-center gap-2 hover:text-teal-400 transition-colors"
          style={isAutomationOpen ? { color: '#14b8a6' } : {}}
        >
          {label}
          <ChevronDownIcon />
        </button>
        
        {/* Dropdown Menu */}
        {isAutomationOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-64 bg-black rounded-lg shadow-xl border border-gray-700 z-50 bg-gradient-to-tl from-teal-400/20 via-black to-black"
          >
            <div className="pt-2 pb-3">
              {automationSolutions.map((solution) => (
                <a
                  key={solution.name}
                  href={solution.href}
                  className="block px-6 py-4 text-white hover:bg-teal-400/20 hover:text-teal-400 transition-colors text-center"
                >
                  <div className="font-semibold">{solution.name}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (label === "Additional Services") {
    return (
      <div 
        className="relative"
        onMouseEnter={() => {
          // Clear any pending timeout
          if (additionalServicesTimeoutRef.current) {
            clearTimeout(additionalServicesTimeoutRef.current);
            additionalServicesTimeoutRef.current = null;
          }
          setIsAdditionalServicesOpen(true);
        }}
        onMouseLeave={() => {
          // Delay closing to allow user to move mouse to dropdown
          additionalServicesTimeoutRef.current = setTimeout(() => {
            setIsAdditionalServicesOpen(false);
            additionalServicesTimeoutRef.current = null;
          }, 200);
        }}
      >
        <button
          className="flex items-center justify-center gap-2 hover:text-teal-400 transition-colors"
        >
          {label}
          <ChevronDownIcon />
        </button>
        
        {/* Dropdown Menu */}
        {isAdditionalServicesOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-64 bg-black rounded-lg shadow-xl border border-gray-700 z-50 bg-gradient-to-tl from-teal-400/20 via-black to-black"
          >
            <div className="pt-2 pb-3">
              {additionalServices.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-4 text-white hover:bg-teal-400/20 hover:text-teal-400 transition-colors text-center"
                >
                  <div className="font-semibold">{service.name}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <a 
      href={
        label === "Home Page" ? "/" : 
        label === "Our Story" ? "/about" :
        label === "Contact Information" ? "/contact" : 
        "#"
      } 
      className="text-white hover:text-teal-400 transition-colors"
    >
      {label}
    </a>
  );
};

interface LocationCardProps {
  country: string;
  officeType: string;
  flagEmoji: string;
  address: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({ country, officeType, flagEmoji, address }) => (
  <div>
    <h3 className="text-xl font-bold text-white flex items-center gap-3">
      {country}
      <span className="text-gray-400 text-sm font-normal flex items-center gap-1">
        ({officeType})
        {officeType === "Global Delivery Center" && (
          <span className="text-teal-400">🇵🇰</span>
        )}
        {officeType === "Headquarters" && (
          <span className="text-teal-400">🇺🇸</span>
        )}
      </span>
    </h3>
    <p className="mt-4 text-gray-400 leading-relaxed">
      {address.map(line => <React.Fragment key={line}>{line}<br/></React.Fragment>)}
    </p>
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} className="text-white bg-white/10 p-2 rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300">
    {icon}
  </a>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  const [isAutomationOpen, setIsAutomationOpen] = useState(false);
  const [isAdditionalServicesOpen, setIsAdditionalServicesOpen] = useState(false);
  const automationTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const additionalServicesTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  return (
    <footer className="relative bg-black text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-400/25 to-transparent z-0"></div>

      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        {/* Top Section: Logo and Nav */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-6 sm:gap-8 text-center lg:text-left">
          <SharkRetailLogo />
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {footerNavLinks.map(link => (
              <FooterLink 
                key={link} 
                label={link} 
                isAutomationOpen={isAutomationOpen}
                setIsAutomationOpen={setIsAutomationOpen}
                isAdditionalServicesOpen={isAdditionalServicesOpen}
                setIsAdditionalServicesOpen={setIsAdditionalServicesOpen}
                automationTimeoutRef={automationTimeoutRef}
                additionalServicesTimeoutRef={additionalServicesTimeoutRef}
              />
            ))}
          </nav>
          {/* Mobile Navigation */}
          <nav className="lg:hidden w-full">
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map((link) => (
                <li key={`m-${link}`} className="">
                  {link === 'Automation Solutions' ? (
                    <div className="">
                      <button
                        onClick={() => setIsAutomationOpen((o) => !o)}
                        className="w-full flex items-center justify-center gap-2 py-3 hover:text-teal-400"
                        style={isAutomationOpen ? { color: '#14b8a6' } : {}}
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
                              className="block py-2 text-white/90 hover:text-teal-400 text-center"
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
                        className="w-full flex items-center justify-center gap-2 py-3 hover:text-teal-400"
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
                              className="block py-2 text-white/90 hover:text-teal-400 text-center"
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
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle Section: Globe and Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 mt-12 sm:mt-16 items-center">
          {/* Left Side: Globe Visualization */}
          <div className="relative">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto lg:mx-0">
              <div className="relative w-full h-full animate-spin-slow">
                {/* Earth Globe with 3D Effect */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Earth gradient */}
                    <radialGradient id="footerEarthGradient" cx="40%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
                      <stop offset="40%" stopColor="#0d9488" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="#134e4a" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3"/>
                    </radialGradient>
                    
                    {/* Earth highlight */}
                    <linearGradient id="footerEarthHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
                    </linearGradient>
                    
                    {/* Glow effect */}
                    <filter id="footerEarthGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main Earth sphere with rotation */}
                  <circle cx="50" cy="50" r="45" fill="url(#footerEarthGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#footerEarthGlow)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 50 50;360 50 50"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  {/* Earth highlight for 3D effect */}
                  <ellipse cx="40" cy="40" rx="15" ry="20" fill="url(#footerEarthHighlight)" opacity="0.4"/>
                  
                  {/* Continental outlines with animation */}
                  <path d="M30 45 Q35 40 40 45 Q45 50 50 45 Q55 40 60 45 Q65 50 70 45" 
                        stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M25 55 Q30 50 35 55 Q40 60 45 55 Q50 50 55 55 Q60 60 65 55 Q70 50 75 55" 
                        stroke="#14b8a6" strokeWidth="0.6" fill="none" opacity="0.2">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Global network connections with animation */}
                  <line x1="50" y1="50" x2="25" y2="35" stroke="#14b8a6" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="50" x2="60" y2="40" stroke="#14b8a6" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                  </line>
                  
                  {/* Office location dots with pulsing animation */}
                  <circle cx="25" cy="35" r="2.5" fill="#14b8a6" opacity="0.8">
                    <animate attributeName="r" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="60" cy="40" r="2" fill="#14b8a6" opacity="0.8">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                  
                  {/* Orbital rings around Earth with rotation */}
                  <ellipse cx="50" cy="50" rx="50" ry="8" fill="none" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 50 50;360 50 50"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <ellipse cx="50" cy="50" rx="52" ry="6" fill="none" stroke="#14b8a6" strokeWidth="0.3" opacity="0.15">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="360 50 50;0 50 50"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                </svg>
                
                {/* Floating network particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-60">
                    <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute"></div>
                  </div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}>
                    <div className="w-full h-full bg-teal-300 rounded-full animate-ping absolute" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Address Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center lg:text-left mx-auto md:mx-0">
            {locationsData.map(location => <LocationCard key={location.country} {...location} />)}
          </div>
        </div>

        {/* Bottom Section: Contact Info, Legal, and Socials */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-white/10 text-center md:text-left">
          <div className="space-y-6">
            <div className="space-y-3">
              <a href="mailto:info@thesharkretail.com" className="text-lg sm:text-xl font-bold text-white hover:text-teal-400 transition-colors block">
                info@thesharkretail.com
              </a>
              <a href="tel:+14694807938" className="text-base sm:text-lg font-semibold text-white hover:text-teal-400 transition-colors block">
                (469) 480-7938
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 self-center md:self-auto">
            {socialLinks.map((link, index) => <SocialIcon key={index} {...link} />)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
