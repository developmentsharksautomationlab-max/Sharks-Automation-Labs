const fs = require('fs');
const path = require('path');

// Recursively find all page.tsx files in our-services directory
function findServicePages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findServicePages(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Find all service page files
const servicePages = findServicePages('app/our-services');

console.log(`Found ${servicePages.length} service pages to fix...\n`);

servicePages.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Remove header-wrapper-creative-design wrapper
    if (content.includes('header-wrapper-creative-design')) {
      // Match with flexible whitespace
      content = content.replace(
        /<div className="header-wrapper-creative-design">\s*<Header\s*\/>\s*<\/div>/g,
        '<Header />'
      );
      // Also handle with different spacing
      content = content.replace(
        /<div className="header-wrapper-creative-design">\s*<Header\s*\/>\s*<\/div>/g,
        '<Header />'
      );
      modified = true;
      console.log(`✓ Removed wrapper from: ${filePath}`);
    }

    // 2. Remove custom CSS that overrides Header nav
    if (content.includes('.header-wrapper-creative-design nav')) {
      // Remove the entire CSS block for header-wrapper-creative-design nav
      content = content.replace(
        /\.header-wrapper-creative-design nav\s*\{[^}]*\}/g,
        ''
      );
      modified = true;
      console.log(`✓ Removed custom nav CSS from: ${filePath}`);
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}\n`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}\n`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n✅ Header consistency fix completed!');
console.log('All service pages now use the same Header component from components/Header.tsx');

