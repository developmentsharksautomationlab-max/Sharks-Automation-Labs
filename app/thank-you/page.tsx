"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlexusBackground from '../../components/PlexusBackground';

export default function ThankYou() {
  const videosSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videosSectionRef,
    offset: ["start end", "end start"]
  });

  // First video moves down on scroll down, up on scroll up
  // Reduced movement on mobile for better performance
  const firstVideoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  // Second video moves up on scroll down, down on scroll up
  // Reduced movement on mobile for better performance
  const secondVideoY = useTransform(scrollYProgress, [0, 1], [0, -50]);
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

            {/* Book Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-black transition-colors hover:bg-white hover:text-black rounded-full"
              >
                Book Now
              </a>
            </motion.div>

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

      {/* Videos Section */}
      <section ref={videosSectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* First Video */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ y: firstVideoY }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                  Watch This First: How to Get the Most Out of Our Call.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  This video will walk you through what to expect on the call and what you need to prepare, so we can get right to the details and not waste a single minute.
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/PkzqxZQwK_E"
                  title="Watch This First: How to Get the Most Out of Our Call"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Second Video */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y: secondVideoY }}
              className="space-y-4 sm:space-y-12 pt-12 lg:pt-4"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                  Watch This Next: See Exactly How Our Clients Are Hitting $4,000 a Month.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  This video will walk you through what to expect on the call and what you need to prepare, so we can get right to the details and not waste a single minute.
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3kE6P9VgPuc"
                  title="Watch This Next: See Exactly How Our Clients Are Hitting $4,000 a Month"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
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

