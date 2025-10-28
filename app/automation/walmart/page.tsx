import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WalmartHero from '@/components/WalmartHero';
import WalmartMainContent from '@/components/WalmartMainContent';
import WalmartServices from '@/components/WalmartServices';
import WalmartProof from '@/components/WalmartProof';
import WalmartTestimonials from '@/components/WalmartTestimonials';
import WalmartCTA from '@/components/WalmartCTA';

const WalmartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WalmartHero />
        <WalmartMainContent />
        <WalmartServices />
        <WalmartProof />
        <WalmartTestimonials />
        <WalmartCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WalmartPage;