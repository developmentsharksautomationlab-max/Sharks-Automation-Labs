import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PPCManagementHero from '@/components/PPCManagementHero';
import CompaniesTrustUs from '@/components/CompaniesTrustUs';
import PPCManagementEdge from '@/components/PPCManagementEdge';
import PPCManagementMainContent from '@/components/PPCManagementMainContent';
import PPCManagementServices from '@/components/PPCManagementServices';
import PPCManagementProof from '@/components/PPCManagementProof';
import PPCManagementTestimonials from '@/components/PPCManagementTestimonials';
import PPCManagementCTA from '@/components/PPCManagementCTA';

const PPCManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <PPCManagementHero />
        <CompaniesTrustUs />
        <PPCManagementEdge />
        <PPCManagementMainContent />
        <PPCManagementServices />
        <PPCManagementProof />
        <PPCManagementTestimonials />
        <PPCManagementCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PPCManagementPage;
