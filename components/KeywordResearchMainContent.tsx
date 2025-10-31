"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Keyword Research Main Content Component ---
const KeywordResearchMainContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  // Transform values for scroll animations
  const firstCardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const secondCardY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const thirdCardY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fourthCardY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="relative z-10 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
                  Why Choose{' '}
                  <span className="text-teal-400">The Shark Retail</span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                  We are your trusted keyword research partner, delivering comprehensive SEO strategies 
                  that drive exceptional organic growth. Our expertise spans from advanced keyword discovery 
                  to strategic content optimization, ensuring your brand achieves peak search visibility. 
                  We specialize in identifying untapped keyword opportunities and competitive advantages 
                  that accelerate your organic traffic growth.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full cursor-pointer"
                  >
                    Explore Our Solutions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Visual Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  {/* First Card - moves down on scroll */}
                  <motion.div 
                    style={{ y: firstCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all duration-500"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-2xl transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-teal-400/0 group-hover:bg-teal-400/20 rounded-2xl blur-xl transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Keyword Discovery</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Advanced research and analysis for maximum search visibility</p>
                    </div>
                  </motion.div>
                  
                  {/* Second Card - moves down on scroll */}
                  <motion.div 
                    style={{ y: secondCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all duration-500"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-2xl transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-teal-400/0 group-hover:bg-teal-400/20 rounded-2xl blur-xl transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Competitor Analysis</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Comprehensive competitive intelligence that drives strategic advantage</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                  {/* Third Card - moves up on scroll */}
                  <motion.div 
                    style={{ y: thirdCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all duration-500"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-2xl transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-teal-400/0 group-hover:bg-teal-400/20 rounded-2xl blur-xl transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Content Strategy</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Strategic content mapping that maximizes organic reach</p>
                    </div>
                  </motion.div>
                  
                  {/* Fourth Card - moves up on scroll */}
                  <motion.div 
                    style={{ y: fourthCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all duration-500"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-2xl transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-teal-400/0 group-hover:bg-teal-400/20 rounded-2xl blur-xl transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Organic Growth</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Accelerating growth through comprehensive keyword optimization</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchMainContent;