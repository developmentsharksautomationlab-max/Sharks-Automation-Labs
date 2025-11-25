"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// --- DATA ---
const dataItems = [
  {
    id: 1,
    title: "History of Outperformance",
    description:
      "Our proprietary systems and strategic playbooks are battle-tested, consistently delivering market-beating growth and establishing a new benchmark.",
    icon: <CheckCircle2 />,
  },
  {
    id: 2,
    title: "End-to-End Capital Solution",
    description:
      "From initial setup to global fulfillment, we are your single point of accountability. This eliminates operational friction and allows for pure growth.",
    icon: <CheckCircle2 />,
  },
  {
    id: 3,
    title: "Institutional-Grade Reporting",
    description:
      "You are not a customer; you are a partner. Gain clear, data-driven insights into your asset's performance with transparent P&L reporting.",
    icon: <CheckCircle2 />,
  },
  {
    id: 4,
    title: "Engineered for Compounding",
    description:
      "Our models are designed for scalability. We systematically reinvest profits to compound your returns, building long-term, transferable wealth.",
    icon: <CheckCircle2 />,
  },
];

// --- COMPONENT: THE RESULT CARD ---
const InfoCard = ({ item, className = "" }: { item: (typeof dataItems)[0]; className?: string }) => (
  <div className={`
    w-full max-w-[350px] lg:w-[400px] p-5 md:p-6 
    bg-[#052126]/90 border border-[#35c4dd]/40 rounded-2xl
    shadow-[0_0_30px_rgba(53,196,221,0.1)] backdrop-blur-xl
    flex flex-col gap-3 relative z-20 group
    ${className}
  `}>
    {/* Icon Badge */}
    <div className="absolute -top-3 -left-3 bg-[#052126] border border-[#35c4dd] p-2 rounded-full shadow-[0_0_15px_rgba(53,196,221,0.3)] group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20, className: "text-[#35c4dd]" })}
    </div>
    
    <h3 className="text-lg md:text-xl font-bold leading-tight text-white mt-2">
      {item.title}
    </h3>
    <div className="w-12 h-0.5 bg-gradient-to-r from-[#35c4dd] to-transparent rounded-full" />
    <p className="text-[#f2f4f4]/80 text-xs md:text-sm leading-relaxed font-light tracking-wide">
      {item.description}
    </p>
  </div>
);

// --- MAIN COMPONENT ---
const SystemArchitecture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Resize for Pixel Perfect Logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breakpoint at 1024px (lg)
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-[#052126] overflow-hidden flex flex-col lg:block items-center justify-center perspective-container py-10 lg:py-0"
      style={{ fontFamily: "ITCAvantGardeStd-Bk, sans-serif" }}
    >
      <style jsx>{`
        /* 1. CONTAINER CONFIG */
        .perspective-container {
          perspective: 1200px;
        }
        
        /* 2. BOX SCENE WRAPPER */
        .box-scene {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          /* Mobile Scaling: Downscale slightly to fit small screens */
          transform-origin: center center;
        }

        @media (max-width: 1023px) {
            .box-scene {
                transform: scale(0.8) rotateX(-20deg) rotateY(30deg);
            }
            .box-scene.is-open {
                transform: scale(0.8) rotateX(-10deg) rotateY(0deg) translateY(10px);
            }
        }

        /* ANIMATION: Wiggle Loop (Only when CLOSED) */
        @keyframes wiggleBox {
          0%, 100% { transform: rotateX(-20deg) rotateY(30deg) rotateZ(0deg); }
          25% { transform: rotateX(-20deg) rotateY(35deg) rotateZ(2deg); }
          75% { transform: rotateX(-20deg) rotateY(25deg) rotateZ(-2deg); }
        }
        
        /* Apply wiggle only if NOT open & NOT mobile (mobile has static scale applied above for stability) */
        @media (min-width: 1024px) {
            .box-scene:not(.is-open) {
                animation: wiggleBox 3s ease-in-out infinite;
            }
            .box-scene.is-open {
                transform: rotateX(-10deg) rotateY(0deg) translateY(50px);
                animation: none;
            }
        }

        /* 3. WALLS (Structure) */
        .box-face {
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(145deg, #083038, #04181c);
          border: 2px solid #35c4dd;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          backface-visibility: visible;
        }

        /* Wall Positions */
        .face-front  { transform: rotateY(0deg) translateZ(100px); z-index: 10; }
        .face-back   { transform: rotateY(180deg) translateZ(100px); }
        .face-right  { transform: rotateY(90deg) translateZ(100px); }
        .face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(100px); background: #021214; box-shadow: 0 0 60px rgba(0,0,0,0.9); }

        /* 4. FLAPS (The Lid) */
        .flap {
          position: absolute;
          background: linear-gradient(to bottom, #0a3a44 0%, #06252b 100%);
          border: 1px solid #35c4dd;
          bottom: 100%; 
          left: -2px;   
          width: 204px; 
          height: 100px; 
          transform-origin: bottom; 
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 5;
          backface-visibility: visible;
        }

        /* FLAP STATES */
        .face-front .flap, .face-back .flap, .face-right .flap, .face-left .flap {
            transform: rotateX(-90deg); /* CLOSED */
        }

        .box-scene.is-open .face-front .flap,
        .box-scene.is-open .face-back .flap,
        .box-scene.is-open .face-right .flap,
        .box-scene.is-open .face-left .flap {
            transform: rotateX(120deg); /* OPEN */
        }

        .flap::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(#35c4dd 1px, transparent 1px);
            background-size: 10px 10px;
            opacity: 0.3;
            transform: rotateX(180deg); 
        }

        /* 5. BRANDING */
        .box-logo-text {
          font-family: 'ITCAvantGardeStd-Bk', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 18px;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: 1px;
          margin-bottom: 12px;
          text-shadow: 0 0 15px rgba(53, 196, 221, 0.6);
        }
        
        .tap-btn {
          font-size: 10px;
          background: #35c4dd; 
          color: #052126;       
          padding: 6px 16px;
          border-radius: 4px;
          font-weight: 800;
          letter-spacing: 1.5px;
          display: inline-block;
          box-shadow: 0 0 20px rgba(53, 196, 221, 0.4);
          border: 1px solid #aeeff0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tap-btn:hover {
            background: #fff;
            color: #35c4dd;
        }

        .system-active-text {
            font-family: monospace;
            font-size: 12px;
            color: #35c4dd;
            letter-spacing: 3px;
            text-shadow: 0 0 10px #35c4dd;
            animation: pulseText 2s infinite;
        }
        @keyframes pulseText {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#35c4dd 1px, transparent 1px), linear-gradient(90deg, #35c4dd 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* --- SVG CONNECTOR LINES (DESKTOP ONLY) --- */}
      {/* We hide this on mobile because the flow changes to vertical stacking */}
      <div className="hidden lg:flex absolute inset-0 pointer-events-none z-10 items-center justify-center">
        <svg className="w-full h-full max-w-[1600px] max-h-[1000px]" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#35c4dd" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
          </defs>
          
          {isOpen && (
            <>
              {/* Top Left Path */}
              <motion.path
                d="M 800 450 L 800 250 L 400 250"
                fill="transparent" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              />
              {/* Top Right Path */}
              <motion.path
                d="M 800 450 L 800 250 L 1200 250"
                fill="transparent" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
              />
              {/* Bottom Left Path */}
              <motion.path
                d="M 750 500 L 400 500 L 400 650" 
                fill="transparent" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
              />
              {/* Bottom Right Path */}
              <motion.path
                d="M 850 500 L 1200 500 L 1200 650"
                fill="transparent" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}
              />
            </>
          )}
        </svg>
      </div>

      {/* --- 3D BOX SECTION --- */}
      {/* On Mobile: relative positioning (flex order 1). On Desktop: Absolute Center. */}
      <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 mb-12 lg:mb-0">
        <div 
            className={`box-scene ${isOpen ? 'is-open' : ''}`}
            onClick={() => !isOpen && setIsOpen(true)}
        >
            {/* FRONT */}
            <div className="box-face face-front">
               <div className="flap"></div>
               {!isOpen ? (
                 <div className="box-branding relative z-20 text-center">
                    <div className="box-logo-text">
                        Sharks<br/>Automation<br/>Labs
                    </div>
                    <button className="tap-btn animate-pulse">
                        TAP TO DEPLOY
                    </button>
                 </div>
               ) : (
                   <div className="system-active-text">SYSTEM ACTIVE</div>
               )}
            </div>
            {/* OTHER FACES */}
            <div className="box-face face-back"><div className="flap"></div></div>
            <div className="box-face face-right">
                 <div className="flap"></div>
                 <div className="absolute bottom-4 right-4 w-8 h-8 border-t border-r border-[#35c4dd]/60 rounded-tr-lg"></div>
            </div>
            <div className="box-face face-left"><div className="flap"></div></div>
            <div className="box-face face-bottom"></div>
            
            {/* GLOW */}
            <div className={`absolute inset-0 bg-[#35c4dd] transition-all duration-1000 pointer-events-none
                ${isOpen ? 'opacity-60 scale-125' : 'opacity-0 scale-50'}
            `} style={{ transform: 'translateZ(50px)', filter: 'blur(50px)' }}></div>
        </div>
      </div>


      {/* --- CARDS LAYER (RESPONSIVE GRID) --- */}
      {/* 
         DESKTOP: Absolute positioning layer filling the screen.
         MOBILE: CSS Grid/Flex below the box.
      */}
      <div className={`
        w-full max-w-[1600px] mx-auto z-20 pointer-events-none
        ${isMobile ? 'relative px-4 grid grid-cols-1 gap-6' : 'absolute inset-0 h-full'}
      `}>
          
          {/* Card 1: Top Left */}
          <div className={`${!isMobile ? 'absolute top-[15%] left-[5%] xl:left-[10%]' : ''} pointer-events-auto flex justify-center`}>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 50 }}
                    className="w-full flex justify-center lg:block"
                >
                    <InfoCard item={dataItems[0]} />
                </motion.div>
            )}
          </div>

          {/* Card 2: Top Right */}
          <div className={`${!isMobile ? 'absolute top-[15%] right-[5%] xl:right-[10%]' : ''} pointer-events-auto flex justify-center`}>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
                    className="w-full flex justify-center lg:block"
                >
                    <InfoCard item={dataItems[1]} />
                </motion.div>
            )}
          </div>

          {/* Card 3: Bottom Left */}
          <div className={`${!isMobile ? 'absolute top-[65%] left-[2%] xl:left-[5%]' : ''} pointer-events-auto flex justify-center`}>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 50 }}
                    className="w-full flex justify-center lg:block"
                >
                    <InfoCard item={dataItems[2]} />
                </motion.div>
            )}
          </div>

          {/* Card 4: Bottom Right */}
          <div className={`${!isMobile ? 'absolute top-[65%] right-[2%] xl:right-[5%]' : ''} pointer-events-auto flex justify-center`}>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9, type: "spring", stiffness: 50 }}
                    className="w-full flex justify-center lg:block"
                >
                    <InfoCard item={dataItems[3]} />
                </motion.div>
            )}
          </div>
      </div>

    </section>
  );
};

export default SystemArchitecture;