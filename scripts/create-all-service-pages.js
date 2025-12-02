const fs = require('fs');
const path = require('path');

// Service structure with content customization
const SERVICES = {
  'digital-services': [
    { slug: 'web-development', name: 'Web Development', color: '#35c4dd' },
    { slug: 'app-development', name: 'App Development', color: '#35c4dd' },
    { slug: 'social-media', name: 'Social Media Marketing', color: '#35c4dd' },
    { slug: 'performance-marketing', name: 'Performance Marketing', color: '#35c4dd' },
    { slug: 'seo', name: 'Search Engine Optimization', color: '#35c4dd' }
  ],
  'creative-services': [
    { slug: 'creative-design', name: 'Creative Design', color: '#ff6b9d' },
    { slug: 'creative', name: 'Creative Services', color: '#ff6b9d' }
  ],
  'outsourcing-partnership': [
    { slug: 'outsourcing', name: 'Outsourcing Partnership', color: '#00ff88' },
    { slug: 'agency-plan', name: 'Agency Development Plan', color: '#00ff88' }
  ],
  'virtual-resources': [
    { slug: 'designer-resources', name: 'Designer Resources', color: '#ffaa00' },
    { slug: 'developer-resources', name: 'Developer Resources', color: '#ffaa00' },
    { slug: 'marketing-resources', name: 'Marketing Resources', color: '#ffaa00' },
    { slug: 'virtual-assistant', name: 'Virtual Assistant', color: '#ffaa00' }
  ],
  'emerging-technologies': [
    { slug: 'nfts', name: 'NFTs', color: '#9d4edd' },
    { slug: 'blockchain', name: 'Blockchain Development', color: '#9d4edd' },
    { slug: 'ar', name: 'Augmented Reality', color: '#9d4edd' },
    { slug: 'web3', name: 'Web 3.0', color: '#9d4edd' },
    { slug: 'vr', name: 'Virtual Reality', color: '#9d4edd' }
  ],
  'industry-plans': [
    { slug: 'digital-agency', name: 'Digital Agency', color: '#00d4ff' },
    { slug: 'ecommerce', name: 'Ecommerce', color: '#00d4ff' },
    { slug: 'real-estate', name: 'Real Estate', color: '#00d4ff' },
    { slug: 'vehicle-rental', name: 'Vehicle Rental', color: '#00d4ff' },
    { slug: 'healthcare', name: 'Healthcare', color: '#00d4ff' },
    { slug: 'cleaning', name: 'Cleaning Services', color: '#00d4ff' },
    { slug: 'restaurants', name: 'Restaurants', color: '#00d4ff' },
    { slug: 'law-firms', name: 'Law Firms', color: '#00d4ff' },
    { slug: 'financial', name: 'Financial Services', color: '#00d4ff' },
    { slug: 'professional', name: 'Professional Services', color: '#00d4ff' }
  ]
};

// Read template
const templatePath = path.join(__dirname, '../app/creative-design/page.tsx');
const template = fs.readFileSync(templatePath, 'utf-8');

// Customize template for service
function customizeForService(template, service) {
  let customized = template;
  
  // Replace hero section
  customized = customized.replace(
    /title: "Outsource Creative Services",/g,
    `title: "${service.name}",`
  );
  
  customized = customized.replace(
    /subtitle: "Creative Excellence",/g,
    `subtitle: "${service.name} Excellence",`
  );
  
  customized = customized.replace(
    /desc: "Outsource creative services to our team of talented creatives\."/g,
    `desc: "Get professional ${service.name.toLowerCase()} services from our expert team."`
  );
  
  // Replace hero color
  customized = customized.replace(
    /color: new THREE\.Color\("#00f0ff"\),/g,
    `color: new THREE.Color("${service.color}"),`
  );
  
  return customized;
}

// Generate all pages
let count = 0;

Object.entries(SERVICES).forEach(([category, services]) => {
  services.forEach((service) => {
    const pageDir = path.join(__dirname, `../app/our-services/${category}/${service.slug}`);
    const pagePath = path.join(pageDir, 'page.tsx');
    
    // Create directory
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Customize and write
    const customized = customizeForService(template, service);
    fs.writeFileSync(pagePath, customized, 'utf-8');
    
    console.log(`✓ Created: ${category}/${service.slug}/page.tsx`);
    count++;
  });
});

console.log(`\n✅ Successfully created ${count} service pages!`);

