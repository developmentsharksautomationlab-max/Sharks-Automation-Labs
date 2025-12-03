"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Cpu
} from 'lucide-react';
import { useLoading } from '@/contexts/LoadingContext';

// --- HELPER COMPONENTS ---

const SocialIcon = ({ Icon, delay }: { Icon: React.ComponentType<{ size?: number; className?: string }>, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    className="relative group cursor-pointer"
  >
    <div className="p-3 border border-[#35c4dd]/30 rounded-xl bg-[#052126]/80 backdrop-blur-md group-active:scale-95 transition-all duration-200 hover:border-[#35c4dd] hover:bg-[#35c4dd]/10">
      <Icon size={18} className="text-[#f2f4f4] group-hover:text-[#35c4dd] transition-colors" />
    </div>
  </motion.div>
);

const VerticalLines = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-[8%] opacity-20">
    {[1, 2, 3, 4].map((i) => (
      <motion.div 
        key={i}
        className="w-px h-full bg-gradient-to-b from-transparent via-[#35c4dd] to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1], y: [-100, 100, -100] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
      />
    ))}
  </div>
);

// --- MAIN HERO COMPONENT ---

const Hero = () => {
  const [step, setStep] = useState(0);
  const { isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      setStep(0);
      return;
    }

    const sequence = async () => {
      setTimeout(() => setStep(1), 100);  
      setTimeout(() => setStep(2), 2000); 
      setTimeout(() => setStep(3), 3500); 
      setTimeout(() => setStep(4), 4500); 
    };
    sequence();
  }, [isLoading]);

  return (
    <section 
      className="relative w-full min-h-[90vh] md:h-screen bg-[#052126] overflow-hidden font-sans flex flex-col justify-between md:justify-start"
      style={{ fontFamily: 'ITCAvantGardeStd-Bk, sans-serif' }}
    >
      
      {/* --- 1. PRELOADER --- */}
      {step < 2 && (
        <div className="absolute inset-0 z-[100] flex pointer-events-none">
          <motion.div
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute top-0 left-0 w-full bg-[#35c4dd] z-[102]"
          />
        </div>
      )}

      {/* --- 2. BACKGROUND --- */}
      <VerticalLines />
      
      <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center z-0 select-none pointer-events-none -mt-48">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "50px" }}
          animate={step >= 2 ? { opacity: 1, letterSpacing: "10px" } : {}}
          transition={{ duration: 2.5, ease: "circOut" }}
          className="text-[8vw] sm:text-[9vw] md:text-[11vw] font-black text-transparent opacity-10 leading-[0.8] whitespace-nowrap"
          style={{ WebkitTextStroke: '1px #35c4dd' }}
        >
          SHARKS
        </motion.h1>
        
        <motion.h1 
           initial={{ opacity: 0, letterSpacing: "50px" }}
           animate={step >= 2 ? { opacity: 1, letterSpacing: "5px" } : {}}
           transition={{ duration: 2.5, delay: 0.2, ease: "circOut" }}
           className="text-[4vw] sm:text-[4.5vw] md:text-[4.5vw] font-black text-transparent opacity-10 leading-none whitespace-nowrap mt-1 sm:mt-2"
           style={{ WebkitTextStroke: '1px #35c4dd' }}
        >
          AUTOMATION LAB
        </motion.h1>
      </div>

      {/* --- 3. MAIN CONTENT GRID --- */}
      <div className="relative z-10 w-full flex-grow max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 px-4 sm:px-6 md:px-12 h-full">

        {/* 
            LEFT SIDE: Text Content 
            Mobile: Bottom aligned
            Desktop: Vertically centered
        */}
        <div className="md:col-span-4 flex flex-col justify-end pb-12 sm:pb-16 md:justify-end md:pb-40 pt-4 sm:pt-6 md:pt-[60px] relative z-30 order-1 md:order-1 px-2 sm:px-4 md:px-0">
          {step >= 4 && (
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-start mt-0 md:mt-0">
               
               <motion.div 
                 initial={{ x: -50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#052126] border border-[#35c4dd] flex items-center justify-center rounded-lg text-[#35c4dd] shadow-[0_0_20px_rgba(53,196,221,0.2)]"
               >
                 <Cpu size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
               </motion.div>

               <motion.h2
                 initial={{ x: -100, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f2f4f4] leading-[0.9] sm:leading-[0.95]"
               >
                 Strategic <br />
                 <span className="text-[#35c4dd]">Services</span>
               </motion.h2>

               <motion.p
                 initial={{ x: -50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-sm sm:text-base md:text-lg text-[#f2f4f4]/70 leading-relaxed max-w-full sm:max-w-md border-l-4 border-[#35c4dd] pl-3 sm:pl-4 md:pl-5 py-0.5 sm:py-1"
               >
                 Trusted outsourcing partner delivering scalable growth enterprise support and long-term business success worldwide.
               </motion.p>

               <Link href="/contact">
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="group relative mt-1 sm:mt-2 md:mt-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-[#35c4dd] text-[#f2f4f4] font-bold tracking-wider hover:text-[#052126] transition-all duration-300 hover:scale-95 rounded-full text-xs sm:text-sm md:text-base cursor-pointer overflow-hidden w-full sm:w-auto"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f2f4f4] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center justify-center gap-2">Get Started</span>
                </motion.button>
               </Link>
            </div>
          )}
        </div>

        {/* 
            CENTER: Robot Animation 
            Mobile: Absolute bottom
            Desktop: Center aligned
        */}
        <div className="absolute bottom-0 left-0 right-0 md:relative md:col-span-4 flex justify-center items-end h-[75vh] sm:h-[80vh] md:h-full pointer-events-none md:order-2 z-10 md:z-20 md:pt-4">
           <motion.div
             initial={{ scale: 4, opacity: 0, y: 0 }}
             animate={
               step === 2 
               ? { scale: 1, opacity: 1, y: -30 } 
               : step >= 3 
               ? { scale: 1.5, opacity: 1, y: 180 } 
               : {}
             }
             transition={{ 
               duration: step === 2 ? 1.5 : 1.5, 
               ease: [0.6, 0.01, 0.05, 0.95] 
             }}
             className="relative w-full h-full flex items-end justify-center"
           >
              {/* Mobile: Image full size aur perfectly bottom aligned */}
              <div className="relative w-full max-w-[500px] h-[500px] sm:max-w-[550px] sm:h-[600px] md:w-[550px] md:h-[750px] md:max-w-none">
                <Image 
                  src="/banner_robot.png" 
                  alt="AI Robot" 
                  fill 
                  style={{ 
                    objectFit: 'contain', 
                    objectPosition: 'bottom'
                  }}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="relative z-10"
                />
              </div>
           </motion.div>
        </div>

        {/* RIGHT SIDE: Content & Socials (Desktop Only) */}
        <div className="md:col-span-4 flex flex-col justify-between py-6 md:pb-32 md:pt-16 relative z-30 order-3 hidden md:flex"> 
          
          <div className="flex justify-end">
            {step >= 4 && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-right"
              >
                 <h3 className="text-6xl font-black text-[#35c4dd]/10 select-none">AI</h3>
                 <h3 className="text-xl md:text-2xl font-bold text-[#f2f4f4] -mt-4">INTELLIGENCE</h3>
                 <div className="w-full h-1 bg-[#35c4dd] mt-2 rounded-full opacity-50" />
              </motion.div>
            )}
          </div>

          <div className="flex flex-row justify-end items-end gap-3 md:gap-4 mb-10">
            {step >= 4 && (
              <>
                <SocialIcon Icon={Facebook} delay={0.7} />
                <SocialIcon Icon={Twitter} delay={0.8} />
                <SocialIcon Icon={Instagram} delay={0.9} />
                <SocialIcon Icon={Linkedin} delay={1.0} />
              </>
            )}
          </div>

        </div>

      </div>

      {/* Bottom Fade - Desktop only */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#052126] via-[#052126] to-transparent z-20 pointer-events-none" />

    </section>
  );
};

export default Hero;