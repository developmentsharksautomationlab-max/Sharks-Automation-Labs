"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PlexusBackground from './PlexusBackground';

const EcommerceAutomationHero: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/sharksretailofficial/30min'
      });
    } else {
      // Fallback: open in new window if Calendly script not loaded
      window.open('https://calendly.com/sharksretailofficial/30min', '_blank');
    }
  };
  return (
    <section className="relative bg-black py-8 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Right Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-l from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <button onClick={openCalendly} className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      {/* Main Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white p-4 sm:p-6 lg:p-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-5xl mx-auto"
              style={{ fontFamily: 'Poppins', fontWeight: '700' }}
            >
              The Only E-commerce Investment with a{' '}
              <span className="text-teal-400">Guaranteed Return</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-black"
            >
              The Done-For-You System That Gets You to{' '}
              <span className="text-teal-400 font-semibold">$4,000 in 30 Days</span>
              —or We Work for Free.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Curious now? Book a meeting with one of our senior consultants today.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationHero;
