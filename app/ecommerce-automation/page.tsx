import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcommerceAutomationHero from '@/components/EcommerceAutomationHero';
import OurJourney from '@/components/OurJourney';
import EcommerceAutomationStrategyCall from '@/components/EcommerceAutomationStrategyCall';
import PPCManagementTestimonials from '@/components/PPCManagementTestimonials';
import EcommerceAutomationVideoSection from '@/components/EcommerceAutomationVideoSection';
import EcommerceAutomationFinalCTA from '@/components/EcommerceAutomationFinalCTA';
import EcommerceFooter from '@/components/EcommerceFooter';

const EcommerceAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <main>
        <EcommerceAutomationHero />
        <EcommerceAutomationVideoSection />
        <OurJourney />
        <EcommerceAutomationStrategyCall />
        <PPCManagementTestimonials />
        <EcommerceAutomationVideoSection />
        <EcommerceAutomationFinalCTA />
      </main>
      
      <EcommerceFooter />
    </div>
  );
};

export default EcommerceAutomationPage;

