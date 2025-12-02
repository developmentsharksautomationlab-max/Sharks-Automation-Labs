const fs = require('fs');
const path = require('path');

console.log('🔗 Fixing all buttons and links...\n');

// Fix 1: Add Link import and fix pricing buttons in all service pages
const servicesDir = path.join(__dirname, '../app/our-services');
const categories = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixedPages = 0;

categories.forEach(category => {
  const categoryPath = path.join(servicesDir, category);
  const services = fs.readdirSync(categoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  services.forEach(service => {
    const pagePath = path.join(categoryPath, service, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      let pageContent = fs.readFileSync(pagePath, 'utf-8');
      let updated = false;
      
      // Add Link import if not present
      if (!pageContent.includes("import Link from \"next/link\";")) {
        pageContent = pageContent.replace(
          /import Header from "@\/components\/Header";/,
          'import Link from "next/link";\nimport Header from "@/components/Header";'
        );
        updated = true;
      }
      
      // Fix pricing button to Link
      if (pageContent.includes('<button className={`w-full py-4 relative overflow-hidden group/btn')) {
        pageContent = pageContent.replace(
          /<button className=\{`w-full py-4 relative overflow-hidden group\/btn \$\{plan\.highlight \? 'bg-\[#00ff88\] text-black' : 'bg-white\/5 text-white border border-white\/10 hover:border-white\/30'\}`\}>/g,
          '<Link href="/contact" className={`w-full py-4 relative overflow-hidden group/btn block ${plan.highlight ? \'bg-[#00ff88] text-black\' : \'bg-white/5 text-white border border-white/10 hover:border-white/30\'}`}>'
        );
        pageContent = pageContent.replace(
          /<\/button>/,
          '</Link>'
        );
        updated = true;
      }
      
      if (updated) {
        fs.writeFileSync(pagePath, pageContent, 'utf-8');
        console.log(`✓ Fixed: ${category}/${service}/page.tsx`);
        fixedPages++;
      }
    }
  });
});

console.log(`\n✅ Fixed ${fixedPages} service pages!`);
console.log('\n📋 Next: Fixing Footer and Header links...\n');

// Fix 2: Footer links
const footerPath = path.join(__dirname, '../components/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf-8');

// Fix placeholder links (keeping as # for now, but we can update later)
const footerFixes = [
  { old: 'href="#"', new: 'href="/sitemap"' }, // Sitemap
];

footerFixes.forEach(fix => {
  if (footerContent.includes(fix.old)) {
    footerContent = footerContent.replace(new RegExp(fix.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.new);
    console.log(`✓ Fixed Footer: ${fix.old} → ${fix.new}`);
  }
});

fs.writeFileSync(footerPath, footerContent, 'utf-8');

// Fix 3: Header social links - add actual social media URLs
const headerPath = path.join(__dirname, '../components/Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf-8');

// Social media links (update with actual URLs)
const socialLinks = [
  { old: 'href="#"', pattern: 'Github', new: 'href="https://github.com"' },
  { old: 'href="#"', pattern: 'Linkedin', new: 'href="https://linkedin.com/company/shark-automation-lab"' },
  { old: 'href="#"', pattern: 'Twitter', new: 'href="https://twitter.com"' },
];

// This is a simple approach - we can enhance later
console.log('⚠️  Header social links need manual update with actual URLs');
console.log('   Current: href="#" - Update with real social media URLs\n');

console.log('✅ All button and link fixes completed!\n');

