"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValue, 
  useTransform, 
  useSpring 
} from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

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
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT US", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax Text Scroll Hook
  const yRange = useTransform(scrollY, [0, 100], [0, -20]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // Menu Variants for complex reveal
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
    },
    exit: { 
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
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
        className="fixed top-0 left-0 w-full z-[999]"
        style={{
          paddingTop: isScrolled ? '1rem' : '2rem',
          paddingBottom: isScrolled ? '1rem' : '2rem',
          backgroundColor: isScrolled ? 'rgba(5, 33, 38, 0.7)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(53, 196, 221, 0.1)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 40px -10px rgba(5, 33, 38, 0.8)' : 'none',
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
          <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-full bg-[#35c4dd]/5 border border-[#35c4dd]/10 backdrop-blur-md shadow-inner shadow-[#35c4dd]/5">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="relative px-6 py-2.5 rounded-full group overflow-hidden">
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
            ))}
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
                  {[Twitter, Linkedin, Github].map((Icon, i) => (
                    <Link key={i} href="#" className="w-12 h-12 rounded-full border border-[#35c4dd]/30 flex items-center justify-center text-[#f2f4f4] hover:bg-[#35c4dd] hover:text-[#052126] transition-all duration-300">
                      <Icon size={20} />
                    </Link>
                  ))}
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