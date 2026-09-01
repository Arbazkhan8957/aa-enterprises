const fs = require('fs');
const path = require('path');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix messed up text classes caused by earlier simple replacements
  content = content.replace(/text-3xl sm:text-3xl md:text-5xl md:text-4xl md:text-3xl md:text-5xl lg:text-7xl/g, 'text-4xl md:text-5xl lg:text-7xl');
  content = content.replace(/text-3xl sm:text-4xl md:text-3xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-3xl md:text-5xl lg:text-7xl/g, 'text-3xl md:text-5xl lg:text-7xl');

  // Any remaining generic massive texts
  content = content.replace(/\btext-7xl\b(?! md:| lg:)/g, 'text-4xl md:text-5xl lg:text-7xl');
  content = content.replace(/\btext-6xl\b(?! md:| lg:)/g, 'text-3xl md:text-5xl lg:text-6xl');
  content = content.replace(/\btext-5xl\b(?! sm:| md:| lg:)/g, 'text-3xl sm:text-4xl lg:text-5xl');

  // Fix static padding that might break mobile
  content = content.replace(/\bpx-12\b/g, 'px-4 sm:px-6 lg:px-12');
  content = content.replace(/\bpx-16\b/g, 'px-4 sm:px-8 lg:px-16');
  content = content.replace(/\bpy-24\b/g, 'py-12 sm:py-16 lg:py-24');
  content = content.replace(/\bpy-32\b/g, 'py-16 sm:py-24 lg:py-32');

  // Fix hardcoded widths
  content = content.replace(/\bw-\[400px\]\b/g, 'w-full max-w-[400px]');
  content = content.replace(/\bw-\[350px\]\b/g, 'w-full max-w-[350px]');
  content = content.replace(/\bw-\[500px\]\b/g, 'w-full max-w-[500px]');
  content = content.replace(/\bw-\[600px\]\b/g, 'w-full max-w-[600px]');

  // Clean up duplicate w-full
  content = content.replace(/\bw-full\s+w-full\b/g, 'w-full');

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

console.log('Responsiveness fixes applied!');
