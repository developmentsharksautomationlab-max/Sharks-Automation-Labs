"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Proof Image Card Component ---
const ProofCard: React.FC<{
  image: string;
  alt: string;
  delay?: number;
}> = ({ image, alt, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/25 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={alt}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Floating Elements Component ---
const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-4 h-4 border border-teal-400/30 rotate-45"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20 w-3 h-3 bg-teal-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-1/4 w-5 h-5 border border-teal-400/20 rounded-full"
      />
    </div>
  );
};

// --- Etsy Proof Component ---
const EtsyProof: React.FC = () => {
  const proofData = [
    {
      image: "/images/etsy-proof/etsy-sale1.jpg",
      alt: "Etsy Sales Dashboard 1"
    },
    {
      image: "/images/etsy-proof/etsy-sale2.png", 
      alt: "Etsy Sales Dashboard 2"
    },
    {
      image: "/images/etsy-proof/etsy-sale3.png",
      alt: "Etsy Sales Dashboard 3"
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white z-0"></div>
      
      {/* Plexus Background */}
      <PlexusBackgroundWhite />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse z-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse z-1" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Elements */}
      <FloatingElements />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            Etsy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
              Performance Metrics
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-5xl mx-auto">
            Comprehensive analytics showcasing systematic capital deployment and measurable returns from our proprietary Etsy automation frameworks. 
            These performance indicators demonstrate our institutional approach to systematic wealth generation.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </div>
        </motion.div>

        {/* Proof Images Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {proofData.map((proof, index) => (
              <ProofCard
                key={index}
                image={proof.image}
                alt={proof.alt}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="relative bg-black rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
            >
              <source src="/videos/bg-pattern.mp4" type="video/mp4" />
            </video>
            
            {/* Teal Overlay */}
            <div className="absolute inset-0 bg-teal-400/10 z-5"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to See These Results for Your Etsy Business?
              </h3>
              <p className="text-teal-100 mb-6">
                Join our systematic approach to Etsy automation and start generating consistent, measurable returns.
              </p>
              <a 
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full"
              >
                Schedule Your Capital Intro Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EtsyProof;

