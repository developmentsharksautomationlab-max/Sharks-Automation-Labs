"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PlexusBackground from '../../components/PlexusBackground';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <PlexusBackground />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="text-center text-white px-4 py-8 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
              style={{ fontFamily: 'Poppins', fontWeight: '400' }}
            >
              You&apos;re in! Let&apos;s get{' '}
              <span className="text-teal-400">ready</span>{' '}
              for your call
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed font-normal px-2 sm:px-4"
            >
              Congratulations! Your call is booked. We&apos;ll be in touch shortly to confirm the details and prepare for our conversation.
            </motion.p>

            {/* Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 sm:mt-12 flex justify-center"
            >
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2 sm:px-4">
              We&apos;re excited to speak with you and help you build your hands-off e-commerce business. See you on the call!
            </p>
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

