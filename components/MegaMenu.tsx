"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Smartphone, TrendingUp, Search, Users, Building2, Cpu, Palette, MessageSquare, Bot, Network, Box, Globe, Layers, Rocket } from 'lucide-react';

// Service Categories with Icons
const SERVICE_CATEGORIES = [
  {
    title: "Digital Services",
    icon: Globe,
    color: "#35c4dd",
    services: [
      { name: "Web Development", href: "/our-services/digital-services/web-development", icon: Code },
      { name: "App Development", href: "/our-services/digital-services/app-development", icon: Smartphone },
      { name: "Social Media Marketing", href: "/our-services/digital-services/social-media", icon: MessageSquare },
      { name: "Performance Marketing", href: "/our-services/digital-services/performance-marketing", icon: TrendingUp },
      { name: "Search Engine Optimization", href: "/our-services/digital-services/seo", icon: Search },
    ]
  },
  {
    title: "Creative Services",
    icon: Palette,
    color: "#ff6b9d",
    services: [
      { name: "Creative Design", href: "/our-services/creative-services/creative-design", icon: Sparkles },
      { name: "Creative Services", href: "/our-services/creative-services/creative", icon: Palette },
    ]
  },
  {
    title: "Outsourcing Partnership",
    icon: Users,
    color: "#00ff88",
    services: [
      { name: "Outsourcing Partnership", href: "/our-services/outsourcing-partnership/outsourcing", icon: Users },
      { name: "Agency Development Plan", href: "/our-services/outsourcing-partnership/agency-plan", icon: Building2 },
    ]
  },
  {
    title: "Virtual Resources",
    icon: Cpu,
    color: "#ffaa00",
    services: [
      { name: "Designer Resources", href: "/our-services/virtual-resources/designer-resources", icon: Palette },
      { name: "Developer Resources", href: "/our-services/virtual-resources/developer-resources", icon: Code },
      { name: "Marketing Resources", href: "/our-services/virtual-resources/marketing-resources", icon: TrendingUp },
      { name: "Virtual Assistant", href: "/our-services/virtual-resources/virtual-assistant", icon: Bot },
    ]
  },
  {
    title: "Emerging Technologies",
    icon: Rocket,
    color: "#9d4edd",
    services: [
      { name: "NFTs", href: "/our-services/emerging-technologies/nfts", icon: Box },
      { name: "Blockchain Development", href: "/our-services/emerging-technologies/blockchain", icon: Network },
      { name: "Augmented Reality", href: "/our-services/emerging-technologies/ar", icon: Zap },
      { name: "Web 3.0", href: "/our-services/emerging-technologies/web3", icon: Globe },
      { name: "Virtual Reality", href: "/our-services/emerging-technologies/vr", icon: Layers },
    ]
  },
  {
    title: "Industry Plans",
    icon: Building2,
    color: "#00d4ff",
    services: [
      { name: "Digital Agency", href: "/our-services/industry-plans/digital-agency", icon: Building2 },
      { name: "Ecommerce", href: "/our-services/industry-plans/ecommerce", icon: Box },
      { name: "Real Estate", href: "/our-services/industry-plans/real-estate", icon: Building2 },
      { name: "Vehicle Rental", href: "/our-services/industry-plans/vehicle-rental", icon: Box },
      { name: "Healthcare", href: "/our-services/industry-plans/healthcare", icon: Building2 },
      { name: "Cleaning Services", href: "/our-services/industry-plans/cleaning", icon: Box },
      { name: "Restaurants", href: "/our-services/industry-plans/restaurants", icon: Building2 },
      { name: "Law Firms", href: "/our-services/industry-plans/law-firms", icon: Building2 },
      { name: "Financial Services", href: "/our-services/industry-plans/financial", icon: Building2 },
      { name: "Professional Services", href: "/our-services/industry-plans/professional", icon: Building2 },
    ]
  }
];

