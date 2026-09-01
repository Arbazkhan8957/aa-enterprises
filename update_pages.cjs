const fs = require('fs');
const path = require('path');
const dir = 'd:\\\\aa-enterprises\\\\src\\\\pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('PageHeroSlider')) {
    // Inject globalHeroSlides import if not present
    if (!content.includes('globalHeroSlides')) {
      content = content.replace(
        /import PageHeroSlider from '[^']+';/, 
        "import PageHeroSlider from '../components/PageHeroSlider';\nimport { globalHeroSlides } from '../data/globalSlides';"
      );
    }
    
    // Find PageHeroSlider usage and replace slides prop
    content = content.replace(/<PageHeroSlider[^>]*slides=\{?[a-zA-Z]+\}?[^>]*>/g, match => {
      return match.replace(/slides=\{?[a-zA-Z]+\}?/, 'slides={globalHeroSlides}');
    });
    
    // Some pages might not have slides prop passed currently, or it might be multiline.
    // Let's just do a simpler replacement:
    if (!content.includes('slides={globalHeroSlides}')) {
        content = content.replace(/<PageHeroSlider\s+/g, '<PageHeroSlider slides={globalHeroSlides} ');
    }
    
    // Clean up duplicate slides props if we just added it
    content = content.replace(/slides=\{globalHeroSlides\}\s+slides=\{[^}]+\}/g, 'slides={globalHeroSlides}');
    content = content.replace(/slides=\{[^}]+\}\s+slides=\{globalHeroSlides\}/g, 'slides={globalHeroSlides}');

    // Remove local heroSlides arrays
    content = content.replace(/const heroSlides = \[\s*\{[\s\S]*?\s\}\s*\];/g, '');
    content = content.replace(/const heroSlides = \[\s*\{[\s\S]*?\s\}\s*,\s*\{[\s\S]*?\s\}\s*\];/g, '');
    // simpler regex:
    content = content.replace(/const heroSlides = \[[^\]]*\];/g, '');

    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
  }
});
