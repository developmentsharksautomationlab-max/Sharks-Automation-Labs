"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Custom SVG Icon Components ---
const SituationIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SystemIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Data for the points ---
const callProcessData = [
  {
    title: "Your Situation",
    description: "We'll discuss your current situation, goals, and challenges to understand if our system is the right fit for you.",
    icon: <SituationIcon />,
  },
  {
    title: "Our System",
    description: "We'll walk you through our proven done-for-you e-commerce system and how it can generate passive income.",
    icon: <SystemIcon />,
  },
];

// --- Main Call Process Component ---
const EcommerceAutomationCallProcess: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and start animation
            setVisibleCards([]);
            
            // Reveal cards one by one with delay
            for (let i = 0; i < 2; i++) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, i]);
              }, i * 600); // 600ms delay between each card
            }
          } else {
            // Reset when leaving the section
            setVisibleCards([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/videos/bg-pattern.mp4" type="video/mp4" />
      </video>
      
      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-400/ z-10"></div>

      {/* Floating Side Button (hide on small) */}
      <a href="/contact" className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </a>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            What Happens on the Call?
          </h2>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {callProcessData.map((point, index) => (
            <div key={index} className={`group relative transition-all duration-1000 ease-in-out ${
              visibleCards.includes(index) 
                ? 'opacity-100 blur-0 translate-y-0' 
                : 'opacity-60 blur-lg translate-y-8'
            }`}>
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-300 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-4 md:mb-6">
                  {point.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center md:text-left whitespace-nowrap md:whitespace-normal overflow-hidden text-ellipsis" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>{point.title}</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left mb-6">{point.description}</p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/50"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceAutomationCallProcess;
