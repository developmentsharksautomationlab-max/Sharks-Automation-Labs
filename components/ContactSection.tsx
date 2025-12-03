"use client";
import React, { useState, useEffect, useRef, memo } from 'react';
import { Send, CheckCircle, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// --- THEME CONSTANTS ---
const THEME = {
  bg: '#052126',
  primary: '#35c4dd',
  white: '#f2f4f4',
};

// --- OPTIMIZED PHYSICS ENGINE (MEMOIZED) ---
// We wrap this in memo() so it ignores Form updates
const HyperCoreAnimation = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // Optimize for transparency
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    
    // REDUCED PARTICLES FOR PERFORMANCE (35 is the sweet spot)
    const particleCount = 35; 
    const connectionRadius = 140; 
    
    // Physics State
    let rotationX = 0;
    let rotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    // Pre-allocate arrays to avoid Garbage Collection lag
    const particles = new Float32Array(particleCount * 3); // x, y, z
    const originals = new Float32Array(particleCount * 3); // ox, oy, oz
    const projected = new Float32Array(particleCount * 3); // px, py, scale

    // Initialize Points
    const radius = Math.min(width, height) * 0.32;
    for(let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles[i3] = x; particles[i3+1] = y; particles[i3+2] = z;
      originals[i3] = x; originals[i3+1] = y; originals[i3+2] = z;
    }

    // Animation Loop
    const animate = () => {
      // Clear canvas slightly faster
      ctx.clearRect(0, 0, width, height);
      
      // Smooth easing for rotation
      const targetRotX = (mouseY / height - 0.5) * 1.5;
      const targetRotY = (mouseX / width - 0.5) * 1.5;
      rotationX += (targetRotX - rotationX) * 0.05;
      rotationY += (targetRotY - rotationY) * 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const time = Date.now() * 0.001;

      // 1. UPDATE & PROJECT POINTS
      for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Pulse Math
        const pulse = Math.sin(time + originals[i3]) * 4;
        
        let x = originals[i3] + pulse;
        let y = originals[i3+1] + pulse;
        let z = originals[i3+2] + pulse;

        // Rotate X
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const tempY = y * cosX - z * sinX;
        const tempZ = y * sinX + z * cosX;
        y = tempY;
        z = tempZ;

        // Rotate Y
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const tempX = x * cosY + z * sinY;
        z = -x * sinY + z * cosY;
        x = tempX;

        // Projection 3D -> 2D
        const fov = 300;
        const scale = fov / (fov + z);
        const px = x * scale + cx;
        const py = y * scale + cy;

        // Store projected values for line drawing later
        projected[i3] = px;
        projected[i3+1] = py;
        projected[i3+2] = scale;

        // Draw Dot
        const size = Math.max(0.5, 2.5 * scale);
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = THEME.primary;
        ctx.globalAlpha = Math.min(1, (z + 100) / 200); 
        ctx.fill();
      }

      // 2. DRAW LINES (OPTIMIZED)
      // We batch stroke calls to reduce draw overhead
      ctx.lineWidth = 0.5;
      
      for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const px1 = projected[i3];
        const py1 = projected[i3+1];

        // Only check connections for nearby particles in array to save CPU
        // or check all but exit early
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const px2 = projected[j3];
          const py2 = projected[j3+1];

          const dx = px1 - px2;
          const dy = py1 - py2;
          
          // Fast distance check (avoid sqrt if possible, but needed for alpha)
          const distSq = dx*dx + dy*dy;
          const radSq = connectionRadius * connectionRadius;

          if (distSq < radSq) {
             const dist = Math.sqrt(distSq);
             const alpha = 1 - (dist / connectionRadius);
             
             // Draw
             ctx.beginPath();
             ctx.moveTo(px1, py1);
             ctx.lineTo(px2, py2);
             ctx.strokeStyle = `rgba(53, 196, 221, ${alpha * 0.3})`;
             ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Simple offset calculation
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="block w-full h-full" style={{ willChange: 'transform' }} />
      {/* Static Glow Image is faster than CSS Box Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#35c4dd] opacity-10 blur-[80px] rounded-full pointer-events-none translate-z-0" />
    </div>
  );
});

HyperCoreAnimation.displayName = 'HyperCoreAnimation';

// --- UI COMPONENTS (Memoized to prevent flicker) ---

interface FormFieldProps {
  label: string;
  as?: 'input' | 'textarea';
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
}

const FormField = memo(({ label, as, required = true, ...props }: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative group">
      <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors duration-300 ${isFocused ? 'text-[#35c4dd]' : 'text-[#f2f4f4]/60'}`}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {as === 'textarea' ? (
          <textarea 
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-[#052126]/40 backdrop-blur-md border border-[#35c4dd]/20 rounded-lg p-4 text-[#f2f4f4] placeholder-[#f2f4f4]/20 outline-none transition-all duration-300 focus:border-[#35c4dd] focus:bg-[#052126]/80 resize-none"
          />
        ) : (
          <input 
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-[#052126]/40 backdrop-blur-md border border-[#35c4dd]/20 rounded-lg p-4 text-[#f2f4f4] placeholder-[#f2f4f4]/20 outline-none transition-all duration-300 focus:border-[#35c4dd] focus:bg-[#052126]/80"
          />
        )}
        <div className={`absolute bottom-0 left-0 h-[2px] bg-[#35c4dd] transition-all duration-500 ease-out ${isFocused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
});
FormField.displayName = 'FormField';

const InfoCard = memo(({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative p-6 rounded-2xl border border-[#35c4dd]/10 bg-gradient-to-br from-[#f2f4f4]/5 to-transparent backdrop-blur-sm group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#35c4dd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex items-start gap-5">
      <div className="p-3 rounded-lg bg-[#35c4dd]/10 text-[#35c4dd] group-hover:text-[#f2f4f4] group-hover:bg-[#35c4dd] transition-all duration-300 shadow-[0_0_15px_rgba(53,196,221,0.2)]">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-[#f2f4f4] mb-2">{title}</h4>
        <p className="text-[#f2f4f4]/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </motion.div>
));
InfoCard.displayName = 'InfoCard';

// --- MAIN SECTION ---

const ContactSection = () => {
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'USA' });
  const [phoneNumber, setPhoneNumber] = useState('+1 ');
  const [budget, setBudget] = useState('');
  // Simplified state to reduce re-renders
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' });
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  const servicesList = [
    "Creative Services & Brand Strategy",
    "Enterprise Web Development",
    "Mobile App Development",
    "Social Media Marketing",
    "Performance Marketing & PPC",
    "Search Engine Optimization (SEO)",
    "Strategic Outsourcing Partnership",
    "Agency Development & Scaling"
  ];
  const countryCodes = [{ code: '+1', name: 'USA' }, { code: '+44', name: 'UK' }, { code: '+92', name: 'PAK' }, { code: '+971', name: 'UAE' }];

  return (
    <section className="relative w-full min-h-screen bg-[#052126] overflow-hidden selection:bg-[#35c4dd] selection:text-[#052126]">
      
      {/* 1. ANIMATION ENGINE (GPU Layer) */}
      <div className="absolute inset-0 lg:left-[40%] pointer-events-none translate-z-0">
        <HyperCoreAnimation />
      </div>

      {/* 2. LIGHTWEIGHT BACKGROUNDS */}
      {/* Removed heavy blur filters, using opacity gradients instead for performance */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-radial-gradient(circle, rgba(53,196,221,0.08) 0%, transparent 70%) pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 0%, rgba(53,196,221,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-radial-gradient(circle, rgba(53,196,221,0.05) 0%, transparent 70%) pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(53,196,221,0.05) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10">
                <div className="h-1 w-20 bg-[#35c4dd] mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f2f4f4] tracking-tight leading-tight">
                  Enterprise Digital <br/><span className="text-[#35c4dd]">Transformation Solutions</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-[#f2f4f4]/70 leading-relaxed border-l-2 border-[#35c4dd]/30 pl-4">
                  Strategic digital transformation services engineered for global market leaders and institutional investors. Accelerate revenue growth, optimize enterprise operations, and secure market dominance through data-driven solutions that deliver measurable ROI and sustainable competitive positioning.
                </p>
              </div>

              {/* OPTIMIZED GLASS CONTAINER - Less Blur, More Opacity */}
              <div className="bg-[#f2f4f4]/5 backdrop-blur-lg border border-[#f2f4f4]/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    <FormField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#f2f4f4]/60">Phone Number *</label>
                      <div className="flex bg-[#052126]/40 border border-[#35c4dd]/20 rounded-lg overflow-hidden">
                        <select 
                          className="bg-[#052126]/60 text-[#f2f4f4] px-3 py-4 outline-none border-r border-[#35c4dd]/20"
                          value={selectedCountry.code}
                          onChange={e => {
                             const c = countryCodes.find(c => c.code === e.target.value);
                             if(c) { setSelectedCountry(c); setPhoneNumber(c.code + ' '); }
                          }}
                        >
                          {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                        </select>
                        <input 
                          type="tel"
                          value={phoneNumber}
                          onChange={e => setPhoneNumber(e.target.value)}
                          className="flex-1 bg-transparent text-[#f2f4f4] px-4 py-4 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                       <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#f2f4f4]/60">Budget ($USD) *</label>
                      <input 
                        type="text" 
                        placeholder="Min: 2000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#052126]/40 border border-[#35c4dd]/20 rounded-lg p-4 text-[#f2f4f4] outline-none focus:border-[#35c4dd]"
                      />
                    </div>
                    <FormField label="Company" required={false} name="company" value={formData.company} onChange={handleInputChange} />
                  </div>

                  {/* Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#f2f4f4]/60">Services *</label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200
                            ${services.includes(service) 
                              ? 'bg-[#35c4dd] border-[#35c4dd] text-[#052126] shadow-[0_0_10px_rgba(53,196,221,0.3)]' 
                              : 'bg-transparent border-[#f2f4f4]/10 text-[#f2f4f4]/60 hover:border-[#35c4dd]/50 hover:text-[#f2f4f4]'
                            }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <FormField label="Details" as="textarea" name="message" value={formData.message} onChange={handleInputChange} />

                  <button 
                    disabled={status !== 'idle'}
                    className="group relative w-full overflow-hidden rounded-lg bg-[#35c4dd] py-4 text-center font-bold text-[#052126] transition-all hover:shadow-[0_0_20px_rgba(53,196,221,0.4)]"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      {status === 'submitting' ? 'Processing...' : status === 'success' ? 'Request Sent' : (
                        <>SCHEDULE CONSULTATION <Send size={18} /></>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: INFO (Static layers for performance) */}
          <div className="lg:col-span-5 relative h-full flex flex-col justify-center space-y-6 mt-10 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:pl-8 space-y-6"
            >
               <div className="bg-[#052126]/80 backdrop-blur-md p-6 rounded-2xl border border-[#35c4dd]/20 shadow-xl">
                  <h3 className="text-[#35c4dd] font-bold text-base sm:text-lg md:text-xl mb-4 flex items-center gap-2">
                    <Globe className="animate-pulse" /> Global Operations
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {['USA', 'UK', 'Canada', 'UAE', 'Pakistan'].map((loc) => (
                      <span key={loc} className="text-[#f2f4f4] text-sm font-medium relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#35c4dd] before:rounded-full">
                        {loc}
                      </span>
                    ))}
                  </div>
               </div>

               <InfoCard 
                 icon={<Users size={24} />}
                 title="C-Suite Advisory"
                 desc="Direct access to enterprise transformation specialists serving Fortune 500 leadership teams and institutional investors."
               />

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#35c4dd]/5 border border-[#35c4dd]/20 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f2f4f4]">98%</div>
                    <div className="text-xs text-[#35c4dd] uppercase tracking-wider mt-1">Success</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#35c4dd]/5 border border-[#35c4dd]/20 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f2f4f4]">24/7</div>
                    <div className="text-xs text-[#35c4dd] uppercase tracking-wider mt-1">Support</div>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;