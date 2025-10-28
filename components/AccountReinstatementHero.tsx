"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlexusBackground from '@/components/PlexusBackground';

// --- Account Reinstatement Hero Component ---
const AccountReinstatementHero: React.FC = () => {
  return (
    <section className="relative bg-black py-24 px-8 overflow-hidden min-h-screen flex items-center">
      <PlexusBackground />
      
      {/* Subtle Right-Side Teal Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-400/20 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="relative z-15 flex h-full items-center justify-start">
        <div className="text-left text-white p-8">
          <h1 className="mb-6 tracking-tight max-w-3xl" style={{ fontFamily: 'Poppins', fontSize: '70px', fontWeight: '700', lineHeight: '1.2' }}>
            Strategic Capital Deployment in<br />
            <span className="text-teal-400">Account</span> <span className="text-white">Reinstatement</span>
          </h1>
          <p className="mb-8 text-xl font-black lg:text-2xl max-w-3xl">
            While traditional markets fluctuate on sentiment, global e-commerce grows on fundamental demand. We identify and capitalize on this permanent shift. Our firm provides a seamless, institutional-grade gateway into this $6 trillion ecosystem. We handle all operations—from account recovery to compliance management—transforming your suspended assets into a actively managed, cash-flow generative enterprise.
          </p>
          <div className="flex justify-start">
            <a
              href="/contact"
              className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full cursor-pointer"
            >
              Schedule Your Capital Intro Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountReinstatementHero;