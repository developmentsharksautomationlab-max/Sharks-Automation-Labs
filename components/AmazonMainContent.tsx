"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Amazon Main Content Component ---
const AmazonMainContent: React.FC = () => {
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
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="relative z-10 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
                  Strategic Capital Deployment in the{' '}
                  <span className="text-teal-600">Amazon Ecosystem</span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  While traditional markets fluctuate on sentiment, Amazon's marketplace grows on fundamental consumer demand. 
                  We identify and capitalize on this permanent shift, deploying capital with surgical precision into high-margin 
                  verticals within the world's largest e-commerce platform.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  Our firm provides a seamless, institutional-grade gateway into Amazon's $6 trillion ecosystem. We handle 
                  all operations—from asset creation to global logistics—transforming your capital into an actively managed, 
                  cash-flow generative enterprise that scales systematically and compounds returns.
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
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-6">
                  {/* First Card - moves down on scroll */}
                  <motion.div 
                    style={{ y: firstCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">Marketplace Domination</h3>
                      <p className="text-gray-300 text-sm">Advanced listing optimization and SEO for maximum visibility</p>
                    </div>
                  </motion.div>
                  
                  {/* Second Card - moves down on scroll */}
                  <motion.div 
                    style={{ y: secondCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">Inventory Intelligence</h3>
                      <p className="text-gray-300 text-sm">AI-powered demand forecasting and stock management</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-6 mt-8 sm:mt-12">
                  {/* Third Card - moves up on scroll */}
                  <motion.div 
                    style={{ y: thirdCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">Fulfillment Excellence</h3>
                      <p className="text-gray-300 text-sm">Automated systems that scale with your capital</p>
                    </div>
                  </motion.div>
                  
                  {/* Fourth Card - moves up on scroll */}
                  <motion.div 
                    style={{ y: fourthCardY }}
                    className="bg-black border border-teal-400/30 p-6 rounded-2xl relative overflow-hidden"
                  >
                    {/* Teal Overlay - Right Side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                    
                    {/* Teal Glow Effect - Right Side */}
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/25 rounded-2xl blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/40 rounded-2xl blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/50 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white">Global Reach</h3>
                      <p className="text-gray-300 text-sm">Access to Amazon's worldwide marketplace network</p>
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

export default AmazonMainContent;
