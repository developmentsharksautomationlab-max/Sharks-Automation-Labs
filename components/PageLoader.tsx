"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLoading } from '@/contexts/LoadingContext';

const PageLoader = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM");
  const [stars, setStars] = useState<Array<{width: number; height: number; top: number; left: number; duration: number; delay: number}>>([]);
  const [mounted, setMounted] = useState(false);

  // Generate stars only on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const generatedStars = Array.from({ length: 30 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const totalTime = 1500; // 1.5 Seconds for faster load
    const intervalTime = 30;
    const steps = totalTime / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const percent = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(percent);

      // Dynamic Status Updates
      if (percent < 30) setStatusText("CALIBRATING QUANTUM CORE...");
      else if (percent < 60) setStatusText("SYNCHRONIZING NEURAL LINK...");
      else if (percent < 90) setStatusText("COMPRESSING REALITY DATA...");
      else setStatusText("ENGAGING WARP DRIVE...");

      if (percent === 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Slight delay at 100% for impact
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.2, // Smooth zoom out
            filter: "blur(10px)", // Subtle motion blur
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} // Smooth ease out
          className="fixed inset-0 w-full h-screen bg-[#000506] flex items-center justify-center z-[9999] overflow-hidden"
        >
          {/* --- 1. COSMIC BACKGROUND (Starfield & Nebulas) --- */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Deep Space Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0a2e36_0%,#000000_70%)] opacity-60" />
            
            {/* Moving Stars (Perspective Warp) - Only render after mount to prevent hydration error */}
            {mounted && stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: star.width + 'px',
                  height: star.height + 'px',
                  top: star.top + '%',
                  left: star.left + '%',
                  boxShadow: '0 0 4px rgba(255,255,255,0.8)'
                }}
                animate={{ 
                  scale: [0, 1, 0], 
                  opacity: [0, 0.8, 0],
                  z: [0, 500] // Pseudo 3D movement
                }}
                transition={{ 
                  duration: star.duration, 
                  repeat: Infinity, 
                  delay: star.delay 
                }}
              />
            ))}
          </div>

          {/* --- 2. THE REACTOR CORE (The "Baap" Element) --- */}
          <div className="relative flex flex-col items-center justify-center scale-75 md:scale-100">
            
            {/* Layer 1: Shockwave Rings (Expanding) */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`shockwave-${i}`}
                className="absolute border border-[#35c4dd]/30 rounded-full"
                style={{ width: '100px', height: '100px' }}
                animate={{ 
                  width: ['100px', '800px'], 
                  height: ['100px', '800px'], 
                  opacity: [0.5, 0],
                  borderWidth: ['2px', '0px']
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  delay: i * 0.8, 
                  ease: "easeOut" 
                }}
              />
            ))}

            {/* Layer 2: Rotating Magnetic Fields (The Gyroscope Look) */}
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Ring A */}
              <motion.div 
                className="absolute inset-0 border-2 border-t-[#35c4dd] border-b-[#35c4dd] border-l-transparent border-r-transparent rounded-full shadow-[0_0_30px_#35c4dd]"
                animate={{ rotateX: 360, rotateY: 180, rotateZ: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              {/* Ring B */}
              <motion.div 
                className="absolute w-[260px] h-[260px] border-2 border-r-[#fff] border-l-[#fff] border-t-transparent border-b-transparent rounded-full opacity-50"
                animate={{ rotateX: 180, rotateY: 360, rotateZ: -180 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              {/* Ring C */}
              <motion.div 
                className="absolute w-[220px] h-[220px] border-[4px] border-[#35c4dd]/20 rounded-full border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Layer 3: THE SINGULARITY (Center Glow) */}
            <motion.div 
              className="absolute w-32 h-32 bg-[#35c4dd] rounded-full blur-[50px] opacity-40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Layer 4: Logo Container (Floating in Zero G) */}
            <div className="absolute z-20 w-40 h-40 bg-black/80 backdrop-blur-xl rounded-full border border-[#35c4dd]/50 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(53,196,221,0.3)]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" /> {/* Noise Texture */}
              
              <motion.div
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.5 }}
                 className="relative w-24 h-24"
              >
                <Image
                  src="/logo_main.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  priority
                />
              </motion.div>

              {/* Scanning Glitch Line */}
              <motion.div
                className="absolute w-full h-[2px] bg-white shadow-[0_0_20px_white]"
                animate={{ top: ['-20%', '120%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
              />
            </div>

            {/* --- 3. DATA HUD DISPLAY (Bottom) --- */}
            <div className="absolute top-[220px] md:top-[250px] flex flex-col items-center gap-3">
              
              {/* Status Text */}
              <motion.h2 
                className="text-[#35c4dd] font-bold tracking-[0.4em] text-xs md:text-sm uppercase text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ textShadow: '0 0 10px #35c4dd' }}
              >
                {statusText}
              </motion.h2>

              {/* High Tech Progress Bar */}
              <div className="relative w-[280px] h-[6px] bg-[#05181c] rounded-full overflow-hidden border border-[#35c4dd]/30">
                {/* Fill */}
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#35c4dd] via-white to-[#35c4dd]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
                {/* Glitch Blocks on Bar */}
                <div className="absolute inset-0 w-full h-full flex justify-between px-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-black/50" />
                  ))}
                </div>
              </div>

              {/* Percentage Counter */}
              <div className="flex items-baseline gap-1">
                 <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                   {progress < 10 ? `0${progress}` : progress}
                 </span>
                 <span className="text-sm text-[#35c4dd] font-bold">%</span>
              </div>
              
              <motion.p 
                 className="text-[10px] text-gray-500 tracking-widest uppercase mt-2"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1 }}
              >
                Sharks Automation Labs © 2025
              </motion.p>
            </div>
          </div>

          {/* --- 4. CORNER DECORATIONS (Sci-Fi UI) --- */}
          <div className="fixed top-6 left-6 text-[#35c4dd]/40 text-[10px] font-mono hidden md:block">
            COORDS: 34.0522° N, 118.2437° W<br/>
            SECTOR: 7G-ALPHA
          </div>
          <div className="fixed bottom-6 right-6 text-[#35c4dd]/40 text-[10px] font-mono hidden md:block text-right">
            MEM_USAGE: 4096TB<br/>
            ENCRYPTION: AES-4096-GCM
          </div>
          
          {/* Vignette Overlay for focus */}
          <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(transparent_40%,#000_100%)] z-30" />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;