"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';

// --- Virtual Assistant MainContent Component ---
const VirtualAssistantMainContent: React.FC = () => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Administrative Excellence",
      description: "Streamlined operations management with precision-driven administrative support that scales with your business growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      metrics: ["99.9% Uptime", "24/7 Support", "Multi-Platform"]
    },
    {
      id: 2,
      title: "Customer Service Mastery",
      description: "Professional customer relationship management that builds brand loyalty and drives repeat business through exceptional service.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      metrics: ["Response < 2min", "95% Satisfaction", "Multi-Language"]
    },
    {
      id: 3,
      title: "Data Management Systems",
      description: "Advanced data processing and analysis capabilities that transform raw information into actionable business intelligence.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      metrics: ["Real-Time Sync", "Automated Reports", "Secure Storage"]
    },
    {
      id: 4,
      title: "Operational Automation",
      description: "Intelligent workflow automation that eliminates manual processes and accelerates your business operations exponentially.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      metrics: ["50% Efficiency Gain", "Error Reduction", "Cost Savings"]
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
                Virtual Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our institutional-grade virtual assistance platform delivers unmatched operational efficiency 
              and customer satisfaction. Built for scale, designed for results.
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
                Ready to Transform Your Operations?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience the power of institutional-grade virtual assistance. 
                Let our experts show you how to optimize your business operations.
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

export default VirtualAssistantMainContent;