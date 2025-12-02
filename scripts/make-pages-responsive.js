const fs = require('fs');
const path = require('path');

// Read one page to get the template
const templatePath = path.join(__dirname, '../app/our-services/creative-services/creative-design/page.tsx');
let template = fs.readFileSync(templatePath, 'utf-8');

// Mobile responsive improvements
const responsiveFixes = [
  // Hero section - better mobile spacing
  {
    old: 'className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center text-center pointer-events-auto">\n          <div className="relative z-10 px-8 py-12">',
    new: 'className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center text-center pointer-events-auto">\n          <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">'
  },
  {
    old: 'className="h-screen w-full relative flex items-center justify-center px-6 overflow-hidden snap-center"',
    new: 'className="h-screen w-full relative flex items-center justify-center px-4 sm:px-6 overflow-hidden snap-center"'
  },
  {
    old: 'className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6"',
    new: 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-4 sm:mb-6"'
  },
  {
    old: 'className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-12"',
    new: 'className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-8 sm:mb-10 md:mb-12 px-4"'
  },
  
  // Vertical section - mobile improvements
  {
    old: 'className="relative w-full min-h-screen flex justify-center pointer-events-auto py-20 mb-20"',
    new: 'className="relative w-full min-h-screen flex justify-center pointer-events-auto py-12 sm:py-16 md:py-20 mb-12 sm:mb-16 md:mb-20"'
  },
  {
    old: 'className="md:w-1/2 h-screen sticky top-0 flex flex-col justify-center p-8 md:p-12 z-20">',
    new: 'className="w-full md:w-1/2 h-auto md:h-screen sticky top-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 z-20 mb-8 md:mb-0">'
  },
  {
    old: 'className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8 mix-blend-overlay break-words"',
    new: 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4 sm:mb-6 md:mb-8 mix-blend-overlay break-words"'
  },
  {
    old: 'className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 mt-4 max-w-md border-l-2 border-white/20 pl-6"',
    new: 'className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 mt-2 sm:mt-4 max-w-md border-l-2 border-white/20 pl-4 sm:pl-6"'
  },
  {
    old: 'className="md:w-1/2 flex flex-col justify-start p-8 md:p-12 z-20 pt-[30vh] pb-[10vh]">',
    new: 'className="w-full md:w-1/2 flex flex-col justify-start p-4 sm:p-6 md:p-8 lg:p-12 z-20 pt-8 sm:pt-12 md:pt-[30vh] pb-8 sm:pb-12 md:pb-[10vh]">'
  },
  {
    old: 'className="w-full backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-none md:rounded-3xl hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">',
    new: 'className="w-full backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg md:rounded-3xl hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">'
  },
  {
    old: 'className="text-3xl md:text-4xl font-bold text-white mb-4"',
    new: 'className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4"'
  },
  {
    old: 'className="text-lg text-gray-400 leading-relaxed max-w-sm"',
    new: 'className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-sm"'
  },
  
  // Horizontal section - mobile improvements
  {
    old: 'className="relative w-full h-screen overflow-hidden bg-black/20 mb-20"',
    new: 'className="relative w-full min-h-screen sm:h-screen overflow-hidden bg-black/20 mb-12 sm:mb-16 md:mb-20"'
  },
  {
    old: 'className="flex-shrink-0 pt-16 px-8 md:px-20 w-full">',
    new: 'className="flex-shrink-0 pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-20 w-full">'
  },
  {
    old: 'className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 uppercase">',
    new: 'className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4 sm:mb-6 uppercase">'
  },
  {
    old: 'className="text-xl text-gray-400 max-w-2xl font-light"',
    new: 'className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl font-light"'
  },
  {
    old: 'className="flex-1 flex items-center overflow-visible pl-8 md:pl-20">',
    new: 'className="flex-1 flex items-center overflow-visible pl-4 sm:pl-6 md:pl-8 lg:pl-20">'
  },
  {
    old: 'className="w-[85vw] md:w-[600px] flex-shrink-0 group">',
    new: 'className="w-[85vw] sm:w-[80vw] md:w-[600px] flex-shrink-0 group">'
  },
  {
    old: 'className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-10 h-[320px] flex flex-col justify-between rounded-xl hover:bg-white/10 transition-all duration-300 shadow-2xl">',
    new: 'className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-10 min-h-[280px] sm:h-[300px] md:h-[320px] flex flex-col justify-between rounded-xl hover:bg-white/10 transition-all duration-300 shadow-2xl">'
  },
  {
    old: 'className="text-2xl font-bold uppercase tracking-wide text-white mb-4 group-hover:text-yellow-400 transition-colors"',
    new: 'className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors"'
  },
  {
    old: 'className="text-gray-400 text-lg leading-relaxed"',
    new: 'className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"'
  },
  
  // Portfolio section - mobile improvements
  {
    old: 'className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between py-12 px-8 md:px-20">',
    new: 'className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-20">'
  },
  {
    old: 'className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] uppercase mix-blend-overlay drop-shadow-lg">',
    new: 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-black text-white tracking-tighter leading-[0.9] uppercase mix-blend-overlay drop-shadow-lg">'
  },
  
  // Pricing section - mobile improvements
  {
    old: 'className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-visible z-20 perspective-[2000px] mb-20"',
    new: 'className="relative w-full min-h-screen py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center overflow-visible z-20 perspective-[2000px] mb-12 sm:mb-16 md:mb-20"'
  },
  {
    old: 'className="text-center mb-16 relative z-10 px-4">',
    new: 'className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10 px-4 sm:px-6">'
  },
  {
    old: 'className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">',
    new: 'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white tracking-tighter mb-3 sm:mb-4 uppercase drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]"'
  },
  {
    old: 'className="text-gray-400 max-w-2xl mx-auto text-lg"',
    new: 'className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4"'
  },
  {
    old: 'className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[1600px] px-6 md:px-12">',
    new: 'className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">'
  },
  {
    old: 'className={`pricing-card group relative w-full h-full min-h-[550px] transition-all duration-500 ease-out`}',
    new: 'className={`pricing-card group relative w-full h-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] transition-all duration-500 ease-out`}'
  },
  {
    old: 'className={`relative h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col overflow-hidden border',
    new: 'className={`relative h-full bg-black/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden border'
  }
];

// Apply all responsive fixes
let updatedTemplate = template;
responsiveFixes.forEach(fix => {
  updatedTemplate = updatedTemplate.replace(new RegExp(fix.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.new);
});

// Get all service pages
const servicesDir = path.join(__dirname, '../app/our-services');
const categories = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let updatedCount = 0;

categories.forEach(category => {
  const categoryPath = path.join(servicesDir, category);
  const services = fs.readdirSync(categoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  services.forEach(service => {
    const pagePath = path.join(categoryPath, service, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      // Read current page
      let pageContent = fs.readFileSync(pagePath, 'utf-8');
      
      // Apply responsive fixes
      let updatedContent = pageContent;
      responsiveFixes.forEach(fix => {
        updatedContent = updatedContent.replace(new RegExp(fix.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.new);
      });
      
      // Write updated page
      fs.writeFileSync(pagePath, updatedContent, 'utf-8');
      console.log(`✓ Updated: ${category}/${service}/page.tsx`);
      updatedCount++;
    }
  });
});

console.log(`\n✅ Made ${updatedCount} pages fully mobile responsive!`);

