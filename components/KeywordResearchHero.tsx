"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PlexusBackground from '@/components/PlexusBackground';

// --- Keyword Research Hero Component ---
const KeywordResearchHero: React.FC = () => {
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
                  Deep <span className="text-white">Keyword Research</span> for{' '}
                  <span className="text-teal-400">Market Domination</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl font-black">
                  Uncover high-value keywords and market opportunities with our institutional-grade 
                  research methodologies. Our systematic approach identifies profitable niches, 
                  competitor gaps, and trending search terms that drive organic traffic and sales growth.
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

            {/* Right Side: Keyword Research Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Keyword Research Dashboard */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-teal-400/30">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">Keyword Analysis</h3>
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Keyword Metrics */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">High-Volume Keywords</span>
                        <span className="text-teal-400 text-xs">2,847</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Low Competition</span>
                        <span className="text-teal-400 text-xs">1,234</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Long-tail Opportunities</span>
                        <span className="text-teal-400 text-xs">856</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-400/10 p-3 rounded-lg">
                        <span className="text-white text-sm">Trending Keywords</span>
                        <span className="text-teal-400 text-xs">+127%</span>
                      </div>
                    </div>
                    
                    {/* Search Volume Chart */}
                    <div className="h-20 bg-gradient-to-r from-teal-400/20 to-transparent rounded-lg flex items-end justify-between p-3">
                      <div className="w-6 bg-teal-400 h-12 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-16 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-20 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-14 rounded-t"></div>
                      <div className="w-6 bg-teal-400 h-18 rounded-t"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Research Icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

export default KeywordResearchHero;
