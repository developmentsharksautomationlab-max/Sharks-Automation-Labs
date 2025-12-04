"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate
} from 'framer-motion';
import { ArrowRight, Zap, Hexagon, Cpu, Activity, MoveRight, ChevronLeft, ChevronRight, Layers, Globe, Box, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- TYPES ---
interface Service {
  id: string;
  tabCategory: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  chemical: string;
}

// Service category to URL mapping
const getServiceUrl = (category: string, tabCategory: string): string => {
  const categoryMap: Record<string, string> = {
    'Creative Services': '/our-services/creative-services/creative',
    'Web Development': '/our-services/digital-services/web-development',
    'App Development': '/our-services/digital-services/app-development',
    'Social Media Marketing': '/our-services/digital-services/social-media',
    'Performance Marketing': '/our-services/digital-services/performance-marketing',
    'Search Engine Optimization': '/our-services/digital-services/seo',
    'Designer Resources': '/our-services/virtual-resources/designer-resources',
    'Developer Resources': '/our-services/virtual-resources/developer-resources',
    'Marketing Resources': '/our-services/virtual-resources/marketing-resources',
    'Virtual Assistant': '/our-services/virtual-resources/virtual-assistant',
    'NFTs': '/our-services/emerging-technologies/nfts',
    'Blockchain Development': '/our-services/emerging-technologies/blockchain',
    'Augmented Reality': '/our-services/emerging-technologies/ar',
    'Web 3.0': '/our-services/emerging-technologies/web3',
    'Virtual Reality': '/our-services/emerging-technologies/vr',
    'Digital Agency': '/our-services/industry-plans/digital-agency',
    'Ecommerce Growth': '/our-services/industry-plans/ecommerce',
    'Real Estate': '/our-services/industry-plans/real-estate',
    'Vehicle Rental': '/our-services/industry-plans/vehicle-rental',
    'Healthcare': '/our-services/industry-plans/healthcare',
    'Cleaning Services': '/our-services/industry-plans/cleaning',
    'Restaurants': '/our-services/industry-plans/restaurants',
    'Law Firms': '/our-services/industry-plans/law-firms',
    'Financial Services': '/our-services/industry-plans/financial',
    'Professional Services': '/our-services/industry-plans/professional',
    'Outsourcing Partnership': '/our-services/outsourcing-partnership/outsourcing',
    'Agency Development Plan': '/our-services/outsourcing-partnership/agency-plan',
  };
  
  return categoryMap[category] || '/services';
};

// --- TABS DATA ---
const TABS = [
  { id: 'ALL', label: 'All Services' },
  { id: 'DIGITAL_SERVICES', label: 'Digital Services' },
  { id: 'VIRTUAL_RESOURCES', label: 'Virtual Resources' },
  { id: 'EMERGING_TECH', label: 'Emerging Technologies' },
  { id: 'INDUSTRY_PLANS', label: 'Industry Plans' },
];

// --- EXTENDED SERVICES DATA (SEO & CORPORATE OPTIMIZED) ---
const ALL_SERVICES = [
  // --- DIGITAL SERVICES ---
  {
    id: 'DS_01',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Creative Services',
    description: 'Brand-defining visual identity systems and conversion-focused creative architectures engineered for market leadership.',
    tags: ['Brand Strategy', 'UI/UX Design', 'Visual Identity'],
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop',
    chemical: 'Aesthetics',
  },
  {
    id: 'DS_02',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Web Development',
    description: 'Enterprise-grade digital platforms built on scalable architectures for high-performance, security, and global reach.',
    tags: ['Full Stack', 'Cloud Infrastructure', 'Cybersecurity'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Engineering',
  },
  {
    id: 'DS_03',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'App Development',
    description: 'Native and cross-platform mobile ecosystems designed for maximum user retention and seamless enterprise integration.',
    tags: ['iOS/Android', 'React Native', 'User Retention'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Mobility',
  },
  {
    id: 'DS_04',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Social Media Marketing',
    description: 'Executive-level brand positioning and audience acquisition strategies across high-impact social channels.',
    tags: ['Brand Authority', 'Content Strategy', 'Community Growth'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop',
    chemical: 'Influence',
  },
  {
    id: 'DS_05',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Performance Marketing',
    description: 'Data-driven advertising funnels engineered for measurable ROI, lowering CAC while scaling lifetime value.',
    tags: ['PPC', 'Programmatic', 'Conversion Rate Optimization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Revenue',
  },
  {
    id: 'DS_06',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Search Engine Optimization',
    description: 'Dominant organic search frameworks designed to secure top-tier rankings and sustained digital authority.',
    tags: ['Technical SEO', 'Backlink Strategy', 'Semantic Search'],
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2680&auto=format&fit=crop',
    chemical: 'Authority',
  },
  {
    id: 'DS_07',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Outsourcing Partnership',
    description: 'Strategic operational off-shoring providing cost efficiency, precision execution, and 24/7 global workflow continuity.',
    tags: ['BPO', 'Operational Scale', 'Cost Efficiency'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop',
    chemical: 'Operations',
  },
  {
    id: 'DS_08',
    tabCategory: 'DIGITAL_SERVICES',
    category: 'Agency Development Plan',
    description: 'Comprehensive infrastructure scaling for emerging agencies, focusing on sales systems and white-label fulfillment.',
    tags: ['Scalability', 'White Label', 'Systemization'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Growth',
  },

  // --- VIRTUAL RESOURCES ---
  {
    id: 'VR_01',
    tabCategory: 'VIRTUAL_RESOURCES',
    category: 'Designer Resources',
    description: 'On-demand access to elite creative talent and premium asset libraries for rapid visual deployment.',
    tags: ['UI Kits', 'Vector Assets', 'Talent Pool'],
    image: 'https://images.unsplash.com/photo-1626785774583-b61d52677109?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Assets',
  },
  {
    id: 'VR_02',
    tabCategory: 'VIRTUAL_RESOURCES',
    category: 'Developer Resources',
    description: 'Specialized code repositories and senior engineering talent allocation for complex technical challenges.',
    tags: ['API Integration', 'Code Reviews', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1607799275518-d58665d096c1?q=80&w=2564&auto=format&fit=crop',
    chemical: 'Code',
  },
  {
    id: 'VR_03',
    tabCategory: 'VIRTUAL_RESOURCES',
    category: 'Marketing Resources',
    description: 'Plug-and-play marketing stacks, ad creatives, and copywriting frameworks for immediate campaign deployment.',
    tags: ['Ad Templates', 'Copywriting', 'Funnels'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    chemical: 'Tactics',
  },
  {
    id: 'VR_04',
    tabCategory: 'VIRTUAL_RESOURCES',
    category: 'Virtual Assistant',
    description: 'Executive-level remote administrative support to streamline C-suite operations and time management.',
    tags: ['Admin Support', 'Data Entry', 'Scheduling'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Support',
  },

  // --- EMERGING TECHNOLOGIES ---
  {
    id: 'ET_01',
    tabCategory: 'EMERGING_TECH',
    category: 'NFTs & Tokenization',
    description: 'Enterprise digital asset strategy and tokenization architectures for intellectual property protection and brand equity.',
    tags: ['Smart Contracts', 'Digital Assets', 'Web3 Strategy'],
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?q=80&w=2535&auto=format&fit=crop',
    chemical: 'Tokens',
  },
  {
    id: 'ET_02',
    tabCategory: 'EMERGING_TECH',
    category: 'Blockchain Development',
    description: 'Decentralized ledger solutions ensuring transparency, immutability, and security for financial and supply chain systems.',
    tags: ['DeFi', 'Solidity', 'Hyperledger'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop',
    chemical: 'Ledger',
  },
  {
    id: 'ET_03',
    tabCategory: 'EMERGING_TECH',
    category: 'Augmented Reality',
    description: 'Immersive AR experiences that bridge physical and digital retail, enhancing customer engagement and conversion.',
    tags: ['AR Filters', 'Product Vis', 'Interactive'],
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Vision',
  },
  {
    id: 'ET_04',
    tabCategory: 'EMERGING_TECH',
    category: 'Web 3.0 Solutions',
    description: 'Next-generation internet infrastructure focusing on user sovereignty, decentralized identity, and semantic connectivity.',
    tags: ['dApps', 'Metaverse', 'Decentralization'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Future',
  },
  {
    id: 'ET_05',
    tabCategory: 'EMERGING_TECH',
    category: 'Virtual Reality',
    description: 'Fully immersive VR environments for corporate training, real estate visualization, and virtual conferences.',
    tags: ['Simulation', 'Training', 'Virtual Tours'],
    image: 'https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Immersion',
  },

  // --- INDUSTRY PLANS ---
  {
    id: 'IP_01',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Digital Agency',
    description: 'Turnkey solutions for agency owners to scale client acquisition and automate service delivery.',
    tags: ['B2B Growth', 'Automation', 'Consulting'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop',
    chemical: 'Scale',
  },
  {
    id: 'IP_02',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Ecommerce Growth',
    description: 'End-to-end DTC infrastructures optimized for high-volume transactions and inventory management.',
    tags: ['Shopify Plus', 'Magento', 'Logistics'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Retail',
  },
  {
    id: 'IP_03',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Real Estate',
    description: 'Lead generation engines and virtual property showcasing for high-net-worth real estate brokerage.',
    tags: ['Lead Gen', 'Virtual Staging', 'CRM'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop',
    chemical: 'Property',
  },
  {
    id: 'IP_04',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Vehicle Rental',
    description: 'Booking engines and fleet management software for luxury and commercial vehicle rental services.',
    tags: ['Booking Systems', 'Fleet Mgmt', 'UX'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Transport',
  },
  {
    id: 'IP_05',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Healthcare',
    description: 'HIPAA-compliant patient acquisition systems and telemedicine integration for modern medical practices.',
    tags: ['HIPAA', 'Telemed', 'Patient Acquisition'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Health',
  },
  {
    id: 'IP_06',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Cleaning Services',
    description: 'Local SEO dominance and automated booking workflows for residential and commercial facility management.',
    tags: ['Local SEO', 'Automation', 'Service'],
    image: 'https://images.unsplash.com/photo-1581578731117-104f88b969b9?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Facility',
  },
  {
    id: 'IP_07',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Hospitality',
    description: 'Digital guest experience platforms and reservation systems for restaurants and luxury hospitality groups.',
    tags: ['Reservations', 'Menu Design', 'Guest Exp'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Service',
  },
  {
    id: 'IP_08',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Law Firms',
    description: 'Authority-building content strategies and client intake systems for elite legal practices.',
    tags: ['Credibility', 'Lead Intake', 'Content'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop',
    chemical: 'Legal',
  },
  {
    id: 'IP_09',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Financial Services',
    description: 'Secure, compliant digital presence management for fintech, wealth management, and banking sectors.',
    tags: ['Fintech', 'Compliance', 'Trust'],
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Finance',
  },
  {
    id: 'IP_10',
    tabCategory: 'INDUSTRY_PLANS',
    category: 'Professional Services',
    description: 'Bespoke digital strategy for consultants and firms requiring premium market positioning.',
    tags: ['Consulting', 'Positioning', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    chemical: 'Expertise',
  }
];

// --- HOOKS ---
const useWindowSize = () => {
  const [size, setSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 0, height: typeof window !== 'undefined' ? window.innerHeight : 0 });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    // Optimized throttle with requestAnimationFrame for smoother performance
    let rafId: number;
    let timeoutId: NodeJS.Timeout;
    const throttledUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateSize);
      }, 200);
    };
    window.addEventListener('resize', throttledUpdate, { passive: true });
    updateSize();
    return () => {
      window.removeEventListener('resize', throttledUpdate);
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return size;
};

// --- SUB-COMPONENTS ---

// 1. HOLOGRAPHIC TEXT (Optimized with CSS animations for better performance)
const HolographicText = React.memo(({ children, className, active }: { children: React.ReactNode, className?: string, active: boolean }) => {
  return (
    <div className="relative overflow-visible group inline-block">
      {active && (
        <>
          <span 
            className={cn("absolute inset-0 text-[#35c4dd] mix-blend-screen select-none pointer-events-none", className)}
            style={{
              animation: 'holographic-shimmer 3s ease-in-out infinite',
              willChange: 'transform, opacity'
            }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span 
            className={cn("absolute inset-0 text-[#f2f4f4] mix-blend-overlay select-none pointer-events-none", className)}
            style={{
              animation: 'holographic-shimmer 3.5s ease-in-out infinite reverse',
              willChange: 'transform, opacity'
            }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
      <span className={cn("relative z-10 text-[#f2f4f4]", className)}>
        {children}
      </span>
    </div>
  );
});
HolographicText.displayName = 'HolographicText';

// 2. THE REACTOR CORE (Card Component)
const HyperCard = React.memo(({ service }: { service: Service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Optimized spring settings for smoother, less bouncy animations
  const mouseX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.2 });
  const mouseY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.2 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const plasmaGradient = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, #35c4dd 0%, transparent 45%)`;

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileHover="hover"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="relative w-full h-full"
    >
      <motion.div 
        variants={{ initial: { scale: 1 }, hover: { scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
        className="relative w-full h-full rounded-2xl bg-[#03161a] border border-[#35c4dd]/10 overflow-hidden group shadow-2xl"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
             <div className="absolute inset-[-2px] rounded-2xl opacity-30 animate-spin-slow" 
                  style={{ 
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, #35c4dd 180deg, transparent 360deg)`,
                    willChange: 'transform'
                  }}
             />
        </div>
        <div className="absolute inset-0 z-0">
            <motion.div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-50 transition-all duration-700 ease-out"
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  willChange: 'opacity'
                }}
            />
            <div className="absolute inset-0 bg-[#052126] opacity-80 mix-blend-multiply" />
            <motion.div 
              style={{ background: plasmaGradient, opacity: 0.15 }} 
              className="absolute inset-0 mix-blend-screen group-hover:opacity-25 transition-opacity duration-500 ease-out" 
            />
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#35c4dd10_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div style={{ transform: "translateZ(60px)" }} className="relative h-full flex flex-col justify-between p-6 md:p-8 z-20">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#35c4dd]/70 uppercase mb-2">
                        {service.id.split('_')[0]} SERIES
                    </span>
                    <div className="flex items-center gap-2">
                        <Hexagon size={12} className="text-[#35c4dd] animate-pulse" />
                        <span className="text-xs font-bold text-[#f2f4f4]/90 tracking-wider uppercase">{service.chemical}</span>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#35c4dd]/20 flex items-center justify-center bg-[#35c4dd]/5 backdrop-blur-md group-hover:border-[#35c4dd] group-hover:bg-[#35c4dd]/20 transition-all">
                    <Cpu size={14} className="text-[#35c4dd]" />
                </div>
            </div>
            <div className="space-y-6 mt-4 md:mt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2f4f4] tracking-tighter uppercase leading-[0.9]">
                    <HolographicText active={true} className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f2f4f4] group-hover:to-[#35c4dd] transition-all">
                        {service.category}
                    </HolographicText>
                </h2>
                <div className="h-[1px] w-12 bg-[#35c4dd]/30 group-hover:w-full group-hover:bg-[#35c4dd] transition-all duration-500 ease-out" />
                <p className="text-sm sm:text-base md:text-lg text-[#f2f4f4]/70 leading-relaxed font-sans max-w-[95%]">
                    {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-[#35c4dd]/20 bg-[#052126]/80 text-[#35c4dd]/80 group-hover:border-[#35c4dd] group-hover:text-[#35c4dd] transition-colors duration-300 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="pt-6 md:pt-8">
                <Link href={getServiceUrl(service.category, service.tabCategory)}>
                    <button className="w-full py-4 border-t border-[#35c4dd]/10 flex items-center justify-between group/btn overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#35c4dd] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 text-xs font-bold tracking-[0.3em] text-[#f2f4f4] group-hover/btn:text-[#052126] transition-colors">
                            EXPLORE SOLUTIONS
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 text-[#35c4dd] group-hover/btn:text-[#052126] transition-colors transform group-hover/btn:translate-x-1 duration-300" />
                    </button>
                </Link>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
HyperCard.displayName = 'HyperCard';

// 3. FRACTAL BACKGROUND (Optimized with GPU acceleration for smooth performance)
const FractalField = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       <div className="absolute inset-0 perspective-[1000px]" style={{ transform: 'translateZ(0)', willChange: 'contents' }}>
           <div 
             className="absolute inset-[-100%] bg-[linear-gradient(to_right,#35c4dd_1px,transparent_1px),linear-gradient(to_bottom,#35c4dd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.04] transform rotate-x-[60deg] animate-grid-flow" 
             style={{ 
               willChange: 'transform',
               transform: 'translateZ(0)',
               backfaceVisibility: 'hidden'
             }} 
           />
       </div>
       <div 
         className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#35c4dd] opacity-[0.04] blur-[120px] rounded-full mix-blend-screen" 
         style={{ 
           willChange: 'opacity',
           transform: 'translateZ(0)'
         }} 
       />
       <div 
         className="absolute bottom-[-20%] right-[20%] w-[60vw] h-[60vw] bg-[#052126] opacity-[0.7] blur-[120px] rounded-full mix-blend-multiply" 
         style={{ 
           willChange: 'opacity',
           transform: 'translateZ(0)'
         }} 
       />
    </div>
  );
});
FractalField.displayName = 'FractalField';

// --- MAIN COMPONENT ---

const ApexServices = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  // Filtering Logic
  const filteredServices = useMemo(() => {
    if (activeTab === 'ALL') return ALL_SERVICES;
    return ALL_SERVICES.filter(service => service.tabCategory === activeTab);
  }, [activeTab]);

  // Reset index when tab changes to avoid out of bounds - Optimized with smooth transition
  useEffect(() => {
    // Use requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      setActiveIndex(0);
    });
  }, [activeTab]);
  
  // Handlers - Memoized for performance
  const handleNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredServices.length);
  }, [filteredServices.length]);
  
  const handlePrev = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredServices.length) % filteredServices.length);
  }, [filteredServices.length]);

  // Auto-rotate (pauses if only 1 item) - Optimized with smooth transitions
  useEffect(() => {
    if(filteredServices.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredServices.length);
    }, 12000); // Increased to 12s for even smoother experience
    return () => clearInterval(timer);
  }, [filteredServices.length, activeTab]);

  // Dynamic Title Logic
  const getDisplayTitle = () => {
    const tab = TABS.find(t => t.id === activeTab);
    return tab?.id === 'ALL' ? 'OUR SERVICES' : tab?.label.toUpperCase();
  };

  return (
    <section 
      className="relative w-full min-h-[120vh] bg-[#052126] text-[#f2f4f4] overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[#35c4dd] selection:text-[#052126] py-20"
      style={{
        transform: 'translateZ(0)',
        willChange: 'contents',
        backfaceVisibility: 'hidden'
      }}
    >
      
      <FractalField />
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#f2f4f4 1px, transparent 1px), linear-gradient(90deg, #f2f4f4 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          willChange: 'auto',
          transform: 'translateZ(0)'
        }} 
      />

      <div className="relative z-10 w-full max-w-[1920px] px-4 md:px-8 lg:px-12 h-full flex flex-col justify-center">
        
        {/* --- HEADER SECTION --- */}
        <header className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-end border-b border-[#35c4dd]/20 pb-4 mb-8">
            <div className="w-full md:w-auto">
                <div className="flex items-center gap-2 mb-3">
                    <Activity size={16} className="text-[#35c4dd] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#35c4dd] uppercase">Enterprise Capabilities</span>
                </div>
                {/* Dynamic Title with Glitch Effect */}
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#f2f4f4] leading-tight min-h-[1.2em]"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35c4dd] to-[#f2f4f4] opacity-90">
                      <HolographicText active={true}>{getDisplayTitle()}</HolographicText>
                   </span>
                </h1>
            </div>
            
            {/* Desktop HUD */}
            <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-mono text-[#35c4dd]/60 text-right">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#35c4dd] animate-ping" />
                    <span>SYSTEM ONLINE</span>
                 </div>
                 <span>ITEMS: {filteredServices.length} // TYPE: {activeTab}</span>
            </div>
        </header>

        {/* --- TABS NAVIGATION SYSTEM --- */}
        <div className="w-full flex justify-center mb-12 relative z-50">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 rounded-xl bg-[#35c4dd]/5 border border-[#35c4dd]/10 backdrop-blur-md">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-4 py-2 md:px-6 md:py-3 text-[10px] md:text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 rounded-lg border cursor-pointer",
                    isActive 
                      ? "text-[#052126] bg-[#35c4dd] border-[#35c4dd] shadow-[0_0_20px_rgba(53,196,221,0.4)] scale-105" 
                      : "text-[#35c4dd] border-transparent hover:bg-[#35c4dd]/10 hover:border-[#35c4dd]/30"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MAIN CAROUSEL ENGINE --- */}
        <div 
          className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center" 
          style={{ 
            contain: 'layout style paint',
            transform: 'translateZ(0)',
            willChange: 'contents'
          }}
        >
            
            {/* Controls - Optimized for smooth interactions */}
            {filteredServices.length > 1 && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-50 pointer-events-none px-2 md:px-8">
                  <button 
                    onClick={handlePrev} 
                    className="pointer-events-auto p-3 md:p-5 rounded-full border-2 border-[#35c4dd]/40 bg-[#052126]/90 hover:bg-[#35c4dd]/20 text-[#35c4dd] transition-all duration-300 ease-out backdrop-blur-md group shadow-[0_0_25px_rgba(53,196,221,0.4)] hover:shadow-[0_0_35px_rgba(53,196,221,0.6)]"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  >
                      <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300 ease-out" />
                </button>
                  <button 
                    onClick={handleNext} 
                    className="pointer-events-auto p-3 md:p-5 rounded-full border-2 border-[#35c4dd]/40 bg-[#052126]/90 hover:bg-[#35c4dd]/20 text-[#35c4dd] transition-all duration-300 ease-out backdrop-blur-md group shadow-[0_0_25px_rgba(53,196,221,0.4)] hover:shadow-[0_0_35px_rgba(53,196,221,0.6)]"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  >
                      <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300 ease-out" />
                </button>
            </div>
            )}

            {/* 3D Card Stack */}
            <div 
              className="relative w-full max-w-[1400px] h-full flex items-center justify-center perspective-[2000px]" 
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)',
                contain: 'layout style paint'
              }}
            >
                <AnimatePresence initial={false} mode="sync">
                    {/* Only map if we have data */}
                    {filteredServices.length > 0 ? (
                      [-1, 0, 1].map((offset) => {
                          // Handle single item case gracefully
                          if (filteredServices.length === 1 && offset !== 0) return null;

                          const index = (activeIndex + offset + filteredServices.length) % filteredServices.length;
                          const service = filteredServices[index];
                        const isCenter = offset === 0;
                        
                        let xOffset = 0;
                          if (!isMobile) xOffset = offset * 420; 
                          if (isTablet) xOffset = offset * 350; 
                        
                        return (
                            <motion.div
                                  key={`${service.id}-${activeTab}`} // Key change triggers animation on tab switch
                                  initial={{ opacity: 0, scale: 0.92, z: -100, x: 0, rotateY: 0 }}
                                animate={{ 
                                      opacity: isCenter ? 1 : (isMobile ? 0 : 0.5),
                                    scale: isCenter ? 1 : 0.9,
                                    z: isCenter ? 0 : -60,
                                      x: isMobile && !isCenter ? 0 : xOffset,
                                    rotateY: isCenter ? 0 : offset * -10,
                                    zIndex: isCenter ? 10 : 5,
                                    filter: isCenter ? 'blur(0px)' : 'blur(0.5px)'
                                }}
                                  exit={{ 
                                    opacity: 0, 
                                    scale: 0.88, 
                                    z: -150, 
                                    filter: 'blur(3px)', 
                                    transition: { 
                                      duration: 0.5,
                                      ease: [0.16, 1, 0.3, 1]
                                    } 
                                  }}
                                  transition={{ 
                                    type: "spring", 
                                    stiffness: 180, 
                                    damping: 28, 
                                    mass: 0.9,
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1]
                                  }}
                                className={cn(
                                    "absolute top-[5%] md:top-[10%] w-[90%] sm:w-[360px] md:w-[400px] h-[520px] md:h-[600px]",
                                      isCenter ? "cursor-none md:cursor-default pointer-events-auto" : "pointer-events-auto cursor-pointer"
                                )}
                                style={{ 
                                  willChange: 'transform, opacity',
                                  transform: 'translateZ(0)',
                                  backfaceVisibility: 'hidden'
                                }}
                                  onClick={() => {
                                      if (!isCenter) {
                                          if (offset === -1) handlePrev();
                                          if (offset === 1) handleNext();
                                      }
                                  }}
                            >
                                  <HyperCard service={service} />
                            </motion.div>
                        );
                      })
                    ) : (
                      <div className="text-[#35c4dd] font-mono animate-pulse">NO DATA STREAM FOUND</div>
                    )}
                </AnimatePresence>
            </div>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="w-full flex justify-center mt-8 md:mt-0">
            <div className="flex justify-center items-center gap-2 md:gap-2.5 max-w-[90%] md:max-w-[80%] flex-wrap px-4">
                {filteredServices.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                            "h-1.5 md:h-2 transition-all duration-500 ease-out rounded-full cursor-pointer",
                        i === activeIndex 
                                ? "w-8 md:w-10 bg-[#35c4dd] shadow-[0_0_15px_#35c4dd]" 
                                : "w-1.5 md:w-2 bg-[#f2f4f4]/20 hover:bg-[#f2f4f4]/40 hover:w-2 md:hover:w-2.5"
                    )}
                    style={{ willChange: 'width, background-color' }}
                />
            ))}
            </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-6 text-[#35c4dd]/50 text-[10px] uppercase tracking-widest font-mono flex items-center justify-center gap-2 animate-pulse">
            <MoveRight className="rotate-180 w-3 h-3" />
            Swipe or Tap Controls
            <MoveRight className="w-3 h-3" />
        </div>

      </div>
    </section>
  );
};

export default ApexServices;