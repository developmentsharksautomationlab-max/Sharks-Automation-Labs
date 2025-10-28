"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';

// --- Virtual Assistant Proof Component ---
const VirtualAssistantProof: React.FC = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    tasks: 0,
    efficiency: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const targetCounts = {
    clients: 1250,
    tasks: 50000,
    efficiency: 75,
    satisfaction: 98
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (key: keyof typeof targetCounts) => {
        const target = targetCounts[key];
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      };

      Object.keys(targetCounts).forEach(key => {
        animateCount(key as keyof typeof targetCounts);
      });
    }
  }, [isInView]);

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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building The Operations of Tomorrow, Today.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We help businesses optimize their operations!
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Active Clients */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-3xl shadow-2xl p-8 border border-teal-100/50 hover:shadow-3xl hover:shadow-teal-400/20 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden h-full flex flex-col justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Teal Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-6xl md:text-7xl font-bold text-teal-400 group-hover:text-teal-500 transition-colors duration-300">
                      {counts.clients.toLocaleString()}
                    </div>
                    <div className="text-4xl font-bold text-teal-400 ml-2 group-hover:text-teal-500 transition-colors duration-300">+</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    ACTIVE CLIENTS
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tasks Completed */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-3xl shadow-2xl p-8 border border-teal-100/50 hover:shadow-3xl hover:shadow-teal-400/20 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden h-full flex flex-col justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Teal Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-6xl md:text-7xl font-bold text-teal-400 group-hover:text-teal-500 transition-colors duration-300">
                      {counts.tasks.toLocaleString()}
                    </div>
                    <div className="text-4xl font-bold text-teal-400 ml-2 group-hover:text-teal-500 transition-colors duration-300">+</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    TASKS COMPLETED
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Efficiency Improvement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-3xl shadow-2xl p-8 border border-teal-100/50 hover:shadow-3xl hover:shadow-teal-400/20 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden h-full flex flex-col justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Teal Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-6xl md:text-7xl font-bold text-teal-400 group-hover:text-teal-500 transition-colors duration-300">
                      {counts.efficiency}
                    </div>
                    <div className="text-4xl font-bold text-teal-400 ml-2 group-hover:text-teal-500 transition-colors duration-300">%</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    EFFICIENCY GAIN
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Satisfaction */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-3xl shadow-2xl p-8 border border-teal-100/50 hover:shadow-3xl hover:shadow-teal-400/20 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden h-full flex flex-col justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Teal Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-6xl md:text-7xl font-bold text-teal-400 group-hover:text-teal-500 transition-colors duration-300">
                      {counts.satisfaction}
                    </div>
                    <div className="text-4xl font-bold text-teal-400 ml-2 group-hover:text-teal-500 transition-colors duration-300">%</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    CLIENT SATISFACTION
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section with Video Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
            >
              <source src="/videos/bg-pattern.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 rounded-3xl z-5"></div>

            {/* Teal Overlay */}
            <div className="absolute inset-0 bg-teal-400/10 rounded-3xl z-10"></div>

            <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-12 text-center z-20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See These Results for Your Operations?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our systematic approach to virtual assistance and start generating consistent, measurable returns from your operational capital.
              </p>
              <a
                href="/contact"
                className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
              >
                Schedule Your Capital Intro Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistantProof;