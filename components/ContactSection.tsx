"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// --- Modern 3D Icons ---
const Globe3DIcon = () => (
  <div className="relative w-12 h-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <defs>
        <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
          <stop offset="60%" stopColor="#0d9488" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#134e4a" stopOpacity="0.7"/>
        </radialGradient>
        <linearGradient id="globeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main globe sphere with 3D effect */}
      <circle cx="24" cy="24" r="18" fill="url(#globeGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#glow)"/>
      
      {/* 3D highlight for depth */}
      <ellipse cx="20" cy="20" rx="6" ry="10" fill="url(#globeHighlight)" opacity="0.6"/>
      
      {/* Outer rings like Saturn - outside the globe */}
      <ellipse cx="24" cy="24" rx="22" ry="3" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.4"/>
      <ellipse cx="24" cy="24" rx="25" ry="2" fill="none" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3"/>
      <ellipse cx="24" cy="24" rx="28" ry="1.5" fill="none" stroke="#14b8a6" strokeWidth="0.6" opacity="0.2"/>
      
      {/* Additional outer rings for depth */}
      <ellipse cx="24" cy="24" rx="20" ry="4" fill="none" stroke="#14b8a6" strokeWidth="0.8" opacity="0.35"/>
      <ellipse cx="24" cy="24" rx="26" ry="2.5" fill="none" stroke="#14b8a6" strokeWidth="0.7" opacity="0.25"/>
      
      {/* Subtle connection points */}
      <circle cx="10" cy="18" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="38" cy="18" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="10" cy="30" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="38" cy="30" r="1" fill="#14b8a6" opacity="0.6"/>
    </svg>
  </div>
);

const Users3DIcon = () => (
  <div className="relative w-12 h-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <defs>
        <radialGradient id="usersGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
          <stop offset="60%" stopColor="#0d9488" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#134e4a" stopOpacity="0.7"/>
        </radialGradient>
        <linearGradient id="usersHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="usersGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Leadership team - 3 people */}
      <circle cx="16" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="16" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="14" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      <circle cx="24" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="24" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="22" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      <circle cx="32" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="32" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="30" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      {/* Leadership crown above center person */}
      <path d="M22 8 L24 6 L26 8 L25 10 L27 12 L24 10 L21 12 L23 10 Z" fill="#14b8a6" opacity="0.9"/>
      <circle cx="24" cy="10" r="1" fill="#ffffff" opacity="0.8"/>
      
      {/* Connection network lines */}
      <path d="M20 18 Q24 14 28 18" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M20 18 Q24 22 28 18" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.4"/>
      
      {/* Global reach indicators */}
      <circle cx="8" cy="12" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="40" cy="12" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="8" cy="36" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="40" cy="36" r="1.5" fill="#14b8a6" opacity="0.6"/>
      
      {/* Connection lines to global points */}
      <path d="M12 14 Q16 12 20 16" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M28 16 Q32 12 36 14" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M12 34 Q16 32 20 28" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M28 28 Q32 32 36 34" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
    </svg>
  </div>
);

// --- Global Network Earth Component ---
const GlobalNetworkEarth = () => {
  // Global office locations with coordinates
  const offices = [
    { name: "USA", x: 25, y: 35, flag: "🇺🇸", size: "lg" },
    { name: "UK", x: 50, y: 25, flag: "🇬🇧", size: "md" },
    { name: "Canada", x: 20, y: 30, flag: "🇨🇦", size: "md" },
    { name: "Australia", x: 75, y: 65, flag: "🇦🇺", size: "md" },
    { name: "UAE", x: 55, y: 45, flag: "🇦🇪", size: "sm" },
    { name: "Pakistan", x: 60, y: 40, flag: "🇵🇰", size: "lg" }
  ];

  return (
  <div className="absolute top-12 right-0 w-64 h-64 lg:w-96 lg:h-96 -z-1">
    <div className="relative w-full h-full animate-spin-slow">
        {/* Earth Globe with 3D Effect */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            {/* Earth gradient */}
            <radialGradient id="earthGradient" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
              <stop offset="40%" stopColor="#0d9488" stopOpacity="0.6"/>
              <stop offset="70%" stopColor="#134e4a" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3"/>
          </radialGradient>
            
            {/* Earth highlight */}
            <linearGradient id="earthHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
            </linearGradient>
            
            {/* Glow effect */}
            <filter id="earthGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Animated gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#134e4a" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
          
          {/* Main Earth sphere with rotation */}
          <circle cx="50" cy="50" r="45" fill="url(#earthGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#earthGlow)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Earth highlight for 3D effect */}
          <ellipse cx="40" cy="40" rx="15" ry="20" fill="url(#earthHighlight)" opacity="0.4"/>
          
          {/* Continental outlines with animation */}
          <path d="M30 45 Q35 40 40 45 Q45 50 50 45 Q55 40 60 45 Q65 50 70 45" 
                stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M25 55 Q30 50 35 55 Q40 60 45 55 Q50 50 55 55 Q60 60 65 55 Q70 50 75 55" 
                stroke="#14b8a6" strokeWidth="0.6" fill="none" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
          </path>
          
          {/* Global network connections with animation */}
          {offices.map((office, index) => (
            <g key={office.name}>
              {/* Connection lines from center to offices */}
              <line x1="50" y1="50" x2={office.x} y2={office.y} 
                    stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4" 
                    strokeDasharray="2 2">
                <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin={`${index * 0.5}s`}/>
              </line>
              
              {/* Office location dots with pulsing animation */}
              <circle cx={office.x} cy={office.y} r={office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5} 
                      fill="#14b8a6" opacity="0.8">
                <animate attributeName="r" values={`${office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5};${office.size === 'lg' ? 3.5 : office.size === 'md' ? 3 : 2.5};${office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5}`} 
                         dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
              </circle>
            </g>
          ))}
          
          {/* Orbital rings around Earth with rotation */}
          <ellipse cx="50" cy="50" rx="50" ry="8" fill="none" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="15s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="50" cy="50" rx="52" ry="6" fill="none" stroke="#14b8a6" strokeWidth="0.3" opacity="0.15">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="50" cy="50" rx="54" ry="4" fill="none" stroke="#14b8a6" strokeWidth="0.2" opacity="0.1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </ellipse>
      </svg>
      
        {/* Floating network particles with enhanced animation */}
      <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-60">
            <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute"></div>
          </div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}>
            <div className="w-full h-full bg-teal-300 rounded-full animate-ping absolute" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}>
            <div className="w-full h-full bg-teal-500 rounded-full animate-ping absolute" style={{animationDelay: '2s'}}></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}>
            <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
    </div>
  </div>
);
};

