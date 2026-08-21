const fs = require('fs');

const home = `import React from 'react';
import { Link } from 'react-router-dom';
import { categories, products, brands } from '../data';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AA Enterprises</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Your trusted distributor for industrial electrical components. Authentic products, global brands.
        </p>
        <Link to="/products" className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded">
          Browse Catalog
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={\`/products?category=\${encodeURIComponent(cat.name)}\`} className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-slate-200 block text-center">
              <div className="h-40 flex items-center justify-center mb-4 p-2 bg-slate-50 rounded">
                <img src={cat.image} alt={cat.name} className="max-h-full object-contain" />
              </div>
              <h3 className="font-bold text-slate-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <Link key={p.id} to={\`/product/\${p.id}\`} className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-slate-200 block">
              <div className="h-40 flex items-center justify-center mb-4 p-2">
                <img src={p.image} alt={p.name} className="max-h-full object-contain" />
              </div>
              <p className="text-xs text-blue-600 font-bold mb-1">{p.brand}</p>
              <h3 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2 h-10">{p.name}</h3>
              <p className="text-xs text-slate-500">Model: {p.model}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

const productsPage = `import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories, brands } from '../data';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200 mb-6">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Search</h3>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded"
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Categories</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={\`block w-full text-left px-2 py-1 rounded text-sm \${selectedCategory === 'All' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}\`}
              >
                All Products
              </button>
              {categories.map(c => (
                <button 
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className={\`block w-full text-left px-2 py-1 rounded text-sm \${selectedCategory === c.name ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}\`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="mb-4 text-slate-600 font-medium">
            Showing {filteredProducts.length} products
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <Link key={p.id} to={\`/product/\${p.id}\`} className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-slate-200 block flex flex-col">
                <div className="h-48 flex items-center justify-center mb-4 p-2">
                  <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                </div>
                <div className="mt-auto">
                   <p className="text-xs text-blue-600 font-bold mb-1">{p.brand}</p>
                   <h3 className="font-bold text-slate-800 text-sm mb-2">{p.name}</h3>
                   <p className="text-xs text-slate-500">Model: {p.model}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
`;

const productDetail = `import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-20 text-center text-2xl">Product not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Back to Products</Link>
        
        <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 border-r border-slate-100 flex justify-center items-center bg-slate-50">
             <img src={product.image} alt={product.name} className="max-w-full h-auto max-h-96 object-contain mix-blend-multiply" />
          </div>
          <div className="md:w-1/2 p-8">
             <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-2">{product.brand}</p>
             <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
             <p className="text-slate-600 mb-6 text-lg leading-relaxed">{product.description}</p>
             
             <div className="mb-6 p-4 bg-slate-50 rounded border border-slate-200">
               <p className="font-bold text-slate-700 mb-1">Model / Part Number:</p>
               <p className="text-xl font-mono text-slate-900">{product.model}</p>
             </div>

             <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-800 mb-3 border-b pb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  {product.features?.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
             </div>

             <div className="mt-8 flex gap-4">
               <Link to="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center flex-grow">
                 Request Quote
               </Link>
               <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded text-center flex-grow">
                 Contact Sales
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

const about = `import React from 'react';
export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About AA Enterprises</h1>
        <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
          <p>Established in 1998 in Mumbai, AA Enterprises is a leading authorized distributor of industrial electrical components.</p>
          <p>We provide 100% genuine products from globally recognized brands like Schneider Electric, Omron, Sibass, and Jigo.</p>
          <p>With thousands of products in stock, we cater to manufacturing, automation, and construction industries across India, ensuring rapid delivery and maximum operational uptime.</p>
        </div>
      </div>
    </div>
  );
}
`;

const contact = `import React from 'react';
export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 mb-8">Reach out to our sales team for bulk inquiries, technical support, or partnership opportunities.</p>
          <div className="space-y-4 text-slate-700">
            <p><strong>Address:</strong> Lohar Chawl, Mumbai, Maharashtra</p>
            <p><strong>Phone:</strong> +91 9326183962 / +91 9819495892</p>
            <p><strong>Email:</strong> sales@aaenterprises.in</p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
             <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-300 rounded" />
             <input type="email" placeholder="Your Email" className="w-full p-3 border border-slate-300 rounded" />
             <textarea placeholder="Message" rows="4" className="w-full p-3 border border-slate-300 rounded"></textarea>
             <button type="button" className="bg-blue-600 text-white font-bold py-3 px-6 rounded w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
`;

const quote = `import React from 'react';
export default function Quote() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Request a Bulk Quote</h1>
        <p className="text-slate-600 mb-8">Need components in large quantities? Fill out the form below and we'll get back to you with our best B2B pricing.</p>
        <form className="space-y-4">
             <input type="text" placeholder="Company Name" className="w-full p-3 border border-slate-300 rounded" />
             <input type="text" placeholder="Contact Person" className="w-full p-3 border border-slate-300 rounded" />
             <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded" />
             <textarea placeholder="List required parts and quantities..." rows="6" className="w-full p-3 border border-slate-300 rounded"></textarea>
             <button type="button" className="bg-orange-500 text-white font-bold py-3 px-6 rounded w-full">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
`;

const navbar = `import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-blue-900 tracking-wider">AA ENTERPRISES</Link>
        <div className="flex items-center gap-6">
           <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Home</Link>
           <Link to="/products" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Products</Link>
           <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium text-sm">About</Link>
           <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Contact</Link>
           <Link to="/quote" className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-sm hover:bg-blue-700 transition">Get Quote</Link>
        </div>
      </div>
    </nav>
  );
}
`;

const footer = `import React from 'react';
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
`;

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

const indexCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

fs.writeFileSync('d:/aa-enterprises/src/pages/Home.jsx', home);
fs.writeFileSync('d:/aa-enterprises/src/pages/Products.jsx', productsPage);
fs.writeFileSync('d:/aa-enterprises/src/pages/ProductDetail.jsx', productDetail);
fs.writeFileSync('d:/aa-enterprises/src/pages/About.jsx', about);
fs.writeFileSync('d:/aa-enterprises/src/pages/Contact.jsx', contact);
fs.writeFileSync('d:/aa-enterprises/src/pages/Quote.jsx', quote);
fs.writeFileSync('d:/aa-enterprises/src/components/Navbar.jsx', navbar);
fs.writeFileSync('d:/aa-enterprises/src/components/Footer.jsx', footer);
fs.writeFileSync('d:/aa-enterprises/tailwind.config.js', tailwindConfig);
fs.writeFileSync('d:/aa-enterprises/index.css', indexCss);

console.log("Restored all files to a clean, proper theme.");
