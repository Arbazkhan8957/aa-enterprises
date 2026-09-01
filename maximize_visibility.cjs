const fs = require('fs');
const path = require('path');

const maximizeVisibility = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Make ALL text pure white or extremely bright light gray
  content = content.replace(/text-gray-500/g, 'text-gray-100 font-medium');
  content = content.replace(/text-gray-400/g, 'text-white font-medium');
  content = content.replace(/text-gray-300/g, 'text-white font-semibold');
  content = content.replace(/text-slate-400/g, 'text-white font-medium');
  content = content.replace(/text-slate-500/g, 'text-gray-100 font-medium');
  content = content.replace(/text-slate-300/g, 'text-white font-semibold');
  
  // Boost border visibility
  content = content.replace(/border-white\/5/g, 'border-white/20');
  content = content.replace(/border-white\/10/g, 'border-white/30');
  
  // Boost background highlights
  content = content.replace(/bg-white\/5/g, 'bg-white/10');
  content = content.replace(/bg-brand-primary\/5/g, 'bg-brand-primary/20');
  content = content.replace(/bg-brand-primary\/10/g, 'bg-brand-primary/20');
  
  // Boost icon sizes slightly where possible (optional, might break layout)
  // Let's rely on CSS for icons
  
  fs.writeFileSync(filePath, content);
};

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        maximizeVisibility(dirFile);
      }
    }
  });
  return filelist;
};

// Protect Navbar if we want, but user said "every things proper visible and all with icons pages", let's include Navbar to boost its contrast too.
walkSync('./src/pages');
walkSync('./src/components');
console.log('Maximized visibility across all files!');
