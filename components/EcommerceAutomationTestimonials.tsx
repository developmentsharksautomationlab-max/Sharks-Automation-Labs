"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';

const EcommerceAutomationTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      role: "E-commerce Investor",
      image: "/images/testimonial-1.jpg",
      quote: "The Shark Retail delivered exactly what they promised! My store is generating consistent passive income, and their support team is fantastic. Highly recommend!",
      stars: 5
    },
    {
      name: "Mark Wilson",
      role: "Entrepreneur",
      image: "/images/testimonial-2.jpg",
      quote: "I was skeptical at first, but The Shark Retail made it incredibly easy to launch my e-commerce asset. The returns are real, and it's truly hands-off.",
      stars: 5
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-400 text-teal-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationTestimonials;
