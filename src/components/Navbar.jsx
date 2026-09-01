import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Phone, Mail, ChevronDown, ArrowUpRight, ArrowRight, Home, Info, Package, Award, Image as ImageIcon, FileText, PhoneCall, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchCategory, setSearchCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() || searchCategory !== 'All Categories') {
      let url = `/products?`;
      if (searchQuery.trim()) url += `search=${encodeURIComponent(searchQuery.trim())}&`;
      if (searchCategory !== 'All Categories') url += `category=${encodeURIComponent(searchCategory)}`;
      
      if (url.endsWith('&')) url = url.slice(0, -1);
      
      navigate(url);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'HOME', path: '/', icon: Home },
    { name: 'ABOUT', path: '/about', icon: Info },
    { name: 'PRODUCTS', path: '/products', icon: Package },
    { name: 'BRANDS', path: '/brands', icon: Award },
    { name: 'GALLERY', path: '/gallery', icon: ImageIcon },
    { name: 'BLOG', path: '/blog', icon: FileText },
    { name: 'CONTACT', path: '/contact', icon: PhoneCall }
  ];

  return (
    <>
      <div className={`w-full z-[60] transition-all duration-300 bg-white ${scrolled ? 'fixed top-0 left-0 shadow-premium' : 'relative'}`}>
        
        {/* Top micro-bar (Contact & Social) */}
        <div className={`hidden md:block w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-700 font-medium py-2 border-b border-brand-primary/20">
            <div className="flex gap-6 items-center flex-wrap justify-center">
              <span className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <Phone size={14} className="text-brand-primary" />
                +91 9326183962 / +91 9819495892
              </span>
              <span className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                <Mail size={14} className="text-brand-primary" />
                aaenterprises123786@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-brand-primary font-bold">GSTIN :</span> <span className="font-semibold text-gray-800">27FOYPS9860F1ZR</span>
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2 md:mt-0">
              <span className="font-semibold text-gray-800">Follow Us :</span>
              <div className="flex items-center gap-2">
                <a href="#" className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary text-gray-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary text-gray-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary text-gray-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary text-white transition-colors bg-red-600 border-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full bg-white shadow-md border-b border-gray-100 z-50 relative">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.header 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center justify-between py-3"
            >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10 shrink-0 py-1 mr-2 xl:mr-6">
              <div className="w-11 h-11 sm:w-14 sm:h-14 2xl:w-16 2xl:h-16 rounded-full overflow-hidden shadow-sm bg-white shrink-0 flex items-center justify-center border border-gray-200">
                <img 
                  src="/images/logo.jpg" 
                  alt="AA Enterprises Logo" 
                  className="w-full h-full object-contain p-1 sm:p-1.5 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm sm:text-lg 2xl:text-xl font-black text-gray-900 uppercase tracking-tight leading-none group-hover:text-brand-primary transition-colors m-0 whitespace-nowrap">
                  AA Enterprises
                </h1>
                <p className="text-[7px] sm:text-[8px] 2xl:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 leading-[1.2]">
                  electrical electronics <br />
                  industrial automation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center justify-center flex-grow gap-2 ml-4 2xl:ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-xs 2xl:text-sm font-black uppercase tracking-widest italic transition-all duration-300 group flex items-center gap-1.5 ${location.pathname === link.path ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-900 hover:text-brand-primary hover:bg-brand-primary/5'}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-neon"
                    />
                  )}
                </Link>
              ))}
              
              {/* Premium Scroller Menu for Categories */}
              <div className="relative group px-4 py-2 rounded-xl text-xs 2xl:text-sm font-black uppercase tracking-widest italic text-gray-900 cursor-pointer flex items-center gap-2 hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300">
                <LayoutGrid size={16} className="text-brand-primary" />
                CATEGORIES <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-gray-900 text-white shadow-2xl rounded-3xl p-6 w-[450px] border border-gray-800 flex flex-col relative overflow-hidden cursor-default">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-[80px] pointer-events-none"></div>
                    <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-4 relative z-10">
                      <h3 className="text-xl font-black uppercase tracking-tighter italic text-white m-0">Explore Categories</h3>
                      <Link to="/products" className="text-brand-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded-lg">
                        View All <ArrowRight size={14} />
                      </Link>
                    </div>
                    
                    {/* The Sexy Scroller */}
                    <div className="relative z-10 max-h-[350px] overflow-y-auto pr-2 flex flex-col gap-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-800/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                      {categories.map((cat, idx) => (
                        <Link
                          key={idx}
                          to={`/products?category=${encodeURIComponent(cat.name)}`}
                          className="group/cat relative flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-800/50 hover:border-brand-primary transition-all duration-300 overflow-hidden"
                        >
                          {/* Hover Gradient Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90 opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative z-10 flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-gray-500 group-hover/cat:bg-white group-hover/cat:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover/cat:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                            <span className="text-sm font-black text-gray-300 group-hover/cat:text-white uppercase tracking-wider transition-colors duration-300 italic">
                              {cat.name}
                            </span>
                          </div>
                          <ArrowRight size={18} className="text-brand-primary group-hover/cat:text-white opacity-0 -translate-x-4 group-hover/cat:translate-x-0 group-hover/cat:opacity-100 transition-all duration-300 relative z-10" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 z-10 shrink-0">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:text-brand-primary transition-colors hover:shadow-md"
              >
                {showSearch ? <X size={20} /> : <Search size={20} />}
              </button>
              
              <Link to="/quote" className="hidden sm:flex btn-premium items-center gap-1.5 px-4 2xl:px-6 py-2.5 2xl:py-3 rounded-full font-bold text-[10px] 2xl:text-xs uppercase tracking-wide shrink-0">
                GET QUOTE
                <ArrowUpRight size={16} className="hidden 2xl:block" />
              </Link>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-800"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            </motion.header>
          </div>
        </div>

        {/* Massive Search Overlay */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full mt-4 left-0 w-full px-4 sm:px-6 lg:px-8 pointer-events-auto z-40"
            >
              <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] shadow-2xl p-6 sm:p-12 border border-gray-800 relative overflow-hidden max-w-7xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[60px] pointer-events-none"></div>
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-6 items-center relative z-10">
                  <div className="flex-grow w-full">
                    <input
                      type="text"
                      placeholder="SEARCH AA ENTERPRISES INVENTORY..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xl sm:text-2xl md:text-5xl font-black uppercase tracking-tighter text-white placeholder:text-gray-700 outline-none bg-transparent py-4 border-b-2 border-gray-700 focus:border-brand-primary transition-colors italic"
                      autoFocus
                    />
                  </div>
                  <button type="submit" className="w-full sm:w-auto bg-brand-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors shadow-lg hover:shadow-peak flex items-center justify-center gap-3 italic shrink-0">
                    Search <Search size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-gray-950/98 backdrop-blur-2xl text-white flex flex-col pt-24 px-4 sm:px-8 overflow-y-auto"
          >
             <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-6 right-8 w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border border-gray-800 text-white hover:bg-brand-primary transition-colors shadow-lg"
              >
                <X size={24} />
             </button>

            <nav className="flex flex-col gap-6 pb-32">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl md:text-5xl font-black uppercase italic tracking-tighter hover:text-brand-primary transition-colors flex items-center gap-3 sm:gap-4 ${location.pathname === link.path ? 'text-brand-primary' : 'text-gray-300'}`}
                  >
                    <link.icon size={32} className={`${location.pathname === link.path ? 'text-brand-primary' : 'text-gray-600'}`} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div 
                  onClick={() => setShowCategories(!showCategories)}
                  className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter flex items-center justify-between text-gray-300 hover:text-brand-primary cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <LayoutGrid size={28} className="text-gray-600 sm:w-8 sm:h-8" />
                    CATEGORIES
                  </div>
                  <ChevronDown size={28} className={`transition-transform duration-300 text-brand-primary sm:w-8 sm:h-8 ${showCategories ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pt-6 pl-4 sm:pl-12 border-l-2 border-gray-800 mt-4 max-h-[350px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb]:bg-brand-primary [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      <Link to="/products" onClick={() => setIsOpen(false)} className="text-xl sm:text-2xl font-black uppercase italic tracking-widest text-brand-primary hover:text-white transition-colors py-2">All Categories</Link>
                      {categories.map((cat, idx) => (
                        <Link
                          key={idx}
                          to={`/products?category=${encodeURIComponent(cat.name)}`}
                          onClick={() => setIsOpen(false)}
                          className="text-base sm:text-xl font-bold uppercase tracking-wide text-gray-500 hover:text-white transition-colors py-2 flex items-center gap-3 sm:gap-4 group/mobilecat"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-800 group-hover/mobilecat:bg-brand-primary transition-colors"></div>
                          {cat.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.7 }}
                 className="mt-12"
              >
                 <Link to="/quote" onClick={() => setIsOpen(false)} className="btn-premium w-full bg-brand-primary text-center py-6 font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 rounded-2xl shadow-premium italic">
                    Request a Quote
                    <ArrowUpRight size={24} />
                 </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
