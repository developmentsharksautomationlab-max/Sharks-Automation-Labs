"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';
import { Palette } from 'lucide-react';

// --- Content Creation MainContent Component ---
const ContentCreationMainContent: React.FC = () => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Creative Strategy Excellence",
      description: "Data-driven content strategy with precision-driven creative direction that scales your brand presence across all digital channels.",
      icon: (
        <Palette className="w-8 h-8 text-teal-400" />
      ),
      metrics: ["300% Engagement", "24/7 Production", "Multi-Platform"]
    },
    {
      id: 2,
      title: "Visual Content Mastery",
      description: "Professional visual content creation that builds brand recognition and drives conversion through compelling imagery and design.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      metrics: ["High-Converting", "Brand Consistent", "Scalable Assets"]
    },
    {
      id: 3,
      title: "Copywriting Systems",
      description: "Advanced copywriting and messaging capabilities that transform brand stories into persuasive, conversion-focused content.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      metrics: ["Conversion Optimized", "SEO Enhanced", "Brand Voice"]
    },
    {
      id: 4,
      title: "Content Production Automation",
      description: "Intelligent content production workflows that eliminate bottlenecks and accelerate your content marketing operations exponentially.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      metrics: ["50% Faster Production", "Quality Maintained", "Cost Efficient"]
    }
  ];

  return (
    <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-teal-50/20"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proprietary Systems for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                Creative Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our institutional-grade content creation platform delivers unmatched creative output 
              and brand consistency. Built for scale, designed for results.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 50 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="group"
              >
                <div className="bg-black rounded-3xl p-8 shadow-2xl h-full relative overflow-hidden border border-teal-400/20 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-teal-400/20">
                  {/* Teal Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="space-y-2">
                      {service.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:bg-teal-300 transition-colors duration-300"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-3xl p-8 border border-teal-400/30 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Content Strategy?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience the power of institutional-grade content creation. 
                Let our experts show you how to optimize your creative operations.
              </p>
              <a
                href="/contact"
                className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full cursor-pointer"
              >
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreationMainContent;
