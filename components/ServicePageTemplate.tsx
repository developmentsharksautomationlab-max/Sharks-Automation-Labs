// @ts-nocheck
"use client";

import React, { useRef, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useTexture, shaderMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Share2, Hexagon, ArrowDown, MoveUpRight, Globe, Radio, Plus, Diamond, Cpu, Box, Layers, Aperture } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

// --- GSAP REGISTER ---
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. SHADERS (Unchanged - Optimized) ---
const PortfolioShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uHover: 0,
    uVelocity: 0,
  },
  `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uVelocity;
    uniform float uHover;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float bend = sin(uv.y * 3.14159) * uVelocity * 0.1;
      pos.x -= bend;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uVelocity;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      float shiftStrength = (uVelocity * 0.05) + (uHover * 0.02);
      float r = texture2D(uTexture, uv + vec2(shiftStrength, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(shiftStrength, 0.0)).b;
      vec3 color = vec3(r, g, b);
      color *= 1.0 + (uHover * 0.2);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);
extend({ PortfolioShaderMaterial });

// --- DATA CONFIGURATION (EDIT THIS FOR EACH PAGE) ---
const SECTIONS = [
  {
    id: "hero",
    type: "VERTICAL",
    title: "Creative Services",
    subtitle: "Excellence",
    desc: "Get professional creative services from our expert team.",
    color: new THREE.Color("#ff6b9d"), 
    shape: "SPHERE_LIQUID",
    icon: <Hexagon />
  },
  {
    id: "3d",
    type: "VERTICAL",
    title: "QUANTUM\nREALITY",
    subtitle: "Visual Singularity",
    desc: "Hyper-realistic renders existing in superposition. Visuals so sharp they cut reality.",
    points: [
        { title: "Raytracing", text: "Real-time simulation of light paths." },
        { title: "Physics Engine", text: "Gravity, collision, and fluid dynamics." },
        { title: "Sub-surface", text: "Skin and material scattering matrices." },
        { title: "Volumetric Fog", text: "Atmospheric density and light shafts." }
    ],
    color: new THREE.Color("#ff0055"), 
    shape: "TORNADO_CHAOS",
    icon: <Zap />
  },
  {
    id: "horizontal-scroll",
    type: "HORIZONTAL",
    title: "RETHINKING\nSMOOTH SCROLL",
    subtitle: "Architecture",
    desc: "We have to give props to libraries like Locomotive Scroll. But we built our own specifically for React.",
    color: new THREE.Color("#FFD700"), 
    shape: "DNA_EVOLVING",
    icon: <Share2 />,
    points: [
        { id: "01", title: "PERFORMANCE", text: "Heavy budget loss due to CSS transforms." },
        { id: "02", title: "ACCESSIBILITY", text: "No native scrollbar support causing issues." },
        { id: "03", title: "COSTS", text: "Non-negligible bundle size increase." },
        { id: "04", title: "ANIMATION", text: "Complex systems required for parallax." },
        { id: "05", title: "NATIVE APIS", text: "Breaking IntersectionObserver." }
    ]
  },
  {
    id: "pricing",
    type: "PRICING",
    title: "VALUE\nPROTOCOLS",
    subtitle: "Access Granted",
    desc: "Select your clearance level. Enhance your reality with our quantum-tiered packages.",
    color: new THREE.Color("#00FF88"),
    shape: "HYPER_CUBE",
    icon: <Diamond />,
    plans: [
      {
        name: "INITIATE",
        price: "$2,500",
        period: "/project",
        desc: "Entry level access to the grid.",
        features: ["Standard 3D Assets", "2 Revisions", "1080p Renders"],
        highlight: false,
        icon: <Box className="w-6 h-6" />
      },
      {
        name: "OPERATOR",
        price: "$5,000",
        period: "/month",
        desc: "Full system control for pros.",
        features: ["High-Poly Modeling", "5 Revisions", "4K Raytracing", "Fluid Dynamics"],
        highlight: true,
        icon: <Cpu className="w-6 h-6" />
      },
      {
        name: "ARCHITECT",
        price: "$12,000",
        period: "/month",
        desc: "Construct realities without limits.",
        features: ["Unlimited Revisions", "8K Cinema Renders", "Custom Shaders", "Dedicated Team"],
        highlight: false,
        icon: <Layers className="w-6 h-6" />
      },
      {
        name: "SINGULARITY",
        price: "CUSTOM",
        period: "",
        desc: "Beyond the event horizon.",
        features: ["Full Studio Acquisition", "Proprietary Tech", "On-Site Direction"],
        highlight: false,
        icon: <Globe className="w-6 h-6" />
      }
    ]
  },
  {
    id: "portfolio",
    type: "PORTFOLIO_SCROLL",
    title: "ASTRAL\nARCHIVE",
    subtitle: "Selected Works",
    desc: "A collection of realities crafted in the void.",
    color: new THREE.Color("#8A2BE2"),
    shape: "GALAXY_SPIRAL",
    icon: <Aperture />,
    projects: [
      { title: "NEON GENESIS", cat: "CGI / Branding", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
      { title: "CYBER SOUL", cat: "Web Experience", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" },
      { title: "VOID WALKER", cat: "Motion Design", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" },
      { title: "AERO DYNAMICS", cat: "Product Viz", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
    ]
  }
];

// --- 2. RESPONSIVE HELPERS ---
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
};

// --- 3. 3D COMPONENTS (Resilient to screen size) ---

const PortfolioCard = ({ url, position, index }) => {
    const mesh = useRef();
    const material = useRef();
    const [hovered, setHover] = useState(false);
    const [texture, setTexture] = useState(null);
    const { viewport } = useThree();
    
    // Adjust card size based on viewport (Mobile friendly 3D)
    const scaleFactor = viewport.width < 5 ? 0.6 : 1; 

    useEffect(() => {
        new THREE.TextureLoader().load(url, setTexture, undefined, () => {
            // Fallback logic
            const canvas = document.createElement('canvas');
            canvas.width = 512; canvas.height = 512;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#222'; ctx.fillRect(0,0,512,512);
            setTexture(new THREE.CanvasTexture(canvas));
        });
    }, [url]);

    useFrame((state, delta) => {
        if(!mesh.current || !material.current || !texture) return;
        const targetScale = hovered ? 1.1 * scaleFactor : 1 * scaleFactor;
        mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), delta * 4);
        material.current.uHover = THREE.MathUtils.lerp(material.current.uHover, hovered ? 1 : 0, delta * 5);
        material.current.uTime = state.clock.elapsedTime;
    });

    if (!texture) return null;

    return (
        <mesh 
            ref={mesh} 
            position={position}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[4, 2.5, 32, 32]} />
            {/* @ts-ignore */}
            <portfolioShaderMaterial ref={material} uTexture={texture} transparent />
        </mesh>
    );
};

const PortfolioGallery3D = ({ scrollProgress }) => {
    const group = useRef();
    const projects = SECTIONS.find(s => s.type === "PORTFOLIO_SCROLL").projects;
    const { viewport } = useThree();
    
    // Responsive Gap Logic
    const gap = viewport.width < 5 ? 3 : 5; 
    const width = projects.length * gap;

    useFrame(() => {
        if (!group.current) return;
        // Adjusted logic to center properly on all screens
        const xPos = -(scrollProgress.current * (width - gap)); 
        const offset = viewport.width < 5 ? viewport.width / 2 : viewport.width / 3;
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, xPos + offset, 0.08);
        
        const velocity = Math.abs(xPos - group.current.position.x);
        group.current.children.forEach(child => {
            if(child.children[0]?.material?.uniforms) {
                 child.children[0].material.uniforms.uVelocity.value = velocity;
            }
        });
    });

    return (
        <group ref={group}>
            {projects.map((proj, i) => (
                <group key={i} position={[i * gap, 0, 0]}>
                     <PortfolioCard url={proj.img} position={[0, 0, 0]} index={i} />
                     <Text
                        position={[-1.5, -1.8, 0.1]}
                        fontSize={viewport.width < 5 ? 0.15 : 0.2}
                        color="white"
                        anchorX="left"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                     >
                        {proj.title}
                     </Text>
                </group>
            ))}
        </group>
    );
};

// Optimized Particle System for Low-End Devices
const HyperParticles = ({ sectionIndex }) => {
  const mesh = useRef(null);
  const { mouse, viewport } = useThree();
  // Reduce particle count on mobile/smartwatches for performance
  const count = viewport.width < 5 ? 1500 : 5000; 
  
  const [positions, randomness] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      rnd[i] = Math.random();
    }
    return [pos, rnd];
  }, [count]);
  
  const currentPositions = useMemo(() => new Float32Array(positions), [positions]);

  const getTargetPosition = (i, type, time) => {
    const t = i / count; 
    let x = 0, y = 0, z = 0;
    const rnd = randomness[i];
    
    switch (type) {
      case "SPHERE_LIQUID": 
        const theta = Math.acos(2 * t - 1);
        const phi = Math.sqrt(count * Math.PI) * theta;
        const radius = 3.5 + Math.sin(theta * 10 + time * 1.5) * 0.2;
        x = radius * Math.sin(theta) * Math.cos(phi);
        y = radius * Math.sin(theta) * Math.sin(phi);
        z = radius * Math.cos(theta);
        break;
      case "TORNADO_CHAOS": 
        const angle = t * Math.PI * 14 + time * 0.2;
        const r = 0.2 + t * 5;
        x = Math.cos(angle) * r;
        z = Math.sin(angle) * r;
        y = (t - 0.5) * 12;
        break;
      case "DNA_EVOLVING": 
        const waveX = (t - 0.5) * 20; 
        const waveY = Math.sin(waveX * 0.5 + time) * 2;
        const waveZ = Math.cos(waveX * 0.5 + time) * 2;
        x = waveX; y = waveY; z = waveZ;
        break;
      case "GALAXY_SPIRAL": 
        x = (Math.random() - 0.5) * 25; 
        y = (Math.random() - 0.5) * 10;
        z = -5 + Math.random() * -5;
        break;
      case "HYPER_CUBE": 
        const side = 6; 
        const k = Math.floor(i % 20);
        const l = Math.floor((i / 20) % 20);
        const m = Math.floor((i / 400));
        x = (k / 20 - 0.5) * side;
        y = (l / 20 - 0.5) * side;
        z = (m / 20 - 0.5) * side;
        if (Math.random() > 0.98) y += Math.sin(time * 10) * 2;
        break;
    }
    
    if (type !== "HYPER_CUBE" && type !== "GALAXY_SPIRAL") {
        x += Math.sin(time + rnd * 10) * 0.1;
        y += Math.cos(time + rnd * 10) * 0.1;
    }
    return [x, y, z];
  };

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const targetType = SECTIONS[sectionIndex].shape;
    const hoverX = (mouse.x * viewport.width) / 2;
    const hoverY = (mouse.y * viewport.height) / 2;
    
    // Throttle updates on small screens if needed, but R3F is usually fast enough
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const [tx, ty, tz] = getTargetPosition(i, targetType, time);
      const speed = 0.02 + (randomness[i] * 0.01);
      
      currentPositions[idx] += (tx - currentPositions[idx]) * speed;
      currentPositions[idx + 1] += (ty - currentPositions[idx + 1]) * speed;
      currentPositions[idx + 2] += (tz - currentPositions[idx + 2]) * speed;
      
      // Repulsion (Mouse Interaction)
      const dx = currentPositions[idx] - hoverX;
      const dy = currentPositions[idx + 1] - hoverY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4) {
        const force = (4 - dist) * 0.5; 
        const angle = Math.atan2(dy, dx);
        currentPositions[idx] += Math.cos(angle) * force * 0.1;
        currentPositions[idx + 1] += Math.sin(angle) * force * 0.1;
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    if (targetType === "HYPER_CUBE") {
         mesh.current.rotation.y += 0.005;
         mesh.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    } else {
         mesh.current.rotation.y = time * 0.05;
         mesh.current.rotation.x = 0;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[currentPositions, 3]} />
      </bufferGeometry>
      <pointsMaterial 
        size={viewport.width < 5 ? 0.08 : 0.06} // Bigger particles on mobile for visibility
        color={SECTIONS[sectionIndex].color} 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
      />
    </points>
  );
};

// --- 4. ULTRA-RESPONSIVE UI COMPONENTS ---

const VerticalSection = ({ data, index }) => {
  const isFirstSection = index === 0;
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (isFirstSection || isMobile || !sectionRef.current || !contentRef.current) return;
    
    const parallax = gsap.to(contentRef.current, {
      y: window.innerHeight * 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    });
    return () => parallax.kill();
  }, [isFirstSection, isMobile]);

  if (isFirstSection) {
    return (
      <section 
        ref={sectionRef} 
        id={`section-${index}`} 
        className="min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 overflow-hidden snap-center"
      >
        {/* 8K Centering wrapper */}
        <div ref={contentRef} className="relative z-10 max-w-[2000px] w-full flex flex-col items-center justify-center text-center pointer-events-auto">
          <div className="relative z-10 px-4 py-12 md:px-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl min-[2000px]:text-9xl font-bold text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
                {data.title}
            </h2>
            <p className="text-white text-base sm:text-xl md:text-2xl min-[2000px]:text-4xl font-light leading-relaxed max-w-xs sm:max-w-2xl min-[2000px]:max-w-4xl mx-auto mb-12 text-shadow-sm">
                {data.desc}
            </p>
            <div className="flex flex-col items-center gap-3 mt-8 animate-bounce">
              <span className="text-[10px] sm:text-sm font-mono text-white uppercase tracking-widest min-[2000px]:text-xl">Scroll Down</span>
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 min-[2000px]:w-10 min-[2000px]:h-10 text-white" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef} 
      id={`section-${index}`} 
      className="relative w-full min-h-screen flex justify-center pointer-events-auto py-12 sm:py-20 mb-10 sm:mb-20"
    >
      <div ref={contentRef} className="max-w-[2000px] w-full flex flex-col md:flex-row items-start relative px-4 sm:px-8 lg:px-12">
        
        {/* Left Column - STICKY on Desktop, STATIC on Mobile */}
        <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 flex flex-col justify-start md:justify-center p-2 sm:p-8 md:p-12 z-20 pt-20 md:pt-0">
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-[1px] bg-current" style={{ color: '#' + data.color.getHexString() }}></div>
                {/* Hide detailed subtitle on smartwatch 200px */}
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/70 max-[300px]:hidden">
                    0{index} // {data.subtitle}
                </span>
            </div>
            {/* Responsive Typography: clamps and breakpoints for 8K to 200px */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[2000px]:text-8xl font-bold text-white tracking-tighter leading-[1] mb-4 sm:mb-8 mix-blend-overlay break-words">
                {data.title}
            </h2>
            <div className="text-sm sm:text-lg md:text-xl min-[2000px]:text-3xl font-light leading-relaxed text-gray-200 mt-2 sm:mt-4 max-w-md min-[2000px]:max-w-2xl border-l-2 border-white/20 pl-4 sm:pl-6">
                {data.desc}
            </div>
        </div>

        {/* Right Column - SCROLLING CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-start p-2 sm:p-8 md:p-12 z-20 md:pt-[30vh] pb-[10vh]">
            <div className="mb-8 sm:mb-12 opacity-50 font-mono text-[10px] sm:text-xs min-[2000px]:text-lg">
                 <div className="flex items-center gap-2 mb-2">
                     <Radio className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse text-current" style={{ color: '#' + data.color.getHexString() }} />
                     <span className="max-[320px]:hidden">SYSTEM DATA // {data.points?.length} MODULES</span>
                 </div>
            </div>
            {data.points && data.points.map((point, i) => (
                <div key={i} className="min-h-[25vh] md:min-h-[40vh] flex items-center group mb-4 md:mb-0">
                    <div className="w-full backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 rounded-xl md:rounded-3xl hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
                         {/* Simplify effects on small screens */}
                         <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-current to-transparent blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-40 transition-opacity duration-700 hidden sm:block" style={{ color: '#' + data.color.getHexString() }} />
                         <div className="relative z-10">
                             <div className="flex justify-between items-start mb-4 sm:mb-6">
                                 <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:rotate-90 transition-transform duration-500">
                                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                                 </div>
                                 <span className="font-mono text-[10px] sm:text-xs text-white/40">{i < 9 ? `0${i+1}` : i+1}</span>
                             </div>
                             <h3 className="text-lg sm:text-2xl md:text-3xl min-[2000px]:text-5xl font-bold text-white mb-2 sm:mb-4">{point.title}</h3>
                             <p className="text-sm sm:text-lg min-[2000px]:text-2xl text-gray-400 leading-relaxed max-w-sm min-[2000px]:max-w-xl">{point.text}</p>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const HorizontalSection = ({ data, index }) => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const isMobile = useIsMobile();

    useLayoutEffect(() => {
        // Recalculate widths dynamically based on screen size
        const ctx = gsap.context(() => {
            const cardsCount = data.points.length;
            // Responsive Card Widths:
            // Mobile: 85vw (Single card focus)
            // Tablet: 45vw
            // Desktop: 600px
            // 8K: 1000px
            let cardWidth = 600;
            if (window.innerWidth < 768) cardWidth = window.innerWidth * 0.85;
            else if (window.innerWidth >= 2560) cardWidth = 1000;
            
            const gap = 32; 
            const totalWidth = (cardWidth * cardsCount) + (gap * (cardsCount - 1));
            const scrollDistance = totalWidth - window.innerWidth + (window.innerWidth < 768 ? 40 : 160);
            
            gsap.fromTo(
                sectionRef.current,
                { x: 0 },
                {
                    x: `-${scrollDistance}px`, 
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: `+=${scrollDistance}`,
                        scrub: 0.5,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true, // Crucial for responsive resizing
                    },
                }
            );
        }, triggerRef);
        return () => ctx.revert();
    }, [data.points.length]);

    const themeColor = '#' + data.color.getHexString();
    
    return (
        <section ref={triggerRef} id={`section-${index}`} className="relative w-full h-screen overflow-hidden bg-black/20 mb-20">
            <div className="relative h-full flex flex-col w-full max-w-[2560px] mx-auto z-20">
                <div className="flex-shrink-0 pt-16 sm:pt-24 px-6 md:px-20 w-full">
                     <div className="max-w-7xl min-[2000px]:max-w-[80%]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-1 bg-current" style={{ color: themeColor }} />
                            <span className="font-mono text-xs sm:text-sm tracking-widest text-white/60">0{index} // {data.subtitle}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[2000px]:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6 uppercase">
                            {data.title.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>
                        {/* Hide description on very small screens to save space */}
                        <p className="text-base sm:text-xl min-[2000px]:text-3xl text-gray-400 max-w-2xl min-[2000px]:max-w-4xl font-light max-[360px]:hidden">{data.desc}</p>
                     </div>
                </div>
                <div className="flex-1 flex items-center overflow-visible pl-6 md:pl-20">
                    <div ref={sectionRef} className="flex gap-4 sm:gap-8 w-auto will-change-transform"> 
                        {data.points.map((point, i) => (
                            // Dynamic Width Classes
                            <div key={i} className="w-[85vw] sm:w-[45vw] md:w-[600px] min-[2560px]:w-[1000px] flex-shrink-0 group">
                                <div className="relative border-t border-white/20 pt-4 sm:pt-8 hover:border-yellow-400 transition-colors duration-500">
                                    <span className="absolute -top-6 sm:-top-10 left-0 text-[80px] sm:text-[120px] min-[2560px]:text-[200px] font-bold text-white/5 select-none z-0">{point.id}</span>
                                    <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 h-[280px] sm:h-[320px] min-[2560px]:h-[500px] flex flex-col justify-between rounded-xl shadow-2xl">
                                        <div>
                                            <h3 className="text-lg md:text-xl min-[2000px]:text-4xl font-bold uppercase tracking-wide text-white mb-4">{point.title}</h3>
                                            <p className="text-gray-400 text-sm sm:text-base md:text-lg min-[2000px]:text-2xl leading-relaxed">{point.text}</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="h-[1px] w-full bg-white/10 mr-4 mb-3" />
                                            <div className="p-3 border border-white/20 rounded-full text-white cursor-pointer hover:bg-white hover:text-black transition-colors">
                                                <MoveUpRight className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const PortfolioSectionScroll = ({ data, index, setScrollProgress }) => {
    const triggerRef = useRef(null);
    const isMobile = useIsMobile();

    useLayoutEffect(() => {
        const trig = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 0.5,
            pinSpacing: true,
            onUpdate: (self) => {
                if(setScrollProgress) setScrollProgress.current = self.progress;
            }
        });
        return () => trig.kill();
    }, [setScrollProgress]);

    return (
        <section 
            ref={triggerRef} 
            id={`section-${index}`} 
            className="relative w-full h-screen overflow-hidden mb-20"
        >
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between py-12 px-6 sm:px-8 md:px-20 max-w-[2560px] mx-auto">
                <div className="mt-16 sm:mt-0">
                     <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-1 bg-current" style={{ color: '#8A2BE2' }} />
                        <span className="font-mono text-sm tracking-widest text-white/60">0{index} // {data.subtitle}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl min-[2000px]:text-9xl font-bold text-white tracking-tighter leading-[0.9] uppercase mix-blend-overlay drop-shadow-lg">
                        {data.title}
                    </h2>
                </div>
                
                <div className="flex justify-between items-end w-full pb-20 sm:pb-0">
                    <p className="text-white/50 max-w-sm min-[2000px]:max-w-xl font-light text-xs sm:text-sm min-[2000px]:text-xl border-l border-white/20 pl-4">{data.desc}</p>
                    <div className="text-right hidden sm:block">
                         <span className="block text-xs min-[2000px]:text-lg font-mono text-white/30">SCROLL TO EXPLORE</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PricingSection = ({ data, index }) => {
    // Standard Grid is better for Pricing across extremely varied screens than custom 3D
    return (
        <section 
            id={`section-${index}`} 
            className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden z-20 mb-20 px-4"
        >
            <div className="text-center mb-16 relative z-10">
                 <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
                    <span className="text-[#00ff88] font-mono text-xs tracking-widest uppercase">Protocol Initialized</span>
                 </div>
                 <h2 className="text-3xl sm:text-5xl lg:text-6xl min-[2000px]:text-8xl font-bold text-white tracking-tighter mb-4 uppercase">
                    {data.title.split('\n').join(' ')}
                 </h2>
                 <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg min-[2000px]:text-2xl">{data.desc}</p>
            </div>
            
            {/* ULTRA RESPONSIVE GRID: 1 col (Phone), 2 col (Tablet), 4 col (Desktop), Scaled (8K) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl min-[2000px]:max-w-[90%] px-2 sm:px-6">
                {data.plans.map((plan, i) => (
                    <div key={i} className={`relative group w-full min-h-[500px] min-[2000px]:min-h-[800px] bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col hover:bg-white/10 hover:border-[#00ff88]/50 transition-all duration-300 ${plan.highlight ? 'border-[#00ff88] bg-[#00ff88]/5' : ''}`}>
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 rounded-lg bg-white/5 text-[#00ff88]">{plan.icon}</div>
                            {plan.highlight && (
                                <div className="px-3 py-1 rounded bg-[#00ff88] text-black text-[10px] font-bold uppercase">Rec</div>
                            )}
                        </div>
                        <div className="mb-8">
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-gray-400">// {plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl sm:text-4xl min-[2000px]:text-6xl font-bold text-white">{plan.price}</span>
                                <span className="text-sm text-gray-500 font-mono">{plan.period}</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 mb-8">
                            {plan.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm min-[2000px]:text-xl text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/contact" className="w-full py-4 bg-white/10 hover:bg-[#00ff88] hover:text-black text-white text-center font-bold uppercase tracking-widest text-xs min-[2000px]:text-lg rounded transition-colors">
                            Initialize
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function ServicePageTemplate() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const portfolioScrollProgress = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Smooth scroll configuration
    ScrollTrigger.config({ 
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
    });
    
    // Refresh ScrollTrigger on resize to handle 8K -> 200px transitions
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      SECTIONS.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: `#section-${i}`,
          start: "top center", 
          end: "bottom center",
          onEnter: () => setCurrentSection(i),
          onEnterBack: () => setCurrentSection(i),
        });
      });
    }, containerRef);
    
    return () => {
        ctx.revert();
        window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#00ff88] selection:text-black">
      {/* Hide Custom Cursor on touch devices for better UX */}
      <div className="hidden md:block"><CustomCursor /></div>
      
      {/* 3D BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto">
        <Canvas 
            gl={{ antialias: true, powerPreference: "high-performance" }} 
            dpr={[1, 1.5]} // Cap DPR at 1.5 for performance on 8K screens
            camera={{ position: [0, 0, 15], fov: 45 }} // Fixed camera
        >
          <HyperParticles sectionIndex={currentSection} />
          
          {/* Load 3D Gallery only when near the section or standard devices */}
          {SECTIONS[currentSection].type === "PORTFOLIO_SCROLL" && (
              <React.Suspense fallback={null}>
                  <PortfolioGallery3D scrollProgress={portfolioScrollProgress} />
              </React.Suspense>
          )}

          {/* Post Processing - Simplify for very small screens via CSS/JS logic if needed, but R3F handles well */}
          {/* @ts-ignore */}
          <EffectComposer disableNormalPass multisampling={0}>
             <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.6} />
             {/* @ts-ignore */}
             <Noise opacity={0.05} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[5] pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 pt-0">
        {SECTIONS.map((section, idx) => {
            if (section.type === "HORIZONTAL") return <HorizontalSection key={section.id} data={section} index={idx} />
            if (section.type === "PRICING") return <PricingSection key={section.id} data={section} index={idx} />
            if (section.type === "PORTFOLIO_SCROLL") return <PortfolioSectionScroll key={section.id} data={section} index={idx} setScrollProgress={portfolioScrollProgress} />
            return <VerticalSection key={section.id} data={section} index={idx} />
        })}
      </div>

      <div className="relative z-10">
        <Footer />
      </div>

      <style jsx global>{`
        /* Reset margins for full control */
        body { margin: 0; padding: 0; background: #000; overflow-x: hidden; }
        
        /* Disable custom cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
            * { cursor: auto !important; }
        }
        
        /* 200px Watch Specific Fixes */
        @media (max-width: 320px) {
            h2 { font-size: 1.5rem !important; }
            p { font-size: 0.8rem !important; }
            .pricing-card { min-height: auto !important; }
        }
      `}</style>
    </div>
  );
}

// --- UTILS ---
const CustomCursor = () => {
    const cursor = useRef(null);
    const ring = useRef(null);
    useEffect(() => {
        // Simple safe check
        if(typeof window === 'undefined') return; 

        const move = (e) => {
            gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.15 });
        };
        const down = () => gsap.to(ring.current, { scale: 1.5, borderColor: '#00ff88', borderWidth: '2px' });
        const up = () => gsap.to(ring.current, { scale: 1, borderColor: 'rgba(255,255,255,0.3)', borderWidth: '1px' });
        
        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
        }
    }, []);
    return (
        <>
            <div ref={cursor} className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference top-0 left-0" />
            <div ref={ring} className="fixed w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform top-0 left-0" />
        </>
    )
}