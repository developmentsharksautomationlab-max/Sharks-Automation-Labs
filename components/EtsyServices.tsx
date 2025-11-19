"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

// --- Custom SVG Icon Components for Etsy services ---
const InventoryIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const FulfillmentIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Chain Link Connector Component ---
const ChainLinkConnector = ({ isLast = false, isVisible = false }: { isLast?: boolean; isVisible?: boolean }) => (
  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 transition-all duration-1500 ease-in-out ${
    isLast ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-30'
  }`} style={{ left: 'calc(100% + 1rem)', zIndex: 5 }}>
    <Link2 className="w-8 h-8 text-teal-400 transition-all duration-500 ease-in-out group-hover:text-teal-300 group-hover:drop-shadow-lg" strokeWidth={3} />
  </div>
);

// --- Data for the Etsy services steps ---
const servicesData = [
  {
    number: "01",
    stage: "Shop Setup",
    title: "Systematic Shop Optimization",
    description: "Our proprietary algorithms ensure optimal shop structure and listing quality while maximizing capital efficiency. We deploy predictive analytics to maintain perfect shop performance across all product categories.",
    icon: <InventoryIcon />,
  },
  {
    number: "02",
    stage: "Fulfillment",
    title: "Institutional-Grade Fulfillment Operations",
    description: "We guarantee seamless order processing and fulfillment through our network of strategic partnerships. Our systematic approach ensures consistent delivery performance and customer satisfaction at scale.",
    icon: <FulfillmentIcon />,
  },
];

// --- Etsy Services Component ---
const EtsyServices: React.FC = () => {
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
              }, i * 800); // 800ms delay between each card for smoother flow
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Proprietary Systems for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Market Domination</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400">
            From Automation to Excellence
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8">
            {servicesData.map((service, index) => (
            <div key={index} className={`relative group transition-all duration-1500 ease-in-out ${
              visibleCards.includes(index) 
                ? 'opacity-100 blur-0' 
                : 'opacity-60 blur-lg'
            }`}>
              {/* Timeline Node (hidden on small) */}
              <div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <div className="absolute top-0 left-8 lg:left-auto lg:top-auto w-0.5 h-full lg:w-auto lg:h-0.5"></div>
                <div className="absolute top-0 -left-1.5 lg:left-auto lg:top-auto transform-none lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-teal-400/50 group-hover:border-teal-400 transition-colors duration-300">
                      <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_theme(colors.teal.400)]"></div>
                  </div>
                </div>
              </div>

              {/* Right Chain Link Connector */}
              <ChainLinkConnector 
                isLast={index === servicesData.length - 1} 
                isVisible={visibleCards.includes(index)}
              />

              {/* Content Card */}
              <div className="pl-0 lg:pl-0 lg:pt-20 text-center lg:text-left max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-teal-400/25 transition-all duration-500 ease-in-out h-full flex flex-col">
                      {/* Card Number Label */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-teal-400 text-white font-bold rounded-full flex items-center justify-center text-sm z-10">
                          {index + 1}
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                          {service.icon}
                          <span className="text-sm font-bold uppercase tracking-widest text-teal-400">{service.stage}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.description}</p>
                  </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtsyServices;

