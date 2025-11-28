'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Text, ScrollControls, Scroll, useScroll, MeshDistortMaterial, Environment, Sparkles, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Target, Cpu, Code2, Rocket, Globe } from 'lucide-react';
import * as THREE from 'three';

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

const GlassPanel = ({ children, className = "" }: any) => (
  <div className={`p-6 md:p-12 rounded-3xl bg-[#052126]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = "" }: any) => (
  <section className={`w-full min-h-screen md:h-screen flex flex-col justify-center items-center px-4 py-16 md:py-0 relative ${className}`}>
    <div className="max-w-6xl w-full flex justify-center">
      {children}
    </div>
  </section>
);

const StatCard = ({ label, value }: any) => (
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
    <div className="w-full h-screen bg-black text-[#f2f4f4] overflow-hidden">
      
      <Canvas 
        dpr={[1, 1.5]} // OPTIMIZATION: Cap DPR at 1.5 for performance
        gl={{ antialias: false, stencil: false, depth: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}
        camera={{ position: [0, 0, 12], fov: 50 }}
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
                      
                      <h1 className="text-3xl sm:text-5xl md:text-[6rem] font-bold leading-tight md:leading-[0.85] tracking-tighter mb-6 mix-blend-screen">
                        <span className="block">ABOUT</span>
                        <span className="block text-2xl sm:text-4xl md:text-[6rem] whitespace-nowrap">
                          SHARKS AUTOMATION LAB
                        </span>
                      </h1>
                      
                      <p className="max-w-xl mx-auto text-sm sm:text-lg text-gray-300 font-light mb-10 leading-relaxed drop-shadow-xl">
                        Architecting the <span className="text-[#35c4dd] font-semibold">Digital Nervous System</span> of tomorrow.
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

                {/* 2. STORY SECTION */}
                <Section>
                  <GlassPanel className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                        Forged in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a2be2] to-[#35c4dd]">Chaos.</span>
                      </h2>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        We didn't start in a boardroom. We started in the code. Shark Retail was born from the necessity to bring order to the chaotic universe of e-commerce data.
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base font-light">
                        From a single node to a galactic network, our algorithms now process billions of signals every second.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t md:border-l md:border-t-0 border-white/10 pt-6 md:pt-0 md:pl-8">
                      <StatCard value="2050" label="Vision Year" />
                      <StatCard value="50M+" label="Data Points" />
                      <StatCard value="0.01s" label="Latency" />
                      <StatCard value="∞" label="Scale" />
                    </div>
                  </GlassPanel>
                </Section>

                {/* 3. VALUES SECTION */}
                <Section>
                  <div className="w-full max-w-6xl">
                    <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold mb-10 md:mb-16 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                      PRIME DIRECTIVES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "PRECISION", icon: Target, desc: "Absolute accuracy in every transaction." },
                        { title: "VELOCITY", icon: Zap, desc: "Optimized for light-speed execution." },
                        { title: "ADAPTION", icon: Globe, desc: "Evolving automatically to market shifts." }
                      ].map((item, i) => (
                        <GlassPanel key={i} className="hover:bg-white/10 transition-colors duration-500 group">
                          <item.icon className="w-12 h-12 text-[#ffd700] mb-6 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                          <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                        </GlassPanel>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* 4. TECH STACK */}
                <Section>
                  <div className="text-center w-full max-w-4xl">
                    <GlassPanel className="backdrop-blur-2xl bg-black/60">
                        <h2 className="text-2xl sm:text-3xl font-mono text-[#35c4dd] mb-8 md:mb-12 tracking-widest">SYSTEM ARCHITECTURE</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                          {[
                            { icon: Code2, label: "Next.js Core" },
                            { icon: Cpu, label: "Neural Net" },
                            { icon: Rocket, label: "WebGL Engine" },
                            { icon: Globe, label: "Edge Network" },
                          ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                              <div className="p-4 md:p-5 rounded-full border border-white/10 bg-white/5 group-hover:border-[#35c4dd] group-hover:shadow-[0_0_20px_#35c4dd] transition-all">
                                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white" />
                              </div>
                              <span className="font-bold text-xs sm:text-sm tracking-wider text-center">{item.label}</span>
                            </div>
                          ))}
                        </div>
                    </GlassPanel>
                  </div>
                </Section>

                {/* 5. CTA */}
                <Section>
                  <div className="text-center relative z-10">
                    <GlassPanel className="bg-[#000]/50 border-[#35c4dd]/50">
                      <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter text-white leading-tight">
                        ENTER THE <span className="text-[#35c4dd]">VOID</span>
                      </h2>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 md:px-12 py-4 md:py-6 bg-[#35c4dd] text-black font-bold text-lg md:text-xl rounded-none hover:bg-white transition-colors tracking-[0.2em] shadow-[0_0_40px_rgba(53,196,221,0.6)]"
                      >
                        INITIALIZE PROTOCOL
                      </motion.button>
                    </GlassPanel>
                  </div>
                  <div className="absolute bottom-8 text-white/30 text-xs font-mono tracking-widest">
                    SECURE CONNECTION // ENCRYPTED
                  </div>
                </Section>

            </Scroll>
            
            {/* Preload assets to prevent hiccups */}
            <Preload all />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}