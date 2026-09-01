const fs = require('fs');
const path = require('path');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Restore Desktop sizes to md: breakpoint so small laptops aren't affected
  content = content.replace(/text-3xl sm:text-4xl md:text-5xl lg:text-7xl/g, 'text-4xl md:text-7xl');
  content = content.replace(/text-3xl sm:text-4xl lg:text-7xl/g, 'text-4xl md:text-7xl');
  
  content = content.replace(/text-3xl sm:text-4xl lg:text-6xl/g, 'text-3xl md:text-6xl');
  content = content.replace(/text-2xl sm:text-3xl lg:text-5xl/g, 'text-2xl md:text-5xl');
  content = content.replace(/text-2xl sm:text-3xl lg:text-4xl/g, 'text-2xl md:text-4xl');
  content = content.replace(/text-xl sm:text-2xl lg:text-3xl/g, 'text-xl md:text-3xl');
  content = content.replace(/text-lg sm:text-xl lg:text-2xl/g, 'text-lg md:text-2xl');

  // Restore paddings
  content = content.replace(/px-4 sm:px-6 lg:px-12/g, 'px-4 sm:px-6 md:px-12');
  content = content.replace(/px-4 sm:px-8 lg:px-16/g, 'px-4 sm:px-8 md:px-16');
  content = content.replace(/py-12 sm:py-16 lg:py-24/g, 'py-12 sm:py-16 md:py-24');
  content = content.replace(/py-16 sm:py-24 lg:py-32/g, 'py-16 sm:py-24 md:py-32');

  // Restore feature cards padding in Home.jsx
  content = content.replace(/p-4 sm:p-6 lg:p-8/g, 'p-4 sm:p-6 md:p-8');
  content = content.replace(/text-sm sm:text-base lg:text-lg/g, 'text-sm md:text-lg');
  content = content.replace(/text-\[10px\] sm:text-xs lg:text-sm/g, 'text-xs md:text-sm');

  // Fix max-w causing flex issues on desktop
  // If original was w-[400px], we change w-full max-w-[400px] to w-full md:w-[400px]
  content = content.replace(/w-full max-w-\[400px\]/g, 'w-full md:w-[400px] md:max-w-none');
  content = content.replace(/w-full max-w-\[350px\]/g, 'w-full md:w-[350px] md:max-w-none');
  content = content.replace(/w-full max-w-\[500px\]/g, 'w-full md:w-[500px] md:max-w-none');
  content = content.replace(/w-full max-w-\[600px\]/g, 'w-full md:w-[600px] md:max-w-none');
  
  // Grid column mobile fix
  // The original was probably grid-cols-2 globally. I changed it to grid-cols-1 sm:grid-cols-2.
  // Actually sm: (640px) might still be considered mobile/tablet. 
  // Desktop is definitely fine with sm:grid-cols-2.

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

console.log('Desktop styles restored to previous design!');
