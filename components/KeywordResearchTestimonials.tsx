"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// --- Animated Success Metric Component ---
const SuccessMetric: React.FC<{
  value: string;
  label: string;
  delay?: number;
  icon?: React.ReactNode;
}> = ({ value, label, delay = 0, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/30 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-8 text-center hover:border-teal-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-400/25">
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center group-hover:bg-teal-400/30 transition-colors duration-300">
              {icon}
            </div>
          </div>
        )}
        <motion.div
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-3"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {value}
        </motion.div>
        <p className="text-gray-300 text-lg font-medium">{label}</p>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-teal-400/20 via-transparent to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

// --- Enhanced Testimonial Card Component ---
const TestimonialCard: React.FC<{
  name: string;
  role: string;
  company: string;
  date: string;
  content: string;
  metrics: { label: string; value: string }[];
  delay?: number;
  isActive?: boolean;
}> = ({ name, role, company, date, content, metrics, delay = 0, isActive = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`group relative transition-all duration-500 ${
        isActive ? 'opacity-100 blur-0 scale-100' : 'opacity-60 blur-sm scale-95'
      }`}
    >
      <div className={`bg-white/5 backdrop-blur-md border rounded-2xl p-8 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/25 relative overflow-hidden ${
        isActive ? 'border-teal-400/50 shadow-lg shadow-teal-400/20' : 'border-white/10'
      }`}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Quote decoration */}
        <div className="absolute top-6 right-6 opacity-10">
          <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-pulse"></div>
        )}

        <div className="relative z-10 space-y-6">
          {/* Content */}
          <p className="text-gray-300 leading-relaxed text-lg italic">
            "{content}"
          </p>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-teal-400">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Author Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white text-lg">{name}</h4>
              <p className="text-teal-400 font-semibold">{role}</p>
              <p className="text-gray-400 text-sm">{company}</p>
              <p className="text-gray-500 text-xs mt-1">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Floating Elements Component ---
const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-4 h-4 border border-teal-400/30 rotate-45"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20 w-3 h-3 bg-teal-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-1/4 w-5 h-5 border border-teal-400/20 rounded-full"
      />
    </div>
  );
};

// --- Auto-Sliding Carousel Component ---
const TestimonialCarousel: React.FC<{
  testimonials: any[];
}> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setProgress(0); // Reset progress
      }, 3000); // Auto-slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  useEffect(() => {
    if (!isHovered) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2; // Update every 100ms for smooth progress
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0); // Reset progress when manually navigating
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(20, 184, 166, 0.8), 0 0 50px rgba(20, 184, 166, 0.4);
          }
          100% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3);
          }
        }
      `}</style>

      {/* Mobile Carousel (one card per view) */}
      <div className="relative overflow-hidden py-6 md:hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={`m-${index}`} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...testimonial} isActive={true} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Carousel - Show 3 cards with center active */}
      <div className="relative overflow-hidden py-8 hidden md:block">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${currentIndex * 33.333}% + 50% - 16.666%))` }}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            return (
              <div key={`d-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 mb-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-br from-teal-400 to-teal-600 scale-130 border-2 border-teal-400/80 shadow-lg shadow-teal-400/60' 
                : 'bg-transparent border-2 border-white/20 hover:border-white/40 hover:scale-110 hover:shadow-lg hover:shadow-white/30'
            }`}
            style={{
              backdropFilter: 'blur(10px)',
              ...(index === currentIndex && {
                animation: 'pulse 2s infinite'
              })
            }}
          >
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white/90 scale-120' 
                : 'bg-white/60'
            }`} />
          </button>
        ))}
      </div>

      {/* Navigation Arrows (desktop only) */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// --- Keyword Research Testimonials Component ---
const KeywordResearchTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "SEO Strategy Director",
      company: "Digital Growth Partners",
      date: "Jan 15, 2025",
      content: "Shark Retail's keyword research methodology revolutionized our organic search strategy. Their data-driven approach identified high-value opportunities that increased our organic traffic by 300% in just 4 months. The systematic keyword discovery and competitive analysis frameworks are truly exceptional.",
      metrics: [
        { label: "Organic Traffic", value: "300%" },
        { label: "Time to Results", value: "4 Months" }
      ]
    },
    {
      name: "Michael Rodriguez",
      role: "Content Marketing Manager",
      company: "Strategic Content Solutions",
      date: "Dec 12, 2024",
      content: "The keyword research insights provided by Shark Retail transformed our content strategy completely. Their comprehensive analysis of search volumes, competition, and user intent helped us rank for 500+ high-value keywords. The ROI on their keyword research services achieved 100% ROI growth within six months.",
      metrics: [
        { label: "Keywords Ranked", value: "500+" },
        { label: "ROI Growth", value: "100%" }
      ]
    },
    {
      name: "Emily Thompson",
      role: "E-commerce SEO Lead",
      company: "Global Retail Ventures",
      date: "Nov 25, 2024",
      content: "Working with Shark Retail's keyword research team was a game-changer for our e-commerce platform. Their long-tail keyword discovery and local SEO optimization strategies increased our conversion rates by 180% and boosted our local search visibility by 250%. The systematic approach delivers measurable results.",
      metrics: [
        { label: "Conversion Rate", value: "180%" },
        { label: "Local Visibility", value: "250%" }
      ]
    }
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-teal-900/10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Side Button */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Success Stories from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
              Industry Leaders
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our partners have achieved extraordinary organic growth through systematic keyword research. 
            These data-driven results demonstrate the power of our proprietary research frameworks and strategic keyword optimization.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto mb-20">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default KeywordResearchTestimonials;