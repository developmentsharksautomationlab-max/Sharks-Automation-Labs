"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Product Hunting Edge Component ---
const ProductHuntingEdge: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: "Data-Driven Product Discovery",
      description: "Uncover winning products through advanced market analysis and trend identification."
    },
    {
      id: 2,
      title: "Competitive Intelligence",
      description: "Stay ahead with real-time competitor analysis and market gap identification."
    },
    {
      id: 3,
      title: "Profit Optimization",
      description: "Maximize margins with strategic pricing and supplier negotiation expertise."
    },
    {
      id: 4,
      title: "Scalable Growth",
      description: "Build sustainable product portfolios that scale across multiple marketplaces."
    },
    {
      id: 5,
      title: "Risk Mitigation",
      description: "Minimize investment risk through comprehensive market validation and testing."
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "Market Research Tools",
      description: "Expensive tools and complex data analysis often lead to missed opportunities and poor product choices."
    },
    {
      id: 2,
      title: "Trend Identification",
      description: "Without proper research, you're chasing outdated trends and wasting valuable time and resources."
    },
    {
      id: 3,
      title: "Competitor Analysis",
      description: "Manual competitor research is time-consuming and often misses critical market insights."
    },
    {
      id: 4,
      title: "Supplier Relations",
      description: "Finding reliable suppliers and negotiating favorable terms without experience is challenging."
    },
    {
      id: 5,
      title: "Market Validation",
      description: "Without proper testing, you risk launching products that don't resonate with your target market."
    }
  ];

  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/videos/bg-pattern.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-5"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-black/80 to-teal-400/5 z-10"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Edge That Makes Our System Better!
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Growth with The Shark Retail
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Advantages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-teal-400 mb-2">With The Shark Retail</h3>
                <div className="w-16 h-1 bg-teal-400 mx-auto rounded-full"></div>
              </div>
              
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-teal-400/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Check Mark Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column: Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-500 mb-2">DIY (Beginning Solo)</h3>
                <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
              </div>
              
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-red-400/30 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl hover:shadow-red-400/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    {/* X Mark Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {challenge.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-3xl p-8 border border-teal-400/30 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Choose the Right Path?
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't let poor product research hold you back. Partner with The Shark Retail and unlock your true e-commerce potential.
              </p>
              <a
                href="/contact"
                className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-500 rounded-full cursor-pointer"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntingEdge;
