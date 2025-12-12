"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate,
  AnimatePresence,
  useAnimation
} from 'framer-motion';

// --- 0. The Melt Filter (SVG Definition) ---
// This creates the liquid distortion capability
const DistortionFilters = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter id="liquid-distortion">
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp" />
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
      </filter>
      <filter id="light-leak">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      </filter>
    </defs>
  </svg>
);

// --- 1. Mathematical Fluid Grid (Chaos Enabled) ---
const FluidGridBackground = ({ chaos }: { chaos: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const gridSize = 40; 
    
    const animate = () => {
      // Chaos Physics: Speed up and distort time when chaos is true
      const timeStep = chaos ? 0.2 : 0.015; 
      const distortionMult = chaos ? 5 : 1;
      
      time += timeStep;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Chaos Color: Flicker between dark green and slight red/glitch
      ctx.strokeStyle = chaos 
        ? `rgba(${5 + Math.random() * 50}, 33, 38, ${0.1 + Math.random() * 0.2})` 
        : 'rgba(5, 33, 38, 0.06)';
      
      ctx.lineWidth = chaos ? Math.random() * 3 : 1;

      // Draw Vertical Lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 10) {
          // Collapse Logic: Extreme sine waves
          const xOffset = Math.sin(y * 0.003 + time + x * 0.002) * (20 * distortionMult);
          const yOffset = Math.cos(x * 0.003 + time) * (5 * distortionMult);
          
          // Glitch jump
          const jitter = chaos ? (Math.random() - 0.5) * 10 : 0;
          
          if (y === 0) ctx.moveTo(x + xOffset + jitter, y + yOffset);
          else ctx.lineTo(x + xOffset + jitter, y + yOffset);
        }
        ctx.stroke();
      }

      // Draw Horizontal Lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 10) {
          const yOffset = Math.cos(x * 0.003 + time + y * 0.002) * (20 * distortionMult);
          const jitter = chaos ? (Math.random() - 0.5) * 10 : 0;

          if (x === 0) ctx.moveTo(x, y + yOffset + jitter);
          else ctx.lineTo(x, y + yOffset + jitter);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [chaos]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

// --- 2. 3D Tilt Card (The Container) ---
const TiltCard = ({ children, isCollapsing }: { children: React.ReactNode, isCollapsing: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isCollapsing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Collapse Variants
  const cardVariants = {
    idle: { 
      scale: 1, 
      filter: "blur(0px)",
      boxShadow: "0 20px 50px -12px rgba(5,33,38,0.1)"
    },
    collapse: {
      scale: 0.9,
      rotateX: 15, // Unnatural tilt
      rotateY: -15,
      filter: "blur(4px)", // Single blur value for collapse
      boxShadow: "0 -30px 50px -12px rgba(53,196,221,0.4)", // REVERSE SHADOW
      transition: { 
        duration: 2.5, 
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  // Vibration Animation (Soundless Vibration)
  const shakeVariants = {
    idle: { x: 0, y: 0 },
    collapse: {
      x: [0, -10, 10, -15, 15, -5, 5, 0],
      y: [0, 5, -5, 10, -10, 0],
      transition: { repeat: Infinity, duration: 0.2 }
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ 
        rotateX: isCollapsing ? 0 : rotateX, 
        rotateY: isCollapsing ? 0 : rotateY, 
        transformStyle: "preserve-3d" 
      }}
      variants={cardVariants}
      animate={isCollapsing ? "collapse" : "idle"}
      className="relative w-full max-w-5xl mx-auto perspective-1000"
    >
      <motion.div 
        variants={shakeVariants}
        animate={isCollapsing ? "collapse" : "idle"}
        className={`relative bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl sm:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-16 transition-colors duration-500
          ${isCollapsing ? "border-[#35c4dd]/50 bg-white/10" : "border-white/60"}
        `}
      >
        {/* Light Leaks (Appear only during collapse) */}
        <AnimatePresence>
            {isCollapsing && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: [0, 0.8, 0.2, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, times: [0, 0.3, 0.6, 0.8, 1] }}
                    className="absolute inset-0 z-50 bg-gradient-to-tr from-[#35c4dd] via-transparent to-[#052126] mix-blend-overlay pointer-events-none"
                />
            )}
        </AnimatePresence>

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
const CallToAction = () => {
  const [status, setStatus] = useState<'idle' | 'collapsing' | 'reborn'>('idle');

  const handleTrigger = () => {
    if (status !== 'idle') return;
    
    // 1. Trigger Collapse
    setStatus('collapsing');

    // 2. Wait for chaos to finish, then rebuild
    setTimeout(() => {
      setStatus('reborn');
    }, 2800); // 2.8s of chaos
  };

  // Text Effects
  const textCollapseVariant = {
    idle: { y: 0, opacity: 1, rotate: 0, scale: 1 },
    collapsing: {
      y: -100, // Floats up
      x: [0, -20, 20], // Jitters
      opacity: 0,
      rotate: Math.random() * 40 - 20,
      scale: 1.5,
      filter: "url(#liquid-distortion)", // MELT EFFECT
      transition: { duration: 1.5, ease: [0.4, 0, 1, 1] as const }
    },
    reborn: { 
      y: 0, 
      x: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1, 
      filter: "none",
      transition: { type: "spring" as const, stiffness: 100, damping: 12, delay: 0.2 } 
    }
  };

  const rebirthGlow = status === 'reborn' ? "drop-shadow-[0_0_15px_rgba(53,196,221,0.6)]" : "";

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f2f4f4] overflow-hidden flex items-center justify-center">
      <DistortionFilters />

      {/* Background Layer */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${status === 'collapsing' ? 'bg-[#e0e0e0]' : 'bg-gradient-to-b from-white via-[#f2f4f4] to-[#e6eeef]'}`} />
      
      {/* Grid that reacts to chaos */}
      <FluidGridBackground chaos={status === 'collapsing'} />
      
      <div className="container mx-auto px-4 relative z-10">
        <TiltCard isCollapsing={status === 'collapsing'}>
          <div className="text-center flex flex-col items-center">
            
            {/* Tagline - Collapses separately */}
            <motion.span 
              variants={textCollapseVariant}
              animate={status}
              className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-[#052126]/5 text-[#052126] text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6 border border-[#052126]/10"
            >
              Data-Driven Growth
            </motion.span>

            {/* Heading - The main melt event */}
            <motion.div variants={textCollapseVariant} animate={status} className="relative z-20">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#052126] mb-4 sm:mb-6 md:mb-8 tracking-tight leading-[1.1] ${rebirthGlow}`}>
                Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35c4dd] via-[#2a9cb1] to-[#35c4dd]">
                  Enterprise Advantage
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={textCollapseVariant}
              animate={status}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-[#052126]/70 max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed font-medium px-2 sm:px-0"
            >
              Leverage precision-driven digital strategies to scale revenue, performance, and market leadership with confidence.
            </motion.p>

            {/* The Trigger Button */}
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div
                  key="activate-button"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  animate={status === 'collapsing' ? { 
                    scale: [1, 0.8, 1.1, 0], 
                    rotate: [0, 10, -10, 0],
                    filter: "hue-rotate(90deg)"
                  } : { scale: 1, opacity: 1 }}
                >
                  <button 
                    onClick={handleTrigger}
                    disabled={status !== 'idle'}
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-[#f2f4f4] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(5,33,38,0.5)] transition-all duration-300 bg-[#052126] hover:shadow-[0_20px_40px_-10px_rgba(53,196,221,0.4)] hover:-translate-y-1"
                  >
                    {/* Button BG */}
                    <div className="absolute inset-0 w-full h-full transition-all duration-500 bg-[length:200%_auto] bg-left group-hover:bg-right bg-gradient-to-r from-[#052126] via-[#082e36] to-[#052126] group-hover:via-[#35c4dd]" />
                    
                    {/* Text & Icon */}
                    <span className="relative font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase z-10 group-hover:text-white transition-colors">
                      Activate Growth
                    </span>
                    
                    <svg 
                      className="relative w-4 h-4 sm:w-5 sm:h-5 z-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45 text-[#35c4dd] group-hover:text-white" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </motion.div>
              )}

              {status === 'reborn' && (
                <motion.div
                  key="active-growth-button"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
                >
                  <Link href="/contact">
                    <button 
                      className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-[#f2f4f4] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(5,33,38,0.5)] transition-all duration-300 bg-[#35c4dd] hover:shadow-[0_20px_50px_-10px_rgba(53,196,221,0.6)] hover:scale-105"
                    >
                      {/* Button BG */}
                      <div className="absolute inset-0 w-full h-full transition-all duration-500 bg-[length:200%_auto] bg-left group-hover:bg-right bg-gradient-to-r from-[#35c4dd] via-[#fff] to-[#35c4dd] opacity-30" />
                      
                      {/* Text & Icon */}
                      <span className="relative font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase z-10 group-hover:text-white transition-colors">
                        Active Growth
                      </span>
                      
                      <svg 
                        className="relative w-4 h-4 sm:w-5 sm:h-5 z-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45 text-white" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" 
                      />
                    </button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default CallToAction;