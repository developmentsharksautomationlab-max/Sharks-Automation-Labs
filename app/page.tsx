import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Lazy load below-the-fold components for faster initial load
const FallingLogosSection = dynamic(() => import('../components/FallingLogosSection'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const InvestmentLifecycle = dynamic(() => import('../components/InvestmentLifecycle'), {
  loading: () => <div className="min-h-screen bg-[#052126]" />,
  ssr: true,
});

const MarqueeSection = dynamic(() => import('../components/MarqueeSection'), {
  loading: () => <div className="h-32" />,
  ssr: true,
});

const WhySharkRetail = dynamic(() => import('../components/WhySharkRetail'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const CallToAction = dynamic(() => import('../components/CallToAction'), {
  loading: () => <div className="min-h-[60vh]" />,
  ssr: true,
});

const ContactSection = dynamic(() => import('../components/ContactSection'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="smooth-scroll">
      <Hero />
      <FallingLogosSection />
      <InvestmentLifecycle />
      <MarqueeSection />
      <WhySharkRetail />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}
