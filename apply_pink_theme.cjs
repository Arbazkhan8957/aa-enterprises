const fs = require('fs');
const path = require('path');

const directories = ['./src/pages', './src/components'];

const replacements = [
  { search: /glass-card-dark/g, replace: 'glass-card' },
  { search: /bg-brand-dark(?![\w-])/g, replace: 'bg-white' },
  { search: /bg-\[#0a0a0a\]/g, replace: 'bg-white' },
  { search: /text-brand-lightGrey/g, replace: 'text-brand-dark' },
  { search: /text-white(?![\w-])/g, replace: 'text-brand-dark' },
  { search: /hover:bg-brand-primary hover:text-black/g, replace: '' },
  { search: /border-white\/10/g, replace: 'border-brand-primary/10' },
  { search: /border-white\/5/g, replace: 'border-brand-primary/5' },
  { search: /bg-white\/5(?![\w-])/g, replace: 'bg-brand-primary/5' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;

      content = content.replace(/className="w-full bg-brand-surface text-gray-400/g, 'className="w-full bg-white text-gray-500');
      content = content.replace(/className="btn-premium bg-brand-dark text-white/g, 'className="btn-premium');
      
      for (const { search, replace } of replacements) {
        content = content.replace(search, replace);
      }

      content = content.replace(/btn-premium([^>]*)text-brand-dark/g, 'btn-premium$1text-white');
      content = content.replace(/btn-magnetic([^>]*)text-brand-dark/g, 'btn-magnetic$1text-white');

      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  }
});

console.log('Theme update complete.');
