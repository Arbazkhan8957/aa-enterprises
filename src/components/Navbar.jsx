import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, FileText, Search, Menu, X, Mail } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
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
             <a href="#" className="hover:text-orange-400 transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
             <a href="#" className="hover:text-orange-400 transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
             <a href="#" className="hover:text-orange-400 transition"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
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
