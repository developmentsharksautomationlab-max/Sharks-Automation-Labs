"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- Reusable Form Field Components ---
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({ label, as, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    {as === 'textarea' ? (
      <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} rows={4} className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" />
    ) : (
      <input {...props as React.InputHTMLAttributes<HTMLInputElement>} className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" />
    )}
  </div>
);

interface CheckboxProps {
  label: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id }) => (
  <div className="flex items-center">
    <input type="checkbox" id={id} className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
    <label htmlFor={id} className="ml-2 text-sm text-gray-700">{label}</label>
  </div>
);

// --- Account Reinstatement CTA Component ---
const AccountReinstatementCTA: React.FC = () => {
  const servicesOptions = [
    "Amazon Account Recovery",
    "eBay Account Reinstatement", 
    "Shopify Account Recovery", 
    "Walmart Account Restoration",
    "Multi-Platform Recovery", 
    "Compliance Management", 
    "Policy Violation Resolution",
    "Emergency Recovery Services", 
    "Documentation Preparation",
    "Other Account Services"
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Top Right Teal Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <button className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start relative z-10">
        
        {/* Left Column: Form */}
        <div className="bg-gray-50 border border-gray-200 backdrop-blur-md text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-teal-400/25">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-teal-600">Ready To Get Started</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 mb-6 sm:mb-8">
            Connect with us to explore how we can deliver exceptional account reinstatement solutions for your business.
          </p>
          
          <form className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FormField label="First Name" type="text" />
              <FormField label="Last Name" type="text" />
            </div>
            <FormField label="Email" type="email" />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <select className="bg-gray-50 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  <option className="bg-white text-gray-900">United States</option>
                </select>
                <input type="text" defaultValue="+1" className="w-full bg-gray-50 border border-gray-300 sm:border-t sm:border-b sm:border-r p-3 text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors rounded-md sm:rounded-r-md sm:rounded-l-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Suspended Platform <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  <option className="bg-white text-gray-900">Select Suspended Platform</option>
                  <option className="bg-white text-gray-900">Amazon</option>
                  <option className="bg-white text-gray-900">eBay</option>
                  <option className="bg-white text-gray-900">Shopify</option>
                  <option className="bg-white text-gray-900">Walmart</option>
                  <option className="bg-white text-gray-900">Multiple Platforms</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <FormField label="Company name" type="text" />
            <FormField label="Company domain / URL" type="text" />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Region <span className="text-red-500">*</span></label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  <option className="bg-white text-gray-900">Please Select</option>
                  <option className="bg-white text-gray-900">North America</option>
                  <option className="bg-white text-gray-900">Europe</option>
                  <option className="bg-white text-gray-900">Asia Pacific</option>
                  <option className="bg-white text-gray-900">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Services you're looking for <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {servicesOptions.map((service) => (
                  <Checkbox key={service} label={service} id={service.replace(/\s+/g, '-').toLowerCase()} />
                ))}
              </div>
            </div>
            <FormField label="Account Details" as="textarea" />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">I am looking for a job at Shark Retail</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                  <option className="bg-white text-gray-900">Please Select</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
            {/* reCAPTCHA Placeholder */}
            <div className="bg-gray-100 border border-gray-300 rounded p-3 flex flex-wrap gap-3 items-center justify-between">
                <div className="flex items-center">
                    <div className="w-7 h-7 bg-teal-500 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="ml-3 text-xs text-gray-600">protected by reCAPTCHA</span>
                </div>
                 <div className="text-xs text-gray-500">Privacy - Terms</div>
            </div>
            <button type="submit" className="w-full bg-teal-400 text-black font-bold py-3 sm:py-4 rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 cursor-pointer">
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="relative pt-10 sm:pt-16">
          <div className="space-y-10 sm:space-y-16">
            <div className="flex items-start gap-6 group">
              <div className="text-teal-600 mt-1 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-teal-400/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 text-transparent bg-clip-text group-hover:from-teal-600 group-hover:to-gray-900 transition-all duration-300">
                  Global Presence
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-sm group-hover:text-gray-700 transition-colors duration-300">We're across 5 continents, explore our office nearest to you.</p>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center bg-teal-400 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full mt-5 sm:mt-6 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1 cursor-pointer"
                >
                  Learn more
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="text-teal-600 mt-1 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-teal-400/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 text-transparent bg-clip-text group-hover:from-teal-600 group-hover:to-gray-900 transition-all duration-300">
                  Global Leaders
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-sm group-hover:text-gray-700 transition-colors duration-300">Our capability and competencies are backed by diverse Global leadership.</p>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center bg-teal-400 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full mt-5 sm:mt-6 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1 cursor-pointer"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountReinstatementCTA;
