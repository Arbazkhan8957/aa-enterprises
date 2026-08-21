import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, User, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'The Future of Industrial Automation with Omron Sensors',
    date: 'August 15, 2026',
    author: 'Technical Team',
    desc: 'Discover how the latest generation of Omron proximity sensors is changing the way we look at automated assembly lines. From predictive maintenance to real-time precision tracking.',
    img: '/images/hero.png'
  },
  {
    title: 'Choosing the Right Schneider Contactor for High-Load Applications',
    date: 'July 28, 2026',
    author: 'Sales Engineering',
    desc: 'A comprehensive guide to selecting between the TeSys D and EasyPact series. Learn how to calculate the correct coil voltage and current rating for your specific motor control center.',
    img: '/images/schneider_group.png'
  },
  {
    title: 'Why IP67 Rated Enclosures Are Essential in Manufacturing',
    date: 'June 10, 2026',
    author: 'Safety Team',
    desc: 'Dust and moisture are the enemies of electrical panels. We break down the IP rating system and explain why investing in premium enclosures saves thousands in downtime.',
    img: '/images/enclosures.png'
  }
];


const heroSlides = [
  {
    title: "TECH INSIGHTS",
    subtitle: "INDUSTRY KNOWLEDGE",
    desc: "Stay updated with the latest in industrial automation, switchgears, and manufacturing.",
    image: "/images/hero.png"
  },
  {
    title: "AA ENTERPRISES",
    subtitle: "INDUSTRIAL ARCHITECTURE",
    desc: "From massive contactors to precision limit switches, we are the fundamental infrastructure keeping the global economy moving.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
  }
];



export default function Blog() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      
      {/* 1. Advanced Hero Slider Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-950 overflow-hidden border-b border-slate-900 pt-20">
        
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-600">
                    {heroSlides[currentSlide].title}
                  </span><br/>
                  {heroSlides[currentSlide].subtitle}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl font-medium leading-relaxed">
                  {heroSlides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest bg-slate-900/50 inline-flex rounded-xl p-2 border border-slate-800/50 backdrop-blur-md">
              <Link to="/" className="hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span className="text-indigo-500 px-4 py-2 bg-indigo-500/10 rounded-lg">Blog</span>
            </div>
          </div>

{/* Slider Controls */}
          <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hidden sm:flex items-center justify-center text-white hover:bg-indigo-500 hover:text-black hover:border-indigo-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hidden sm:flex items-center justify-center text-white hover:bg-indigo-500 hover:text-black hover:border-indigo-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20 space-y-24">
        {blogs.map((post, idx) => (
          <div key={idx} className={`flex flex-col gap-12 items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="flex gap-4 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={14} className="text-indigo-600" /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} className="text-indigo-600" /> {post.author}</span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight mb-4 hover:text-indigo-700 cursor-pointer transition-colors">{post.title}</h2>
              <p className="text-slate-500 mb-8 text-lg leading-relaxed">{post.desc}</p>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-600 transition-colors uppercase text-sm tracking-wider">
                Read Article
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full relative group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className={`absolute inset-0 bg-slate-950 rounded-3xl transform ${idx % 2 === 0 ? 'rotate-3 scale-105' : '-rotate-3 scale-105'} opacity-10 z-0 group-hover:rotate-6 transition-transform duration-500`}></div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
