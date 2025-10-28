import React from 'react';
import Header from '../../components/Header';
import OurStoryHero from '../../components/OurStoryHero';
import OurJourney from '../../components/OurJourney';
import PerformanceStats from '../../components/PerformanceStats';
import SharkDifference from '../../components/SharkDifference';
import VisionMission from '../../components/VisionMission';
import TeamSection from '../../components/TeamSection';
import AboutCTA from '../../components/AboutCTA';
import Footer from '../../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <OurStoryHero />
      <OurJourney />
      <TeamSection />
      <SharkDifference />
      <VisionMission />
      <PerformanceStats />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
