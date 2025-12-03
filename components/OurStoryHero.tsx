'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Text, ScrollControls, Scroll, useScroll, MeshDistortMaterial, Environment, Sparkles, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Users, Award, DollarSign, Network, Lightbulb, Building2 } from 'lucide-react';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

const CallToAction = dynamic(() => import('./CallToAction'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });

// --- COLORS & THEMES ---
const COLORS = {
  neonBlue: '#00f3ff',
  deepPurple: '#bc13fe',
  gold: '#ffd700',
  silver: '#ffffff',
  void: '#000000'
};

// --- 3D COMPONENTS ---

// 1. THE EVOLVING PLANET (Optimized)
const EvolvingPlanet = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<any>(null);
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    if (!mesh.current || !material.current) return;
    
    // Base Rotation
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.5;

    // --- MORPHING LOGIC (Same Design) ---
    let targetColor = new THREE.Color(COLORS.neonBlue);
    let targetDistort = 0.6;
    let targetMetalness = 0.1;
    let targetRoughness = 0.1;

    // Phase 1: Story
    if (scroll.offset > 0.15 && scroll.offset < 0.40) {
      targetColor = new THREE.Color('#8a2be2');
      targetDistort = 0.1;
      targetMetalness = 0.8;
      targetRoughness = 0.8;
    }
    
    // Phase 2: Values
    if (scroll.offset >= 0.40 && scroll.offset < 0.65) {
      targetColor = new THREE.Color(COLORS.gold);
      targetDistort = 0.3;
      targetMetalness = 1.0;
      targetRoughness = 0.0;
    }

    // Phase 3: Tech
    if (scroll.offset >= 0.65 && scroll.offset < 0.85) {
      targetColor = new THREE.Color(COLORS.silver);
      targetDistort = 0.5;
      targetMetalness = 0.5;
      targetRoughness = 0.1;
    }

    // Phase 4: CTA
    if (scroll.offset >= 0.85) {
      targetColor = new THREE.Color(COLORS.neonBlue);
      targetDistort = 1.0;
      targetMetalness = 0.2;
      targetRoughness = 0.2;
    }

    // Smooth Interpolation
    material.current.color.lerp(targetColor, 0.05);
    material.current.distort = THREE.MathUtils.lerp(material.current.distort, targetDistort, 0.05);
    material.current.metalness = THREE.MathUtils.lerp(material.current.metalness, targetMetalness, 0.05);
    material.current.roughness = THREE.MathUtils.lerp(material.current.roughness, targetRoughness, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh} scale={3}>
        {/* OPTIMIZATION: Reduced segments from 128 to 64 (Visually Identical, 4x Faster) */}
        <icosahedronGeometry args={[1, 64]} /> 
        <MeshDistortMaterial
          ref={material}
          color={COLORS.neonBlue}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.1}
          roughness={0.1}
          distort={0.6}
          speed={2}
        />
      </mesh>
      
      {/* Outer Halo Glow */}
      <mesh scale={3.2}>
         <sphereGeometry args={[1, 32, 32]} />
         <meshBasicMaterial color={COLORS.neonBlue} transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
};

// 2. REALISTIC SPACE DUST (Optimized Count)
const SpaceDust = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={300} scale={12} size={4} speed={0.4} opacity={0.5} color="#ffffff" />
      <Sparkles count={200} scale={10} size={6} speed={0.2} opacity={0.8} color={COLORS.neonBlue} />
    </>
  );
};

// 3. SCENE SETUP
const Scene = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame((state) => {
    // Zoom Animation
    const targetZ = 12 - (scroll.offset * 35); 
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

    // Mouse Parallax
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 2, 0.05);
    
    camera.lookAt(0, 0, -5);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={5} color={COLORS.deepPurple} />
      
      {/* Environment: Preset city provides great reflection without heavy custom HDRs */}
      <Environment preset="city" />

      <SpaceDust />

      <group position={[0, 0, -5]}>
         <EvolvingPlanet />
      </group>

      <Text position={[5, 2, -10]} fontSize={1.5} color="white" font="/fonts/ITCAvantGardeStd-Bk.otf" anchorX="right" fillOpacity={0.1}>
        FUTURE
      </Text>
    </>
  );
};

