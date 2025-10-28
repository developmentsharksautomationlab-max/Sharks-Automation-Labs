"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Service Feature Component ---
const ServiceFeature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Shark Difference Component ---
const SharkDifference: React.FC = () => {
  const serviceFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Store Setup & Configuration",
      description: "Complete e-commerce store setup across all major platforms with optimized configurations for maximum performance."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Product Sourcing & Management",
      description: "Strategic product sourcing, inventory management, and optimization to ensure profitable product selection."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Marketing & Advertising",
      description: "Comprehensive marketing strategies including PPC campaigns, SEO optimization, and social media management."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
        </svg>
      ),
      title: "Customer Service Excellence",
      description: "24/7 customer support, order management, and customer relationship management to ensure satisfaction."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Optimization",
      description: "Advanced analytics, performance tracking, and continuous optimization to maximize your ROI."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and maintenance to ensure your business runs smoothly without interruption."
    }
  ];

  return (
    <section className="relative bg-white py-24 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Shark Automation{' '}
            <span className="text-teal-600">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your Freedom, Our Mission
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-teal-50 to-white rounded-2xl p-8 shadow-lg border border-teal-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide a <span className="font-bold text-teal-600">tailor-made, done-for-you service</span> that automates 
                every aspect of your e-commerce business. From store setup and product sourcing to marketing and customer service, 
                we handle the complex operations.
              </p>
              <div className="bg-teal-100 rounded-lg p-6">
                <p className="text-lg font-semibold text-teal-800">
                  This allows you the most precious commodities of all: <span className="text-xl font-bold">time and freedom</span>. 
                  You can relax, pursue your passions, and watch your investment work for you—even while you sleep.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceFeatures.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                What This Means for{' '}
                <span className="text-teal-400">You</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Time Freedom</h4>
                <p className="text-gray-300">
                  Reclaim your time to focus on what matters most to you, while we handle the day-to-day operations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Passive Income</h4>
                <p className="text-gray-300">
                  Build a sustainable income stream that works for you 24/7, even while you're sleeping.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Expert Management</h4>
                <p className="text-gray-300">
                  Leverage our decade of experience and proven strategies without learning the complexities yourself.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SharkDifference;
