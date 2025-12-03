"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import MegaMenu from './MegaMenu';

// --- UTILS ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// --- CONFIGURATION ---
const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: null }, // Trigger for MegaMenu
  { name: "CONTACT US", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  
  const pathname = usePathname();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initial Mount Animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle Scroll Logic - Special background for about page only
  useEffect(() => {
    const handleScroll = () => {
      // Only show background on scroll for about page, otherwise always show on scroll
      if (pathname === '/about') {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Reset states on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsServicesExpanded(false);
  }, [pathname]);

  // Close mega menu when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsServicesExpanded(false);
      setIsMegaMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Lock Body Scroll when Mobile Menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // --- HANDLERS FOR MEGA MENU ---
  const handleMouseEnterNav = (name: string) => {
    if (name === "OUR SERVICES") {
      if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
      setIsMegaMenuOpen(true);
    } else {
      // If moving to another link, close mega menu gracefully
      if(isMegaMenuOpen) {
         megaMenuTimeoutRef.current = setTimeout(() => setIsMegaMenuOpen(false), 200);
      }
    }
  };

  const handleMouseLeaveNav = (name: string) => {
    if (name === "OUR SERVICES") {
      megaMenuTimeoutRef.current = setTimeout(() => {
        setIsMegaMenuOpen(false);
      }, 300); // Slightly longer delay for user comfort
    }
  };

  // --- ANIMATION VARIANTS ---
  const mobileMenuVars = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { 
      scaleY: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] as const } 
    },
    exit: { 
      scaleY: 0, 
      opacity: 0, 
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const mobileLinkVars = {
    initial: { y: "30vh", opacity: 0, transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as const } },
    open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as const } }
  };

  return (
    <>
      {/* --- MAIN HEADER --- */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={isMounted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[999] w-full transition-all duration-300 ease-in-out px-4 sm:px-8 md:px-12 lg:px-16`}
        style={{
            paddingTop: isScrolled ? '0.75rem' : '1.5rem',
            paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
        }}
      >
        {/* Background Layer - Only on scroll, special for about page */}
        <div 
            className="absolute inset-0 transition-all duration-300 pointer-events-none"
            style={{
                backgroundColor: isScrolled ? 'rgba(5, 33, 38, 0.85)' : (pathname === '/about' ? 'transparent' : 'transparent'),
                backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
                borderBottom: isScrolled ? '1px solid rgba(53, 196, 221, 0.1)' : '1px solid transparent',
                boxShadow: isScrolled ? '0 10px 40px -10px rgba(5, 33, 38, 0.5)' : 'none',
            }}
        />

        <div className="relative z-10 max-w-[1920px] mx-auto flex items-center justify-between">
          
          {/* 1. LOGO (Always Visible) */}
          <Magnetic>
            <Link href="/" className="relative block z-50 group">
              <div className="relative w-40 h-10 sm:w-48 sm:h-12 md:w-56 md:h-14 overflow-hidden">
                <Image
                  src="/logo_main.png"
                  alt="Sharks Automation"
                  fill
                  priority
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </Magnetic>

          {/* 2. DESKTOP NAV (Visible on lg+) */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-[#35c4dd]/10 bg-[#052126]/40 backdrop-blur-md shadow-lg shadow-[#35c4dd]/5">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnterNav(link.name)}
                onMouseLeave={() => handleMouseLeaveNav(link.name)}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className="relative px-5 py-2.5 rounded-full group overflow-hidden block"
                  >
                    {/* Hover Pill */}
                    <span className="absolute inset-0 w-full h-full bg-[#35c4dd] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center" />
                    
                    {/* Text Reveal Animation */}
                    <span className="relative z-10 flex flex-col overflow-hidden h-5">
                      <span className="block text-[#f2f4f4] font-medium text-xs xl:text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {link.name}
                      </span>
                      <span className="block absolute top-full text-[#052126] font-bold text-xs xl:text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {link.name}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <span className="relative px-5 py-2.5 rounded-full group overflow-hidden block cursor-pointer">
                     <span className="absolute inset-0 w-full h-full bg-[#35c4dd] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center" />
                     <span className="relative z-10 flex flex-col overflow-hidden h-5">
                      <span className="block text-[#f2f4f4] font-medium text-xs xl:text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {link.name}
                      </span>
                      <span className="block absolute top-full text-[#052126] font-bold text-xs xl:text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {link.name}
                      </span>
                    </span>
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* 3. RIGHT ACTIONS (Desktop CTA + Mobile Toggle) */}
          <div className="flex items-center gap-4">
             {/* Desktop CTA */}
             <div className="hidden lg:block">
                <Magnetic>
                    <Link href="/contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full bg-[#35c4dd] text-[#f2f4f4] font-bold text-xs tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(53,196,221,0.5)]">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
                    <span className="relative flex items-center gap-2">
                        GET QUOTE <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    </Link>
                </Magnetic>
             </div>

            {/* Mobile/Tablet Hamburger (Visible < lg) */}
            <div className="lg:hidden z-[1000]">
                <Magnetic>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isMobileMenuOpen 
                        ? 'bg-[#f2f4f4] text-[#052126]' 
                        : 'bg-[#35c4dd]/10 text-[#35c4dd] border border-[#35c4dd]/20 backdrop-blur-md hover:bg-[#35c4dd] hover:text-[#052126]'
                    }`}
                >
                    <div className="relative w-5 h-5">
                        {/* Hamburger Lines Animation */}
                        <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0' : '-translate-y-1.5'}`} />
                        <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 -translate-y-0' : 'translate-y-1.5'}`} />
                    </div>
                </button>
                </Magnetic>
            </div>
          </div>

        </div>
      </motion.header>

      {/* --- 4. MEGA MENU (Desktop + Mobile/Tablet) --- */}
      <MegaMenu 
        isOpen={isMegaMenuOpen || (isServicesExpanded && isMobileMenuOpen)} 
        onClose={() => {
          if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
          }
          setIsMegaMenuOpen(false);
          setIsServicesExpanded(false);
        }}
        onMouseEnter={() => {
          if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
          }
        }}
        onMouseLeave={() => {
          // Only auto-close on desktop (lg+)
          if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            megaMenuTimeoutRef.current = setTimeout(() => {
              setIsMegaMenuOpen(false);
            }, 200);
          }
        }}
        isMobile={isMobileMenuOpen}
      />

      {/* --- 5. MOBILE MENU OVERLAY (The "Baap Level" Design) --- */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#052126] z-[998] origin-top flex flex-col"
          >
            {/* Background Aesthetics */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            
            <div className="flex flex-col h-full justify-center px-6 sm:px-12 pt-20 pb-10 relative z-10">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {NAV_LINKS.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      {link.href ? (
                        <Link 
                          href={link.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-baseline gap-4"
                        >
                          <span className="text-xs sm:text-sm font-mono text-[#35c4dd] opacity-60">0{index + 1}/</span>
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f2f4f4] uppercase tracking-tighter transition-all duration-300 group-hover:text-[#35c4dd] group-hover:translate-x-4">
                             {link.name}
                          </span>
                        </Link>
                      ) : (
                        // For "Our Services" in Mobile/Tablet - Show MegaMenu
                        <button
                          onClick={() => {
                            setIsServicesExpanded(!isServicesExpanded);
                            if (!isServicesExpanded) {
                              setIsMegaMenuOpen(true);
                            } else {
                              setIsMegaMenuOpen(false);
                            }
                          }}
                          className="group flex items-baseline gap-4 w-full cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-mono text-[#35c4dd] opacity-60">0{index + 1}/</span>
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f2f4f4] uppercase tracking-tighter transition-all duration-300 group-hover:text-[#35c4dd] group-hover:translate-x-4 flex-1 text-left">
                            {link.name}
                          </span>
                          {isServicesExpanded ? (
                            <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#35c4dd] transition-transform" />
                          ) : (
                            <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#35c4dd] transition-transform" />
                          )}
                        </button>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="px-6 sm:px-12 py-8 border-t border-[#35c4dd]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
            >
              <div className="flex gap-4">
                  {[
                      { Icon: Twitter, href: "https://twitter.com/thesharkretail" },
                      { Icon: Linkedin, href: "https://linkedin.com/company/shark-automation-lab" },
                      { Icon: Github, href: "https://github.com/thesharkretail" }
                  ].map((social, i) => (
                    <Link 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        className="w-10 h-10 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#f2f4f4] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300"
                    >
                        <social.Icon size={18} />
                    </Link>
                  ))}
              </div>

               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-[#35c4dd] text-[#052126] font-bold tracking-wider hover:bg-white transition-colors duration-300">
                    GET STARTED
               </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;