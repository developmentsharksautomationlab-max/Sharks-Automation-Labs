'use client';

import React, { useRef, useEffect, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate, 
  useVelocity, 
  useAnimationFrame 
} from 'framer-motion';
import { Cpu, Shield, Zap, Globe, Activity, Aperture, Hexagon, Component } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// --- ALIEN TECH UTILITIES (MATH & PHYSICS) ---

// 1. Text Decryption Effect (Hacker Style)
const HyperText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text
        .split("")
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    
    // Start delay
    const startTimeout = setTimeout(() => interval, delay);
    return () => {
        clearInterval(interval);
        clearTimeout(startTimeout);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

// 2. Interactive Particle Neural Network (Canvas Physics)
const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    // Physics Configuration
    const particles: any[] = [];
    const particleCount = 60; // Keep optimized
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: 0, y: 0 };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wall bounce physics
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Mouse Repulsion (Anti-Gravity)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * 2; // Repulsion strength
            const directionY = forceDirectionY * force * 2;
            this.x -= directionX;
            this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#35c4dd';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      
      // Draw Connections (Neural Lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx*dx + dy*dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(53, 196, 221, ${1 - distance/connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30 pointer-events-none" />;
};

// 3. Velocity-Based Skew Container (The "Warp" Effect)
const VelocitySkew = ({ children }: { children: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const skew = useSpring(useTransform(scrollVelocity, [-2000, 2000], [10, -10]), {
        mass: 0.1,
        stiffness: 100, // Reduced stiffness for smoother skew
        damping: 20
    });

    return (
        <motion.div style={{ skewY: skew }} className="relative z-10 origin-center">
            {children}
        </motion.div>
    );
};

// --- COMPONENTS ---

// 4. The "Hyper-Card" (Glass + Tilt + Glow)
const HyperCard = ({ service, index }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]); // Inverted for 3D feel
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((event.clientX - centerX) / 3);
        y.set((event.clientY - centerY) / 3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative h-[480px] md:h-[600px] w-full rounded-3xl bg-[#052126]/40 backdrop-blur-md border border-[#35c4dd]/10 group perspective-1000 cursor-default md:cursor-none"
        >
            {/* Animated Grid on Card Surface */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="w-full h-full bg-[linear-gradient(0deg,transparent_24%,rgba(53,196,221,0.3)_25%,rgba(53,196,221,0.3)_26%,transparent_27%,transparent_74%,rgba(53,196,221,0.3)_75%,rgba(53,196,221,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(53,196,221,0.3)_25%,rgba(53,196,221,0.3)_26%,transparent_27%,transparent_74%,rgba(53,196,221,0.3)_75%,rgba(53,196,221,0.3)_76%,transparent_77%,transparent)] bg-[size:50px_50px]" />
            </div>

            {/* Glowing Border Beam */}
            <div className="absolute inset-0 rounded-3xl border border-[#35c4dd]/30" />
            
            {/* Content Floating in 3D */}
            <div style={{ transform: "translateZ(50px)" }} className="relative z-20 h-full flex flex-col p-8 md:p-10">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="p-3 md:p-4 rounded-xl bg-[#35c4dd]/10 border border-[#35c4dd] text-[#35c4dd] shadow-[0_0_15px_rgba(53,196,221,0.3)]">
                        {service.icon}
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-mono text-[#35c4dd] tracking-[0.2em] mb-1">SECURE_LEVEL_0{index + 1}</div>
                        <div className="flex gap-1 justify-end">
                            {[1,2,3].map(d => <span key={d} className="w-1 h-1 bg-[#35c4dd] rounded-full animate-pulse" style={{ animationDelay: `${d * 0.2}s`}} />)}
                        </div>
                    </div>
                </div>

                {/* Main Text */}
                <div className="mt-auto mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 mix-blend-screen group-hover:text-[#35c4dd] transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-[#f2f4f4]/70 text-base md:text-lg font-light leading-relaxed">
                        {service.description}
                    </p>
                </div>

                {/* Holographic Footer */}
                <div className="pt-6 border-t border-[#35c4dd]/20 flex flex-wrap gap-3">
                    {service.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-mono border border-[#f2f4f4]/10 bg-[#f2f4f4]/5 text-[#35c4dd]">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Image Reveal (Ghost Effect) */}
            <motion.div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{ transform: "translateZ(-50px)" }} // Push image back in 3D space
            >
                <img src={service.image} alt="tech" className="w-full h-full object-cover rounded-3xl grayscale invert mix-blend-overlay" />
            </motion.div>
        </motion.div>
    );
};

// --- DATA ---
const services = [
    {
        title: "QUANTUM DEV",
        description: "Architecting self-evolving React ecosystems. We build software that doesn't just function; it adapts, learns, and scales into infinity.",
        icon: <Component size={32} />,
        tags: ["NEXT.JS 15", "RUST BACKEND", "WASM INTEGRATION"],
        image: "https://images.unsplash.com/photo-1519608487953-e999c9cdc481?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "NEURAL SECURITY",
        description: "Zero-Trust architecture powered by predictive AI algorithms. We detect threats in the future before they exist in the present.",
        icon: <Shield size={32} />,
        tags: ["BIO-ENCRYPTION", "BLOCKCHAIN LEDGER", "WHITE HAT AI"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "VOID ANALYTICS",
        description: "Deep data mining that extracts value from chaos. We turn raw terabytes into crystal-clear strategic foresight.",
        icon: <Aperture size={32} />,
        tags: ["PREDICTIVE MODELS", "BIG DATA", "VISUALIZATION"],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "HYPER SEO",
        description: "Algorithmic domination. We don't play by the rules; we rewrite the search signals to position your brand at the apex.",
        icon: <Globe size={32} />,
        tags: ["SEMANTIC CORE", "DOM AUTHORITY", "BACKLINK MATRIX"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
];

// --- MAIN PAGE ---

export default function ServicePage() {
    return (
        <div className="relative min-h-screen bg-[#052126] text-[#f2f4f4] overflow-x-hidden selection:bg-[#35c4dd] selection:text-[#052126]">
            <Header />
            <NeuralBackground />
            
            {/* Ambient Lighting */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#35c4dd] opacity-[0.05] blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#35c4dd] opacity-[0.05] blur-[150px] animate-pulse delay-1000" />
            </div>

            <VelocitySkew>
                <main className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 max-w-[1600px] mx-auto space-y-24 md:space-y-32">
                    
                    {/* HERO SECTION */}
                    <section className="min-h-[80vh] flex flex-col justify-center items-start gap-8">
                        
                        <motion.div 
                           initial={{ width: 0 }} 
                           animate={{ width: "100px" }} 
                           transition={{ duration: 1.5, ease: "circOut" }}
                           className="h-[2px] bg-[#35c4dd] mb-8"
                        />
                        
                        <div className="flex items-center gap-3 md:gap-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded border border-[#35c4dd] text-[#35c4dd]">
                                <Activity className="w-4 h-4 animate-spin-slow" />
                            </span>
                            <HyperText text="SYSTEM_INITIALIZED_V.3.0" className="font-mono text-[#35c4dd] tracking-widest text-xs md:text-sm" />
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-[11rem] leading-tight md:leading-[0.85] font-bold tracking-tighter mix-blend-difference space-y-2 md:space-y-4">
                            <span className="block overflow-hidden">
                                <motion.span 
                                    initial={{ y: "100%" }} 
                                    animate={{ y: 0 }} 
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block"
                                >
                                    FUTURE
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#35c4dd] via-white to-transparent text-4xl sm:text-6xl md:text-[11rem]">
                                <motion.span 
                                    initial={{ y: "100%" }} 
                                    animate={{ y: 0 }} 
                                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block"
                                >
                                    ENGINEERED
                                </motion.span>
                            </span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
                            <p className="text-base sm:text-lg md:text-2xl text-[#f2f4f4]/60 font-light leading-relaxed">
                                We don't build websites. We construct <span className="text-[#35c4dd]">high-velocity digital realities</span> by merging cognitive physics with React architecture.
                            </p>
                            
                            <div className="flex flex-col justify-end gap-4">
                                <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs font-mono text-[#f2f4f4]/40">
                                    <span>LAT: 34.0522° N</span>
                                    <span>LON: 118.2437° W</span>
                                    <span>STATUS: ORBITAL</span>
                                </div>
                                <button className="group relative w-full md:w-fit px-6 md:px-8 py-3 md:py-4 bg-transparent border border-[#35c4dd] overflow-hidden transition-all hover:border-[#f2f4f4]">
                                    <div className="absolute inset-0 bg-[#35c4dd] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                    <span className="relative flex items-center justify-center gap-3 font-bold tracking-widest text-sm md:text-base group-hover:text-[#052126] transition-colors">
                                        INITIATE PROTOCOL <Hexagon className="w-4 h-4" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* SERVICES GRID */}
                    <section>
                         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-0 mb-12 md:mb-20 border-b border-[#35c4dd]/20 pb-6 md:pb-8">
                            <div>
                                <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
                                    MODULES
                                </h2>
                            </div>
                            <div className="text-right text-xs md:text-base font-mono text-[#35c4dd]">
                                <p className="font-mono text-[#35c4dd] text-lg">AVAILABLE RESOURCES</p>
                                <p className="text-[#f2f4f4]/50">SCROLL TO EXPLORE {'>>'}</p>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                             {services.map((service, i) => (
                                 <div key={i} className={i % 2 !== 0 ? "md:mt-32" : ""}>
                                     <HyperCard service={service} index={i} />
                                 </div>
                             ))}
                         </div>
                    </section>

                    {/* CALL TO ACTION (THE SINGULARITY) */}
                    <section className="min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center relative">
                        {/* Rotating Data Rings */}
                        <div className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[900px] md:h-[900px] border border-[#35c4dd]/10 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[700px] md:h-[700px] border border-[#35c4dd]/20 rounded-full animate-[spin_40s_linear_infinite_reverse] border-dashed" />
                        
                        <div className="relative z-10 text-center max-w-5xl px-4 space-y-6">
                            <p className="font-mono tracking-[0.4em] text-[10px] sm:text-xs text-[#f2f4f4]/40">SECTOR 07G - CLEARANCE GRANTED</p>
                            <h2 className="text-4xl sm:text-6xl md:text-[10rem] leading-tight md:leading-none font-bold">
                                <HyperText text="READY_TO" className="block text-[#f2f4f4]" />
                                <span className="text-[#35c4dd]">TRANSCEND?</span>
                            </h2>
                            
                            <p className="text-sm sm:text-base md:text-2xl text-[#f2f4f4]/60 max-w-2xl mx-auto">
                                The code for your next billion-dollar valuation is waiting to be written.
                            </p>

                            <motion.button 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-[#f2f4f4] text-[#052126] text-base md:text-xl font-black tracking-[0.2em] rounded-full overflow-hidden group shadow-[0_0_40px_rgba(242,244,244,0.4)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    EXECUTE ORDER <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                </span>
                                <div className="absolute inset-0 bg-[#35c4dd] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.button>
                        </div>
                    </section>

                </main>
            </VelocitySkew>

            <Footer />
        </div>
    );
}