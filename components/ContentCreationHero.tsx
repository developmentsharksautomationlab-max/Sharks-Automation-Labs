"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Content Creation Hero Component ---
const ContentCreationHero: React.FC = () => {
  return (
    <section className="relative bg-black py-8 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-transparent"></div>
      
      {/* Right Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-400/40 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white p-8">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Poppins', fontWeight: '700' }}
          >
            Strategic Capital Deployment in{' '}
            <span className="text-teal-400">Content</span>{' '}
            <span className="text-white">Creation</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-black"
          >
            While traditional markets fluctuate on sentiment, global e-commerce grows on fundamental demand. We identify and capitalize on this permanent shift. Our firm provides a{' '}
            <span className="text-teal-400 font-semibold">seamless, institutional-grade gateway</span> into this{' '}
            <span className="text-teal-400 font-semibold">$6 trillion ecosystem</span>.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreationHero;