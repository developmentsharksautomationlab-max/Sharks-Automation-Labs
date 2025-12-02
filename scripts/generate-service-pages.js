const fs = require('fs');
const path = require('path');

// Service configurations
const services = [
  { slug: 'web-development', name: 'Web Development', color: '#35c4dd', icon: 'Code' },
  { slug: 'app-development', name: 'App Development', color: '#35c4dd', icon: 'Smartphone' },
  { slug: 'social-media', name: 'Social Media Marketing', color: '#35c4dd', icon: 'MessageSquare' },
  { slug: 'performance-marketing', name: 'Performance Marketing', color: '#35c4dd', icon: 'TrendingUp' },
  { slug: 'seo', name: 'Search Engine Optimization', color: '#35c4dd', icon: 'Search' },
  { slug: 'creative', name: 'Creative Services', color: '#ff6b9d', icon: 'Palette' },
  { slug: 'outsourcing', name: 'Outsourcing Partnership', color: '#00ff88', icon: 'Users' },
  { slug: 'agency-plan', name: 'Agency Development Plan', color: '#00ff88', icon: 'Building2' },
  { slug: 'designer-resources', name: 'Designer Resources', color: '#ffaa00', icon: 'Palette' },
  { slug: 'developer-resources', name: 'Developer Resources', color: '#ffaa00', icon: 'Code' },
  { slug: 'marketing-resources', name: 'Marketing Resources', color: '#ffaa00', icon: 'TrendingUp' },
  { slug: 'virtual-assistant', name: 'Virtual Assistant', color: '#ffaa00', icon: 'Bot' },
  { slug: 'nfts', name: 'NFTs', color: '#9d4edd', icon: 'Box' },
  { slug: 'blockchain', name: 'Blockchain Development', color: '#9d4edd', icon: 'Network' },
  { slug: 'ar', name: 'Augmented Reality', color: '#9d4edd', icon: 'Zap' },
  { slug: 'web3', name: 'Web 3.0', color: '#9d4edd', icon: 'Globe' },
  { slug: 'vr', name: 'Virtual Reality', color: '#9d4edd', icon: 'Layers' },
  { slug: 'digital-agency', name: 'Digital Agency', color: '#00d4ff', icon: 'Building2' },
  { slug: 'ecommerce', name: 'Ecommerce', color: '#00d4ff', icon: 'Box' },
  { slug: 'real-estate', name: 'Real Estate', color: '#00d4ff', icon: 'Building2' },
  { slug: 'vehicle-rental', name: 'Vehicle Rental', color: '#00d4ff', icon: 'Box' },
  { slug: 'healthcare', name: 'Healthcare', color: '#00d4ff', icon: 'Building2' },
  { slug: 'cleaning', name: 'Cleaning Services', color: '#00d4ff', icon: 'Box' },
  { slug: 'restaurants', name: 'Restaurants', color: '#00d4ff', icon: 'Building2' },
  { slug: 'law-firms', name: 'Law Firms', color: '#00d4ff', icon: 'Building2' },
  { slug: 'financial', name: 'Financial Services', color: '#00d4ff', icon: 'Building2' },
  { slug: 'professional', name: 'Professional Services', color: '#00d4ff', icon: 'Building2' },
];

// Read template
const templatePath = path.join(__dirname, '../app/creative-design/page.tsx');
const template = fs.readFileSync(templatePath, 'utf-8');

// Generate pages for each service
services.forEach((service, index) => {
  const servicePath = path.join(__dirname, `../app/our-services/${service.slug}/page.tsx`);
  const serviceDir = path.dirname(servicePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(serviceDir)) {
    fs.mkdirSync(serviceDir, { recursive: true });
  }
  
  // Customize template content
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
  
  // Write file
  fs.writeFileSync(servicePath, customized, 'utf-8');
  console.log(`✓ Created: ${service.slug}/page.tsx`);
});

console.log(`\n✅ Generated ${services.length} service pages!`);

