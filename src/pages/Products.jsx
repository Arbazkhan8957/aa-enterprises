import React, { useState, useEffect } from 'react';
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
                className={`block w-full text-left px-2 py-1 rounded text-sm ${selectedCategory === 'All' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                All Products
              </button>
              {categories.map(c => (
                <button 
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`block w-full text-left px-2 py-1 rounded text-sm ${selectedCategory === c.name ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
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
              <Link key={p.id} to={`/product/${p.id}`} className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border border-slate-200 block flex flex-col">
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
