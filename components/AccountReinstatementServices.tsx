"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';

// --- Account Reinstatement Services Component ---
const AccountReinstatementServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Amazon Account Recovery That Works",
      description: "The Shark Retail delivers complete Amazon account reinstatement designed for real results. With strong industry insight and a focus on your recovery, we help sellers succeed in today's complex marketplace environment.",
      details: {
        features: [
          "Advanced appeal letter preparation",
          "Policy violation analysis and correction",
          "Documentation and evidence collection",
          "Direct communication with Amazon support",
          "Compliance strategy implementation",
          "Ongoing account monitoring"
        ],
        benefits: [
          "95% reinstatement success rate",
          "Average 14-day recovery timeline",
          "24/7 case monitoring",
          "Prevention of future suspensions"
        ]
      }
    },
    {
      id: 2,
      title: "Multi-Platform Account Recovery",
      description: "Professional account reinstatement across all major e-commerce platforms. Our systematic approach ensures consistent recovery results regardless of platform complexity.",
      details: {
        features: [
          "Platform-specific recovery strategies",
          "Cross-platform compliance management",
          "Unified documentation systems",
          "Multi-channel communication",
          "Risk assessment and mitigation",
          "Scalable recovery processes"
        ],
        benefits: [
          "90% success across all platforms",
          "Reduced recovery time by 60%",
          "Comprehensive compliance coverage",
          "Unified account management"
        ]
      }
    },
    {
      id: 3,
      title: "Compliance Management Solutions",
      description: "Advanced compliance monitoring and management that prevents account suspensions through proactive policy adherence and risk mitigation strategies.",
      details: {
        features: [
          "Real-time policy monitoring",
          "Automated compliance checking",
          "Risk assessment algorithms",
          "Preventive action recommendations",
          "Compliance training programs",
          "Audit preparation support"
        ],
        benefits: [
          "99% compliance rate",
          "Zero preventable suspensions",
          "Automated risk detection",
          "Continuous improvement protocols"
        ]
      }
    },
    {
      id: 4,
      title: "Emergency Recovery Services",
      description: "Rapid response account recovery services for critical business situations. Our emergency protocols ensure immediate action when your business depends on account access.",
      details: {
        features: [
          "24-hour emergency response",
          "Priority case handling",
          "Expedited documentation",
          "Direct platform escalation",
          "Crisis management protocols",
          "Business continuity planning"
        ],
        benefits: [
          "Same-day response guarantee",
          "Priority platform access",
          "Crisis resolution expertise",
          "Business continuity assurance"
        ]
      }
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-black to-teal-400/5"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Account Reinstatement{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                Solutions
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive account reinstatement services are designed to recover your suspended assets, 
              ensure compliance, and prevent future account issues.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </motion.div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Left Side: Timeline */}
            <div className="relative" ref={timelineRef}>
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-8 top-0 w-0.5 bg-teal-400/30"
                initial={{ height: 0 }}
                animate={{ height: isInView ? "100%" : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              ></motion.div>

              {/* Timeline Cards */}
              <div className="space-y-8">
                {servicesData.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className={`absolute left-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
                        selectedService === service.id
                          ? 'bg-teal-400 border-teal-400 scale-125'
                          : 'bg-black border-teal-400 hover:bg-teal-400'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    ></motion.div>

                    {/* Service Card */}
                    <div
                      className={`ml-16 bg-white/5 border backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl h-full flex flex-col relative group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                        selectedService === service.id
                          ? 'border-teal-400/50 shadow-lg shadow-teal-400/20'
                          : 'border-white/10'
                      }`}
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    >
                      {/* Service Number */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {service.id}
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Detailed View */}
            <div className="lg:sticky lg:top-24">
              {selectedService ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl shadow-teal-400/25"
                >
                  {(() => {
                    const service = servicesData.find(s => s.id === selectedService);
                    if (!service) return null;

                    return (
                      <>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-lg">{service.id}</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Features */}
                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {service.details.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-bold text-white mb-3">Expected Benefits</h4>
                            <ul className="space-y-2">
                              {service.details.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <div className="pt-6 border-t border-white/10">
                            <a
                              href="/contact"
                              className="w-full bg-teal-400 px-6 py-3 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full text-center block cursor-pointer"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl shadow-teal-400/25 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Select a Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Click on any service card to view detailed features, benefits, and implementation details.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-3xl p-6 sm:p-8 border border-teal-400/30 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Recover Your Accounts?
              </h3>
              <p className="text-sm sm:text-lg text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto">
                Transform your suspended assets with our comprehensive account reinstatement solutions. 
                Experience the difference that professional recovery makes.
              </p>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountReinstatementServices;