import React from 'react';
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
