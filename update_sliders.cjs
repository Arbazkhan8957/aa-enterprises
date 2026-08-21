const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'pages');

const oldControlsRegex = /\{\/\*\s*Slider Controls\s*\*\/\}\s*<div className="hidden lg:flex flex-col gap-4">[\s\S]*?<\/div>/g;

const newControls = `{/* Slider Controls */}
          <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hidden sm:flex items-center justify-center text-white hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hidden sm:flex items-center justify-center text-white hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>`;

// Update existing pages
['Home.jsx', 'About.jsx', 'Products.jsx', 'Contact.jsx'].forEach(file => {
  const filePath = path.join(baseDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(oldControlsRegex, newControls);
  
  if (file === 'Home.jsx') {
    // Update the phone numbers in CTA section
    const oldHotline = /<div className="font-black text-lg text-white">\+91 9326183962<\/div>/;
    const newHotline = `<div className="font-black text-lg text-white">+91 9326183962<br/>+91 9819495892</div>`;
    content = content.replace(oldHotline, newHotline);
  }
  
  fs.writeFileSync(filePath, content);
});

// For Brands, Services, Projects, Blog, we will rewrite them to include the slider logic.
const pagesToRewrite = [
  {
    name: 'Brands.jsx',
    title: 'OUR TRUSTED BRANDS',
    subtitle: 'GLOBAL PARTNERS',
    desc: 'Authorized distributors for the worlds most prestigious electrical manufacturers.',
    fileImports: "import { ChevronLeft, ChevronRight, Award } from 'lucide-react';"
  },
  {
    name: 'Services.jsx',
    title: 'OUR SERVICES',
    subtitle: 'EXPERT SOLUTIONS',
    desc: 'From technical consultation to turnkey supply chain delivery for major projects.',
    fileImports: "import { ChevronLeft, ChevronRight, Settings, Cpu, HardDrive, Wrench, ShieldCheck, Zap, Users, PhoneCall, CheckCircle2 } from 'lucide-react';"
  },
  {
    name: 'Projects.jsx',
    title: 'FEATURED PROJECTS',
    subtitle: 'PROVEN EXPERTISE',
    desc: 'Discover our track record of supplying massive electrical infrastructure across India.',
    fileImports: "import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';"
  },
  {
    name: 'Blog.jsx',
    title: 'TECH INSIGHTS',
    subtitle: 'INDUSTRY KNOWLEDGE',
    desc: 'Stay updated with the latest in industrial automation, switchgears, and manufacturing.',
    fileImports: "import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';"
  }
];

pagesToRewrite.forEach(page => {
  const filePath = path.join(baseDir, page.name);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace imports
    const importRegex = /import { (.*?) } from 'lucide-react';/;
    const match = content.match(importRegex);
  if (match) {
    let existingImports = match[1].split(',').map(i => i.trim());
    if (!existingImports.includes('ChevronLeft')) existingImports.push('ChevronLeft');
    if (!existingImports.includes('ChevronRight')) existingImports.push('ChevronRight');
    content = content.replace(importRegex, `import { ${existingImports.join(', ')} } from 'lucide-react';`);
  } else {
      // just in case
      content = content.replace(/import { motion } from 'framer-motion';/, `import { motion, AnimatePresence } from 'framer-motion';\n${page.fileImports}`);
  }

  // Ensure AnimatePresence is imported
  if (!content.includes('AnimatePresence')) {
    content = content.replace(/import { motion } from 'framer-motion';/, `import { motion, AnimatePresence } from 'framer-motion';`);
  }
  
  // Add useState, useEffect to React import
  content = content.replace(/import React from 'react';/, `import React, { useState, useEffect } from 'react';`);

  // Define heroSlides above export default function
  const heroSlidesDef = `
const heroSlides = [
  {
    title: "${page.title}",
    subtitle: "${page.subtitle}",
    desc: "${page.desc}",
    image: "/images/hero.png"
  },
  {
    title: "AA ENTERPRISES",
    subtitle: "INDUSTRIAL ARCHITECTURE",
    desc: "From massive contactors to precision limit switches, we are the fundamental infrastructure keeping the global economy moving.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
  }
];
`;
  
  content = content.replace(/export default function \w+\(\) \{/, `${heroSlidesDef}\n$&`);

  // Add state inside component
  const stateLogic = `
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
`;
  content = content.replace(/export default function \w+\(\) \{/, `$&${stateLogic}`);

  // Replace static hero section with dynamic slider
  // The static hero section usually looks like: <div className="bg-[#121212] py-24 relative overflow-hidden"> ... </div>
  const staticHeroRegex = /<div className="bg-\[#121212\] py-24 relative overflow-hidden">[\s\S]*?<\/div>\s*<\/div>/;
  
  const pageNameStr = page.name.replace('.jsx', '');

  const dynamicSlider = `
      {/* 1. Advanced Hero Slider Section */}
      <section className="relative min-h-[50vh] flex items-center bg-[#121212] overflow-hidden border-b border-zinc-900 pt-20">
        
        {/* Slider Backgrounds */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroSlides[currentSlide].image} 
              alt="Slide Background" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-16 flex items-center justify-between">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                    {heroSlides[currentSlide].title}
                  </span><br/>
                  {heroSlides[currentSlide].subtitle}
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl font-medium leading-relaxed">
                  {heroSlides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex items-center gap-2 text-sm text-zinc-500 font-bold uppercase tracking-widest bg-zinc-900/50 inline-flex rounded-xl p-2 border border-zinc-800/50 backdrop-blur-md">
              <Link to="/" className="hover:text-orange-500 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-800">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span className="text-orange-500 px-4 py-2 bg-orange-500/10 rounded-lg">${pageNameStr}</span>
            </div>
          </div>

${newControls}
        </div>
      </section>`;

  content = content.replace(staticHeroRegex, dynamicSlider);
  fs.writeFileSync(filePath, content);
  } catch (e) { console.error('Skipping ' + page.name); }
});

console.log("Pages updated successfully.");
