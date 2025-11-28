import Header from '../components/Header';
import Hero from '../components/Hero';
import FallingLogosSection from '../components/FallingLogosSection';
import InvestmentLifecycle from '../components/InvestmentLifecycle';
import MarqueeSection from '../components/MarqueeSection';
import WhySharkRetail from '../components/WhySharkRetail';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="smooth-scroll">
      <Header />
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
