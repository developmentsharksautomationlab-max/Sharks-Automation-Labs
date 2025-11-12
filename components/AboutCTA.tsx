"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- About CTA Component ---
const AboutCTA: React.FC = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Write Your Own{' '}
              <span className="text-teal-600">Success Story?</span>
            </h2>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your journey to financial freedom and a life beyond the 9-to-5 starts with a single conversation.
            </p>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            {/* Primary CTA Button */}
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 text-black font-bold py-2.5 sm:py-3.5 md:py-4 px-5 sm:px-7 md:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl gap-3 group cursor-pointer"
            >
              <span>Schedule Your Free Consultation Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secondary CTA Button */}
            <a
              href="tel:+14694807938"
              className="inline-flex w-full sm:w-auto justify-center border-2 border-teal-600 text-teal-600 font-semibold py-2.5 sm:py-3.5 md:py-4 px-5 sm:px-7 md:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-teal-600 hover:text-white transition-all duration-300 items-center gap-3 group cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(469) 480-7938</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                No obligation, just expert advice tailored to your goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                $200M+ ROI generated for Fortune 500 clients
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Team</h3>
              <p className="text-gray-600 text-sm">
                100+ experts across 4 countries ready to help
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 max-w-md mx-auto">
              <p className="text-gray-600 text-sm mb-2">Prefer to email us?</p>
              <a 
                href="mailto:info@thesharkretail.com" 
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                info@thesharkretail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
