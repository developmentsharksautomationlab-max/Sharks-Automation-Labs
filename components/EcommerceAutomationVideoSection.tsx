"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

const EcommerceAutomationVideoSection: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      // Check if the message is from Calendly
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // Check if the event is a scheduled event
        if (e.data.event === 'calendly.event_scheduled') {
          // Redirect to thank you page after a short delay
          setTimeout(() => {
            router.push('/thank-you');
          }, 1000);
        }
      }
    };

    // Add event listener for Calendly messages
    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Cleanup on unmount
      window.removeEventListener('message', handleCalendlyEvent);
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [router]);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <button 
        onClick={() => {
          if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({
              url: 'https://calendly.com/sharksretailofficial/30min'
            });
          } else {
            window.open('https://calendly.com/sharksretailofficial/30min', '_blank');
          }
        }}
        className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors cursor-pointer"
      >
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
              Ready to Launch Your Passive Income Asset?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
              Book your free strategy call, and let's see how we can help you.
            </p>
          </motion.div>
          
          {/* Calendly Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-white"
            style={{ minHeight: '700px' }}
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/sharksretailofficial/30min"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationVideoSection;
