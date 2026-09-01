const fs = require('fs');
const path = require('path');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip out all messed up text classes
  content = content.replace(/text-(?:\d+xl|base|sm|lg)(?:\s+(?:sm|md|lg|xl|2xl):text-(?:\d+xl|base|sm|lg))+/g, match => {
    // Look at the largest one or just replace with a sane default based on the match content
    if (match.includes('7xl')) return 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl';
    if (match.includes('6xl')) return 'text-3xl sm:text-4xl lg:text-6xl';
    if (match.includes('5xl')) return 'text-2xl sm:text-3xl lg:text-5xl';
    if (match.includes('4xl')) return 'text-2xl sm:text-3xl lg:text-4xl';
    if (match.includes('3xl')) return 'text-xl sm:text-2xl lg:text-3xl';
    if (match.includes('2xl')) return 'text-lg sm:text-xl lg:text-2xl';
    return match; // fallback
  });

  // Ensure w-[...] is cleaned up
  content = content.replace(/w-\[85vw\]\s+max-w-\[[^\]]+\](?:\s+(?:sm|md|lg):max-w-\[[^\]]+\])+/g, 'w-full max-w-[320px] sm:max-w-[400px]');
  
  // Fix grid column stacking for mobile
  content = content.replace(/grid-cols-2\s+sm:grid-cols-2/g, 'grid-cols-1 sm:grid-cols-2');
  content = content.replace(/grid-cols-3(?!\s+md:)/g, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3');
  content = content.replace(/grid-cols-4(?!\s+lg:)/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4');

  fs.writeFileSync(filePath, content);
};

const dirs = ['src/pages', 'src/components'];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      fixFile(path.join(dir, file));
    }
  });
});

console.log('Advanced responsiveness fixes applied!');
