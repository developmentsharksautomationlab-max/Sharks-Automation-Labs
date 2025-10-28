import React from 'react';
import AutomationLayout from '../../../components/AutomationLayout';
import AmazonHero from '../../../components/AmazonHero';
import AmazonMainContent from '../../../components/AmazonMainContent';
import AmazonServices from '../../../components/AmazonServices';
import AmazonProof from '../../../components/AmazonProof';
import AmazonTestimonials from '../../../components/AmazonTestimonials';
import AmazonCTA from '../../../components/AmazonCTA';

const AmazonAutomationPage: React.FC = () => {
  return (
    <AutomationLayout>
      <AmazonHero />
      <AmazonMainContent />
      <AmazonServices />
      <AmazonProof />
      <AmazonTestimonials />
      <AmazonCTA />
    </AutomationLayout>
  );
};

export default AmazonAutomationPage;
