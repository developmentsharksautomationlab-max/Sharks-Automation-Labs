"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Keyword Research Services (matches PPC structure) ---
const KeywordResearchServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const servicesData = [
    {
      id: 1,
      title: "Comprehensive Market Analysis",
      description: "Deep analysis of your market, competitors, and search landscape to identify the most profitable opportunities.",
      details: {
        features: [
          "Competitor keyword mapping",
          "Search volume and trend analysis",
          "SERP feature breakdown",
          "Seasonality and intent patterns",
          "Geographic opportunity analysis",
          "Opportunity scoring framework"
        ],
        benefits: [
          "Faster go-to-market planning",
          "Clarity on ranking potential",
          "Prioritized opportunity roadmap",
          "Reduced research overhead"
        ]
      }
    },
    {
      id: 2,
      title: "Long-tail Keyword Discovery",
      description: "Find low-competition, high-conversion intent keywords your competitors miss.",
      details: {
        features: [
          "Query expansion & variants",
          "Topic clustering",
          "Search intent qualification",
          "Difficulty & CPI scoring",
          "Content brief generation",
          "Internal linking suggestions"
        ],
        benefits: [
          "Faster rankings on new pages",
          "Higher conversion from intent alignment",
          "Lower content production risk",
          "Compounding organic growth"
        ]
      }
    },
    {
      id: 3,
      title: "Competitor Intelligence Report",
      description: "Reverse-engineered keyword strategies from your top competitors with gap identification.",
      details: {
        features: [
          "Head vs long-tail mix",
          "Share of voice analysis",
          "Content gap identification",
          "Backlink-powered targets",
          "Velocity and freshness signals",
          "SERP layout impact"
        ],
        benefits: [
          "Actionable gap-first roadmap",
          "Efficient resource allocation",
          "Faster catch-up on core queries",
          "Reduced trial-and-error"
        ]
      }
    },
    {
      id: 4,
      title: "Keyword Strategy & Implementation",
      description: "Full funnel keyword strategy with content mapping and release sequencing.",
      details: {
        features: [
          "Cluster-to-URL mapping",
          "Topical authority plan",
          "Publishing cadence",
          "On-page optimization checklist",
          "Schema & internal links plan",
          "Measurement framework"
        ],
        benefits: [
          "Consistent ranking velocity",
          "Crawl and indexation efficiency",
          "Improved topical authority",
          "Predictable content ROI"
        ]
      }
    },
    {
      id: 5,
      title: "Technical SEO for Keywords",
      description: "Resolve technical blockers that limit keyword visibility and ranking potential.",
      details: {
        features: [
          "Indexation and crawl budget fixes",
          "Core Web Vitals alignment",
          "Duplicate & cannibalization cleanup",
          "Structured data implementation",
          "Sitemaps & robots tuning",
          "Log-file insights"
        ],
        benefits: [
          "Higher impression share",
          "Stabilized rankings",
          "Better crawl efficiency",
          "Reduced technical debt"
        ]
      }
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(0,0,0,0) 70%) z-0"></div>
      
      {/* Teal Glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>
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
              Build Authority with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Strategic Keyword Research</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We deliver systematic, data-backed keyword research programs that compound organic growth and reduce content risk.
            </p>
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
                      className={`ml-16 bg-white/5 border backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl h-full flex flex-col relative group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                        selectedService === service.id 
                          ? 'border-teal-400/50 shadow-lg shadow-teal-400/20' 
                          : 'border-white/10'
                      }`}
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    >
                      {/* Teal Glow Effect - Right Side */}
                      <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-400/10 rounded-2xl blur-3xl"></div>
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-400/15 rounded-2xl blur-2xl"></div>
                      <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all duration-500 p-2">
                        <svg className="w-7 h-7 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-teal-100 transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed flex-grow relative z-10 text-sm group-hover:text-gray-300 transition-colors duration-500">
                        {service.description}
                      </p>
                      
                      {/* Click Indicator */}
                      <div className="mt-4 flex items-center text-teal-400 text-sm font-semibold group-hover:text-teal-300 transition-colors duration-500">
                        <span>{selectedService === service.id ? 'Hide Details' : 'View Details'}</span>
                        <svg className={`w-4 h-4 ml-2 transition-transform duration-300 ${selectedService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-teal-400/50 p-3">
                            <svg className="w-9 h-9 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
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
                              className="w-full bg-teal-400 px-6 py-3 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full text-center block"
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
                  <div className="w-16 h-16 bg-teal-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Select a Service</h3>
                  <p className="text-gray-400">Click on any service card to view detailed information, features, and benefits.</p>
                </div>
              )}
            </div>
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
              Schedule Your Strategy Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchServices;
