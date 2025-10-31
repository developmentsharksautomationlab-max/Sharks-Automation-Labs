"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Walmart Services Component ---
const WalmartServices: React.FC = () => {
  const servicesData = [
    {
      id: 1,
      title: "Systematic Marketplace Optimization",
      description: "Advanced listing optimization and SEO frameworks that systematically maximize visibility, conversion rates, and sales velocity across your Walmart portfolio."
    },
    {
      id: 2,
      title: "Institutional-Grade Supply Chain Operations",
      description: "Automated inventory management, demand forecasting, and global fulfillment networks that ensure seamless operations at scale with enterprise-level reliability."
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(0,0,0,0) 70%) z-0"></div>
      
      {/* Teal Glow from Right Bottom */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>
      
      {/* Teal Glow from Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>
      
      {/* Floating Side Button (hide on small) */}
      <button className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Proprietary Systems for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Marketplace Domination</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our battle-tested automation frameworks have been refined through managing millions in Walmart capital. 
              We deploy systematic approaches that transform your investment into a scalable, cash-flow generative marketplace enterprise.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Node - Top Left of Card */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center z-10 group-hover:bg-teal-300 group-hover:shadow-lg group-hover:shadow-teal-400/50 transition-all duration-300">
                  <span className="text-white font-bold text-sm">{service.id}</span>
                </div>

                {/* Service Card */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl shadow-teal-400/25 h-full flex flex-col relative group hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
                  {/* Animated Border Glow - Same as Why Allocate Capital section */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed flex-grow relative z-10">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full"
            >
              Schedule Your Capital Intro Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WalmartServices;
