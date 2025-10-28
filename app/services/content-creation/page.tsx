import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentCreationHero from '@/components/ContentCreationHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import ContentCreationMainContent from '@/components/ContentCreationMainContent';
import ContentCreationServices from '@/components/ContentCreationServices';
import ContentCreationProof from '@/components/ContentCreationProof';
import ContentCreationTestimonials from '@/components/ContentCreationTestimonials';
import ContentCreationCTA from '@/components/ContentCreationCTA';

const ContentCreationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <ContentCreationHero />
        <CompaniesTrustUs />
        <ContentCreationMainContent />
        <ContentCreationServices />
        <ContentCreationProof />
        <ContentCreationTestimonials />
        <ContentCreationCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ContentCreationPage;