"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import PlexusBackgroundWhite from './PlexusBackgroundWhite';
import { useRouter } from 'next/navigation';

// Form Field Component
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
      <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} rows={4} className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors" />
    ) : (
      <input {...props as React.InputHTMLAttributes<HTMLInputElement>} className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors" />
    )}
  </div>
);

// Checkbox Component
interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, onChange }) => (
  <div className="flex items-center">
    <input 
      id={id} 
      type="checkbox" 
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 text-teal-400 border-gray-300 rounded focus:ring-teal-400 bg-gray-50" 
    />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-700">{label}</label>
  </div>
);

const EcommerceAutomationAbout: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyUrl: '',
    projectDetails: '',
    jobInquiry: 'Please Select',
    services: [] as string[]
  });
  const [phoneNumber, setPhoneNumber] = useState('+1 ');
  const [budget, setBudget] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+92', name: 'Pakistan (پاکستان)' },
    { code: '+91', name: 'India' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+61', name: 'Australia' },
    { code: '+86', name: 'China' },
    { code: '+81', name: 'Japan' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+39', name: 'Italy' },
    { code: '+34', name: 'Spain' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+41', name: 'Switzerland' },
    { code: '+65', name: 'Singapore' },
    { code: '+60', name: 'Malaysia' },
    { code: '+66', name: 'Thailand' },
    { code: '+84', name: 'Vietnam' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const servicesOptions = [
    "Amazon Automation", "Shopify Automation", "TikTok Shop Automation",
    "Walmart Automation", "PPC Management", "Virtual Assistant Services",
    "Account Reinstatement", "Content Creation", "Deep Keyword Research",
    "Product Hunting", "E-commerce Portfolio Management", "Strategic Capital Deployment"
  ];

  const formatPhoneNumber = (value: string, countryCode: string) => {
    const digits = value.replace(/\D/g, '');
    const codeDigits = countryCode.replace(/\D/g, '');
    let phoneDigits = digits;
    
    if (digits.startsWith(codeDigits)) {
      phoneDigits = digits.slice(codeDigits.length);
    }
    
    const maxLength = countryCode === '+1' ? 10 : 12;
    phoneDigits = phoneDigits.slice(0, maxLength);
    
    if (countryCode === '+1') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} (${phoneDigits}`;
      if (phoneDigits.length <= 6) return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3)}`;
      return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6, 10)}`;
    } else {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits}`;
      if (phoneDigits.length <= 7) return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4)}`;
      return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 7)} ${phoneDigits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value, selectedCountry.code);
    setPhoneNumber(formatted);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [code, name] = e.target.value.split('|');
    const selected = countryCodes.find(c => c.code === code && c.name === name);
    if (selected) {
      setSelectedCountry(selected);
      setPhoneNumber(selected.code + ' ');
    }
  };

  useEffect(() => {
    if (!phoneNumber) {
      setPhoneNumber(selectedCountry.code + ' ');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleJobInquiryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, jobInquiry: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: phoneNumber,
          budget: budget,
          companyName: formData.companyName || '',
          companyUrl: formData.companyUrl || '',
          services: formData.services,
          projectDetails: formData.projectDetails || '',
          jobInquiry: formData.jobInquiry !== 'Please Select' ? formData.jobInquiry : ''
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyUrl: '',
        projectDetails: '',
        jobInquiry: 'Please Select',
        services: []
      });
      setPhoneNumber(selectedCountry.code + ' ');
      setBudget('');

      setTimeout(() => {
        router.push('/thank-you');
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PlexusBackgroundWhite />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
              About Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              We've helped investors and entrepreneurs just like you launch profitable hands-off e-commerce stores. Our proven system handles everything from product sourcing to fulfillment, so you can earn truly passive income without the guesswork.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-black hover:text-white rounded-full"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-white border-2 border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                Ready To Get Started
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Connect with us to explore how we can transform your capital into a systematically managed, cash-flow generative e-commerce enterprise.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-500 text-green-700 p-4 rounded-md">
                    Thank you! Your message has been sent successfully. Redirecting...
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-700 p-4 rounded-md">
                    {errorMessage || 'An error occurred. Please try again.'}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField 
                    label="First Name" 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormField 
                    label="Last Name" 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <FormField 
                  label="Email" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <select 
                      value={`${selectedCountry.code}|${selectedCountry.name}`}
                      onChange={handleCountryChange}
                      className="bg-gray-50 border border-gray-300 rounded-md sm:rounded-l-md p-3 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors sm:min-w-[220px]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={`${country.code}|${country.name}`} className="bg-white text-gray-900">
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <input 
                      type="text" 
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="w-full bg-gray-50 border border-gray-300 sm:border-t sm:border-b sm:border-r sm:border-l-0 rounded-md sm:rounded-r-md p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Budget <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                      required
                    >
                      <option value="" className="bg-white text-gray-900">Your Budget</option>
                      <option value="Under $10,000" className="bg-white text-gray-900">Under $10,000</option>
                      <option value="$10,000 - $50,000" className="bg-white text-gray-900">$10,000 - $50,000</option>
                      <option value="$50,000 - $100,000" className="bg-white text-gray-900">$50,000 - $100,000</option>
                      <option value="$100,000 - $500,000" className="bg-white text-gray-900">$100,000 - $500,000</option>
                      <option value="Over $500,000" className="bg-white text-gray-900">Over $500,000</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <FormField 
                  label="Company name" 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <FormField 
                  label="Company domain / URL" 
                  type="text" 
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleInputChange}
                />
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Services you're looking for <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {servicesOptions.map((service) => (
                      <Checkbox 
                        key={service} 
                        label={service} 
                        id={service.replace(/\s+/g, '-').toLowerCase()}
                        checked={formData.services.includes(service)}
                        onChange={(checked) => handleServiceChange(service, checked)}
                      />
                    ))}
                  </div>
                </div>
                <FormField 
                  label="Project Details" 
                  as="textarea" 
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                />
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">I am looking for a job at The Shark Retail</label>
                  <div className="relative">
                    <select 
                      value={formData.jobInquiry}
                      onChange={handleJobInquiryChange}
                      className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                    >
                      <option value="Please Select" className="bg-white text-gray-900">Please Select</option>
                      <option value="Yes" className="bg-white text-gray-900">Yes</option>
                      <option value="No" className="bg-white text-gray-900">No</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-teal-400 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="ml-3 text-xs text-gray-500">protected by reCAPTCHA</span>
                  </div>
                  <div className="text-xs text-gray-500">Privacy - Terms</div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal-400 text-white font-bold py-3 sm:py-4 rounded-md hover:bg-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationAbout;
