"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- TikTok Main Content Component ---
const TikTokMainContent: React.FC = () => {
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
    <section ref={sectionRef} className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="relative z-10 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
                  Strategic Capital Deployment in the{' '}
                  <span className="text-teal-400">TikTok Ecosystem</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  While traditional advertising struggles with declining engagement, TikTok's platform thrives on authentic, viral content. 
                  We identify and capitalize on this fundamental shift, deploying capital with surgical precision into high-margin verticals 
                  within the world's fastest-growing social commerce platform.
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  Our firm provides a seamless, institutional-grade gateway into TikTok's $1+ trillion ecosystem. 
                  We handle all operations—from content creation to influencer partnerships—transforming your capital into an 
                  actively managed, cash-flow generative enterprise that scales systematically and compounds returns.
                </p>
                
                <div className="flex justify-start">
                  <a
                    href="/contact"
                    className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full cursor-pointer"
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
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Viral Content Creation</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">AI-powered content generation that captures TikTok's algorithm</p>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Influencer Networks</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Strategic partnerships with top-performing creators</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-6 mt-12">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Growth Analytics</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Real-time performance tracking and optimization</p>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-500">Monetization Engine</h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">Automated revenue streams and brand partnerships</p>
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

export default TikTokMainContent;
