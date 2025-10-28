"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlexusBackground from './PlexusBackground';

// --- Shopify Hero Component ---
const ShopifyHero: React.FC = () => {
  return (
    <section className="relative bg-black py-8 px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Right Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="relative z-10 flex h-full items-center justify-between">
        {/* Left Side: Content */}
        <div className="text-left text-white p-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                Dominate{' '}
                <span className="text-white">Shopify</span>{' '}
                with{' '}
                <span className="text-teal-400">Institutional Automation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-black">
                Transform your capital into a systematically managed, cash-flow generative Shopify enterprise. 
                We deploy sophisticated automation technologies to scale your e-commerce operations while you focus on strategic growth.
              </p>
              
              <div className="flex justify-start">
                <a
                  href="/contact"
                  className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full"
                >
                  Schedule Your Capital Intro Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Shopify Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-start -ml-8 pr-8 py-8"
        >
          <div className="relative">
            <Image
              src="/images/companies/processed/shopify.png"
              alt="Shopify Logo"
              width={400}
              height={400}
              className="w-80 h-80 object-contain opacity-100 filter brightness-0 invert hover:opacity-90 transition-opacity duration-300"
            />
            {/* Subtle glow effect around logo */}
            <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-2xl scale-110"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopifyHero;
