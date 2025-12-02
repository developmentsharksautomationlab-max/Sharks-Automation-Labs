"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValue, 
  useTransform, 
  useSpring 
} from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
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
  { name: "OUR SERVICES", href: null }, // No link, just text
  { name: "CONTACT US", href: "/contact" },
];

const Header = () => {
  // Always start with no background - only show on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isCreativeDesignPage = pathname?.includes('/creative-design') || pathname?.includes('/our-services');
  const footerObserverRef = useRef<IntersectionObserver | null>(null);
  const { scrollY } = useScroll();
  
  // Parallax Text Scroll Hook
  const yRange = useTransform(scrollY, [0, 100], [0, -20]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset scroll state when switching pages
  useEffect(() => {
    // Always reset scroll state when pathname changes
    setIsScrolled(false);
    
    // Additional reset for About page
    if (isAboutPage) {
      setIsScrolled(false);
    }
  }, [pathname, isAboutPage]);

  // Handle scroll for ALL pages (including homepage) - Header should scroll with page
  useEffect(() => {
    if (!isAboutPage) {
      // For all pages except About page, show background on scroll
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      
      // Add scroll listener with passive for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Always start with no background - only show when scrolling
      setIsScrolled(false);
      
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // On About page, explicitly disable any scroll-based background
      // This ensures no background appears before footer is reached
      setIsScrolled(false);
    }
  }, [isAboutPage]);

  // Handle footer detection for About page - ONLY show background when footer is visible
  useEffect(() => {
    if (!isAboutPage) {
      // Clean up observer when leaving About page
      if (footerObserverRef.current) {
        footerObserverRef.current.disconnect();
        footerObserverRef.current = null;
      }
      return;
    }

    // CRITICAL: Ensure background is ALWAYS hidden initially on About page
    // This prevents any background from showing before footer is reached
    setIsScrolled(false);

    // Cleanup previous observer
    if (footerObserverRef.current) {
      footerObserverRef.current.disconnect();
      footerObserverRef.current = null;
    }

    // Wait a bit for the page to render (especially for dynamic imports)
    const timeoutId = setTimeout(() => {
      // Find footer element - try multiple times if not found initially
      const findFooter = (attempts = 0) => {
        const footer = document.querySelector('footer');
        if (!footer && attempts < 10) {
          setTimeout(() => findFooter(attempts + 1), 300);
          return;
        }
        if (!footer) {
          // Footer not found, keep background hidden
          setIsScrolled(false);
          return;
        }

        // Create intersection observer to detect when footer is visible
        // STRICT: Only trigger when footer actually enters viewport
        footerObserverRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // STRICT CHECK: Only show background when footer is intersecting AND has visible area
              if (entry.isIntersecting && entry.intersectionRatio > 0) {
                // Footer is now visible - show background
                setIsScrolled(true);
              } else {
                // Footer is not visible - hide background immediately
                setIsScrolled(false);
              }
            });
          },
          {
            threshold: [0, 0.01, 0.05], // Multiple thresholds for precise detection
            rootMargin: '0px' // No margin - trigger exactly when footer enters viewport
          }
        );

        footerObserverRef.current.observe(footer);
      };

      findFooter();
    }, 1500); // Increased delay to ensure OurStoryHero is fully loaded

    return () => {
      clearTimeout(timeoutId);
      if (footerObserverRef.current) {
        footerObserverRef.current.disconnect();
        footerObserverRef.current = null;
      }
      // CRITICAL: Reset scroll state when leaving About page
      setIsScrolled(false);
    };
  }, [isAboutPage]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // Menu Variants for complex reveal
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] as const }
    },
    exit: { 
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as const } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as const } }
  };

  return (
    <>
      {/* --- MAIN HEADER --- */}
      <motion.header
        initial={{ y: -200, opacity: 0 }}
        animate={isMounted ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1], 
          delay: 0.3,
          opacity: { duration: 0.8, delay: 0.3 }
        }}
        className={`${isHomePage ? 'sticky' : 'fixed'} top-0 left-0 right-0 w-full z-[999] transition-all duration-300`}
        style={{
          position: isHomePage ? 'sticky' : 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 999,
          paddingTop: isHomePage 
            ? (isScrolled ? '0.5rem' : '0.75rem') // Homepage: reduced padding for smaller height
            : (isScrolled ? '1rem' : '2rem'),
          paddingBottom: isHomePage 
            ? (isScrolled ? '0.5rem' : '0.75rem') // Homepage: reduced padding for smaller height
            : (isScrolled ? '1rem' : '2rem'),
          backgroundColor: isCreativeDesignPage 
            ? (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')
            : isHomePage
            ? 'rgba(5, 33, 38, 0.95)' // Homepage: banner color (#052126) always - top and scroll
            : (isScrolled ? 'rgba(5, 33, 38, 0.7)' : 'transparent'),
          backdropFilter: isCreativeDesignPage 
            ? (isScrolled ? 'blur(24px)' : 'blur(0px)')
            : isHomePage
            ? 'blur(24px)' // Homepage: blur always
            : (isScrolled ? 'blur(24px)' : 'blur(0px)'),
          borderBottom: isCreativeDesignPage 
            ? (isScrolled ? '1px solid rgba(53, 196, 221, 0.1)' : '1px solid transparent')
            : isHomePage
            ? '1px solid rgba(53, 196, 221, 0.1)' // Homepage: border always
            : (isScrolled ? '1px solid rgba(53, 196, 221, 0.1)' : '1px solid transparent'),
          boxShadow: isCreativeDesignPage 
            ? (isScrolled ? '0 10px 40px -10px rgba(5, 33, 38, 0.8)' : 'none')
            : isHomePage
            ? '0 10px 40px -10px rgba(5, 33, 38, 0.8)' // Homepage: shadow always
            : (isScrolled ? '0 10px 40px -10px rgba(5, 33, 38, 0.8)' : 'none'),
          transition: 'padding 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-16 flex items-center justify-between">
          
          {/* 1. LOGO (Magnetic) */}
          <Magnetic>
            <Link href="/" className="relative block z-50 group">
              <div className="relative w-48 h-12 md:w-56 md:h-14 overflow-hidden">
                {/* Logo Placeholder - Replacing Image with text for demo if image fails */}
                <Image
                  src="/logo_main.png"
                  alt="Sharks Automation"
                  fill
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </Magnetic>

          {/* 2. DESKTOP NAV (Glass Capsule) */}
          <nav 
            className="hidden lg:flex items-center gap-2 p-1.5 rounded-full border border-[#35c4dd]/10 backdrop-blur-md shadow-inner shadow-[#35c4dd]/5"
            style={{
              backgroundColor: isCreativeDesignPage 
                ? 'rgba(0, 0, 0, 0.8)' // Always strong background on creative-design page
                : isHomePage
                ? 'transparent' // Homepage: nav menu transparent - top and scroll
                : (isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'),
              backdropFilter: isCreativeDesignPage 
                ? 'blur(24px)' // Always strong blur on creative-design page
                : isHomePage
                ? 'blur(0px)' // Homepage: nav menu no blur
                : (isScrolled ? 'blur(20px)' : 'blur(16px)'),
              transition: 'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {NAV_LINKS.map((link) => {
              const isOurServices = link.name === "OUR SERVICES";
              
              const handleMouseEnter = () => {
                if (isOurServices) {
                  if (megaMenuTimeoutRef.current) {
                    clearTimeout(megaMenuTimeoutRef.current);
                    megaMenuTimeoutRef.current = null;
                  }
                  setIsMegaMenuOpen(true);
                }
              };
              
              const handleMouseLeave = () => {
                if (isOurServices) {
                  // Start timeout - will be cancelled if mouse enters menu
                  megaMenuTimeoutRef.current = setTimeout(() => {
                    setIsMegaMenuOpen(false);
                  }, 150);
                }
              };
              
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="relative px-6 py-2.5 rounded-full group overflow-hidden block"
                    >
                      {/* Hover Background Pill */}
                      <span className="absolute inset-0 w-full h-full bg-[#35c4dd] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center" />
                      
                      <span className="relative z-10 flex flex-col overflow-hidden h-5">
                        <span className="block text-[#f2f4f4] font-medium text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                          {link.name}
                        </span>
                        <span className="block absolute top-full text-[#f2f4f4] font-bold text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                          {link.name}
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <span className="relative px-6 py-2.5 rounded-full group overflow-hidden block cursor-default">
                      {/* Hover Background Pill */}
                      <span className="absolute inset-0 w-full h-full bg-[#35c4dd] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center" />
                      
                      <span className="relative z-10 flex flex-col overflow-hidden h-5">
                        <span className="block text-[#f2f4f4] font-medium text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                          {link.name}
                        </span>
                        <span className="block absolute top-full text-[#f2f4f4] font-bold text-sm tracking-widest group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                          {link.name}
                        </span>
                      </span>
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* 3. RIGHT ACTION AREA */}
          <div className="hidden lg:flex items-center gap-6">
             <Magnetic>
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-[#35c4dd] text-[#f2f4f4] font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(53,196,221,0.6)]">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f2f4f4] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center gap-2">
                    GET QUOTE <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
             </Magnetic>
          </div>

          {/* 4. MOBILE HAMBURGER (Magnetic) */}
          <div className="lg:hidden z-[1000]">
            <Magnetic>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative w-14 h-14 flex items-center justify-center rounded-full transition-colors duration-500 ${
                  isMobileMenuOpen ? 'bg-white text-black' : 'bg-[#35c4dd]/10 text-[#35c4dd] border border-[#35c4dd]/20 backdrop-blur-md'
                }`}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0' : '-translate-y-2'}`} />
                  <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 -translate-y-0' : 'translate-y-2'}`} />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      {/* --- 5. MOBILE MENU (THE "BAAP LEVEL" OVERLAY) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#052126] z-[990] origin-top flex flex-col justify-between"
          >
            {/* Dynamic Background Noise & Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#35c4dd_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="flex flex-col h-full justify-center px-4 sm:px-6 md:px-20 pt-20 sm:pt-24 pb-10">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-4 sm:gap-6"
              >
                {NAV_LINKS.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      {link.href ? (
                        <Link 
                          href={link.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center gap-3 sm:gap-4 md:gap-6"
                        >
                          <span className="text-xs sm:text-sm font-mono text-[#35c4dd] opacity-50">0{index + 1}/</span>
                          <span className="text-4xl sm:text-5xl md:text-8xl font-black text-[#f2f4f4] uppercase tracking-tighter transition-all duration-500 group-hover:text-transparent group-hover:stroke-cyan group-hover:translate-x-4">
                             {link.name}
                          </span>
                        </Link>
                      ) : (
                        <span 
                          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                          className="group flex items-center gap-3 sm:gap-4 md:gap-6 cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-mono text-[#35c4dd] opacity-50">0{index + 1}/</span>
                          <span className="text-4xl sm:text-5xl md:text-8xl font-black text-[#f2f4f4] uppercase tracking-tighter transition-all duration-500 group-hover:text-transparent group-hover:stroke-cyan group-hover:translate-x-4">
                             {link.name}
                          </span>
                        </span>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Footer Area in Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="px-6 md:px-20 py-8 border-t border-[#35c4dd]/10 flex flex-wrap justify-between items-end"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#35c4dd] text-sm font-mono tracking-widest uppercase mb-2">Socials</span>
                <div className="flex gap-4">
                  <Link href="https://twitter.com/thesharkretail" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#f2f4f4] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300">
                    <Twitter size={20} />
                  </Link>
                  <Link href="https://linkedin.com/company/shark-automation-lab" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#f2f4f4] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300">
                    <Linkedin size={20} />
                  </Link>
                  <Link href="https://github.com/thesharkretail" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#f2f4f4] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300">
                    <Github size={20} />
                  </Link>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                 <p className="text-[#f2f4f4]/30 text-xs uppercase tracking-[0.2em]">
                   Designed for Sharks Automation
                 </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={() => {
          if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
          }
          setIsMegaMenuOpen(false);
        }}
        onMouseEnter={() => {
          // Cancel any pending close from nav item
          if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
          }
        }}
        onMouseLeave={() => {
          // Start timeout to close
          megaMenuTimeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
          }, 200);
        }}
      />

      <style jsx global>{`
        .stroke-cyan {
          -webkit-text-stroke: 1px #35c4dd;
        }
        .group:hover .stroke-cyan {
          -webkit-text-stroke: 1px #35c4dd;
        }
      `}</style>
    </>
  );
};

export default Header;