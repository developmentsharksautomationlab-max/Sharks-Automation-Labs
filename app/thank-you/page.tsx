"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlexusBackground from '../../components/PlexusBackground';

export default function ThankYou() {
  const [showQuote, setShowQuote] = useState(false);
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
            
            {/* Click Here Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 sm:mt-12 flex justify-center"
            >
              <button
                onClick={() => setShowQuote(true)}
                className="bg-teal-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-teal-400/25 uppercase tracking-wider"
                style={{ fontFamily: 'Poppins' }}
              >
                Click Here
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setShowQuote(false)}
          >
            {/* Video Background */}
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
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 bg-black border border-teal-400/30 rounded-lg p-8 sm:p-12 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowQuote(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 text-3xl font-light w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>

              {/* Quote Content */}
              <div className="text-center space-y-6 sm:space-y-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: 'Poppins', fontWeight: '400' }}
                >
                  Thank you for booking your appointment
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Your journey to e-commerce success begins now. With dedication, strategy, and the right guidance, you&apos;re destined to achieve remarkable success in your online business. We&apos;re excited to be part of your success story.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

