"use client";

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const logoUrls = [
  '/images/companies/Microsoft.png',
  '/images/companies/amazon.png',
  '/images/companies/google.png',
  '/images/companies/meta.png',
  '/images/companies/tesla.png',
  '/images/companies/netflix.png',
];

interface LogoBody {
  body: Matter.Body;
  element: HTMLDivElement;
}

const FallingLogosSection: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null); 
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const renderLoopRef = useRef<number | null>(null);
  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // ✨ NEW STATE: To track visibility
  const [hasStarted, setHasStarted] = useState(false);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  // --- 1. DETECT SCROLL (Jab section dikhega tabhi start hoga) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Jaise hi section 20% screen pe aaye, animation start flag true kar do
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 } // 20% visibility threshold
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }, 200);
    };
    // Initial dimension check
    if (typeof window !== 'undefined') {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- MAIN PHYSICS EFFECT ---
  useEffect(() => {
    // ✨ CHECK: Agar hasStarted false hai, toh yahi ruk jao (Logos nahi girenge)
    if (!hasStarted || !sceneRef.current || dimensions.width === 0) return;

    const { Engine, World, Bodies, Body, Runner, Mouse, MouseConstraint, Events } = Matter;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // --- CONFIGURATION ---
    const config = {
      squareSize: isMobile ? 70 : isTablet ? 90 : 110, 
      numLogos: isMobile ? 6 : isTablet ? 10 : 15,    
      restitution: 0.6, 
      friction: 0.1,   
    };

    const engine = Engine.create();
    engine.world.gravity.y = 1; 
    engine.world.gravity.x = 0;
    engineRef.current = engine;

    // Walls
    const wallOptions = { isStatic: true, render: { visible: false }, friction: 0 };
    const ground = Bodies.rectangle(width / 2, height + 200, width + 1000, 400, wallOptions);
    const leftWall = Bodies.rectangle(-200, height / 2, 400, height * 4, wallOptions);
    const rightWall = Bodies.rectangle(width + 200, height / 2, 400, height * 4, wallOptions);
    
    World.add(engine.world, [ground, leftWall, rightWall]);

    const logos: LogoBody[] = [];

    for (let i = 0; i < config.numLogos; i++) {
      const logoIndex = i % logoUrls.length;
      const padding = isMobile ? 15 : 100;
      const x = Math.random() * (width - padding * 2) + padding;
      // Start Position: Screen se kaafi upar (-200 se -1700 tak)
      const y = -Math.random() * 1500 - 200; 

      // Physics Body
      const body = Bodies.rectangle(x, y, config.squareSize, config.squareSize, {
        restitution: config.restitution,
        friction: config.friction,
        frictionAir: 0.01 + (Math.random() * 0.03),
        angle: Math.random() * Math.PI * 2,
        chamfer: { radius: isMobile ? 10 : 24 } 
      });

      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

      // DOM Element
      const element = document.createElement('div');
      element.style.touchAction = "pan-y";
      
      element.className = `absolute flex items-center justify-center bg-[#f2f4f4] ${isMobile ? 'rounded-xl shadow-md' : 'rounded-[2rem] shadow-2xl'} select-none overflow-hidden ${!isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`;
      
      element.style.width = `${config.squareSize}px`;
      element.style.height = `${config.squareSize}px`;
      element.style.zIndex = "20"; 
      element.style.willChange = "transform";
      
      const img = document.createElement('img');
      img.src = logoUrls[logoIndex];
      img.style.width = "80%";  
      img.style.height = "80%";
      img.style.objectFit = "contain"; 
      img.style.pointerEvents = "none"; 
      img.style.display = "block";
      img.style.margin = "auto";

      element.appendChild(img);

      sceneRef.current.appendChild(element);
      logos.push({ body, element });
    }

    World.add(engine.world, logos.map(l => l.body));

    // --- MOUSE / TOUCH CONTROL ---
    const mouse = Mouse.create(sceneRef.current);
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    let mouseConstraint: Matter.MouseConstraint | null = null;
    if (!isMobile) {
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.15,
                damping: 0.1,
                render: { visible: false }
            }
        });
        World.add(engine.world, mouseConstraint);

        let isDragging = false;
        Events.on(mouseConstraint, "startdrag", () => { isDragging = true; });
        Events.on(mouseConstraint, "enddrag", () => { setTimeout(() => { isDragging = false; }, 100); });
    }

    // --- CLICK/TAP FORCE ---
    const handleCanvasClick = () => {
        if (!isMobile && mouseConstraint && (mouseConstraint.body || (mouseConstraint as any).constraint.bodyB)) return;
        
        logos.forEach(({ body }) => {
            const upwardForce = isMobile ? -0.15 : -0.6 - (Math.random() * 0.4); 
            const sidewayForce = (Math.random() - 0.5) * 0.3;
            Body.applyForce(body, body.position, { x: sidewayForce, y: upwardForce });
        });
    };

    if (sceneRef.current) {
        sceneRef.current.addEventListener('click', handleCanvasClick);
    }

    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    const updateLoop = () => {
        Engine.update(engine, 1000 / 60);

        logos.forEach(({ body, element }) => {
            const { x, y } = body.position;
            
            // Respawn logic (Modified slightly to keep things clean)
            if (y > height + 200 || x > width + 400 || x < -400) {
               // Sirf tab respawn karein agar already gir chuke hain, 
               // lekin shuru mein ye loop wait karega
                Body.setPosition(body, { 
                    x: Math.random() * (width - 50) + 25, 
                    y: -200 - Math.random() * 300 
                });
                Body.setVelocity(body, { x: 0, y: 0 });
                Body.setAngularVelocity(body, 0);
            }
            element.style.transform = `translate(${x - config.squareSize/2}px, ${y - config.squareSize/2}px) rotate(${body.angle}rad)`;
        });
        renderLoopRef.current = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      if (sceneRef.current) {
          sceneRef.current.removeEventListener('click', handleCanvasClick);
      }
      if (renderLoopRef.current) cancelAnimationFrame(renderLoopRef.current);
      if (runnerRef.current) Runner.stop(runnerRef.current);
      if (engineRef.current) Engine.clear(engineRef.current);
      logos.forEach(({ element }) => element.remove());
    };
  }, [dimensions, hasStarted]); // ✨ Added hasStarted here

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[350px] md:h-[85vh] bg-[#f2f4f4] overflow-hidden select-none"
    >
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-[300px] md:w-[900px] h-[300px] md:h-[900px] rounded-full bg-gradient-to-r from-[#052126] to-[#35c4dd] blur-[80px] md:blur-[130px] opacity-30" />
      </div>

      {/* Physics Container */}
      <div
        ref={sceneRef}
        className="absolute inset-0 w-full h-full z-20"
        style={{ 
            cursor: dimensions.width >= 768 ? 'pointer' : 'default',
            touchAction: 'pan-y'
        }}
      />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        
        {/* Desktop Arrows */}
        <button 
          onClick={scrollToNextSection}
          className="absolute left-[15px] top-1/2 -translate-y-[60%] pointer-events-auto group hidden md:flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#35c4dd]/30 bg-[#f2f4f4]/80 backdrop-blur-sm hover:bg-[#35c4dd] hover:border-[#35c4dd] transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#35c4dd] group-hover:text-[#f2f4f4] transition-colors duration-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        <button 
          onClick={scrollToNextSection}
          className="absolute right-[15px] top-1/2 -translate-y-[60%] pointer-events-auto group hidden md:flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#35c4dd]/30 bg-[#f2f4f4]/80 backdrop-blur-sm hover:bg-[#35c4dd] hover:border-[#35c4dd] transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#35c4dd] group-hover:text-[#f2f4f4] transition-colors duration-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {/* Text Content */}
        <div className="absolute top-4 md:top-6 left-0 right-0 flex justify-center items-center px-4 pointer-events-none pt-2 md:pt-4">
          <div className="text-center relative max-w-4xl mx-auto">
            <p className="text-[#35c4dd] text-[10px] md:text-sm font-bold tracking-[0.25em] uppercase mb-1 md:mb-4 drop-shadow-sm">
              Insights
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#052126] mb-3 md:mb-6 drop-shadow-sm leading-tight max-w-3xl mx-auto">
              Enterprise Market Challenges
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#052126]/80 max-w-2xl mx-auto mb-4 md:mb-8 leading-relaxed">
            In today's digital economy enterprises must overcome complex market dynamics to sustain competitive advantage and deliver premium customer experiences at scale.
            </p>
          </div>
        </div>

        {/* Mobile Bottom Arrow */}
        <div className="absolute bottom-4 w-full flex justify-center md:hidden pointer-events-auto">
            <button 
                onClick={scrollToNextSection}
                className="group flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#35c4dd]/30 bg-[#f2f4f4]/80 backdrop-blur-sm hover:bg-[#35c4dd] hover:border-[#35c4dd] transition-all duration-300 active:scale-95 shadow-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#35c4dd] group-hover:text-[#f2f4f4] transition-colors duration-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>
        </div>

      </div>

    </section>
  );
};

export default FallingLogosSection;

