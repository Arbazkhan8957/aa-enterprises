import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-black text-xl mb-4">AA ENTERPRISES</h3>
          <p className="text-sm opacity-80">Authorized distributors of premium industrial electrical components. Serving the industry since 1998.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-white">All Products</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>Lohar Chawl, Mumbai</li>
            <li>Phone: +91 9326183962</li>
            <li>Email: sales@aaenterprises.in</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center opacity-60">
        &copy; {new Date().getFullYear()} AA Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
