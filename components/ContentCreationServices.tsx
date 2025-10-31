"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PlexusBackgroundWhite from '@/components/PlexusBackgroundWhite';

// --- Content Creation Services Component ---
const ContentCreationServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Content Strategy That Works",
      description: "The Shark Retail delivers complete content strategy designed for real results. With strong industry insight and a focus on your growth, we help brands succeed in today's competitive digital marketplace.",
      details: {
        features: [
          "Advanced content planning and calendar management",
          "Brand voice development and consistency",
          "Content performance analysis and optimization",
          "Multi-platform content distribution",
          "SEO-optimized content creation",
          "Content ROI tracking and reporting"
        ],
        benefits: [
          "300% increase in content engagement",
          "50% reduction in content production costs",
          "24/7 automated content workflows",
          "Scalable content framework"
        ]
      }
    },
    {
      id: 2,
      title: "Visual Content Excellence",
      description: "Professional visual content creation that builds brand recognition and drives conversion through compelling imagery, videos, and design assets.",
      details: {
        features: [
          "High-converting visual asset creation",
          "Brand-consistent design systems",
          "Video production and editing",
          "Photography and image optimization",
          "Social media visual content",
          "E-commerce product imagery"
        ],
        benefits: [
          "95% brand consistency rate",
          "60% faster visual production",
          "24/7 creative asset availability",
          "Reduced design costs"
        ]
      }
    },
    {
      id: 3,
      title: "Copywriting Solutions",
      description: "Advanced copywriting and messaging capabilities that transform brand stories into persuasive, conversion-focused content across all channels.",
      details: {
        features: [
          "Conversion-optimized copywriting",
          "SEO-enhanced content creation",
          "Brand voice development",
          "Email marketing copy",
          "Social media content",
          "Product descriptions and listings"
        ],
        benefits: [
          "Real-time copy optimization",
          "Automated content generation",
          "Enhanced brand messaging",
          "Improved conversion rates"
        ]
      }
    },
    {
      id: 4,
      title: "Content Production Automation",
      description: "Intelligent content production workflows that eliminate bottlenecks and accelerate your content marketing operations exponentially.",
      details: {
        features: [
          "Automated content workflows",
          "Content template systems",
          "Batch content production",
          "Quality control automation",
          "Content approval processes",
          "Performance monitoring systems"
        ],
        benefits: [
          "50% efficiency improvement",
          "Significant cost reduction",
          "Faster time-to-market",
          "Scalable production framework"
        ]
      }
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-black to-teal-400/5"></div>
      
      {/* Floating Side Button */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
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
              Content Creation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive content creation services are designed to enhance your brand presence, 
              drive engagement, and accelerate your content marketing success.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </motion.div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Side: Timeline */}
            <div className="relative" ref={timelineRef}>
              {/* Animated Timeline Line */}
              <motion.div
                className="hidden lg:block absolute left-8 top-0 w-0.5 bg-teal-400/30"
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
                      className={`hidden lg:block absolute left-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
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
                      className={`pl-0 lg:ml-16 max-w-md mx-auto lg:max-w-none lg:mx-0 bg-white/5 border backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl shadow-2xl h-full flex flex-col relative group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
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
                Ready to Transform Your Content Strategy?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto">
                Transform your brand with our comprehensive content creation solutions. 
                Experience the difference that professional content makes.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreationServices;