// --- Reusable Info Block Component ---
interface InfoBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-6 group">
    <div className="text-teal-400 mt-1 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-teal-400/50">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-teal-400 text-transparent bg-clip-text group-hover:from-teal-300 group-hover:to-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mt-2 max-w-sm group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      <a 
        href="/about"
        className="inline-flex items-center justify-center bg-teal-400 text-black font-bold py-3 px-8 rounded-full mt-6 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1"
      >
        Learn more
      </a>
    </div>
  </div>
);

// --- Reusable Form Field Components ---
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: 'textarea';
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, as, required = true, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-1">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {as === 'textarea' ? (
      <textarea 
        {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
        rows={4} 
        className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" 
      />
    ) : (
      <input 
        {...props as React.InputHTMLAttributes<HTMLInputElement>} 
        className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" 
      />
    )}
  </div>
);

interface CheckboxProps {
  label: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id }) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className="h-4 w-4 text-teal-400 border-white/20 rounded focus:ring-teal-400 bg-white/10" />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-300">{label}</label>
  </div>
);

// --- Main Contact Section Component ---
const ContactSection: React.FC = () => {
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

  // Format phone number based on country
  const formatPhoneNumber = (value: string, countryCode: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Remove country code from digits if it's already there
    const codeDigits = countryCode.replace(/\D/g, '');
    let phoneDigits = digits;
    
    // Check if the input starts with the country code
    if (digits.startsWith(codeDigits)) {
      phoneDigits = digits.slice(codeDigits.length);
    }
    
    // Limit to reasonable length (15 digits max for international numbers)
    const maxLength = countryCode === '+1' ? 10 : 12;
    phoneDigits = phoneDigits.slice(0, maxLength);
    
    // Format based on country code
    if (countryCode === '+1') {
      // US/Canada: +1 (XXX) XXX-XXXX
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} (${phoneDigits}`;
      if (phoneDigits.length <= 6) return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3)}`;
      return `${countryCode} (${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6, 10)}`;
    } else if (countryCode === '+44') {
      // UK: +44 XXXX XXXXXX
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 4)} ${phoneDigits.slice(4, 10)}`;
    } else if (countryCode === '+92') {
      // Pakistan: +92 XXX XXXXXXX
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 3) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 10)}`;
    } else if (countryCode === '+91') {
      // India: +91 XXXXX XXXXX
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 5) return `${countryCode} ${phoneDigits}`;
      return `${countryCode} ${phoneDigits.slice(0, 5)} ${phoneDigits.slice(5, 10)}`;
    } else if (countryCode === '+971' || countryCode === '+966' || countryCode === '+974') {
      // UAE, Saudi, Qatar: +XXX X XXX XXXX
      if (phoneDigits.length === 0) return countryCode + ' ';
      if (phoneDigits.length <= 1) return `${countryCode} ${phoneDigits}`;
      if (phoneDigits.length <= 4) return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1)}`;
      return `${countryCode} ${phoneDigits.slice(0, 1)} ${phoneDigits.slice(1, 4)} ${phoneDigits.slice(4, 8)}`;
    } else {
      // Default formatting: +XXX XXXX XXX XXX
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
      // Clear all numbers except country code when country changes
      setPhoneNumber(selected.code + ' ');
    }
  };

  // Initialize phone number with default country code
  useEffect(() => {
    if (!phoneNumber) {
      setPhoneNumber(selectedCountry.code + ' ');
    }
  }, []);

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle service checkbox changes
  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  // Handle job inquiry change
  const handleJobInquiryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, jobInquiry: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !phoneNumber || !budget || formData.services.length === 0) {
      setErrorMessage('Please fill in all required fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate budget
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
      // Reset form
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

      // Reset success message after 5 seconds
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

  const servicesOptions = [
    "Amazon Automation", "Shopify Automation", "TikTok Shop Automation",
    "Walmart Automation", "PPC Management", "Virtual Assistant Services",
    "Account Reinstatement", "Content Creation", "Deep Keyword Research",
    "Product Hunting", "E-commerce Portfolio Management", "Strategic Capital Deployment"
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(0,0,0,0) 70%) z-0"></div>
      
      {/* Teal Glow from Right Bottom */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>
      
      {/* Teal Glow from Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Form */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl shadow-2xl shadow-teal-400/25">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400">Ready To Get Started</h2>
          <p className="text-gray-300 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
            Connect with us to explore how we can transform your capital into a systematically managed, cash-flow generative e-commerce enterprise.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-md">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-md">
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
              />
              <FormField 
                label="Last Name" 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <FormField 
              label="Email" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Phone number <span className="text-red-400">*</span></label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <select 
                  value={`${selectedCountry.code}|${selectedCountry.name}`}
                  onChange={handleCountryChange}
                  className="bg-white/10 border border-white/20 rounded-md sm:rounded-l-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors sm:min-w-[240px]"
                >
                  {countryCodes.map((country, index) => (
                    <option key={`${country.code}-${country.name}-${index}`} value={`${country.code}|${country.name}`} className="bg-black text-white">
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder={`${selectedCountry.code} Enter phone number`}
                  className="flex-1 bg-white/10 border border-white/20 sm:border-t sm:border-b sm:border-r sm:border-l-0 rounded-md sm:rounded-r-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">
                Budget <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => {
                  // Remove all non-digit characters, allow typing any digits
                  const digits = e.target.value.replace(/\D/g, '');
                  setBudget(digits);
                }}
                onBlur={(e) => {
                  // Format with $ sign after number when user leaves the field
                  const digits = e.target.value.replace(/\D/g, '');
                  if (digits && parseInt(digits) >= 2000) {
                    setBudget(digits + '$');
                  } else if (digits && parseInt(digits) < 2000) {
                    // Show error or clear if less than 2000
                    setBudget('');
                    alert('Budget must be at least $2,000');
                  }
                }}
                onFocus={(e) => {
                  // Remove $ sign when user focuses on the field for easier editing
                  const value = e.target.value.replace(/\D/g, '').replace('$', '');
                  setBudget(value);
                }}
                placeholder="Enter your budget (minimum 2000)"
                className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors"
              />
              </div>
            <FormField 
              label="Company name" 
              type="text" 
              required={false}
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <FormField 
              label="Company domain / URL" 
              type="text" 
              required={false}
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleInputChange}
            />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Services you're looking for <span className="text-red-400">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {servicesOptions.map((service) => (
                  <div key={service} className="flex items-center">
                    <input 
                      id={service.replace(/\s+/g, '-').toLowerCase()} 
                      type="checkbox" 
                      checked={formData.services.includes(service)}
                      onChange={(e) => handleServiceChange(service, e.target.checked)}
                      className="h-4 w-4 text-teal-400 border-white/20 rounded focus:ring-teal-400 bg-white/10" 
                    />
                    <label htmlFor={service.replace(/\s+/g, '-').toLowerCase()} className="ml-2 block text-sm text-gray-300">{service}</label>
                  </div>
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
              <label className="block text-sm font-semibold text-gray-300 mb-1">I am looking for a job at Shark Retail</label>
              <div className="relative">
                <select 
                  value={formData.jobInquiry}
                  onChange={handleJobInquiryChange}
                  className="w-full appearance-none bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors"
                >
                  <option className="bg-black text-white">Please Select</option>
                  <option className="bg-black text-white">Yes</option>
                  <option className="bg-black text-white">No</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* reCAPTCHA Placeholder */}
            <div className="bg-white/5 border border-white/20 rounded p-3 flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between">
                <div className="flex items-center">
                    <div className="w-7 h-7 bg-teal-400 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="ml-3 text-xs text-gray-400">protected by reCAPTCHA</span>
                </div>
                 <div className="text-xs text-gray-500">Privacy - Terms</div>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-teal-400 text-black font-bold py-3 sm:py-4 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="relative pt-8 sm:pt-12 lg:pt-16">
            <GlobalNetworkEarth />
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                <InfoBlock 
                    icon={<Globe3DIcon />}
                    title="Global Presence"
                    description="We're across 5 continents, explore our office nearest to you."
                />
                <InfoBlock 
                    icon={<Users3DIcon />}
                    title="Global Leaders"
                    description="Our capability and competencies are backed by diverse Global leadership."
                />
            </div>
        </div>
      </div>
       {/* Floating Side Button */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25">
        Let&apos;s Talk Business
      </a>
    </section>
  );
};

export default ContactSection;
