import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Search as SearchIcon, ChevronLeft, ArrowUpRight, ArrowRight, Zap, Star, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, brands } from '../data';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';

const productHeroSlides = [
  {
    title: "INDUSTRIAL COMPONENTS",
    subtitle: "COMPLETE INVENTORY",
    desc: "Browse our comprehensive selection of authentic Schneider, Omron, Sibass, and Jigo industrial hardware.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "HEAVY-DUTY EQUIPMENT",
    subtitle: "AUTOMATION & SENSING",
    desc: "Engineered for maximum reliability and uptime in the most demanding manufacturing environments.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'All Categories';
  const initialBrand = searchParams.get('brand') || 'All Brands';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Featured Slider State
  const featuredCarouselRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const featuredProducts = products.slice(0, 4); // Take first 4 as featured

  useEffect(() => {
    if (featuredCarouselRef.current) {
      setSliderWidth(featuredCarouselRef.current.scrollWidth - featuredCarouselRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    const br = searchParams.get('brand');
    const sq = searchParams.get('search');
    
    if (cat) setSelectedCategory(cat);
    if (br) setSelectedBrand(br);
    if (sq) setSearchQuery(sq);
  }, [searchParams]);
  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'All Categories') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand !== 'All Brands') {
      result = result.filter(p => p.brand === selectedBrand);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        (p.name || '').toLowerCase().includes(q) || 
        (p.model || '').toLowerCase().includes(q) || 
        (p.brand || '').toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q)
      );
    }

    setFilteredProducts(result);

    const newParams = new URLSearchParams();
    if (selectedCategory !== 'All Categories') newParams.set('category', selectedCategory);
    if (selectedBrand !== 'All Brands') newParams.set('brand', selectedBrand);
    if (searchQuery.trim()) newParams.set('search', searchQuery.trim());
    setSearchParams(newParams, { replace: true });
    
  }, [selectedCategory, selectedBrand, searchQuery, setSearchParams]);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="bg-[#fafafa] min-h-screen pb-32 overflow-hidden relative selection:bg-brand-primary selection:text-white">
      
      <PageHeroSlider 
        slides={globalHeroSlides} 
        pageName="Catalogue" 
      />

      {/* Featured Slider Area */}
      <div className="pt-20 pb-10 border-b border-gray-200 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-10">
             <Star className="text-brand-primary fill-brand-primary" size={24} />
             <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight uppercase italic">Featured Equipment</h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 gap-6">
              {featuredProducts.map((product, idx) => (
                <div 
                  key={product.id}
                  className="bg-white w-[85vw] max-w-[280px] md:max-w-none sm:w-[300px] md:w-[400px] shrink-0 snap-start rounded-[2rem] overflow-hidden group flex flex-col border border-gray-200 hover:border-brand-primary/50 shadow-premium hover:shadow-peak transition-all duration-500 hover:-translate-y-2 p-4 sm:p-6 animated-gradient-border"
                >
                  <div className="h-48 md:h-64 overflow-hidden relative rounded-2xl bg-[#fafafa] flex items-center justify-center p-4 sm:p-6 border border-gray-100 mb-6 group-hover:bg-gray-100 transition-colors">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out filter relative z-10 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest z-20 shadow-md italic">
                      Popular
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedImage(product.image); }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-primary hover:text-white border border-gray-200 z-30"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <span className="text-brand-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 block italic">{product.brand}</span>
                    <h3 className="font-black text-xl sm:text-2xl text-gray-900 leading-tight mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">{product.name}</h3>
                    <Link to={`/product/${product.id}`} className="mt-auto inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors group/link w-fit">
                      <em>View Specifications</em> <ArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-col md:flex-row gap-16 relative">
        
        {/* Cinematic Sidebar Filter */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-80 shrink-0"
        >
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-premium border border-gray-200 sticky top-32 z-40">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
              <span className="font-black text-2xl text-gray-900 tracking-tight uppercase">Filters</span>
              <Filter size={24} className="text-brand-primary" />
            </div>

            {/* Search Filter */}
            <div className="mb-12">
              <h3 className="font-black text-xs text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2 italic">
                <SearchIcon size={14} className="text-brand-primary" /> Search Database
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find parts, models..." 
                  className="w-full bg-[#fafafa] rounded-xl p-4 pl-4 text-base focus:outline-none text-gray-900 font-bold border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-400 focus:bg-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <h3 className="font-black text-xs text-gray-900 uppercase tracking-widest mb-4 italic">Categories</h3>
              <div className="max-h-[350px] overflow-y-auto pr-2 flex flex-col gap-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                <button
                  onClick={() => setSelectedCategory('All Categories')}
                  className={`group/cat relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 overflow-hidden text-left ${selectedCategory === 'All Categories' ? 'bg-gray-900 border-gray-900 shadow-lg' : 'bg-gray-50 border-transparent hover:border-brand-primary'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90 opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 ${selectedCategory === 'All Categories' ? '!opacity-100' : ''}`}></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] ${selectedCategory === 'All Categories' ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-gray-300 group-hover/cat:bg-white group-hover/cat:scale-150 group-hover/cat:shadow-[0_0_10px_rgba(255,255,255,0.8)]'}`}></div>
                    <span className={`text-sm font-black uppercase tracking-wider transition-colors duration-300 italic ${selectedCategory === 'All Categories' ? 'text-white' : 'text-gray-600 group-hover/cat:text-white'}`}>
                      All Categories
                    </span>
                  </div>
                  <ArrowRight size={16} className={`relative z-10 transition-all duration-300 shrink-0 ${selectedCategory === 'All Categories' ? 'text-white opacity-100 translate-x-0' : 'text-brand-primary group-hover/cat:text-white opacity-0 -translate-x-4 group-hover/cat:translate-x-0 group-hover/cat:opacity-100'}`} />
                </button>
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`group/cat relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 overflow-hidden text-left ${selectedCategory === cat.name ? 'bg-gray-900 border-gray-900 shadow-lg' : 'bg-gray-50 border-transparent hover:border-brand-primary'}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90 opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 ${selectedCategory === cat.name ? '!opacity-100' : ''}`}></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] ${selectedCategory === cat.name ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-gray-300 group-hover/cat:bg-white group-hover/cat:scale-150 group-hover/cat:shadow-[0_0_10px_rgba(255,255,255,0.8)]'}`}></div>
                      <span className={`text-sm font-black uppercase tracking-wider transition-colors duration-300 italic ${selectedCategory === cat.name ? 'text-white' : 'text-gray-600 group-hover/cat:text-white'}`}>
                        {cat.name}
                      </span>
                    </div>
                    <ArrowRight size={16} className={`relative z-10 transition-all duration-300 shrink-0 ${selectedCategory === cat.name ? 'text-white opacity-100 translate-x-0' : 'text-brand-primary group-hover/cat:text-white opacity-0 -translate-x-4 group-hover/cat:translate-x-0 group-hover/cat:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="font-black text-xs text-gray-900 uppercase tracking-widest mb-4 italic">Brands</h3>
              <div className="max-h-[350px] overflow-y-auto pr-2 flex flex-col gap-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                <button
                  onClick={() => setSelectedBrand('All Brands')}
                  className={`group/cat relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 overflow-hidden text-left ${selectedBrand === 'All Brands' ? 'bg-gray-900 border-gray-900 shadow-lg' : 'bg-gray-50 border-transparent hover:border-brand-primary'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90 opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 ${selectedBrand === 'All Brands' ? '!opacity-100' : ''}`}></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] ${selectedBrand === 'All Brands' ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-gray-300 group-hover/cat:bg-white group-hover/cat:scale-150 group-hover/cat:shadow-[0_0_10px_rgba(255,255,255,0.8)]'}`}></div>
                    <span className={`text-sm font-black uppercase tracking-wider transition-colors duration-300 italic ${selectedBrand === 'All Brands' ? 'text-white' : 'text-gray-600 group-hover/cat:text-white'}`}>
                      All Brands
                    </span>
                  </div>
                  <ArrowRight size={16} className={`relative z-10 transition-all duration-300 shrink-0 ${selectedBrand === 'All Brands' ? 'text-white opacity-100 translate-x-0' : 'text-brand-primary group-hover/cat:text-white opacity-0 -translate-x-4 group-hover/cat:translate-x-0 group-hover/cat:opacity-100'}`} />
                </button>
                {brands.map((brand, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBrand(brand.name)}
                    className={`group/cat relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 overflow-hidden text-left ${selectedBrand === brand.name ? 'bg-gray-900 border-gray-900 shadow-lg' : 'bg-gray-50 border-transparent hover:border-brand-primary'}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90 opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 ${selectedBrand === brand.name ? '!opacity-100' : ''}`}></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] ${selectedBrand === brand.name ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-gray-300 group-hover/cat:bg-white group-hover/cat:scale-150 group-hover/cat:shadow-[0_0_10px_rgba(255,255,255,0.8)]'}`}></div>
                      <span className={`text-sm font-black uppercase tracking-wider transition-colors duration-300 italic ${selectedBrand === brand.name ? 'text-white' : 'text-gray-600 group-hover/cat:text-white'}`}>
                        {brand.name}
                      </span>
                    </div>
                    <ArrowRight size={16} className={`relative z-10 transition-all duration-300 shrink-0 ${selectedBrand === brand.name ? 'text-white opacity-100 translate-x-0' : 'text-brand-primary group-hover/cat:text-white opacity-0 -translate-x-4 group-hover/cat:translate-x-0 group-hover/cat:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {(selectedCategory !== 'All Categories' || selectedBrand !== 'All Brands' || searchQuery) && (
                <motion.button 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setSelectedBrand('All Brands');
                    setSearchQuery('');
                  }}
                  className="w-full py-4 bg-brand-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
                >
                  <Zap size={14} /> Clear All Filters
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="flex-grow pt-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 bg-white border border-gray-200 shadow-premium px-8 py-6 rounded-2xl flex items-center justify-between"
          >
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter italic">
              Displaying <span className="text-brand-primary">{filteredProducts.length}</span> Results
            </h2>
          </motion.div>

          {filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-20 rounded-[2rem] shadow-premium border border-gray-200 text-center flex flex-col items-center animated-gradient-border"
            >
              <div className="w-24 h-24 bg-[#fafafa] rounded-full mb-8 flex items-center justify-center border border-gray-100">
                <SearchIcon size={40} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-4 uppercase italic">No parts found</h3>
              <p className="text-gray-600 font-medium mb-8 text-lg">Try adjusting your <strong>filters</strong> or <em>search query</em> to discover inventory.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSelectedBrand('All Brands');
                  setSearchQuery('');
                }}
                className="btn-premium bg-brand-primary text-white px-10 py-5 text-sm font-black uppercase tracking-widest rounded-full hover:shadow-lg hover:bg-brand-accent transition-all"
              >
                Reset Everything
              </button>
            </motion.div>
          ) : (
            <div className="space-y-24">
              {Object.entries(groupedProducts).map(([categoryName, productsInCategory]) => (
                <div key={categoryName}>
                  <div className="flex items-center gap-6 mb-12">
                    <h3 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tight uppercase italic">{categoryName}</h3>
                    <div className="h-[2px] flex-grow bg-gray-200 relative">
                       <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-brand-primary to-transparent"></div>
                    </div>
                    <span className="text-brand-primary font-black text-2xl">{productsInCategory.length}</span>
                  </div>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    <AnimatePresence>
                      {productsInCategory.map((product) => (
                        <motion.div
                          layout
                          variants={fadeUp}
                          key={product.id}
                        >
                          <Link to={`/product/${product.id}`} className="group block h-full flex flex-col rounded-[2rem] border border-gray-200 hover:border-brand-primary/50 transition-all duration-500 overflow-hidden bg-white shadow-premium hover:shadow-peak hover:-translate-y-2 relative animated-gradient-border">
                            
                            <div className="bg-[#fafafa] relative aspect-square flex items-center justify-center p-8 border-b border-gray-100 overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="max-h-full object-contain group-hover:scale-125 transition-transform duration-700 ease-out filter opacity-80 group-hover:opacity-100 relative z-10" 
                              />
                              <div className="absolute top-6 left-6 bg-white backdrop-blur-md px-4 py-2 rounded-full z-20 border border-gray-200 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors shadow-sm">
                                <span className="text-sm font-black uppercase tracking-widest text-gray-900 group-hover:text-white transition-colors italic">{product.brand}</span>
                              </div>
                              <button 
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedImage(product.image); }}
                                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-primary hover:text-white border border-gray-200 z-30 translate-y-4 group-hover:translate-y-0"
                              >
                                <Maximize2 size={18} />
                              </button>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow relative z-20">
                              <span className="text-sm uppercase text-gray-500 font-bold tracking-widest mb-3 block group-hover:text-gray-900 transition-colors italic">{product.model}</span>
                              <h3 className="font-black text-3xl text-gray-900 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2 mb-8">{product.name}</h3>
                              
                              <div className="mt-auto flex items-center justify-between">
                                 <span className="text-lg font-black text-gray-900 uppercase tracking-widest group-hover:text-brand-primary transition-colors"><em>View Spec</em></span>
                                 <div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all shrink-0">
                                   <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                 </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Zoomed Product"
              className="w-full max-w-5xl max-h-[85vh] object-contain drop-shadow-2xl rounded-xl sm:rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
