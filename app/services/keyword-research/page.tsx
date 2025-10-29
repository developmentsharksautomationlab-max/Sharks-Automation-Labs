import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KeywordResearchHero from '@/components/KeywordResearchHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import KeywordResearchEdge from '@/components/KeywordResearchEdge';
import KeywordResearchMainContent from '@/components/KeywordResearchMainContent';
import KeywordResearchServices from '@/components/KeywordResearchServices';
import KeywordResearchProof from '@/components/KeywordResearchProof';
import KeywordResearchTestimonials from '@/components/KeywordResearchTestimonials';
import KeywordResearchCTA from '@/components/KeywordResearchCTA';

const KeywordResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <KeywordResearchHero />
        <CompaniesTrustUs />
        <KeywordResearchEdge />
        <KeywordResearchMainContent />
        <KeywordResearchServices />
        <KeywordResearchProof />
        <KeywordResearchTestimonials />
        <KeywordResearchCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default KeywordResearchPage;
