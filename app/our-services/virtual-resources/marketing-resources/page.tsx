// @ts-nocheck
"use client";

import React, { useRef, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useTexture, shaderMaterial, Text, Image as DreiImage } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Share2, Hexagon, ArrowDown, MoveUpRight, Globe, Radio, Plus, Diamond, Cpu, Box, Layers, Eye, Aperture } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- GSAP REGISTER ---
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 1. ADVANCED SHADER (Velocity Based Distortion) ---
const PortfolioShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uHover: 0,
    uVelocity: 0, // Scroll speed influence
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uVelocity;
    uniform float uHover;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // WARP EFFECT: Bend geometry based on scroll velocity
      // Curving the plane slightly like a tunnel when scrolling fast
      float bend = sin(uv.y * 3.14159) * uVelocity * 0.1;
      pos.x -= bend;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uVelocity;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // RGB Shift based on Velocity + Hover
      float shiftStrength = (uVelocity * 0.05) + (uHover * 0.02);
      
      float r = texture2D(uTexture, uv + vec2(shiftStrength, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(shiftStrength, 0.0)).b;

      vec3 color = vec3(r, g, b);
      
      // Brightness boost on hover
      color *= 1.0 + (uHover * 0.2);

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ PortfolioShaderMaterial });

// --- CONFIGURATION ---
const SECTIONS = [
  {
    id: "hero",
    type: "VERTICAL",
    title: "Marketing Resources",
    subtitle: "Marketing Resources Excellence",
    desc: "Get professional marketing resources services from our expert team.",
    color: new THREE.Color("#ffaa00"), 
    shape: "SPHERE_LIQUID",
    icon: <Hexagon />
  },
  // --- FIXED SECTION 2 (4 BOXES RESTORED) ---
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
  // --- PORTFOLIO SECTION (MOVED TO LAST) ---
  {
    id: "portfolio",
    type: "PORTFOLIO_SCROLL",
    title: "ASTRAL\nARCHIVE",
    subtitle: "Selected Works",
    desc: "A collection of realities crafted in the void.",
    color: new THREE.Color("#8A2BE2"), // Blue Violet
    shape: "GALAXY_SPIRAL",
    icon: <Aperture />,
    projects: [
      { title: "NEON GENESIS", cat: "CGI / Branding", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
      { title: "CYBER SOUL", cat: "Web Experience", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" },
      { title: "VOID WALKER", cat: "Motion Design", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" },
      { title: "AERO DYNAMICS", cat: "Product Viz", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
      { title: "GLASS MORPH", cat: "UI/UX System", img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop" },
      { title: "FLUID SIM", cat: "Technical Art", img: "https://images.unsplash.com/photo-1605631088325-1c34eb39247c?q=80&w=1000&auto=format&fit=crop" },
      { title: "CHROME HEARTS", cat: "Fashion 3D", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" },
      { title: "DIGITAL DUST", cat: "Environment", img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop" }
    ]
  }
];

// --- 2. 3D COMPONENTS ---

// Portfolio Item Component (Single Card)
const PortfolioCard = ({ url, position, index, groupRef }) => {
    const mesh = useRef();
    const material = useRef();
    const [hovered, setHover] = useState(false);
    const [texture, setTexture] = useState(null);
    
    // Load texture with error handling
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(
            url,
            (loadedTexture) => {
                loadedTexture.minFilter = THREE.LinearFilter;
                loadedTexture.magFilter = THREE.LinearFilter;
                setTexture(loadedTexture);
            },
            undefined,
            (error) => {
                console.warn(`Failed to load texture: ${url}`, error);
                // Create a fallback colored texture
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 512;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(0, 0, 512, 512);
                ctx.fillStyle = '#8A2BE2';
                ctx.font = '48px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('IMAGE', 256, 256);
                const fallbackTexture = new THREE.CanvasTexture(canvas);
                setTexture(fallbackTexture);
            }
        );
    }, [url]);
    
    // Scale up on hover
    useFrame((state, delta) => {
        if(!mesh.current || !material.current || !texture) return;
        
        // Smooth Hover State
        const targetScale = hovered ? 1.1 : 1;
        mesh.current.scale.x = THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, delta * 4);
        mesh.current.scale.y = THREE.MathUtils.lerp(mesh.current.scale.y, targetScale, delta * 4);

        // Pass global velocity to shader
        material.current.uHover = THREE.MathUtils.lerp(material.current.uHover, hovered ? 1 : 0, delta * 5);
        
        // Time for shader
        material.current.uTime = state.clock.elapsedTime;
    });

    if (!texture) return null;

    return (
        <mesh 
            ref={mesh} 
            position={position}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
            onPointerOut={() => { document.body.style.cursor = 'none'; setHover(false); }}
        >
            <planeGeometry args={[4, 2.5, 32, 32]} />
            {/* @ts-ignore */}
            <portfolioShaderMaterial ref={material} uTexture={texture} transparent />
        </mesh>
    );
};

// The Gallery Container controlled by ScrollTrigger
const PortfolioGallery3D = ({ scrollProgress }) => {
    const group = useRef();
    const projects = SECTIONS.find(s => s.type === "PORTFOLIO_SCROLL").projects;
    const { viewport } = useThree();
    
    // Layout: A long horizontal row
    const gap = 5; // Distance between cards
    const width = projects.length * gap;

    useFrame((state) => {
        if (!group.current) return;
        
        // Map scroll progress (0 to 1) to horizontal position
        // We want to move LEFT as we scroll DOWN
        const xPos = -(scrollProgress.current * (width - gap)); 
        
        // Smooth Lerp for the whole group movement (High-End Feel)
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, xPos + (viewport.width/3), 0.08);

        // Velocity Calculation for Shader
        const velocity = Math.abs(xPos - group.current.position.x);
        
        // Apply Velocity to children shaders
        group.current.children.forEach(child => {
            if(child.material && child.material.uniforms) {
                 child.material.uniforms.uVelocity.value = velocity;
            }
        });
    });

    return (
        <group ref={group} position={[0, 0, 0]}>
            {projects.map((proj, i) => (
                <group key={i} position={[i * gap, 0, 0]}>
                     <PortfolioCard url={proj.img} position={[0, 0, 0]} index={i} />
                     {/* 3D Text below card */}
                     <Text
                        position={[-1.8, -1.5, 0.1]}
                        fontSize={0.2}
                        color="white"
                        anchorX="left"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                     >
                        0{i+1} // {proj.title}
                     </Text>
                     <Text
                        position={[-1.8, -1.8, 0.1]}
                        fontSize={0.12}
                        color="gray"
                        anchorX="left"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                     >
                        {proj.cat.toUpperCase()}
                     </Text>
                </group>
            ))}
        </group>
    );
};

// --- PARTICLE ENGINE ---
const HyperParticles = ({ sectionIndex }) => {
  const count = 6000; 
  const mesh = useRef(null);
  const { mouse, viewport } = useThree();
  
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
  }, []);
  
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
        // Background for Portfolio
        x = (Math.random() - 0.5) * 25; // Wider spread
        y = (Math.random() - 0.5) * 10;
        z = -5 + Math.random() * -5; // Behind the cards
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
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const [tx, ty, tz] = getTargetPosition(i, targetType, time);
      const speed = 0.02 + (randomness[i] * 0.01);
      
      currentPositions[idx] += (tx - currentPositions[idx]) * speed;
      currentPositions[idx + 1] += (ty - currentPositions[idx + 1]) * speed;
      currentPositions[idx + 2] += (tz - currentPositions[idx + 2]) * speed;
      
      // Repulsion
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
    
    // Rotation logic
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
        size={0.06} 
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

// --- 3. UI & LAYOUT COMPONENTS ---

const VerticalSection = ({ data, index }) => {
  const isFirstSection = index === 0;
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Parallax effect for non-first sections
  useLayoutEffect(() => {
    if (isFirstSection || !sectionRef.current || !contentRef.current) return;
    
    const parallax = gsap.to(contentRef.current, {
      y: window.innerHeight * 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8, // Smoother parallax
      }
    });

    return () => parallax.kill();
  }, [isFirstSection]);

  if (isFirstSection) {
    return (
      <section 
        ref={sectionRef} 
        id={`section-${index}`} 
        className="h-screen w-full relative flex items-center justify-center px-6 overflow-hidden snap-center"
      >
        <div ref={contentRef} className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center text-center pointer-events-auto">
          <div className="relative z-10 px-8 py-12">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">{data.title}</h2>
            <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-12">{data.desc}</p>
            <div className="flex flex-col items-center gap-3 mt-8 animate-bounce">
              <span className="text-sm font-mono text-white uppercase tracking-widest">Scroll Down</span>
              <ArrowDown className="w-6 h-6 text-white" />
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
      className="relative w-full min-h-screen flex justify-center pointer-events-auto py-20 mb-20"
    >
      <div ref={contentRef} className="max-w-7xl w-full flex flex-col md:flex-row items-start relative">
        <div className="md:w-1/2 h-screen sticky top-0 flex flex-col justify-center p-8 md:p-12 z-20">
            <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-current" style={{ color: '#' + data.color.getHexString() }}></div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">0{index} // {data.subtitle}</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8 mix-blend-overlay break-words">{data.title}</h2>
            <div className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 mt-4 max-w-md border-l-2 border-white/20 pl-6">{data.desc}</div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-start p-8 md:p-12 z-20 pt-[30vh] pb-[10vh]">
            <div className="mb-12 opacity-50 font-mono text-xs">
                 <div className="flex items-center gap-2 mb-2">
                     <Radio className="w-4 h-4 animate-pulse text-current" style={{ color: '#' + data.color.getHexString() }} />
                     <span>SYSTEM DATA // {data.points?.length} MODULES DETECTED</span>
                 </div>
            </div>
            {data.points && data.points.map((point, i) => (
                <div key={i} className="min-h-[30vh] md:min-h-[40vh] flex items-center group">
                    <div className="w-full backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-none md:rounded-3xl hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-current to-transparent blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ color: '#' + data.color.getHexString() }} />
                         <div className="relative z-10">
                             <div className="flex justify-between items-start mb-6">
                                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:rotate-90 transition-transform duration-500"><Plus className="w-5 h-5" /></div>
                                 <span className="font-mono text-xs text-white/40">{i < 9 ? `0${i+1}` : i+1}</span>
                             </div>
                             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{point.title}</h3>
                             <p className="text-lg text-gray-400 leading-relaxed max-w-sm">{point.text}</p>
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
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        // Parallax for header
        if (headerRef.current) {
            const headerParallax = gsap.to(headerRef.current, {
                y: window.innerHeight * 0.08,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.8, // Smoother parallax
                }
            });
        }

        // Calculate exact scroll distance based on content width
        const cardsCount = data.points.length;
        const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.85 : 600;
        const gap = 32; // 8 * 4 (gap-8 = 2rem = 32px)
        const totalWidth = (cardWidth * cardsCount) + (gap * (cardsCount - 1));
        const scrollDistance = totalWidth - window.innerWidth + (window.innerWidth < 768 ? 64 : 160); // Account for padding
        
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: `-${scrollDistance}px`, 
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${scrollDistance}`,
                    scrub: 0.2, // Ultra smooth - even lower for butter feel
                    pin: true,
                    anticipatePin: 1,
                    pinSpacing: true, // Add proper spacing to prevent overlap
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, [data.points.length]);

    const themeColor = '#' + data.color.getHexString();
    return (
        <section ref={triggerRef} id={`section-${index}`} className="relative w-full h-screen overflow-hidden bg-black/20 mb-20">
            <div className="relative h-full flex flex-col w-full max-w-[1920px] mx-auto z-20">
                <div ref={headerRef} className="flex-shrink-0 pt-16 px-8 md:px-20 w-full">
                     <div className="max-w-7xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-1 bg-current" style={{ color: themeColor }} />
                            <span className="font-mono text-sm tracking-widest text-white/60">0{index} // {data.subtitle}</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 uppercase">
                            {data.title.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-light">{data.desc}</p>
                     </div>
                </div>
                <div className="flex-1 flex items-center overflow-visible pl-8 md:pl-20">
                    <div ref={sectionRef} className="flex gap-8 w-[400vw] will-change-transform"> 
                        {data.points.map((point, i) => (
                            <div key={i} className="w-[85vw] md:w-[600px] flex-shrink-0 group">
                                <div className="relative border-t border-white/20 pt-8 hover:border-yellow-400 transition-colors duration-500">
                                    <span className="absolute -top-10 left-0 text-[120px] font-black text-white/5 select-none group-hover:text-yellow-500/10 transition-colors duration-500 z-0">{point.id}</span>
                                    <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-10 h-[320px] flex flex-col justify-between rounded-xl hover:bg-white/10 transition-all duration-300 shadow-2xl">
                                        <div>
                                            <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4 group-hover:text-yellow-400 transition-colors">{point.title}</h3>
                                            <p className="text-gray-400 text-lg leading-relaxed">{point.text}</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="h-[1px] w-full bg-white/10 mr-4 mb-3 group-hover:bg-yellow-400/50 transition-colors" />
                                            <div className="p-3 border border-white/20 rounded-full text-white group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black transition-all duration-300 cursor-pointer">
                                                <MoveUpRight className="w-5 h-5" />
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

// --- NEW PORTFOLIO SECTION IMPLEMENTATION (HYBRID SCROLL) ---
const PortfolioSectionScroll = ({ data, index, setScrollProgress }) => {
    const triggerRef = useRef(null);
    const overlayRef = useRef(null);

    useLayoutEffect(() => {
        // Parallax for overlay text
        if (overlayRef.current) {
            const overlayParallax = gsap.to(overlayRef.current, {
                y: window.innerHeight * 0.08,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.8, // Smoother parallax
                }
            });
        }

        const trig = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top top",
            end: "+=4000", // Long scroll for many items
            pin: true,
            scrub: 0.5, // Ultra smooth - lower value for butter feel
            pinSpacing: true, // Add proper spacing to prevent overlap
            onUpdate: (self) => {
                // Update the shared state for the 3D canvas
                if(setScrollProgress) {
                    setScrollProgress.current = self.progress;
                }
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
             {/* HTML OVERLAY FOR TEXT (Fixed position while pinned) */}
            <div ref={overlayRef} className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between py-12 px-8 md:px-20">
                <div>
                     <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-1 bg-current" style={{ color: '#8A2BE2' }} />
                        <span className="font-mono text-sm tracking-widest text-white/60">0{index} // {data.subtitle}</span>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] uppercase mix-blend-overlay drop-shadow-lg">
                        {data.title}
                    </h2>
                </div>
                
                <div className="flex justify-between items-end w-full">
                    <p className="text-white/50 max-w-sm font-light text-sm md:text-base border-l border-white/20 pl-4">{data.desc}</p>
                    <div className="text-right hidden md:block">
                         <span className="block text-xs font-mono text-white/30">SCROLL TO EXPLORE</span>
                         <span className="block text-xs font-mono text-[#8A2BE2] animate-pulse"> {'>>'}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PricingSection = ({ data, index }) => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    // Parallax effect
    useLayoutEffect(() => {
        if (!sectionRef.current || !contentRef.current) return;
        
        const parallax = gsap.to(contentRef.current, {
            y: window.innerHeight * 0.12,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8, // Smoother parallax
            }
        });

        return () => parallax.kill();
    }, []);

    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.pricing-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.setProperty('--rx', `${rotateX}deg`);
            card.style.setProperty('--ry', `${rotateY}deg`);
        });
    };

    const handleMouseLeave = () => {
        const cards = document.querySelectorAll('.pricing-card');
        cards.forEach(card => {
            card.style.setProperty('--rx', `0deg`);
            card.style.setProperty('--ry', `0deg`);
        });
    };

    return (
        <section 
            ref={sectionRef}
            id={`section-${index}`} 
            className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-visible z-20 perspective-[2000px] mb-20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#00ff88] blur-[150px] opacity-[0.05] pointer-events-none rounded-full mix-blend-screen" />
            <div ref={contentRef} className="text-center mb-16 relative z-10 px-4">
                 <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
                    <span className="text-[#00ff88] font-mono text-xs tracking-widest uppercase">Protocol Initialized</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    {data.title.split('\n').join(' ')}
                 </h2>
                 <p className="text-gray-400 max-w-2xl mx-auto text-lg">{data.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[1600px] px-6 md:px-12">
                {data.plans.map((plan, i) => (
                    <div 
                        key={i}
                        className={`pricing-card group relative w-full h-full min-h-[550px] transition-all duration-500 ease-out`}
                        style={{
                            transform: 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${plan.highlight ? 'from-[#00ff88] via-transparent to-[#00ff88]' : 'from-white/20 via-transparent to-white/10'} p-[1px] mask-gradient`}>
                             <div className="absolute inset-0 bg-black rounded-2xl" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,136,0.03)_50%)] bg-[length:100%_4px]" />
                        </div>
                        <div className={`relative h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col overflow-hidden border ${plan.highlight ? 'border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.1)]' : 'border-white/10 hover:border-white/30'}`}>
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[1.5s] ease-in-out z-20" />
                            <div className="flex justify-between items-start mb-8 z-10 transform translate-z-10">
                                <div className={`p-3 rounded-lg border ${plan.highlight ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88]' : 'border-white/10 bg-white/5 text-gray-300'}`}>
                                    {plan.icon}
                                </div>
                                {plan.highlight && (
                                    <div className="px-3 py-1 rounded border border-[#00ff88] bg-[#00ff88] text-black text-[10px] font-black uppercase tracking-widest">
                                        Recommended
                                    </div>
                                )}
                            </div>
                            <div className="mb-8 z-10">
                                <h3 className={`font-mono text-sm tracking-widest uppercase mb-2 ${plan.highlight ? 'text-[#00ff88]' : 'text-gray-400'}`}>
                                    // {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm text-gray-500 font-mono">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-4 leading-relaxed border-l border-white/10 pl-3">
                                    {plan.desc}
                                </p>
                            </div>
                            <div className="flex-1 space-y-4 mb-8 z-10">
                                {plan.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm group/item">
                                        <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-[#00ff88]' : 'bg-white/30'} group-hover/item:scale-150 transition-transform`} />
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className={`w-full py-4 relative overflow-hidden group/btn block ${plan.highlight ? 'bg-[#00ff88] text-black' : 'bg-white/5 text-white border border-white/10 hover:border-white/30'}`}>
                                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                    Initialize <MoveUpRight className="w-3 h-3" />
                                </span>
                            </Link>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-white/5 rounded-full z-0 group-hover:scale-150 transition-transform duration-700 opacity-20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- MAIN APP ---
export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Shared Mutable Ref for Portfolio Scroll Progress (Pure Performance)
  const portfolioScrollProgress = useRef(0);

  useEffect(() => {
    // Enable smooth scrolling globally
    ScrollTrigger.config({ 
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true 
    });
    
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
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black min-h-screen text-white cursor-none selection:bg-[#00ff88] selection:text-black">
      <CustomCursor />
      
      {/* 3D CANVAS */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto">
        <Canvas gl={{ antialias: true, powerPreference: "high-performance" }} dpr={[1, 1.5]}>
          <HyperParticles sectionIndex={currentSection} />
          
          {/* Portfolio 3D Scene - Render only if close to section to save GPU, or keep always for smoothness */}
          {/* We keep it mounted but hide it via position or opacity if needed, but for seamless transition we render always */}
          {SECTIONS[currentSection].type === "PORTFOLIO_SCROLL" && (
              <React.Suspense fallback={null}>
                  <PortfolioGallery3D scrollProgress={portfolioScrollProgress} />
              </React.Suspense>
          )}

          {/* Clean Effects */}
          {/* @ts-ignore */}
          <EffectComposer disableNormalPass>
             <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.6} />
             {/* @ts-ignore */}
             <Vignette eskil={false} offset={0.1} darkness={1.1} />
             {/* @ts-ignore */}
             <Noise opacity={0.05} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* OVERLAY FOR TEXT VISIBILITY */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[5] pointer-events-none" />

      <div className="header-wrapper-creative-design">
        <Header />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 pt-10">
        {SECTIONS.map((section, idx) => {
            if (section.type === "HORIZONTAL") {
                return <HorizontalSection key={section.id} data={section} index={idx} />
            }
            if (section.type === "PRICING") {
                return <PricingSection key={section.id} data={section} index={idx} />
            }
            if (section.type === "PORTFOLIO_SCROLL") {
                return <PortfolioSectionScroll key={section.id} data={section} index={idx} setScrollProgress={portfolioScrollProgress} />
            }
            return <VerticalSection key={section.id} data={section} index={idx} />
        })}
      </div>

      {/* FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>

      <style jsx global>{`
        * {
          scroll-behavior: smooth;
        }
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        body { 
          margin: 0; 
          background: #000; 
          overflow-x: hidden;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::-webkit-scrollbar { width: 0px; }
        .header-wrapper-creative-design nav {
          background: rgba(0, 0, 0, 0.7) !important;
          backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
        }
        /* Ultra smooth scrolling */
        @supports (scroll-behavior: smooth) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </div>
  );
}

// --- CURSOR ---
const CustomCursor = () => {
    const cursor = useRef<HTMLDivElement>(null);
    const ring = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const move = (e: MouseEvent) => {
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
            <div ref={cursor} className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
            <div ref={ring} className="fixed w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform" />
        </>
    )
}