"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Keyword Research Edge Component ---
const KeywordResearchEdge: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: "Data-Driven Insights",
      description: "Unlock powerful keyword intelligence and market opportunities that drive organic growth."
    },
    {
      id: 2,
      title: "Competitive Advantage",
      description: "Identify gaps in competitor strategies and capitalize on untapped keyword opportunities."
    },
    {
      id: 3,
      title: "Targeted Content Strategy",
      description: "Create content that ranks and converts with precision-targeted keyword research."
    },
    {
      id: 4,
      title: "Scalable SEO Growth",
      description: "Build sustainable organic traffic through systematic keyword discovery and optimization."
    },
    {
      id: 5,
      title: "Measurable Results",
      description: "Track and optimize performance with clear metrics and ROI-driven keyword strategies."
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "Keyword Research Tools",
      description: "Expensive tools and complex interfaces often lead to incomplete data and missed opportunities."
    },
    {
      id: 2,
      title: "Market Analysis",
      description: "Without proper research, you're targeting the wrong keywords and wasting valuable resources."
    },
    {
      id: 3,
      title: "Competitor Intelligence",
      description: "Manual competitor analysis is time-consuming and often misses critical keyword insights."
    },
    {
      id: 4,
      title: "Content Strategy",
      description: "Creating content without keyword research leads to low rankings and poor organic visibility."
    },
    {
      id: 5,
      title: "ROI Measurement",
      description: "Without proper tracking, you can't measure the success of your keyword optimization efforts."
    }
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Edge That Makes Our System Better!
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Growth with The Shark Retail
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
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
                  className="bg-white/5 border border-teal-400/30 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-xl hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Check Mark Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {advantage.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
                  className="bg-white/5 border border-red-400/30 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-xl hover:shadow-red-400/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start space-x-4">
                    {/* X Mark Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {challenge.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
            <div className="bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-3xl p-6 sm:p-8 border border-teal-400/30 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Ready to Choose the Right Path?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't let poor keyword research hold you back. Partner with The Shark Retail and unlock your true organic potential.
              </p>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-500 rounded-full cursor-pointer"
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

export default KeywordResearchEdge;
