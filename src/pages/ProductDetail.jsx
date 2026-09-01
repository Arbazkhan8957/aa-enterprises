import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Award, CheckCircle2, LayoutGrid, Download, ArrowRight, ArrowUpRight, AlertCircle, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { products } from '../data';
import { useToast } from '../components/Toast';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { showToast } = useToast();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-600 font-semibold mb-6">The product you are looking for does not exist.</p>
        <Link to="/products" className="btn-premium bg-brand-primary text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors">Back to Products</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      
      // We will send the data using multiple possible key names to ensure the Google Apps Script catches it.
      // 1. Exact Sheet Headers (plus versions with trailing spaces just in case)
      data.append('Product Name', product.name || '');
      data.append('Product Name ', product.name || '');
      data.append('Your Name', formData.name);
      data.append('Phone Number', formData.phone);
      data.append('Email Address', formData.email);
      data.append('Company Name', formData.company);
      data.append('Specific Requirements', formData.message);
      data.append('Specific Requirements ', formData.message);
      
      // 2. camelCase variations
      data.append('productName', product.name || '');
      data.append('specificRequirements', formData.message);
      data.append('requirements', formData.message);
      
      // 3. snake_case variations
      data.append('product_name', product.name || '');
      data.append('specific_requirements', formData.message);
      
      // 4. common shorthand keys
      data.append('product', product.name || '');
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('message', formData.message);
      data.append('requirement', formData.message);
      
      await fetch('https://script.google.com/macros/s/AKfycbx2wwO1DHMdznVa5J-pexc6KtjlQ9loDgDzeGaPjzsk9uj0EP1cI6oBVbxx7bAUNVoK/exec', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      
      showToast(`Enquiry sent for ${product.name}!`);
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Error submitting enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Brand & Category
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`${product.brand} | ${product.category}`.toUpperCase(), 14, 20);
    
    // Title
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    doc.text(product.name, 14, 30);
    
    // Description
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const splitDesc = doc.splitTextToSize(product.description || '', 180);
    doc.text(splitDesc, 14, 42);
    
    let yPos = 42 + (splitDesc.length * 6) + 10;
    
    // Features Table
    if (product.features && product.features.length > 0) {
      autoTable(doc, {
        startY: yPos,
        head: [['Key Features']],
        body: product.features.map(f => [f]),
        theme: 'grid',
        headStyles: { fillColor: [255, 42, 112] },
        styles: { fontSize: 10 }
      });
      yPos = doc.lastAutoTable.finalY + 15;
    }
    
    // Specifications Table
    const specsData = [];
    if (product.specs && product.specs.length > 0) {
      product.specs.forEach(spec => {
        specsData.push([spec.name, spec.value]);
      });
    } else {
      if (product.model) specsData.push(['Model', product.model]);
      if (product.voltage) specsData.push(['Voltage', product.voltage]);
      if (product.current && product.current !== 'N/A') specsData.push(['Current', product.current]);
      if (product.mounting && product.mounting !== 'N/A') specsData.push(['Mounting', product.mounting]);
    }
    
    if (specsData.length > 0) {
      autoTable(doc, {
        startY: yPos,
        head: [['Specification', 'Details']],
        body: specsData,
        theme: 'striped',
        headStyles: { fillColor: [40, 40, 40] },
        styles: { fontSize: 10 }
      });
    }
    
    doc.save(`${product.name.replace(/\s+/g, '_')}_Datasheet.pdf`);
    showToast('Datasheet downloaded successfully!');
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-32 overflow-hidden relative selection:bg-brand-primary selection:text-white">
      
      {/* Premium Header */}
      <div className="pt-40 pb-20 relative overflow-hidden bg-white border-b border-gray-200">
        <div className="text-display-bg opacity-5">DETAILS</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-brand-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 italic">{product.brand} • {product.category}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight max-w-5xl uppercase mb-8 italic">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600 font-semibold">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <Link to="/products" className="hover:text-brand-primary transition-colors">Products</Link>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-gray-900 hover:text-brand-primary">{product.category}</Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Image Box */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-32 bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-premium group overflow-hidden animated-gradient-border"
            >
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <div className="bg-white text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-gray-200 italic">
                  <Shield size={12} className="text-green-500" /> Authentic
                </div>
                <div className="bg-brand-primary/10 text-brand-primary text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-brand-primary/30 italic">
                  <Award size={12} className="text-brand-primary" /> Industrial Grade
                </div>
              </div>

              <div className="relative aspect-square flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 mt-8 cursor-zoom-in" onClick={() => setSelectedImage(product.image)}>
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain filter mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-primary hover:text-white border border-gray-200">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content & Tabs */}
          <div className="lg:col-span-7 pt-4 w-full overflow-hidden">
            {/* Tabs */}
            <div className="flex items-center gap-4 sm:gap-8 border-b border-gray-200 pb-4 mb-10 overflow-x-auto custom-scrollbar relative">
              {['overview', 'specifications', 'enquiry'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap relative ${
                    activeTab === tab 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                    <motion.div layoutId="activetab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-6 italic">Product Overview</h2>
                    <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-12 font-medium">
                      {product.description}
                    </p>
                    
                    {product.features && product.features.length > 0 && (
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle2 className="text-brand-primary" size={24} />
                          <h3 className="font-bold text-gray-900 text-2xl italic">Key Features</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 group">
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 group-hover:bg-brand-primary transition-colors shrink-0" />
                              <p className="text-gray-700 text-lg font-medium">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.applications && product.applications.length > 0 && (
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <LayoutGrid className="text-brand-primary" size={20} />
                          <h3 className="font-bold text-gray-900 text-lg italic">Applications</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-12 p-8 bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-premium hover:shadow-peak transition-all hover:-translate-y-1">
                      <div>
                        <h4 className="text-gray-900 font-black text-lg mb-1">Technical Datasheet</h4>
                        <p className="text-gray-600 font-semibold text-sm font-medium">Download full specifications in PDF format.</p>
                      </div>
                      <button onClick={handleDownloadPDF} className="btn-premium w-full sm:w-auto px-6 py-3 bg-brand-primary text-white rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs transition-colors hover:bg-brand-accent cursor-pointer">
                        Download <Download size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specifications' && (
                  <motion.div
                    key="specifications"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-8 italic">Technical Specifications</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {product.specs && product.specs.length > 0 ? (
                         product.specs.map((spec, idx) => (
                           <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                              <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">{spec.name}</span>
                              <span className="text-gray-900 font-black text-2xl">{spec.value}</span>
                           </div>
                         ))
                      ) : (
                         <>
                           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                              <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">Model</span>
                              <span className="text-gray-900 font-black text-2xl">{product.model || 'N/A'}</span>
                           </div>
                           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                              <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">Series</span>
                              <span className="text-gray-900 font-black text-2xl">{product.series || 'N/A'}</span>
                           </div>
                           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                              <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">Voltage</span>
                              <span className="text-gray-900 font-black text-2xl">{product.voltage || 'N/A'}</span>
                           </div>
                           {product.current && product.current !== 'N/A' && (
                             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                                <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">Current</span>
                                <span className="text-gray-900 font-black text-2xl">{product.current}</span>
                             </div>
                           )}
                           {product.mounting && product.mounting !== 'N/A' && (
                             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
                                <span className="text-gray-500 font-semibold text-sm font-bold uppercase tracking-widest italic">Mounting</span>
                                <span className="text-gray-900 font-black text-2xl">{product.mounting}</span>
                             </div>
                           )}
                         </>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'enquiry' && (
                  <motion.div
                    key="enquiry"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-premium animated-gradient-border">
                      <h3 className="text-xl md:text-3xl text-gray-900 font-black tracking-tighter mb-4 italic">Request a Quote</h3>
                      <p className="text-gray-600 font-semibold mb-6 sm:mb-8 text-xs sm:text-base">Fill out the form below for pricing and availability on <strong className="text-gray-900">{product.model || product.name}</strong>.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl px-4 md:px-6 py-3 md:py-5 focus:bg-white placeholder:text-gray-400 outline-none transition-all font-medium text-xs md:text-base" />
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl px-4 md:px-6 py-3 md:py-5 focus:bg-white placeholder:text-gray-400 outline-none transition-all font-medium text-xs md:text-base" />
                        </div>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl px-4 md:px-6 py-3 md:py-5 focus:bg-white placeholder:text-gray-400 outline-none transition-all font-medium text-xs md:text-base" />
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name (Optional)" className="w-full bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl px-4 md:px-6 py-3 md:py-5 focus:bg-white placeholder:text-gray-400 outline-none transition-all font-medium text-xs md:text-base" />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Specific requirements? (Quantity, Delivery Location, etc.)" rows="4" className="w-full bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl px-4 md:px-6 py-3 md:py-5 focus:bg-white placeholder:text-gray-400 outline-none transition-all font-medium text-xs md:text-base resize-none"></textarea>
                        
                        <button type="submit" disabled={isSubmitting} className="btn-premium w-full bg-brand-primary text-white hover:bg-brand-accent font-bold uppercase tracking-widest text-[10px] md:text-xs py-4 md:py-5 rounded-xl flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                          {isSubmitting ? 'Sending...' : (
                            <>
                              Send Request <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-gray-200">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter italic">Related Products</h2>
              <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hidden sm:inline-flex bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:border-brand-primary hover:text-brand-primary items-center gap-2 transition-colors shadow-sm">
                View All <ArrowRight size={12} />
              </Link>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="shrink-0 w-[85vw] max-w-[280px] md:max-w-none md:w-auto snap-start bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:border-brand-primary/50 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full animated-gradient-border">
                  <div className="bg-[#fafafa] relative aspect-[4/3] flex items-center justify-center p-6 m-2 overflow-hidden rounded-xl border border-gray-100">
                    <div className="absolute top-3 left-3 bg-white border border-gray-200 px-2 py-1 rounded-full z-10 shadow-sm">
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-900 italic">{p.brand}</span>
                    </div>
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 filter mix-blend-multiply opacity-80 group-hover:opacity-100   relative z-10" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow bg-white">
                    <span className="text-[9px] uppercase text-gray-500 font-semibold font-bold tracking-widest mb-1 block italic">{p.model || 'Standard'}</span>
                    <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
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
