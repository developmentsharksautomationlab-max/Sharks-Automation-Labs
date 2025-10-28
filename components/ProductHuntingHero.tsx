"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PlexusBackground from '@/components/PlexusBackground';

// --- Product Hunting Hero Component ---
const ProductHuntingHero: React.FC = () => {
  return (
    <section className="relative bg-black py-24 px-8 overflow-hidden min-h-screen flex items-center">
      <PlexusBackground />
      
      {/* Subtle Right-Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left text-white p-8"
            >
              <div className="space-y-8">
                <h1 
                  className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl"
                  style={{ fontFamily: 'Poppins', fontWeight: '700' }}
                >
                  Strategic <span className="text-white">Product Hunting</span> for{' '}
                  <span className="text-teal-400">Market Opportunities</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl font-black">
                  Discover profitable products and untapped market opportunities with our institutional-grade 
                  product research methodologies. Our systematic approach identifies high-margin products, 
                  trending categories, and competitive gaps that drive sustainable business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
                  >
                    Schedule Your Capital Intro Call
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Product Hunting Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Product Research Dashboard */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-teal-400/30">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">Product Analysis</h3>
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Product Metrics */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">High-Margin Products</span>
                        <span className="text-teal-400 text-xs">67% ROI</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Trending Categories</span>
                        <span className="text-teal-400 text-xs">+234%</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Low Competition</span>
                        <span className="text-teal-400 text-xs">89 Products</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Market Gaps</span>
                        <span className="text-teal-400 text-xs">156 Identified</span>
                      </div>
                    </div>
                    
                    {/* Profitability Chart */}
                    <div className="h-20 bg-gradient-to-r from-teal-400/20 to-transparent rounded-lg flex items-end justify-between p-3">
                      <div className="w-6 bg-teal-400 h-8 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-12 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-16 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-10 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-14 rounded-t"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Product Icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntingHero;
