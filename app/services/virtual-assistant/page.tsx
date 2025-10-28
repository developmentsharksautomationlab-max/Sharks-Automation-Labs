import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VirtualAssistantHero from '@/components/VirtualAssistantHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import VirtualAssistantMainContent from '@/components/VirtualAssistantMainContent';
import VirtualAssistantServices from '@/components/VirtualAssistantServices';
import VirtualAssistantProof from '@/components/VirtualAssistantProof';
import VirtualAssistantTestimonials from '@/components/VirtualAssistantTestimonials';
import VirtualAssistantCTA from '@/components/VirtualAssistantCTA';

const VirtualAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <VirtualAssistantHero />
        <CompaniesTrustUs />
        <VirtualAssistantMainContent />
        <VirtualAssistantServices />
        <VirtualAssistantProof />
        <VirtualAssistantTestimonials />
        <VirtualAssistantCTA />
      </main>

      <Footer />
    </div>
  );
};

export default VirtualAssistantPage;