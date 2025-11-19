"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: 'textarea';
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, as, required = true, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
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
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, onChange }) => (
  <div className="flex items-center">
    <input 
      type="checkbox" 
      id={id} 
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
    />
    <label htmlFor={id} className="ml-2 text-sm text-gray-700">{label}</label>
  </div>
);

const ContentCreationCTA: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [budget, setBudget] = useState('');
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesOptions = [
    "Content Strategy Development",
    "Visual Content Creation", 
    "Copywriting Services", 
    "Video Production",
    "Social Media Content", 
    "Email Marketing Content", 
    "Website Content",
    "Product Descriptions", 
    "Brand Voice Development",
    "Other Content Services"
  ];

  // Format phone number based on country
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
    } else if (countryCode === '+44') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 10)}`;
    } else if (countryCode === '+92') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 10)}`;
    } else if (countryCode === '+91') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 5) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 5)} ${phoneDigits.slice(5, 10)}`;
    } else if (countryCode === '+971' || countryCode === '+966' || countryCode === '+974') {
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 1) return `${countryCode} ${phoneDigits}`;
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1)}`;
      return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1, 4)} ${phoneDigits.slice(4, 8)}`;
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

  const countryCodes = [
    { code: '+213', name: 'Algeria' },
    { code: '+54', name: 'Argentina' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+32', name: 'Belgium' },
    { code: '+591', name: 'Bolivia' },
    { code: '+55', name: 'Brazil' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+57', name: 'Colombia' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+45', name: 'Denmark' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+358', name: 'Finland' },
    { code: '+679', name: 'Fiji' },
    { code: '+33', name: 'France' },
    { code: '+689', name: 'French Polynesia' },
    { code: '+233', name: 'Ghana' },
    { code: '+49', name: 'Germany' },
    { code: '+30', name: 'Greece' },
    { code: '+502', name: 'Guatemala' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+504', name: 'Honduras' },
    { code: '+36', name: 'Hungary' },
    { code: '+91', name: 'India' },
    { code: '+62', name: 'Indonesia' },
    { code: '+353', name: 'Ireland' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
    { code: '+81', name: 'Japan' },
    { code: '+962', name: 'Jordan' },
    { code: '+254', name: 'Kenya' },
    { code: '+82', name: 'South Korea' },
    { code: '+965', name: 'Kuwait' },
    { code: '+961', name: 'Lebanon' },
    { code: '+218', name: 'Libya' },
    { code: '+60', name: 'Malaysia' },
    { code: '+853', name: 'Macau' },
    { code: '+52', name: 'Mexico' },
    { code: '+212', name: 'Morocco' },
    { code: '+95', name: 'Myanmar' },
    { code: '+977', name: 'Nepal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+64', name: 'New Zealand' },
    { code: '+687', name: 'New Caledonia' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+234', name: 'Nigeria' },
    { code: '+47', name: 'Norway' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan (پاکستان)' },
    { code: '+507', name: 'Panama' },
    { code: '+595', name: 'Paraguay' },
    { code: '+51', name: 'Peru' },
    { code: '+63', name: 'Philippines' },
    { code: '+48', name: 'Poland' },
    { code: '+351', name: 'Portugal' },
    { code: '+974', name: 'Qatar' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia / Kazakhstan' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+221', name: 'Senegal' },
    { code: '+65', name: 'Singapore' },
    { code: '+27', name: 'South Africa' },
    { code: '+34', name: 'Spain' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+886', name: 'Taiwan' },
    { code: '+255', name: 'Tanzania' },
    { code: '+66', name: 'Thailand' },
    { code: '+216', name: 'Tunisia' },
    { code: '+90', name: 'Turkey' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' },
    { code: '+256', name: 'Uganda' },
    { code: '+598', name: 'Uruguay' },
    { code: '+58', name: 'Venezuela' },
    { code: '+84', name: 'Vietnam' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' },
  ].sort((a, b) => a.name.localeCompare(b.name));

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

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setBudget(value);
  };

  const handleBudgetBlur = () => {
    const budgetDigits = budget.replace(/\D/g, '');
    if (budgetDigits && parseInt(budgetDigits) >= 2000) {
      setBudget(budgetDigits + '$');
    } else if (budgetDigits) {
      alert('Budget must be at least $2,000');
      setBudget('');
    }
  };

  const handleBudgetFocus = () => {
    setBudget(budget.replace('$', ''));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.firstName || !formData.lastName || !formData.email || !phoneNumber || !budget || formData.services.length === 0) {
      setErrorMessage('Please fill in all required fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const budgetDigits = budget.replace(/\D/g, '');
    if (!budgetDigits || parseInt(budgetDigits) < 2000) {
      setErrorMessage('Budget must be at least $2,000');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

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
        setSubmitStatus('idle');
      }, 5000);
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
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-teal-400/20 to-transparent"></div>
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
        <div className="bg-gray-50 border border-gray-200 backdrop-blur-md text-gray-900 p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl shadow-teal-400/25">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-teal-600">Ready To Get Started</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 mb-6 sm:mb-8">
            Connect with us to explore how we can deliver exceptional content creation solutions for your business.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                  className="bg-gray-50 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  {countryCodes.map((country, index) => (
                    <option key={`${country.code}-${country.name}-${index}`} value={`${country.code}|${country.name}`} className="bg-white text-gray-900">
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input 
                  type="text" 
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full bg-gray-50 border border-gray-300 sm:border-t sm:border-b sm:border-r p-3 text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors rounded-md sm:rounded-r-md sm:rounded-l-none" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Budget <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={budget}
                onChange={handleBudgetChange}
                onBlur={handleBudgetBlur}
                onFocus={handleBudgetFocus}
                placeholder="Enter your budget (minimum $2,000)"
                className="w-full bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
            <FormField 
              label="Company name" 
              type="text" 
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required={false}
            />
            <FormField 
              label="Company domain / URL" 
              type="text" 
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleInputChange}
              required={false}
            />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Services you&apos;re looking for <span className="text-red-500">*</span></label>
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
              required
            />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">I am looking for a job at Shark Retail</label>
              <div className="relative">
                <select 
                  value={formData.jobInquiry}
                  onChange={handleJobInquiryChange}
                  className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option className="bg-white text-gray-900">Please Select</option>
                  <option className="bg-white text-gray-900">Yes</option>
                  <option className="bg-white text-gray-900">No</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                Form submitted successfully! We&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                {errorMessage}
              </div>
            )}

            <div className="bg-gray-100 border border-gray-300 rounded p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center">
                    <div className="w-7 h-7 bg-teal-500 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="ml-3 text-xs text-gray-600">protected by reCAPTCHA</span>
                </div>
                 <div className="text-xs text-gray-500">Privacy - Terms</div>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-teal-400 text-black font-bold py-3 sm:py-4 rounded-md hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="relative pt-16">
          <div className="space-y-16">
            <div className="flex items-start gap-6 group">
              <div className="text-teal-600 mt-1 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-teal-400/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 text-transparent bg-clip-text group-hover:from-teal-600 group-hover:to-gray-900 transition-all duration-300">
                  Global Presence
                </h3>
                <p className="text-gray-600 mt-2 max-w-sm group-hover:text-gray-700 transition-colors duration-300">We're across 5 continents, explore our office nearest to you.</p>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center bg-teal-400 text-black font-bold py-3 px-8 rounded-full mt-6 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1 cursor-pointer"
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
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 text-transparent bg-clip-text group-hover:from-teal-600 group-hover:to-gray-900 transition-all duration-300">
                  Global Leaders
                </h3>
                <p className="text-gray-600 mt-2 max-w-sm group-hover:text-gray-700 transition-colors duration-300">Our capability and competencies are backed by diverse Global leadership.</p>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center bg-teal-400 text-black font-bold py-3 px-8 rounded-full mt-6 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1 cursor-pointer"
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

export default ContentCreationCTA;
