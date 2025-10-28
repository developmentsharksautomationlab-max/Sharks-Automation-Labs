import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopifyHero from '@/components/ShopifyHero';
import ShopifyMainContent from '@/components/ShopifyMainContent';
import ShopifyServices from '@/components/ShopifyServices';
import ShopifyProof from '@/components/ShopifyProof';
import ShopifyTestimonials from '@/components/ShopifyTestimonials';
import ShopifyCTA from '@/components/ShopifyCTA';

const ShopifyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ShopifyHero />
        <ShopifyMainContent />
        <ShopifyServices />
        <ShopifyProof />
        <ShopifyTestimonials />
        <ShopifyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ShopifyPage;