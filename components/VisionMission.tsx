"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Vision Mission Component ---
const VisionMission: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 px-8 overflow-hidden">
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
            Our Vision &{' '}
            <span className="text-teal-400">Commitment</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                {/* Vision Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                  To be the world's most trusted partner for creating and scaling automated e-commerce empires, 
                  making <span className="font-bold text-white">financial independence</span> an achievable reality 
                  for aspiring entrepreneurs globally.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                {/* Mission Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                  To provide a seamless, <span className="font-bold text-white">white-glove e-commerce automation service</span> 
                  that handles all technical, operational, and strategic complexities. We empower our clients to become 
                  successful business owners, freeing them to live life on their own schedule.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white text-center mb-8">
                  Our Core Values
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group/item">
                    <svg className="w-8 h-8 text-teal-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-xl font-bold text-white mb-2">Excellence</h4>
                    <p className="text-gray-400">
                      We deliver exceptional results through meticulous attention to detail and continuous improvement.
                    </p>
                  </div>
                  
                  <div className="text-center group/item">
                    <svg className="w-8 h-8 text-teal-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="text-xl font-bold text-white mb-2">Partnership</h4>
                    <p className="text-gray-400">
                      We build lasting relationships based on trust, transparency, and mutual success.
                    </p>
                  </div>
                  
                  <div className="text-center group/item">
                    <svg className="w-8 h-8 text-teal-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
                    <p className="text-gray-400">
                      We stay ahead of the curve with cutting-edge strategies and technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
