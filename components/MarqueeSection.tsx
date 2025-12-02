"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useAnimationFrame 
} from "framer-motion";
import { Aperture, Activity } from "lucide-react";

// --- TYPES ---
interface MarqueeLineProps {
  children: React.ReactNode;
  baseVelocity: number; // Positive for Right, Negative for Left
  className?: string;
}

// --- MARQUEE LOGIC (The Engine) ---
const MarqueeLine = ({ children, baseVelocity = 100, className }: MarqueeLineProps) => {
  const baseX = useMotionValue(0);
  
  // Loop logic: 0% -> -25% smooth loop (Assuming 4 copies of content)
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    // Calculate movement based on time (smooth for all frame rates)
    const moveBy = baseVelocity * (delta / 1000);
    
    // Update position
    baseX.set(baseX.get() + moveBy);

    // --- INFINITE LOOP RESET LOGIC ---
    // Agar hum Left ja rahe hain (Negative Velocity)
    if (baseVelocity < 0) {
      if (baseX.get() <= -25) {
        baseX.set(0);
      }
    } 
    // Agar hum Right ja rahe hain (Positive Velocity)
    else if (baseVelocity > 0) {
      if (baseX.get() >= 0) {
        baseX.set(-25);
      }
    }
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full select-none pointer-events-none">
      <motion.div className={`flex flex-nowrap gap-0 ${className}`} style={{ x }}>
        {/* 4 Copies ensure no gaps on wide screens (Ultrawide support) */}
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// --- MAIN SECTION ---
const MarqueeSection = () => {
  // Mouse Tracking coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics for the spotlight flashlight effect
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  // Update coordinates on move
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - left);
    y.set(e.clientY - top);
  }

  // --- CONTENT COMPONENT (Reused to ensure perfect alignment) ---
  const MarqueeContent = ({ isColored }: { isColored: boolean }) => (
    <div className="flex items-center gap-8 pr-8 px-4">
      {/* Text 1 */}
      <span className={`font-black tracking-tighter text-6xl md:text-8xl lg:text-9xl uppercase transition-colors duration-0 ${isColored ? 'text-[#052126]' : 'text-transparent text-outline'}`}>
        Shark Automation
      </span>
      
      {/* Icon 1 */}
      <div className={`rounded-full p-3 border-[3px] ${isColored ? 'border-[#052126] bg-[#35c4dd] text-[#f2f4f4] shadow-lg' : 'border-[#b0b0b0] text-[#b0b0b0]'}`}>
        <Activity className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      {/* Text 2 */}
      <span className={`font-black tracking-tighter text-6xl md:text-8xl lg:text-9xl uppercase transition-colors duration-0 ${isColored ? 'text-[#35c4dd]' : 'text-transparent text-outline'}`}>
        Lab
      </span>

      {/* Icon 2 */}
      <Aperture className={`w-10 h-10 md:w-16 md:h-16 ${isColored ? 'text-[#052126]' : 'text-[#b0b0b0]'}`} />
    </div>
  );

  return (
    <section 
      className="relative w-full h-[85vh] bg-[#f2f4f4] overflow-hidden flex items-center justify-center cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* GLOBAL CSS FOR STROKE */}
      <style jsx global>{`
        .text-outline {
          -webkit-text-stroke: 2px #b0b0b0;
        }
        @media (min-width: 768px) {
          .text-outline {
            -webkit-text-stroke: 3px #b0b0b0;
          }
        }
      `}</style>

      {/* Background Grid (Tech Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* ================================================== */}
      {/* LAYER 1: GHOST / BLUEPRINT (Always Visible, Gray)  */}
      {/* ================================================== */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="relative w-full max-w-[100vw] flex items-center justify-center">
          
          {/* ARM 1: Rotated +12deg, Moves Left */}
          <div className="absolute transform rotate-[12deg] w-[150%] origin-center">
            <MarqueeLine baseVelocity={-3}>
              <MarqueeContent isColored={false} />
            </MarqueeLine>
          </div>

          {/* ARM 2: Rotated -12deg, Moves Right */}
          <div className="absolute transform -rotate-[12deg] w-[150%] origin-center">
            <MarqueeLine baseVelocity={3}>
              <MarqueeContent isColored={false} />
            </MarqueeLine>
          </div>

        </div>
      </div>

      {/* ================================================== */}
      {/* LAYER 2: REALITY / COLORED (Revealed by Mouse)     */}
      {/* ================================================== */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white/0 z-10"
        style={{
            // MASKING LOGIC
            maskImage: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, black 100%, transparent 100%)`
            ),
            WebkitMaskImage: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, black 100%, transparent 100%)`
            ),
        }}
      >
        <div className="relative w-full max-w-[100vw] flex items-center justify-center">
           
           {/* EXACT COPY OF ARM 1 (Must match perfectly) */}
           <div className="absolute transform rotate-[12deg] w-[150%] origin-center drop-shadow-2xl">
            <MarqueeLine baseVelocity={-3}>
              <MarqueeContent isColored={true} />
            </MarqueeLine>
          </div>

          {/* EXACT COPY OF ARM 2 (Must match perfectly) */}
          <div className="absolute transform -rotate-[12deg] w-[150%] origin-center drop-shadow-2xl">
            <MarqueeLine baseVelocity={3}>
              <MarqueeContent isColored={true} />
            </MarqueeLine>
          </div>

        </div>
      </motion.div>

      {/* Vignette Overlay (Side fade) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,249,250,0.8)_100%)] z-20"></div>

    </section>
  );
};

export default MarqueeSection;

