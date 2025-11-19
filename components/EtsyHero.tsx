"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlexusBackground from './PlexusBackground';

// --- Etsy Hero Component ---
const EtsyHero: React.FC = () => {
  return (
    <section className="relative bg-black py-8 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Right Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-l from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="relative z-10 flex h-full items-center justify-between flex-col-reverse gap-10 lg:flex-row lg:gap-6">
        {/* Left Side: Content */}
        <div className="text-center lg:text-left text-white p-4 sm:p-6 lg:p-8 w-full lg:w-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                Dominate{' '}
                <span className="text-white">Etsy</span>{' '}
                with{' '}
                <span className="text-teal-400">Institutional Automation</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl font-normal text-justify lg:text-left hyphens-auto lg:hyphens-none">
                Transform your capital into a systematically managed, cash-flow generative Etsy enterprise. 
                We deploy sophisticated automation technologies to scale your operations while you focus on strategic growth.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full"
                >
                  Schedule Your Capital Intro Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Etsy Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center lg:justify-start w-full lg:w-auto -ml-0 lg:-ml-24 lg:pr-24 py-2 sm:py-8"
        >
          <div className="relative">
            <Image
              src="/images/companies/processed/etsy.png"
              alt="Etsy Logo"
              width={400}
              height={400}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain opacity-100 filter brightness-0 invert hover:opacity-90 transition-opacity duration-300"
            />
            {/* Subtle glow effect around logo */}
            <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-2xl scale-110"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EtsyHero;

