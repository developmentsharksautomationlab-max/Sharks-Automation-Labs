"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate
} from 'framer-motion';
import { ArrowRight, Zap, Hexagon, Cpu, Activity, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---
const SERVICES = [
  {
    id: '01_SYNTHESIS',
    category: 'Design',
    description: 'Constructing reality-bending visuals. We fuse liquid motion with solid-state branding.',
    tags: ['Holography', 'UI/UX Synthesis', '3D Modelling'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', 
    chemical: 'Argon',
  },
  {
    id: '02_ARCHITECTURE',
    category: 'Engineering',
    description: 'Military-grade infrastructure. Systems built on zero-point energy principles.',
    tags: ['Quantum Compute', 'Neural Nets', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Xenon',
  },
  {
    id: '03_PROPAGATION',
    category: 'Growth',
    description: 'Viral market infiltration. We inject your narrative directly into the collective consciousness.',
    tags: ['Signal Boost', 'Algorithm Hijack', 'Viral Loops'],
    image: 'https://images.unsplash.com/photo-1535378437327-b7149b379bab?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Krypton',
  },
  {
    id: '04_STRATEGY',
    category: 'Consulting',
    description: 'War-room analytics. Optimizing your trajectory towards a singularity event.',
    tags: ['Audit', 'Forecasting', 'IPO Roadmap'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Neon',
  }
];

// --- HOOKS (For Responsive Animation) ---
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// --- SUB-COMPONENTS ---

// 1. HOLOGRAPHIC TEXT (The Glitch Effect)
const HolographicText = ({ children, className, active }: { children: React.ReactNode, className?: string, active: boolean }) => {
  return (
    <div className="relative overflow-visible group">
      {/* Cyan Channel - The Core Brand Color */}
      <motion.span 
        animate={active ? { x: [-1, 1, -1], opacity: [0.5, 0.8, 0.5] } : { x: 0, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
        className={cn("absolute inset-0 text-[#35c4dd] mix-blend-screen select-none pointer-events-none blur-[0.5px]", className)}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      
      {/* Red Channel - Subtle Interference Contrast */}
      <motion.span 
        animate={active ? { x: [1, -1, 1], opacity: [0.3, 0.5, 0.3] } : { x: 0, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.25, ease: "linear" }}
        className={cn("absolute inset-0 text-[#f2f4f4] mix-blend-overlay select-none pointer-events-none blur-[0.5px]", className)}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      
      {/* Base Layer */}
      <span className={cn("relative z-10 text-[#f2f4f4]", className)}>
        {children}
      </span>
    </div>
  );
};

// 2. THE REACTOR CORE (Card Component)
const HyperCard = ({ service, index, activeIndex }: { service: any, index: number, activeIndex: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Physics - Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Damping for "Fluid" feel
  const mouseX = useSpring(x, { stiffness: 500, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 15, mass: 0.1 });

  // 3D Rotations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  
  // Dynamic Lighting (Using your #35c4dd Blue)
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const plasmaGradient = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, #35c4dd 0%, transparent 45%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileHover="hover"
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      className="relative w-full h-full"
    >
      {/* --- CARD CONTAINER --- */}
      <motion.div 
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.02, transition: { duration: 0.2 } }
        }}
        // Background color adjusted to be a darker shade of #052126 for contrast
        className="relative w-full h-full rounded-2xl bg-[#03161a] border border-[#35c4dd]/10 overflow-hidden group shadow-2xl"
      >
        {/* 1. ZERO-POINT ENERGY SHIELD (Rotating Border) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
             <div className="absolute inset-[-2px] rounded-2xl opacity-40 animate-spin-slow" 
                  style={{ background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, #35c4dd 180deg, transparent 360deg)` }}
             />
        </div>

        {/* 2. ATMOSPHERIC LAYER (Background Image) */}
        <div className="absolute inset-0 z-0">
            <motion.div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-50 transition-all duration-700"
                style={{ backgroundImage: `url(${service.image})` }}
            />
            {/* Tint overlay using the deep green */}
            <div className="absolute inset-0 bg-[#052126] opacity-80 mix-blend-multiply" />
            
            {/* Plasma Reactivity (The Blue Glow) */}
            <motion.div 
                style={{ background: plasmaGradient, opacity: 0.15 }}
                className="absolute inset-0 mix-blend-screen group-hover:opacity-30 transition-opacity duration-300" 
            />
            
            {/* Digital Noise Texture */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* 3. FRACTAL GRID MESH */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#35c4dd10_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* 4. CONTENT LAYER */}
        <div style={{ transform: "translateZ(60px)" }} className="relative h-full flex flex-col justify-between p-6 md:p-8 z-20">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#35c4dd]/70 uppercase mb-2">
                        {service.id}
                    </span>
                    <div className="flex items-center gap-2">
                        <Hexagon size={12} className="text-[#35c4dd] animate-pulse" />
                        <span className="text-xs font-bold text-[#f2f4f4]/90 tracking-widest uppercase">{service.chemical} Protocol</span>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#35c4dd]/20 flex items-center justify-center bg-[#35c4dd]/5 backdrop-blur-md group-hover:border-[#35c4dd] group-hover:bg-[#35c4dd]/20 transition-all">
                    <Cpu size={14} className="text-[#35c4dd]" />
                </div>
            </div>

            {/* Main Text */}
            <div className="space-y-6 mt-4 md:mt-0">
                <h2 className="text-4xl md:text-5xl font-black text-[#f2f4f4] tracking-tighter uppercase leading-[0.9]">
                    <HolographicText active={true} className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f2f4f4] group-hover:to-[#35c4dd] transition-all">
                        {service.category}
                    </HolographicText>
                </h2>
                
                <div className="h-[1px] w-12 bg-[#35c4dd]/30 group-hover:w-full group-hover:bg-[#35c4dd] transition-all duration-500 ease-out" />

                <p className="text-sm md:text-base text-[#f2f4f4]/70 leading-relaxed font-sans max-w-[90%]">
                    {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-[#35c4dd]/20 bg-[#052126]/80 text-[#35c4dd]/80 group-hover:border-[#35c4dd] group-hover:text-[#35c4dd] transition-colors duration-300 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-6 md:pt-8">
                <button className="w-full py-4 border-t border-[#35c4dd]/10 flex items-center justify-between group/btn overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#35c4dd] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 text-xs font-bold tracking-[0.3em] text-[#f2f4f4] group-hover/btn:text-[#052126] transition-colors">
                        INITIATE
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-[#35c4dd] group-hover/btn:text-[#052126] transition-colors transform group-hover/btn:translate-x-1 duration-300" />
                </button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 3. FRACTAL BACKGROUND (The Environment)
const FractalField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       {/* Infinite Grid - Color adjusted to #35c4dd */}
       <div className="absolute inset-0 perspective-[1000px]">
           <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#35c4dd_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] transform rotate-x-[60deg] animate-grid-flow" />
       </div>
       
       {/* Ambient Glows - Deep Green and Cyan */}
       <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#35c4dd] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen" />
       <div className="absolute bottom-[-20%] right-[20%] w-[60vw] h-[60vw] bg-[#052126] opacity-[0.8] blur-[150px] rounded-full mix-blend-multiply" />
    </div>
  );
};

// --- MAIN COMPONENT ---

const ApexServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize(); // Safe hydration-friendly width
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  // Handlers
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);

  // Auto-rotate
  useEffect(() => {
      const timer = setInterval(handleNext, 8000); 
      return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[110vh] bg-[#052126] text-[#f2f4f4] overflow-hidden flex items-center justify-center font-sans selection:bg-[#35c4dd] selection:text-[#052126] py-20">
      
      <FractalField />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f2f4f4 1px, transparent 1px), linear-gradient(90deg, #f2f4f4 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full max-w-[1920px] px-4 md:px-8 lg:px-12 h-full flex flex-col justify-center">
        
        {/* HUD HEADER */}
        <header className="w-full flex justify-between items-end border-b border-[#35c4dd]/20 pb-6 mb-12 md:mb-20">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Activity size={16} className="text-[#35c4dd] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#35c4dd] uppercase">Choose Your Future</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-[#f2f4f4] leading-tight">
                   OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35c4dd] to-[#f2f4f4] opacity-80">SERVICES</span>
                </h1>
            </div>
            
            {/* Desktop HUD Details */}
            <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-mono text-[#35c4dd]/60 text-right">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#35c4dd] animate-ping" />
                    <span>LIVE FEED</span>
                 </div>
                 <span>GRID: #052126 / #35C4DD</span>
            </div>
        </header>

        {/* MAIN CAROUSEL ENGINE */}
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
            
            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-50 pointer-events-none px-2 md:px-8">
                <button onClick={handlePrev} className="pointer-events-auto p-3 md:p-5 rounded-full border-2 border-[#35c4dd]/40 bg-[#052126]/90 hover:bg-[#35c4dd]/20 text-[#35c4dd] transition-all backdrop-blur-md group shadow-[0_0_25px_rgba(53,196,221,0.4)] hover:shadow-[0_0_35px_rgba(53,196,221,0.6)]">
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </button>
                
                <button onClick={handleNext} className="pointer-events-auto p-3 md:p-5 rounded-full border-2 border-[#35c4dd]/40 bg-[#052126]/90 hover:bg-[#35c4dd]/20 text-[#35c4dd] transition-all backdrop-blur-md group shadow-[0_0_25px_rgba(53,196,221,0.4)] hover:shadow-[0_0_35px_rgba(53,196,221,0.6)]">
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* The 3D Card Stack */}
            <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center perspective-[2000px]">
                <AnimatePresence initial={false} mode="popLayout">
                    {[-1, 0, 1].map((offset) => {
                        const index = (activeIndex + offset + SERVICES.length) % SERVICES.length;
                        const service = SERVICES[index];
                        const isCenter = offset === 0;
                        
                        // Responsive Spacing Logic
                        let xOffset = 0;
                        if (!isMobile) xOffset = offset * 420; // Desktop spacing
                        if (isTablet) xOffset = offset * 350; // Tablet spacing
                        
                        return (
                            <motion.div
                                key={`${service.id}-${index}`}
                                layout
                                initial={{ 
                                    opacity: 0,
                                    scale: 0.8,
                                    z: -200,
                                    x: xOffset, 
                                    rotateY: offset * -25 
                                }}
                                animate={{ 
                                    opacity: isCenter ? 1 : (isMobile ? 0 : 0.4), // Hide adjacent on mobile
                                    scale: isCenter ? 1 : 0.85,
                                    z: isCenter ? 0 : -100,
                                    x: isMobile && !isCenter ? 0 : xOffset, // Stack on mobile
                                    rotateY: isCenter ? 0 : offset * -15,
                                    zIndex: isCenter ? 10 : 5,
                                    filter: isCenter ? 'blur(0px)' : 'blur(2px)'
                                }}
                                exit={{ 
                                    opacity: 0,
                                    scale: 0.5,
                                    z: -300,
                                    filter: 'blur(10px)',
                                    transition: { duration: 0.4 }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 24,
                                    mass: 1.2
                                }}
                                className={cn(
                                    "absolute top-[5%] md:top-[10%] w-[90%] sm:w-[360px] md:w-[400px] h-[520px] md:h-[600px]",
                                    isCenter ? "cursor-none md:cursor-default pointer-events-auto" : "pointer-events-auto cursor-pointer"
                                )}
                                onClick={() => {
                                    if (!isCenter) {
                                        if (offset === -1) handlePrev();
                                        if (offset === 1) handleNext();
                                    }
                                }}
                            >
                                <HyperCard 
                                    service={service} 
                                    index={index} 
                                    activeIndex={activeIndex} 
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full flex justify-center gap-3 mt-8 md:mt-0">
            {SERVICES.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                        "h-1.5 transition-all duration-500 rounded-full",
                        i === activeIndex 
                            ? "w-12 md:w-20 bg-[#35c4dd] shadow-[0_0_15px_#35c4dd]" 
                            : "w-2 md:w-3 bg-[#f2f4f4]/20 hover:bg-[#f2f4f4]/40"
                    )}
                />
            ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-6 text-[#35c4dd]/50 text-[10px] uppercase tracking-widest font-mono flex items-center justify-center gap-2 animate-pulse">
            <MoveRight className="rotate-180 w-3 h-3" />
            Swipe or Tap Controls
            <MoveRight className="w-3 h-3" />
        </div>

      </div>
    </section>
  );
};

export default ApexServices;