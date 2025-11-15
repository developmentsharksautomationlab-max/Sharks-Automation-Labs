"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Link2, Target, Lightbulb, Shield } from 'lucide-react';

// --- Custom SVG Icon Components ---
const StrategyIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InsightsIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const RiskIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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

// --- Data for the timeline steps ---
const stepsData = [
  {
    number: "01",
    stage: "Strategy",
    title: "Personalized Strategy",
    description: "A tailored plan to achieve your e-commerce goals and maximize your passive income potential.",
    icon: <StrategyIcon />,
  },
  {
    number: "02",
    stage: "Insights",
    title: "Market Insights",
    description: "Access to exclusive market data and trends to identify profitable product niches.",
    icon: <InsightsIcon />,
  },
  {
    number: "03",
    stage: "Assessment",
    title: "Risk Assessment",
    description: "Understand potential risks and how our system mitigates them for a secure investment.",
    icon: <RiskIcon />,
  },
];

// --- Main Strategy Call Component ---
const EcommerceAutomationStrategyCall: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/sharksretailofficial/30min'
      });
    } else {
      // Fallback: open in new window if Calendly script not loaded
      window.open('https://calendly.com/sharksretailofficial/30min', '_blank');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and start animation
            setVisibleCards([]);
            
            // Reveal cards one by one with delay
            for (let i = 0; i < 3; i++) {
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
    <section ref={sectionRef} className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* Floating Side Button (hide on small) */}
      <button onClick={openCalendly} className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors cursor-pointer">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            What you'll get in the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">free strategy call?</span>
          </h2>
          <p className="text-xl text-gray-400">
            Unlock Your E-Commerce Potential
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-x-8">
            {stepsData.map((step, index) => (
              <div key={index} className={`relative group transition-all duration-1500 ease-in-out ${
                visibleCards.includes(index) 
                  ? 'opacity-100 blur-0' 
                  : 'opacity-60 blur-lg'
              }`}>
                {/* Timeline Node (hidden on small screens) */}
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
                  isLast={index === stepsData.length - 1} 
                  isVisible={visibleCards.includes(index)}
                />

                {/* Content Card */}
                <div className="pl-0 lg:pl-0 lg:pt-20 text-center lg:text-left max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-teal-400/25 transition-all duration-500 ease-in-out">
                    {/* Card Number Label */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-teal-400 text-white font-bold rounded-full flex items-center justify-center text-sm z-10">
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                      {step.icon}
                      <span className="text-sm font-bold uppercase tracking-widest text-teal-400">{step.stage}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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

export default EcommerceAutomationStrategyCall;
