import React from 'react';
import AutomationLayout from '../../../components/AutomationLayout';
import EtsyHero from '../../../components/EtsyHero';
import EtsyMainContent from '../../../components/EtsyMainContent';
import EtsyServices from '../../../components/EtsyServices';
import EtsyProof from '../../../components/EtsyProof';
import EtsyTestimonials from '../../../components/EtsyTestimonials';
import EtsyCTA from '../../../components/EtsyCTA';

const EtsyAutomationPage: React.FC = () => {
  return (
    <AutomationLayout>
      <EtsyHero />
      <EtsyMainContent />
      <EtsyServices />
      {/* <EtsyProof /> */}
      <EtsyTestimonials />
      <EtsyCTA />
    </AutomationLayout>
  );
};

export default EtsyAutomationPage;
