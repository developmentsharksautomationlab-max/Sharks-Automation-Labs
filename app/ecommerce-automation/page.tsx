import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcommerceAutomationHero from '@/components/EcommerceAutomationHero';
import OurJourney from '@/components/OurJourney';
import EcommerceAutomationStrategyCall from '@/components/EcommerceAutomationStrategyCall';
import PPCManagementTestimonials from '@/components/PPCManagementTestimonials';
import EcommerceAutomationVideoSection from '@/components/EcommerceAutomationVideoSection';
import EcommerceAutomationFinalCTA from '@/components/EcommerceAutomationFinalCTA';

const EcommerceAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main>
        <EcommerceAutomationHero />
        <OurJourney />
        <EcommerceAutomationStrategyCall />
        <PPCManagementTestimonials />
        <EcommerceAutomationVideoSection />
        <EcommerceAutomationFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default EcommerceAutomationPage;

