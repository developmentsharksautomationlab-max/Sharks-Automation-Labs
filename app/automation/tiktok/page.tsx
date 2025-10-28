import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TikTokHero from '@/components/TikTokHero';
import TikTokMainContent from '@/components/TikTokMainContent';
import TikTokServices from '@/components/TikTokServices';
import TikTokProof from '@/components/TikTokProof';
import TikTokTestimonials from '@/components/TikTokTestimonials';
import TikTokCTA from '@/components/TikTokCTA';

const TikTokPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TikTokHero />
        <TikTokMainContent />
        <TikTokServices />
        <TikTokProof />
        <TikTokTestimonials />
        <TikTokCTA />
      </main>
      <Footer />
    </div>
  );
};

export default TikTokPage;