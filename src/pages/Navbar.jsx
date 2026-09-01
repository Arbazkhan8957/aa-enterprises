import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Phone, Mail, ChevronDown, ArrowUpRight } from 'lucide-react';
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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Brands', path: '/brands' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top micro-bar (Contact & Social) */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white text-white font-semibold py-1.5 px-4 text-[10px] sm:text-xs z-[60] relative flex flex-col sm:flex-row justify-between items-center gap-2"
      >
        <div className="flex gap-4 sm:gap-6 items-center flex-wrap justify-center">
          <span className="flex items-center gap-1.5 hover:text-brand-dark transition-colors cursor-pointer">
            <Phone size={12} className="text-brand-primary" />
            +91 9326183962 / +91 9819495892
          </span>
          <span className="flex items-center gap-1.5 hover:text-brand-dark transition-colors cursor-pointer">
            <Mail size={12} className="text-brand-primary" />
            aaenterprises123786@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-primary font-medium">GSTIN :</span> 27FOYPS9860F1ZR
          </span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-brand-dark transition-colors">FB</a>
          <a href="#" className="hover:text-brand-dark transition-colors">IN</a>
          <a href="#" className="hover:text-brand-dark transition-colors">LI</a>
          <a href="#" className="hover:text-brand-dark transition-colors">YT</a>
        </div>
      </motion.div>

      {/* Floating Pill Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-8 sm:top-10 left-0 w-full z-50 px-4 sm:px-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className={`transition-all duration-500 rounded-full flex items-center justify-between px-6 py-3 sm:py-4 ${scrolled ? 'glass-nav shadow-premium' : 'bg-white/90 shadow-sm'}`}>
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
              <div className="text-brand-primary font-black text-3xl tracking-tighter mix-blend-difference bg-black px-2 py-1 rounded-lg">
                AA
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-black text-brand-dark tracking-tighter leading-none uppercase group-hover:text-brand-primary transition-colors">AA Enterprises</h1>
                <p className="text-[8px] font-bold text-white font-semibold uppercase tracking-[0.2em] mt-0.5">Powering Industry</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors group"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
              
              {/* All Categories Dropdown inside Nav */}
              <div className="relative group px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-dark cursor-pointer flex items-center gap-1 hover:text-brand-primary transition-colors">
                Categories <ChevronDown size={12} />
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-premium rounded-2xl p-2 w-64 border border-gray-100 flex flex-col">
                    <Link to="/products" className="px-4 py-3 text-xs font-bold text-brand-dark hover:bg-gray-50 rounded-xl transition-colors">
                      All Categories
                    </Link>
                    {categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={`/products?category=${encodeURIComponent(cat.name)}`}
                        className="px-4 py-3 text-xs font-medium text-gray-600 hover:text-brand-dark hover:bg-brand-primary/20 hover:text-brand-primary rounded-xl transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 z-10">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-brand-dark hover:bg-gray-100 transition-colors"
              >
                {showSearch ? <X size={18} /> : <Search size={18} />}
              </button>
              
              <Link to="/quote" className="hidden md:flex btn-magnetic bg-white text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest  group items-center gap-2">
                Get Quote
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-brand-dark"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full mt-4 left-0 w-full px-4 sm:px-8 pointer-events-auto max-w-7xl mx-auto z-40"
            >
              <div className="bg-white rounded-3xl shadow-premium p-4 sm:p-6 border border-gray-100">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="Search for premium products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xl sm:text-3xl font-light tracking-tight text-brand-dark placeholder:text-white font-semibold outline-none bg-transparent py-2"
                      autoFocus
                    />
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <select 
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="bg-gray-50 px-4 py-3 rounded-full text-sm font-medium text-brand-dark outline-none cursor-pointer border border-gray-100"
                    >
                      <option value="All Categories">All Categories</option>
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                    <button type="submit" className="bg-brand-primary text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#b2e600] transition-colors">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] bg-white text-brand-dark flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
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
                    className="text-4xl font-black tracking-tighter hover:text-brand-primary transition-colors block"
                  >
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
                  className="text-4xl font-black tracking-tighter flex items-center justify-between text-white font-semibold cursor-pointer"
                >
                  Categories
                  <ChevronDown size={24} className={`transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pt-4 pl-4 border-l border-brand-primary/10 mt-4"
                    >
                      <Link to="/products" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white font-semibold hover:text-brand-dark">All Categories</Link>
                      {categories.map((cat, idx) => (
                        <Link
                          key={idx}
                          to={`/products?category=${encodeURIComponent(cat.name)}`}
                          onClick={() => setIsOpen(false)}
                          className="text-xl font-medium text-white font-semibold hover:text-brand-primary transition-colors"
                        >
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
                 className="mt-8"
              >
                 <Link to="/quote" onClick={() => setIsOpen(false)} className="bg-brand-primary text-black w-full text-center py-4 rounded-full font-black uppercase tracking-widest text-sm inline-block">
                    Request a Quote
                 </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
