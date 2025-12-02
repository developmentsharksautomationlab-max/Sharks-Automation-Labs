const fs = require('fs');
const path = require('path');

console.log('🔗 Fixing all pricing buttons in service pages...\n');

const servicesDir = path.join(__dirname, '../app/our-services');
const categories = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixedCount = 0;
let skippedCount = 0;

categories.forEach(category => {
  const categoryPath = path.join(servicesDir, category);
  const services = fs.readdirSync(categoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  services.forEach(service => {
    const pagePath = path.join(categoryPath, service, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf-8');
      let updated = false;
      
      // 1. Add Link import if not present
      if (!content.includes('import Link from "next/link";')) {
        content = content.replace(
          /import Header from "@\/components\/Header";/,
          'import Link from "next/link";\nimport Header from "@/components/Header";'
        );
        updated = true;
      }
      
      // 2. Fix pricing button to Link
      const buttonPattern = /<button className=\{`w-full py-4 relative overflow-hidden group\/btn \$\{plan\.highlight \? 'bg-\[#00ff88\] text-black' : 'bg-white\/5 text-white border border-white\/10 hover:border-white\/30'\}`\}>/;
      if (buttonPattern.test(content)) {
        content = content.replace(
          buttonPattern,
          '<Link href="/contact" className={`w-full py-4 relative overflow-hidden group/btn block ${plan.highlight ? \'bg-[#00ff88] text-black\' : \'bg-white/5 text-white border border-white/10 hover:border-white/30\'}`}>'
        );
        
        // Replace closing button tag (need to be careful with this)
        // Find the button closing tag that follows the Initialize text
        content = content.replace(
          /(<span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">\s*Initialize <MoveUpRight className="w-3 h-3" \/>\s*<\/span>\s*)<\/button>/,
          '$1</Link>'
        );
        updated = true;
      }
      
      if (updated) {
        fs.writeFileSync(pagePath, content, 'utf-8');
        console.log(`✓ Fixed: ${category}/${service}/page.tsx`);
        fixedCount++;
      } else {
        skippedCount++;
      }
    }
  });
});

console.log(`\n✅ Fixed ${fixedCount} pages!`);
if (skippedCount > 0) {
  console.log(`⏭️  Skipped ${skippedCount} pages (already fixed or no button found)`);
}

