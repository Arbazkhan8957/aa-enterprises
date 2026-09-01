const fs = require('fs');
const path = require('path');

const brightenFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Make grey text brighter for better contrast against dark backgrounds
  content = content.replace(/text-gray-400/g, 'text-gray-300');
  content = content.replace(/text-gray-500/g, 'text-gray-300');
  content = content.replace(/text-slate-400/g, 'text-gray-300');
  content = content.replace(/text-slate-500/g, 'text-gray-300');
  
  // Brighten borders
  content = content.replace(/border-white\/5/g, 'border-white/10');
  
  fs.writeFileSync(filePath, content);
};

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        brightenFile(dirFile);
      }
    }
  });
  return filelist;
};

walkSync('./src/pages');
walkSync('./src/components');
console.log('Brightened text across all files!');
