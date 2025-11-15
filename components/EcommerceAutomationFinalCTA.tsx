"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PlexusBackground from './PlexusBackground';

const EcommerceAutomationFinalCTA: React.FC = () => {
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
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <button onClick={openCalendly} className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            Ready for a{' '}
            <span className="text-teal-400">Guaranteed Return?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't miss out on this opportunity to secure your financial future.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceAutomationFinalCTA;
