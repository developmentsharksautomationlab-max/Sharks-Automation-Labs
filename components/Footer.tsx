"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, ArrowUpRight, MapPin, Mail, Phone, ArrowRight, ShieldCheck, FileText, Globe, Cpu, Layers } from 'lucide-react';

// --- DATA ---
const footerMenu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const footerLegal = [
  { name: "Privacy Policy", href: "/privacy", icon: <ShieldCheck size={16} /> },
  { name: "Terms & Conditions", href: "/terms", icon: <FileText size={16} /> },
  { name: "Cookie Policy", href: "/cookies", icon: <FileText size={16} /> },
  { name: "Return Policy", href: "/returns", icon: <FileText size={16} /> },
];

const locations = [
  { 
    country: "USA (HQ)", 
    address: "22023 Rustic Canyon Ln, Richmond, TX 77469",
    phone: "+1 (469) 480-7938",
    flag: "🇺🇸"
  },
  { 
    country: "PAKISTAN (GDC)", 
    address: "DHA Commercial, Bukhari, Karachi",
    phone: "Global Delivery Center",
    flag: "🇵🇰"
  }
];

// --- COMPONENTS ---

// 1. Spotlight Card (Container for Hover Effects)
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-2xl border border-[#35c4dd]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#35c4dd]/50 shadow-sm hover:shadow-md ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(53, 196, 221, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 2. High Tech Link
const TechLink = ({ href, name, icon }: { href: string, name: string, icon?: React.ReactNode }) => (
  <a 
    href={href} 
    className="group flex items-center gap-3 py-2 text-[#052126]/60 hover:text-[#35c4dd] transition-all duration-300"
  >
    <div className="relative flex items-center justify-center w-6 h-6">
      <span className="absolute w-1.5 h-1.5 bg-[#35c4dd] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 shadow-[0_0_10px_#35c4dd]"></span>
      <span className="text-[#35c4dd] opacity-100 group-hover:opacity-0 transition-all duration-300">
         {icon ? icon : <ArrowRight size={14} />}
      </span>
    </div>
    <span className="font-medium tracking-wide group-hover:translate-x-1 transition-transform duration-300">{name}</span>
  </a>
);

// --- MAIN FOOTER ---
const Footer = () => {
  // Global Grid Pattern
  const GridPattern = () => (
    <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{
        backgroundImage: `linear-gradient(rgba(5, 33, 38, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 33, 38, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    ></div>
  );

  return (
    <footer className="bg-white text-[#052126] font-sans relative z-10 overflow-hidden">
      <GridPattern />
      
      {/* Top Decorative Line */}
      <div className="w-full h-1 bg-gradient-to-r from-white via-[#35c4dd] to-white opacity-50 shadow-[0_0_20px_#35c4dd]" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 pt-20 pb-12 relative z-10">
        
        {/* SECTION 1: HEADER & CTA (Flex layout) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-20 border-b border-[#35c4dd]/20 pb-12">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35c4dd]/10 border border-[#35c4dd]/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35c4dd] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35c4dd]"></span>
                </span>
                <span className="text-xs font-bold text-[#35c4dd] tracking-[0.2em] uppercase">Next-Gen Retail</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#052126] leading-[0.9]">
               Architecting the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35c4dd] via-[#052126] to-[#35c4dd] animate-gradient-x bg-[length:200%_auto]">
                 Future of Speed.
               </span>
             </h2>
          </div>
          
          {/* Big CTA Button */}
          <a href="/contact" className="group relative overflow-hidden rounded-full bg-[#052126] px-10 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(53,196,221,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#35c4dd] to-[#26a0b5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-4 text-white font-bold text-xl uppercase tracking-wider group-hover:text-white transition-colors">
              Start Project <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* SECTION 2: BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-20">
          
          {/* BRAND BLOCK (Span 4) */}
          <SpotlightCard className="lg:col-span-4 p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="w-12 h-12 bg-[#35c4dd] rounded-lg flex items-center justify-center mb-6 text-[#052126]">
                {/* Placeholder for Logo Icon */}
                <Cpu size={28} strokeWidth={2} /> 
              </div>
              <h3 className="text-2xl font-bold text-[#052126] mb-4">Shark Retail</h3>
              <p className="text-[#052126]/70 leading-relaxed">
                We don't just build software; we engineer digital ecosystems. Empowering brands with automation that feels like magic.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              {[<Facebook key="fb"/>, <Instagram key="ig"/>].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#35c4dd] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </SpotlightCard>

          {/* LINKS BLOCK (Span 2) */}
          <SpotlightCard className="lg:col-span-2 p-8">
            <h4 className="text-[#35c4dd] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <Layers size={14}/> Menu
            </h4>
            <div className="flex flex-col space-y-2">
              {footerMenu.map((link) => <TechLink key={link.name} {...link} />)}
            </div>
          </SpotlightCard>

          {/* LEGAL BLOCK (Span 2) */}
          <SpotlightCard className="lg:col-span-2 p-8">
            <h4 className="text-[#35c4dd] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <ShieldCheck size={14}/> Legal
            </h4>
            <div className="flex flex-col space-y-2">
              {footerLegal.map((link) => <TechLink key={link.name} {...link} icon={link.icon} />)}
            </div>
          </SpotlightCard>

          {/* CONTACT INFO (Span 4) */}
          <SpotlightCard className="lg:col-span-4 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-[#35c4dd]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <h4 className="text-[#35c4dd] font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <Globe size={14}/> Global Presence
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{loc.flag}</span>
                    <h5 className="font-bold text-[#052126] text-sm tracking-wide">{loc.country}</h5>
                  </div>
                  <p className="text-[#052126]/60 text-xs leading-relaxed mb-2 min-h-[2.5rem]">
                    {loc.address}
                  </p>
                  <div className="text-[#35c4dd] font-mono text-xs">
                    {loc.phone}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#052126]/10 flex flex-col sm:flex-row gap-4">
               <a href="mailto:info@thesharkretail.com" className="flex-1 py-3 px-4 rounded-lg bg-[#35c4dd]/10 border border-[#35c4dd]/20 hover:bg-[#35c4dd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold text-sm text-[#052126]">
                 <Mail size={16} /> Email Us
               </a>
               <a href="tel:+14694807938" className="flex-1 py-3 px-4 rounded-lg bg-[#052126]/5 border border-[#052126]/10 hover:bg-[#052126] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold text-sm text-[#052126]">
                 <Phone size={16} /> Call Now
               </a>
            </div>
          </SpotlightCard>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#052126]/40 text-sm border-t border-[#35c4dd]/10 pt-8">
           <p>© 2024 Shark Retail. Systems Operational.</p>
           <div className="flex items-center gap-6">
             <a href="#" className="hover:text-[#35c4dd] transition-colors">Sitemap</a>
             <a href="#" className="hover:text-[#35c4dd] transition-colors">Status</a>
             <span className="font-mono text-[#35c4dd] opacity-50">v2.4.0</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;