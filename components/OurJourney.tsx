"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Our Journey Component ---
const OurJourney: React.FC = () => {
  return (
    <section className="relative bg-white py-24 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-l from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button */}
      <a href="/contact" className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Managing Millions to{' '}
              <span className="text-teal-600">Democratizing E-Commerce</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Story Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Most ideas start small, but we started with a <span className="font-semibold text-teal-600">monumental proof of concept</span>. 
                  Our co-founders, hailing from the world of investment and asset management, were tasked with a unique challenge: 
                  guiding Fortune 500 clients to invest in the burgeoning e-commerce ecosystem.
                </p>
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-teal-800">
                    The result? They spearheaded investments that generated a staggering{' '}
                    <span className="text-2xl font-bold">$200+ million in ROI</span>.
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  But we asked a bigger question: <span className="font-semibold text-gray-900">Why should this immense opportunity be limited to the corporate elite?</span>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  That was the birth of <span className="font-bold text-teal-600">Shark Automation Labs</span>. We decided to harness our expertise 
                  to make the trillion-dollar e-commerce industry accessible to everyone. Our mission is to empower individuals—just like you—to 
                  build a legacy, improve their quality of life, and attain the financial freedom to live on their own terms.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Visual Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Investment Growth Visualization */}
              <div className="relative bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-xl border border-teal-100">
                {/* Chart-like visualization */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Growth</h3>
                    <p className="text-gray-600">Fortune 500 E-Commerce Investments</p>
                  </div>
                  
                  {/* Animated bars representing growth */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Year 1</span>
                      <div className="flex-1 mx-4">
                        <div className="h-4 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "25%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-teal-400 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">$50M</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Year 2</span>
                      <div className="flex-1 mx-4">
                        <div className="h-4 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "50%" }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="h-full bg-teal-400 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">$100M</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Year 3</span>
                      <div className="flex-1 mx-4">
                        <div className="h-4 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="h-full bg-teal-400 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">$150M</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Current</span>
                      <div className="flex-1 mx-4">
                        <div className="h-4 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 1.1 }}
                            className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-teal-600">$200M+</span>
                    </div>
                  </div>
                  
                  {/* ROI Highlight */}
                  <div className="text-center mt-6 p-4 bg-teal-100 rounded-lg">
                    <p className="text-sm text-teal-800 font-semibold">
                      Total ROI Generated for Fortune 500 Clients
                    </p>
                    <p className="text-2xl font-bold text-teal-600 mt-1">$200+ Million</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
