"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import PlexusBackground from './PlexusBackground';

const EcommerceAutomationContact: React.FC = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            Contact
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to elevate your E-commerce success? The Shark Retail is here to support you every step. Whether you have questions, need guidance, or want to achieve amazing returns, we're ready to build something amazing together!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">General Inquiries</h3>
                  <a href="mailto:info@thesharkretail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                    info@thesharkretail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+18324807818" className="text-teal-400 hover:text-teal-300 transition-colors">
                    (832) 480-7818
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">
                    24225 Market Street Ste 100, Richmond, TX 77406, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-teal-400/30 backdrop-blur-md rounded-2xl p-8 hover:shadow-xl hover:shadow-teal-400/20 transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
              Let's Talk About Your E-commerce Business
            </h3>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white/90 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                  placeholder="(832) 480-7818"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors resize-none"
                  placeholder="Tell us about your e-commerce business..."
                ></textarea>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="strategy-call"
                    name="strategy-call"
                    className="mt-1 h-4 w-4 text-teal-400 border-white/20 rounded focus:ring-teal-400 bg-white/10"
                  />
                  <label htmlFor="strategy-call" className="ml-3 text-sm text-gray-300">
                    I understand that this is a free strategy call and not a sales pitch.
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    className="mt-1 h-4 w-4 text-teal-400 border-white/20 rounded focus:ring-teal-400 bg-white/10"
                  />
                  <label htmlFor="marketing" className="ml-3 text-sm text-gray-300">
                    I agree to receive marketing communications from The Shark Retail.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-400 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/50 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationContact;
