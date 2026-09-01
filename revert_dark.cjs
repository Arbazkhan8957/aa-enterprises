const fs = require('fs');
const path = require('path');

const revertFile = (filePath) => {
  if (filePath.includes('Navbar.jsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Undo apply_pink_theme.cjs changes
  content = content.replace(/bg-white/g, 'bg-brand-dark');
  content = content.replace(/bg-brand-lightGrey/g, 'bg-[#0a0a0a]');
  
  // Fix the glass cards
  content = content.replace(/glass-card(?!-dark)/g, 'glass-card-dark');
  
  // Fix colors
  content = content.replace(/text-brand-dark/g, 'text-white');
  content = content.replace(/text-gray-500/g, 'text-gray-400');
  
  // Fix borders and hovers
  content = content.replace(/border-brand-primary\/10/g, 'border-white/10');
  content = content.replace(/border-brand-primary\/5/g, 'border-white/5');
  content = content.replace(/bg-brand-primary\/5(?![\w-])/g, 'bg-white/5');

  fs.writeFileSync(filePath, content);
};

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        revertFile(dirFile);
      }
    }
  });
  return filelist;
};

walkSync('./src/pages');
walkSync('./src/components');
console.log('Reverted theme on all files!');
