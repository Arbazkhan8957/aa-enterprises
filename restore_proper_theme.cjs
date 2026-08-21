const fs = require('fs');

const navbar = `import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, FileText, Youtube, Facebook, Twitter, Search, Menu, X, Mail } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      navigate(\`/products?search=\${encodeURIComponent(searchQuery)}\`);
    }
  };

  return (
    <div className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +91 9326183962</span>
            <span className="flex items-center gap-1"><Mail size={14} /> sales@aaenterprises.in</span>
            <span className="flex items-center gap-1 text-orange-300"><FileText size={14} /> GST: 27AABCA1234Z1Z5</span>
          </div>
          <div className="flex items-center gap-4">
             <a href="#" className="hover:text-orange-400 transition"><Facebook size={16} /></a>
             <a href="#" className="hover:text-orange-400 transition"><Youtube size={16} /></a>
             <a href="#" className="hover:text-orange-400 transition"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-blue-900 tracking-wider flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold">AA</div>
            ENTERPRISES
          </Link>
          
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-bold">Home</Link>
            <Link to="/products" className="text-slate-700 hover:text-blue-600 font-bold">Products</Link>
            <Link to="/brands" className="text-slate-700 hover:text-blue-600 font-bold">Brands</Link>
            <Link to="/gallery" className="text-slate-700 hover:text-blue-600 font-bold">Gallery</Link>
            <Link to="/blog" className="text-slate-700 hover:text-blue-600 font-bold">Blog</Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 font-bold">About</Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-bold">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
             <form onSubmit={handleSearch} className="flex items-center border border-slate-300 rounded overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="px-3 py-2 text-sm outline-none w-48 focus:w-64 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 text-white p-2 hover:bg-blue-700">
                   <Search size={18} />
                </button>
             </form>
             <Link to="/quote" className="bg-orange-500 text-white px-4 py-2 rounded font-bold text-sm hover:bg-orange-600 transition">Get Quote</Link>
          </div>

          <button className="lg:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-4">
           <form onSubmit={handleSearch} className="flex items-center border border-slate-300 rounded overflow-hidden w-full mb-4">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="px-3 py-2 text-sm outline-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 text-white p-2">
                   <Search size={18} />
                </button>
             </form>
             <div className="flex flex-col gap-3 font-bold text-slate-700">
               <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
               <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
               <Link to="/brands" onClick={() => setIsMenuOpen(false)}>Brands</Link>
               <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
               <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
               <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
               <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
             </div>
        </div>
      )}
    </div>
  );
}
`;

const home = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { categories, products, brands } from '../data';

const heroSlides = [
  {
    title: "Premium Industrial Components",
    subtitle: "Authorized Distributors for Schneider, Omron, Sibass & Jigo",
    image: "/images/hero.png",
    color: "bg-blue-900"
  },
  {
    title: "Robust Electrical Solutions",
    subtitle: "Ensuring Zero Downtime and Maximum Efficiency",
    image: "/images/lc1e_family.jpg",
    color: "bg-slate-800"
  },
  {
    title: "Nationwide Quick Delivery",
    subtitle: "Extensive Inventory Ready to Ship Across India",
    image: "/images/enclosures.png",
    color: "bg-orange-600"
  }
];

export default function Home() {
  const featuredProducts = products.slice(0, 8);
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
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Slider */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-slate-900">
         {heroSlides.map((slide, idx) => (
            <div 
              key={idx}
              className={\`absolute inset-0 transition-opacity duration-1000 \${idx === currentSlide ? 'opacity-100' : 'opacity-0'} \${slide.color}\`}
            >
               <div className="absolute inset-0 bg-black/40 z-10"></div>
               {slide.image && (
                 <img src={slide.image} alt={slide.title} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
               )}
               <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md transform transition-transform duration-700 translate-y-0">{slide.title}</h1>
                  <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-3xl drop-shadow">{slide.subtitle}</p>
                  <div className="flex gap-4">
                    <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded flex items-center gap-2 transition">
                      Shop Now <ArrowRight size={20} />
                    </Link>
                    <Link to="/contact" className="bg-white hover:bg-slate-100 text-blue-900 font-bold py-3 px-8 rounded transition">
                      Contact Us
                    </Link>
                  </div>
               </div>
            </div>
         ))}
         
         {/* Slider Controls */}
         <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition">
            <ChevronLeft size={32} />
         </button>
         <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition">
            <ChevronRight size={32} />
         </button>
         
         {/* Dots */}
         <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
            {heroSlides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={\`w-3 h-3 rounded-full transition-colors \${idx === currentSlide ? 'bg-orange-500' : 'bg-white/50 hover:bg-white'}\`}
              />
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex justify-between items-end mb-8 border-b-2 border-slate-200 pb-2">
          <h2 className="text-3xl font-black text-blue-900">Shop by Category</h2>
          <Link to="/products" className="text-orange-600 font-bold hover:underline flex items-center gap-1">View All <ChevronRight size={16}/></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.slice(0, 10).map((cat, idx) => (
            <Link key={idx} to={\`/products?category=\${encodeURIComponent(cat.name)}\`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 border border-slate-200 flex flex-col items-center group">
              <div className="h-28 w-full flex items-center justify-center mb-3 p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition">
                <img src={cat.image} alt={cat.name} className="max-h-full object-contain mix-blend-multiply" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm text-center line-clamp-2 group-hover:text-blue-700 transition">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex justify-between items-end mb-8 border-b-2 border-slate-200 pb-2">
          <h2 className="text-3xl font-black text-blue-900">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <Link key={p.id} to={\`/product/\${p.id}\`} className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-slate-200 block group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">Best Seller</div>
              <div className="h-48 flex items-center justify-center mb-4 p-4 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition relative">
                <img src={p.image} alt={p.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{p.brand}</p>
              <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2 h-10 group-hover:text-blue-700">{p.name}</h3>
              <p className="text-xs text-slate-600 font-mono bg-slate-100 p-1 rounded inline-block">{p.model}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
         <div className="bg-blue-900 rounded-2xl text-white p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="md:w-2/3 mb-6 md:mb-0">
               <h2 className="text-3xl font-black mb-4">Authorized Distributor for Top Brands</h2>
               <p className="text-blue-100 text-lg mb-6">We provide 100% genuine industrial electrical components with full manufacturer warranty and support.</p>
               <div className="flex flex-wrap gap-4 bg-white/10 p-4 rounded-xl">
                 {brands.map((b, idx) => (
                   <span key={idx} className="bg-white text-blue-900 px-4 py-2 rounded-lg font-black tracking-widest uppercase text-sm shadow-sm">{b.name}</span>
                 ))}
               </div>
            </div>
            <div className="md:w-1/3 text-center">
               <Link to="/quote" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg inline-block w-full transition transform hover:-translate-y-1 shadow-lg">
                 Request Bulk Quote
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
}
`;

fs.writeFileSync('d:/aa-enterprises/src/components/Navbar.jsx', navbar);
fs.writeFileSync('d:/aa-enterprises/src/pages/Home.jsx', home);

console.log("Restored proper requested theme.");
