"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';

// --- Virtual Assistant Services Component ---
const VirtualAssistantServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Administrative Support That Works",
      description: "The Shark Retail delivers complete administrative support designed for real results. With strong industry insight and a focus on your growth, we help businesses succeed in today's fast-moving digital marketplace.",
      details: {
        features: [
          "Advanced calendar and schedule management",
          "Email correspondence and communication",
          "Document preparation and organization",
          "Data entry and database management",
          "Meeting coordination and logistics",
          "Travel planning and arrangements"
        ],
        benefits: [
          "300% increase in productivity",
          "50% reduction in administrative costs",
          "24/7 automated operations",
          "Scalable growth framework"
        ]
      }
    },
    {
      id: 2,
      title: "Customer Service Excellence",
      description: "Professional customer service management that builds brand loyalty and drives repeat business. Our systematic approach ensures every customer interaction adds value to your business.",
      details: {
        features: [
          "Multi-channel customer support",
          "Live chat and phone support",
          "Customer inquiry management",
          "Complaint resolution systems",
          "Customer feedback analysis",
          "Support ticket automation"
        ],
        benefits: [
          "95% customer satisfaction rate",
          "60% faster response times",
          "24/7 customer availability",
          "Reduced customer churn"
        ]
      }
    },
    {
      id: 3,
      title: "Data Management Solutions",
      description: "Advanced data processing and analysis capabilities that transform raw information into actionable business intelligence. Our systems ensure data accuracy and accessibility.",
      details: {
        features: [
          "Real-time data synchronization",
          "Automated report generation",
          "Secure data storage systems",
          "Data analysis and insights",
          "Database optimization",
          "Backup and recovery systems"
        ],
        benefits: [
          "Real-time data access",
          "Automated reporting",
          "Enhanced data security",
          "Improved decision making"
        ]
      }
    },
    {
      id: 4,
      title: "Operational Automation",
      description: "Intelligent workflow automation that eliminates manual processes and accelerates your business operations exponentially. Our systems work around the clock.",
      details: {
        features: [
          "Workflow automation design",
          "Process optimization",
          "Task scheduling and management",
          "Integration with existing systems",
          "Performance monitoring",
          "Continuous improvement protocols"
        ],
        benefits: [
          "50% efficiency improvement",
          "Significant error reduction",
          "Substantial cost savings",
          "Scalable automation framework"
        ]
      }
    }
  ];

  return (
    <section className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-black to-teal-400/5"></div>
      
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Virtual Assistance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive virtual assistance services are designed to streamline your operations, 
              enhance customer satisfaction, and drive sustainable business growth.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </motion.div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-teal-400/10 to-teal-500/10 rounded-3xl p-8 border border-teal-400/30 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Optimize Your Operations?
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Transform your business with our comprehensive virtual assistance solutions. 
                Experience the difference that professional support makes.
              </p>
              <a
                href="/contact"
                className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
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

export default VirtualAssistantServices;