// Canvas Particle Background Component
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 196, 221, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(53, 196, 221, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-30 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if clicking outside AND not on the nav item or bridge
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Check if click is on backdrop (not on menu or nav)
        const target = event.target as HTMLElement;
        if (target.classList.contains('mega-menu-backdrop')) {
          onClose();
        }
      }
    };

    if (isOpen) {
      // Use a longer delay for click outside to prevent accidental closes
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [isOpen, onClose]);

  const handleMouseEnterMenu = () => {
    // Cancel any pending close
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeaveMenu = () => {
    // Start timeout to close - will be cancelled if mouse re-enters
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 200);
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mega-menu-backdrop fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
            onClick={onClose}
          />

          {/* Bridge Element - Connects nav to menu to prevent gap */}
          <div 
            className="fixed top-[80px] left-0 right-0 h-[20px] z-[998] pointer-events-auto"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
            style={{ pointerEvents: 'auto' }}
          />

          {/* Mega Menu */}
          <motion.div
            ref={menuRef}
            data-mega-menu
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[90px] left-0 right-0 z-[999] max-w-[1920px] mx-auto px-3 md:px-6 lg:px-16 pointer-events-auto"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <div 
              className="relative bg-[#052126]/95 backdrop-blur-2xl border border-[#35c4dd]/20 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              onMouseEnter={handleMouseEnterMenu}
              onMouseLeave={handleMouseLeaveMenu}
            >
              {/* Canvas Background - Non-interactive, just visual */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ParticleCanvas />
                <div className="absolute inset-0 bg-gradient-to-b from-[#35c4dd]/5 via-transparent to-transparent" />
              </div>

              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#35c4dd_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-4 md:p-6 lg:p-8 pointer-events-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                  {SERVICE_CATEGORIES.map((category, categoryIndex) => {
                    const IconComponent = category.icon;
                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                        className="group"
                      >
                        {/* Category Header */}
                        <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 pb-1.5 md:pb-2 border-b border-[#35c4dd]/20">
                          <div
                            className="p-1 md:p-1.5 rounded-lg"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <IconComponent
                              size={12}
                              className="md:w-4 md:h-4 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: category.color }}
                            />
                          </div>
                          <h3 className="text-[10px] md:text-xs lg:text-sm font-bold text-[#f2f4f4] uppercase tracking-wider truncate">
                            {category.title}
                          </h3>
                        </div>

                        {/* Services List */}
                        <ul className="space-y-0.5 md:space-y-1">
                          {category.services.map((service, serviceIndex) => {
                            const ServiceIcon = service.icon;
                            return (
                              <motion.li
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                              >
                                <Link
                                  href={service.href}
                                  className="group/item flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-md hover:bg-[#35c4dd]/10 transition-all duration-300"
                                  onClick={onClose}
                                >
                                  <ServiceIcon
                                    size={12}
                                    className="md:w-3.5 md:h-3.5 text-[#35c4dd] opacity-60 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                  />
                                  <span className="text-[10px] md:text-xs font-medium group-hover/item:text-[#35c4dd] transition-colors flex-1 truncate leading-tight">
                                    {service.name}
                                  </span>
                                  <ArrowRight
                                    size={10}
                                    className="md:w-3 md:h-3 text-[#35c4dd] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all flex-shrink-0"
                                  />
                                </Link>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#35c4dd]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 md:gap-4"
                >
                  <div>
                    <p className="text-[#35c4dd] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-0.5">
                      Need Custom Solution?
                    </p>
                    <p className="text-[#f2f4f4]/60 text-[9px] md:text-[10px]">
                      Let's discuss your unique requirements
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 md:px-5 py-1.5 md:py-2 bg-[#35c4dd] text-[#052126] font-bold text-[10px] md:text-xs rounded-full hover:bg-[#35c4dd]/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(53,196,221,0.5)] whitespace-nowrap"
                    onClick={onClose}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;

