'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../components/Header';

// Dynamically import OurStoryHero with SSR disabled to prevent React root conflicts
const OurStoryHero = dynamic(() => import('../../components/OurStoryHero'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#052126] text-[#f2f4f4] flex items-center justify-center">
      <div className="text-[#35c4dd] text-xl">Loading...</div>
    </div>
  ),
});

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <OurStoryHero />
    </div>
  );
};

export default AboutPage;
