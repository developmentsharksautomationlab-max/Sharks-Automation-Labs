"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

// --- Walmart Proof Component ---
const WalmartProof: React.FC = () => {
  const proofData = [
    {
      id: 1,
      imageUrl: "/images/walmart-proof/walmart-sale1.jpg",
      alt: "Walmart Performance Metrics 1"
    },
    {
      id: 2,
      imageUrl: "/images/walmart-proof/walmart-sale2.jpg",
      alt: "Walmart Performance Metrics 2"
    },
    {
      id: 3,
      imageUrl: "/images/walmart-proof/walmart-sale3.jpg",
      alt: "Walmart Performance Metrics 3"
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent z-0"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Walmart Performance Metrics
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Comprehensive analytics showcasing systematic capital deployment and measurable returns from our proprietary Walmart automation frameworks. 
              These performance indicators demonstrate our institutional approach to systematic wealth generation in the marketplace space.
            </p>
          </motion.div>

          {/* Proof Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {proofData.map((proof, index) => (
              <motion.div
                key={proof.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 backdrop-blur-md rounded-2xl shadow-2xl shadow-teal-400/25 overflow-hidden hover:shadow-3xl hover:shadow-teal-400/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="p-4">
                    <Image
                      src={proof.imageUrl}
                      alt={proof.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative bg-black rounded-3xl p-6 sm:p-10 md:p-12 text-center overflow-hidden"
          >
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            >
              <source src="/videos/bg-pattern.mp4" type="video/mp4" />
            </video>
            
            {/* Teal Overlay */}
            <div className="absolute inset-0 bg-teal-400/10 z-5"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See These Results for Your Walmart Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our systematic approach to Walmart automation and start generating consistent, measurable returns.
              </p>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full cursor-pointer"
              >
                Schedule Your Capital Intro Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WalmartProof;
