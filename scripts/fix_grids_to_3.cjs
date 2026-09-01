const fs = require('fs');
const path = require('path');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix broken grid combinations that have duplicate or conflicting breakpoints
  // like: md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3
  // Make everything strictly 3 columns on desktop (lg:) as requested by user.
  content = content.replace(/grid-cols-1\s+(?:md|sm|lg):grid-cols-\d+(?:\s+(?:md|sm|lg):grid-cols-\d+)+/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');
  content = content.replace(/md:grid-cols-1\s+(?:md|sm|lg):grid-cols-\d+(?:\s+(?:md|sm|lg):grid-cols-\d+)+/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');
  content = content.replace(/lg:grid-cols-1\s+(?:md|sm|lg):grid-cols-\d+(?:\s+(?:md|sm|lg):grid-cols-\d+)+/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');
  
  // Also fix any grid-cols-4 that they might have wanted to be 3.
  // Wait, let's just make sure we only fix the messy ones and any explicit 4-cols that are likely product/gallery grids.
  // Example: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -> grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  content = content.replace(/grid-cols-1\s+sm:grid-cols-2\s+lg:grid-cols-4/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');

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

console.log('Fixed desktop grids to 3 columns!');
