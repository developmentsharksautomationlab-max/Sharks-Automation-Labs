"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Animated Number Component ---
const AnimatedNumber: React.FC<{ 
  value: string; 
  label: string; 
  delay?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}> = ({ value, label, delay = 0, duration = 2, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      const increment = numericValue / (duration * 60); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value); // This will show the complete value with suffix/prefix
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="text-center group h-full"
    >
      <div className="bg-black rounded-2xl p-8 shadow-2xl border border-teal-400/30 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:shadow-teal-400/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between relative overflow-hidden group">
        {/* Teal Overlay - Right Side */}
        <div className="absolute inset-0 bg-gradient-to-l from-teal-400/10 to-transparent"></div>
        
        {/* Teal Glow Effect - Right Side */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/8 rounded-2xl blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/12 rounded-2xl blur-2xl"></div>
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/15 rounded-full blur-3xl"></div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/5 rounded-2xl transition-all duration-500"></div>
        <div className="absolute -inset-2 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-2xl blur-xl transition-all duration-500"></div>
         {/* Icon placeholder */}
         <div className="flex justify-center mb-4">
           <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500">
             <svg className="w-8 h-8 text-white group-hover:text-teal-100 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
             </svg>
           </div>
         </div>

         <motion.div 
           className="text-4xl md:text-5xl font-bold mb-4"
           style={{ color: 'white' }}
           initial={{ scale: 0.5 }}
           animate={isInView ? { scale: 1 } : { scale: 0.5 }}
           transition={{ duration: 0.6, delay: delay + 0.2 }}
         >
           {prefix}{displayValue}{suffix}
         </motion.div>
        
        <motion.div 
          className="text-gray-300 font-medium text-base leading-relaxed flex-grow flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {label}
        </motion.div>
        
        
      </div>
    </motion.div>
  );
};

// --- Performance Stats Component ---
const PerformanceStats: React.FC = () => {
  return (
    <section className="relative bg-black py-24 px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/bg-pattern.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Floating Side Button */}
      <a href="/contact" className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Proof is in the{' '}
            <span className="text-teal-400">Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just make promises; we deliver measurable results. Our decade-long journey 
            in the e-commerce ecosystem is built on a foundation of tangible success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatedNumber 
            value="10+" 
            label="Years of Deep E-Commerce Expertise" 
            delay={0}
            duration={2}
            suffix=""
          />
          <AnimatedNumber 
            value="400+" 
            label="Clients Empowered to Generate Six-Figure Incomes" 
            delay={0.2}
            duration={2.5}
            suffix=""
          />
          <AnimatedNumber 
            value="400+" 
            label="Stores Actively Managed Across Platforms" 
            delay={0.4}
            duration={2.2}
            suffix=""
          />
          <AnimatedNumber 
            value="100+" 
            label="Global Team of Experts Across 4 Countries" 
            delay={0.6}
            duration={1.8}
            suffix=""
          />
        </div>

        {/* Platform Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Platforms We Master
            </h3>
            <p className="text-gray-300">
              Amazon, Walmart, Etsy, Shopify, and TikTok Shop
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Platform badges */}
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600">
              <span className="text-white font-semibold">Amazon</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600">
              <span className="text-white font-semibold">Walmart</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600">
              <span className="text-white font-semibold">Etsy</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600">
              <span className="text-white font-semibold">Shopify</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600">
              <span className="text-white font-semibold">TikTok Shop</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PerformanceStats;