// --- HTML CONTENT SECTIONS ---

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 md:p-12 rounded-3xl bg-[#052126]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`w-full min-h-screen md:h-screen flex flex-col justify-center items-center px-4 py-16 md:py-0 relative ${className}`}>
    <div className="max-w-6xl w-full flex justify-center">
      {children}
    </div>
  </section>
);

const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="text-center p-4">
    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">{value}</h3>
    <p className="text-[#35c4dd] uppercase tracking-widest text-[10px] sm:text-xs font-semibold">{label}</p>
  </div>
);

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Remove loading state return null to prevent layout thrashing.
  // We use Suspense inside Canvas instead.

  useEffect(() => {
    // Hide default scrollbar when component mounts
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Restore scrollbar when component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black text-[#f2f4f4] overflow-hidden relative">
      <Canvas 
        dpr={[1, 1.25]} // OPTIMIZATION: Cap DPR at 1.25 for performance
        gl={{ 
          antialias: false, 
          stencil: false, 
          depth: true, 
          toneMapping: THREE.ReinhardToneMapping, 
          toneMappingExposure: 1.5,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        camera={{ position: [0, 0, 12], fov: 50 }}
        performance={{ min: 0.5 }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <ScrollControls pages={5.8} damping={0.2}>
            <Scene />
            
            {/* OPTIMIZATION: multisampling={0} prevents heavy GPU load */}
            <EffectComposer multisampling={0}>
              <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
              <ChromaticAberration offset={new THREE.Vector2(0.001, 0.001)} />
              <Noise opacity={0.05} />
              <Vignette eskil={false} offset={0.1} darkness={1.0} />
            </EffectComposer>

            <Scroll html style={{ width: '100%', height: '100%' }}>
              {/* Overlay with 30% opacity - behind text content, above 3D background */}
              <div className="absolute inset-0 bg-black opacity-30 pointer-events-none z-0"></div>
              
                {/* 1. HERO SECTION */}
                <Section>
                  <div className="text-center z-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 1 }}
                    >
                      <div className="inline-block px-4 py-2 border border-[#35c4dd]/30 rounded-full bg-black/30 backdrop-blur-md mb-6">
                        <span className="text-[#35c4dd] text-xs sm:text-sm tracking-[0.3em] font-mono">SYSTEM: ONLINE</span>
                      </div>
                      
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[0.85] tracking-tighter mb-6 mix-blend-screen">
                        <span className="block">ABOUT US</span>
                      </h1>
                      
                      <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-light mb-10 leading-relaxed drop-shadow-xl">
                        At Outsource IT Projects, we operate as a strategic extension of your organization, delivering precision-driven solutions to complex business challenges. Our mission is to empower sustainable growth through innovation, reliability, and uncompromising execution. We partner with ambitious leaders to transform vision into measurable performance.
                      </p>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="flex flex-col items-center gap-2 text-[#35c4dd] opacity-80"
                    >
                      <span className="text-[10px] uppercase tracking-widest">Initialise</span>
                      <ArrowDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Section>

                {/* 2. CORE VALUES SECTION */}
                <Section>
                  <div className="w-full max-w-6xl">
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 tracking-tight text-white drop-shadow-[0_0_15px_rgba(53,196,221,0.5)]">
                      OUR CORE VALUES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {[
                        { 
                          number: "01",
                          title: "One Stop Solution", 
                          icon: CheckCircle2, 
                          desc: "In today's landscape, IT agencies have diverse business needs. That's why we strive to fulfill all the requirements of your business, simplifying the process for you." 
                        },
                        { 
                          number: "02",
                          title: "Experienced Team", 
                          icon: Users, 
                          desc: "We have been in this business for a long time, which has enabled us to have experienced individuals who understand your business problems and are ready to resolve them." 
                        },
                        { 
                          number: "03",
                          title: "High Quality", 
                          icon: Award, 
                          desc: "Our quality service revolves around tangibility, complete reliability, assurance, and empathy. We understand your needs and provide a high level of service with consistency." 
                        },
                        { 
                          number: "04",
                          title: "Value for Money", 
                          icon: DollarSign, 
                          desc: "We follow a profound system to the capacity and manage well to deliver results and better outcomes and be calibrated to maximize utmost efficiency." 
                        }
                      ].map((item, i) => (
                        <GlassPanel key={i} className="hover:bg-white/10 transition-all duration-500 group relative overflow-hidden">
                          {/* Number Badge */}
                          <div className="absolute left-6 top-6 text-6xl sm:text-7xl md:text-8xl font-bold text-[#35c4dd]/20 group-hover:text-[#35c4dd]/30 transition-colors duration-300">
                            {item.number}
                          </div>
                          
                          {/* Content Container */}
                          <div className="relative z-10">
                            {/* Icon in top-right */}
                            <div className="flex justify-end mb-4">
                              <div className="p-3 rounded-full border border-[#35c4dd]/30 bg-[#35c4dd]/10 group-hover:border-[#35c4dd] group-hover:bg-[#35c4dd]/20 transition-all duration-300">
                                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#35c4dd] group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#35c4dd] transition-colors duration-300">
                              {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed pl-0 md:pl-4">
                              {item.desc}
                            </p>
                          </div>
                        </GlassPanel>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* 3. OUR HERITAGE SECTION */}
                <Section className="pt-76 md:pt-96">
                  <div className="w-full max-w-7xl">
                    {/* Header */}
                    <div className="mb-12 md:mb-16">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        OUR HERITAGE
                        <div className="h-1 w-24 md:w-32 bg-[#35c4dd] mt-2"></div>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl">
                        We have been known among{' '}
                        <span className="text-[#35c4dd] font-semibold">many businesses, brands</span>
                        {' '}and{' '}
                        <span className="text-[#35c4dd] font-semibold">clients to provide quality work</span>
                        {' '}for the past Two Decades, uplifting the heritage flag up high.
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-700/50"></div>
                      
                      {/* Timeline Items */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
                        {[
                          {
                            dates: "2005 - 2016",
                            title: "B2B Marketplace",
                            icon: Network,
                            desc: "Started off as one of the many B2B Marketplaces enabling companies to connect with other businesses and conduct business in one place, buying and selling products.",
                            isActive: true
                          },
                          {
                            dates: "2017 - 2019",
                            title: "Digital Agency",
                            icon: Lightbulb,
                            desc: "Adding another feather to the cap, we transitioned to serve as a digital agency, catering to thousands of clients worldwide with diverse digital solutions.",
                            isActive: false
                          },
                          {
                            dates: "2020 - Onwards",
                            title: "Outsourcing Hub",
                            icon: Building2,
                            desc: "Reaching new heights, we have become the outsourcing hub, providing digital marketing, web and app development, and staff augmentation services to IT companies and digital agencies.",
                            isActive: false
                          }
                        ].map((phase, i) => (
                          <div key={i} className="relative group">
                            {/* Timeline Node */}
                            <div className="flex flex-col items-center md:items-start">
                              {/* Icon Circle */}
                              <div className={`relative mb-6 ${i === 0 ? 'md:mt-0' : 'md:mt-20'}`}>
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${
                                  phase.isActive 
                                    ? 'bg-[#35c4dd]/20 border-[#35c4dd] shadow-[0_0_30px_rgba(53,196,221,0.5)]' 
                                    : 'bg-gray-700/30 border-gray-600'
                                } transition-all duration-300 group-hover:scale-110 group-hover:border-[#35c4dd] group-hover:bg-[#35c4dd]/20 group-hover:shadow-[0_0_30px_rgba(53,196,221,0.5)]`}>
                                  <phase.icon className={`w-10 h-10 ${
                                    phase.isActive ? 'text-[#35c4dd]' : 'text-gray-400'
                                  } group-hover:text-[#35c4dd] transition-colors duration-300`} />
                                </div>
                                {/* Timeline Dot on Line (Desktop) */}
                                <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#35c4dd] border-2 border-black group-hover:scale-125 transition-transform duration-300"></div>
                              </div>

                              {/* Content */}
                              <GlassPanel className="text-left hover:bg-white/10 transition-all duration-300 group-hover:border-[#35c4dd]/50">
                                <div className="text-[#35c4dd] text-sm font-mono mb-2 tracking-wider">
                                  {phase.dates}
                                </div>
                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 ${
                                  phase.isActive ? 'text-white' : 'text-gray-300'
                                } group-hover:text-[#35c4dd] transition-colors duration-300`}>
                                  {phase.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                  {phase.desc}
                                </p>
                              </GlassPanel>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Section>

            </Scroll>
            
            {/* Preload assets to prevent hiccups */}
            <Preload all />
          </ScrollControls>
        </Suspense>
      </Canvas>
      
      {/* CTA Section */}
      <CallToAction />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}