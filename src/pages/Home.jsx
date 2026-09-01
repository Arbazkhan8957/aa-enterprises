import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, ShieldCheck, Truck, Zap, Star, Award, Package, Globe, 
  Users, TrendingUp, Settings, Headset, Factory, Cpu, HardHat, CheckCircle2, Phone, 
  ZapIcon, Layers, Anchor, ChevronDown, Clock, BookOpen, Download, FileText, 
  FileCheck, PackageCheck, BarChart3, Fingerprint, Activity, ZapOff, Scale, MessageCircle, Mail, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, brands } from '../data';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};



const blogPosts = [
  {
    id: 1,
    category: "Product Guide",
    title: "How to Select the Right Digital Ammeter",
    excerpt: "Understand current range, display type, mounting size, accuracy, and other specifications before choosing a digital ammeter.",
    date: "Aug 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    slug: "how-to-select-digital-ammeter"
  },
  {
    id: 2,
    category: "Technology",
    title: "Understanding PLC Automation in Modern Manufacturing",
    excerpt: "Learn how PLC-based automation improves process control, productivity, reliability, and industrial operations.",
    date: "Aug 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    slug: "understanding-plc-automation-modern-manufacturing"
  },
  {
    id: 3,
    category: "Safety",
    title: "Why Genuine Electrical Components Matter",
    excerpt: "Discover why reliable and genuine electrical components are important for safety, performance, and long-term operation.",
    date: "Aug 16, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    slug: "why-genuine-electrical-components-matter"
  }
];

const faqs = [
  {
    question: "Are the products supplied by AA Enterprises genuine?",
    answer: "Yes, AA Enterprises focuses on supplying 100% genuine industrial electrical and automation products sourced exclusively through authorized and trusted channels."
  },
  {
    question: "Do you supply products across India?",
    answer: "Absolutely. AA Enterprises provides industrial product supply and robust logistics support for customers, factories, and OEMs across India."
  },
  {
    question: "Can I request a bulk quotation?",
    answer: "Yes. You can contact our sales team directly with your required products, quantities, specifications, and application details to request an immediate B2B quotation."
  },
  {
    question: "Can AA Enterprises help with product selection?",
    answer: "Yes. Our expert technical team can assist with product specifications, cross-referencing, and selecting the exact components for your application."
  },
  {
    question: "Do you supply to industries and OEMs?",
    answer: "AA Enterprises supports heavy industrial customers, manufacturers, automation requirements, panel builders, OEMs, and major contractors."
  },
  {
    question: "How can I check product availability?",
    answer: "Send us the product name, model number, brand, or required specifications. Our team maintains a massive inventory and can confirm availability instantly."
  }
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      
      // The Google Apps Script might be expecting a specific key for the last column
      // Let's pass the message under a few likely keys to ensure it gets picked up
      data.append('requirement', formData.message);
      data.append('query', formData.message);
      data.append('Requirement / Query', formData.message);
      data.append('Requirement', formData.message);
      data.append('Query', formData.message);
      
      await fetch('https://script.google.com/macros/s/AKfycbzM2_ckFb21RxTsCU0YyesBncvQ8UVe4yYdoZSwR_p0cN0bc90R-mcgnEMIeElTxC6F3g/exec', {
        method: 'POST',
        body: data,
        mode: 'no-cors' // required for Google Apps Script to prevent CORS errors on redirect
      });

      setSubmitStatus('success');
      setFormData({
        name: '', company: '', phone: '', email: '', product: '', message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-2 pb-12 bg-[#fafafa] overflow-x-hidden">

      {/* 1. CINEMATIC HERO SECTION */}
      <PageHeroSlider slides={globalHeroSlides} pageName="Home" minHeight="" className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] xl:aspect-[3/1]" />

      {/* EMERGENCY TICKER */}
      <div className="bg-gray-900 border-y border-brand-primary/30 py-2 sm:py-3 relative overflow-hidden flex items-center justify-center">
        <div className="flex w-[200%] sm:w-[150%] animate-marquee whitespace-nowrap items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-4 sm:mx-8 flex items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse mr-2 sm:mr-3"></span>
              URGENT REQUIREMENT? WE DISPATCH IN 2 HOURS FROM LOHAR CHAWL | +91 9326183962
            </span>
          ))}
        </div>
      </div>

      {/* 2. CORPORATE IDENTITY - HEAVILY BRANDED */}
      <section className="py-16 md:py-40 relative bg-white overflow-hidden">
        <div className="hidden md:block md:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-gray-50 absolute -top-4 md:-top-10 left-0 leading-none whitespace-nowrap select-none pointer-events-none z-0">AA ENTERPRISES</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#fafafa] relative group border border-gray-100 shadow-premium hover:shadow-peak transition-all duration-500 animated-gradient-border">
                <img
                  src="/aa-enterprises/images/hero.png"
                  alt="AA Enterprises Global Supply"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-gray-900 border border-gray-100 flex flex-col">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary mb-1">Authentic</span>
                  <span className="text-xl sm:text-2xl font-black leading-none">Originals</span>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-brand-primary text-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4">
                  <Globe size={24} className="sm:w-8 sm:h-8" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">Serving</div>
                    <div className="text-lg sm:text-xl font-black">Pan-India</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary"></div>
                <h2 className="text-xs sm:text-sm font-black text-brand-primary uppercase tracking-widest">The Legacy of AA Enterprises</h2>
              </motion.div>

              <motion.h3 variants={fadeUp} className="text-[2rem] leading-none sm:text-4xl md:text-7xl font-black text-gray-900 sm:leading-[1.05] mb-6 sm:mb-8 tracking-tighter uppercase italic">
                The Backbone of <br /><span className="text-brand-primary">Global Manufacturing.</span>
              </motion.h3>

              <motion.div variants={fadeUp} className="space-y-4 sm:space-y-6 text-gray-600 font-medium leading-relaxed text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl">
                <p>
                  <strong className="text-gray-900">AA Enterprises</strong> dominates the industrial electrical supply chain from our headquarters in <em>Lohar Chawl, Mumbai</em>. We are the trusted source for the nation's <em><strong>heaviest industrial requirements</strong></em>.
                </p>
                <p>
                  We are not just vendors; we are <strong>authorized partners</strong> to the world's most critical hardware brands. From massive Schneider contactors to precision Sibass logic components, we carry the inventory required to bring entire gigafactories online <em>overnight</em>.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12 border-y border-gray-100 py-6 sm:py-10">
                <div>
                  <h4 className="text-2xl md:text-5xl font-black text-gray-900 mb-1 sm:mb-2">10K+</h4>
                  <p className="text-[10px] sm:text-sm text-gray-500 font-bold uppercase tracking-widest">SKUs in Ready Stock</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-5xl font-black text-gray-900 mb-1 sm:mb-2">100%</h4>
                  <p className="text-[10px] sm:text-sm text-gray-500 font-bold uppercase tracking-widest">Nationwide Distribution</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link to="/about" className="btn-magnetic w-full sm:w-auto text-center justify-center bg-gray-900 text-white px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-black italic uppercase tracking-widest hover:bg-brand-primary inline-flex items-center gap-3 group transition-colors rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Discover Our Profile <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5 AA ENTERPRISES LEGACY */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Our Heritage</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">A Legacy of Trust</h3>
            <p className="mt-4 sm:mt-6 text-gray-600 font-medium text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">From our foundation in Mumbai's electrical hub to becoming a pan-India industrial supply powerhouse.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>
            {[
              { title: "Foundation", desc: <span><strong>AA Enterprises</strong> was established in <em>Lohar Chawl, Mumbai</em>, the heart of India's electrical trade.</span> },
              { title: "Brand Partnerships", desc: <span>Became <strong>authorized channel partners</strong> for leading global industrial brands.</span> },
              { title: "Industrial Expansion", desc: <span>Expanded supply chain to serve <em><strong>heavy manufacturing</strong></em> and OEM sectors.</span> },
              { title: "Pan-India Reach", desc: <span>Today, we deliver <strong>critical components</strong> to factories across the <em>entire nation</em>.</span> }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-12 sm:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-full border-4 border-[#fafafa] transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16'}`}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak transition-all duration-300 group">
                    <h4 className="text-lg md:text-2xl font-black text-gray-900 group-hover:text-brand-primary transition-colors mb-2 sm:mb-3">{milestone.title}</h4>
                    <p className="text-gray-500 font-medium text-sm sm:text-base">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AA ENTERPRISES CORE VALUES */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Why AA Enterprises Leads</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic">The AA Enterprises Advantage</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              { title: "Zero Counterfeits", icon: <ShieldCheck size={36} className="text-brand-primary" />, desc: <span>As authorized channel partners, <strong>AA Enterprises</strong> guarantees every component is <em>100% genuine</em>, fresh off the manufacturer's line.</span> },
              { title: "Massive Inventory", icon: <Layers size={36} className="text-brand-primary" />, desc: <span>We hold one of the <strong>largest ready-to-dispatch stocks</strong> in Mumbai, ensuring your projects never face downtime due to <em><strong>supply shortages</strong></em>.</span> },
              { title: "Technical Authority", icon: <Anchor size={36} className="text-brand-primary" />, desc: <span>Our team provides <strong>deep technical insights</strong>, helping you cross-reference components and select the <em>exact specifications</em> for your factory.</span> }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-gray-800 transition-colors duration-500"
              >
                <div className="mb-6 sm:mb-8">{val.icon}</div>
                <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{val.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AUTHORIZED DISTRIBUTOR NETWORK */}
      <section className="py-16 md:py-20 bg-[#fafafa] border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter mb-3 sm:mb-4 uppercase italic">Authorized Distributor Network</h3>
            <p className="text-gray-600 font-medium text-sm sm:text-lg max-w-2xl mx-auto"><strong>AA Enterprises</strong> holds direct, <em>tier-one partnerships</em> with global manufacturers, ensuring <em><strong>100% authentic equipment</strong></em> with full warranties.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Schneider Electric", icon: <ZapIcon size={28} />, desc: "Contactors, Relays & Switchgears" },
              { name: "Sibass Electricals", icon: <Settings size={28} />, desc: "Sensors, Indicators & Sockets" },
              { name: "Jigo", icon: <ShieldCheck size={28} />, desc: "Heavy Connectors & Sirens" },
              { name: "Resonance", icon: <TrendingUp size={28} />, desc: "Industrial Cooling Fans" }
            ].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#fafafa] rounded-full flex items-center justify-center text-brand-primary mb-4 sm:mb-6 border border-gray-100">
                  {brand.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{brand.name}</h4>
                <p className="text-gray-500 font-medium text-xs sm:text-sm">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SHOP BY EXPERTISE */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary"></div>
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">AA Enterprises Core Catalog</h2>
              </div>
              <h3 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tighter uppercase italic">Industrial <br className="hidden sm:block" /><span className="text-brand-primary">Architecture</span></h3>
            </div>
            <p className="text-gray-600 font-medium text-sm sm:text-lg max-w-md">Browse our massive, ready-to-dispatch inventory of industrial-grade components spanning across multiple specialized verticals.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 sm:pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12"
          >
            {categories.map((cat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="shrink-0 w-[85vw] max-w-[320px] sm:max-w-full max-w-sm lg:max-w-none lg:w-auto snap-center sm:snap-start bg-[#fafafa] border border-gray-100 rounded-2xl sm:rounded-[2.5rem] overflow-hidden group h-full hover:shadow-peak shadow-premium transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 animated-gradient-border flex flex-col">
                <Link to={`/products?category=${encodeURIComponent(cat.name)}`} className="flex flex-col h-full">
                  <div className="h-56 sm:h-80 overflow-hidden bg-white flex items-center justify-center relative p-6 sm:p-10 border-b border-gray-100">
                    <img
                      src={cat.image || "/aa-enterprises/images/hero.png"}
                      alt={cat.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6 sm:p-10 flex flex-col flex-grow bg-[#fafafa]">
                    <div className="flex justify-between items-start mb-6 sm:mb-8">
                      <h3 className="font-black text-xl md:text-3xl text-gray-900 leading-tight tracking-tight pr-2 sm:pr-4">{cat.name}</h3>
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all shrink-0 bg-white shadow-sm">
                        <ArrowRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <ul className="text-sm sm:text-base font-semibold text-gray-600 space-y-3 sm:space-y-4 mb-4 sm:mb-8">
                      {(cat.description || '').split(',').map((item, i) => (
                        <li key={i} className="flex items-start gap-3 sm:gap-4">
                          <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-brand-primary shrink-0 mt-1 sm:mt-0.5" />
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FEATURED PRODUCTS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] relative border-y border-gray-100 overflow-hidden">
        <div className="hidden md:block text-[15vw] lg:text-[18vw] font-black tracking-tighter text-white absolute -top-4 md:-top-10 left-0 leading-none whitespace-nowrap select-none pointer-events-none z-0">INVENTORY</div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-24 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary"></div>
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">Top Inventory at AA Enterprises</h2>
              </div>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 uppercase italic">Featured Components</h3>
            </div>
            <Link to="/products" className="btn-magnetic w-full lg:w-auto text-center justify-center bg-gray-900 text-white px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-black italic uppercase tracking-widest hover:bg-brand-primary inline-flex items-center gap-3 group transition-colors rounded-xl shadow-xl">
              View Entire Catalog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 sm:pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp} className="shrink-0 w-[85vw] max-w-[320px] sm:max-w-full max-w-sm lg:max-w-none lg:w-auto snap-center sm:snap-start">
                <Link to={`/product/${product.id}`} className="group block h-full bg-white rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-peak transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 p-3 sm:p-4">
                  <div className="rounded-xl sm:rounded-[2rem] overflow-hidden bg-white relative aspect-[4/3] flex items-center justify-center p-4 sm:p-8 mb-4 sm:mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-10"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-900 text-white border border-gray-700 shadow-lg px-3 py-1 sm:px-4 sm:py-2 rounded-full z-20">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{product.brand}</span>
                    </div>
                  </div>

                  <div className="px-4 sm:px-6 pb-4 sm:pb-8">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs uppercase text-brand-primary font-black tracking-widest bg-brand-primary/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full">{product.model || 'Standard'}</span>
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">{product.category.replace('Products', '').trim()}</span>
                    </div>
                    <h3 className="font-black text-xl sm:text-2xl text-gray-900 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2 mb-3 sm:mb-4">{product.name}</h3>

                    <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>

                    <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-gray-600">
                      <span className="flex items-center gap-1 sm:gap-2"><Zap size={14} className="sm:w-4 sm:h-4" /> {product.voltage || 'Standard V'}</span>
                      <span className="flex items-center gap-1 sm:gap-2"><Award size={14} className="sm:w-4 sm:h-4" /> Industrial Grade</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. PROCUREMENT PROCESS / HOW AA ENTERPRISES WORKS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Simple Procurement</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">FROM REQUIREMENT TO DELIVERY.</h3>
            <p className="mt-4 sm:mt-6 text-gray-600 font-medium text-sm sm:text-lg leading-relaxed">A simple process designed to make industrial sourcing faster, clearer, and absolutely reliable.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { number: '01', title: 'Share Requirement', desc: 'Send product names, models, quantities, or specifications.', icon: <PackageCheck size={24} className="sm:w-8 sm:h-8" /> },
              { number: '02', title: 'Technical Review', desc: 'Our engineers cross-check specifications and suggest optimal options.', icon: <FileCheck size={24} className="sm:w-8 sm:h-8" /> },
              { number: '03', title: 'Get Quotation', desc: 'Receive aggressive B2B pricing and real-time availability.', icon: <Award size={24} className="sm:w-8 sm:h-8" /> },
              { number: '04', title: 'Order Confirmation', desc: 'Finalize your requirement with our dedicated sales team.', icon: <CheckCircle2 size={24} className="sm:w-8 sm:h-8" /> },
              { number: '05', title: 'Fast Dispatch', desc: 'Immediate dispatch and robust logistics handling pan-India.', icon: <Truck size={24} className="sm:w-8 sm:h-8" /> }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative bg-[#fafafa] border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-7 hover:border-brand-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-7">
                  <span className="text-2xl md:text-4xl font-black text-gray-200 group-hover:text-brand-primary transition-colors">{step.number}</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-3">{step.title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5 ADVANCED LOGISTICS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary"></div>
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary">Logistics Infrastructure</h2>
              </div>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 sm:mb-8 text-white uppercase italic">Speed Is <span className="text-brand-primary">Everything.</span></h3>
              <p className="text-gray-400 font-medium text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10">
                In industrial manufacturing, every minute of downtime costs money. That's why AA Enterprises maintains a massive inventory hub in Mumbai, coupled with aggressive logistics partnerships to ensure overnight dispatch for critical breakdowns.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="text-brand-primary mb-3"><Package size={32} /></div>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Ready Stock</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">Thousands of SKUs instantly available for dispatch.</p>
                </div>
                <div>
                  <div className="text-brand-primary mb-3"><Truck size={32} /></div>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Fast Transit</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">Priority shipping via premier logistics networks.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 p-2 relative shadow-2xl group">
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img src="/aa-enterprises/images/hero.png" alt="Logistics Hub" className="w-full h-full object-cover rounded-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 sm:p-6 rounded-2xl z-20 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dispatch Rate</div>
                    <div className="text-xl md:text-3xl font-black text-white">Under 24 Hrs</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES WE EMPOWER */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-24 max-w-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[3px] bg-brand-primary"></div>
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary">Global Impact</h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-6 sm:mb-8 tracking-tighter uppercase italic">Industries Powered by <br />AA Enterprises</h3>
            <p className="text-gray-400 text-base sm:text-xl font-medium leading-relaxed">Our components form the nervous system of modern industrial infrastructure across the most demanding sectors in the world.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Factory size={32} className="sm:w-9 sm:h-9" />, title: "Manufacturing", desc: "Powering automated assembly lines and conveyor systems with robust contactors.", items: ["Motor Control Centers", "Packaging Machinery"] },
              { icon: <Cpu size={32} className="sm:w-9 sm:h-9" />, title: "Automation", desc: "Supplying precision limits and sensors required for complex PLC logic.", items: ["Proximity Sensors", "Micro Switches"] },
              { icon: <HardHat size={32} className="sm:w-9 sm:h-9" />, title: "Construction", desc: "Heavy-duty switchgears designed for temporary power distribution in harsh environments.", items: ["Crane Controls", "Site Panels"] }
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl sm:rounded-[2.5rem] shadow-premium hover:shadow-peak transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 p-8 sm:p-12 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shadow-sm mb-8 sm:mb-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">{ind.icon}</div>
                <h4 className="text-xl md:text-3xl font-black mb-4 sm:mb-6">{ind.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-lg font-medium">{ind.desc}</p>
                <ul className="space-y-3 sm:space-y-4 border-t border-gray-700 pt-6 sm:pt-8">
                  {ind.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base font-bold text-gray-300">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.5 CLIENT SUCCESS & TESTIMONIALS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
            <span className="text-2xl font-black text-gray-900 leading-none">4.9</span>
            <div className="flex text-brand-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Trusted Rating</span>
          </div>
          <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Industrial Trust</h2>
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">What Our Partners Say</h3>
        </div>
        
        <div className="relative w-full overflow-hidden flex">
          <div className="flex w-[200%] animate-marquee gap-6 sm:gap-8 px-4 sm:px-0">
            {[
              { text: "AA Enterprises has been our core supplier for Schneider contactors. Their ready stock capability has saved us from critical downtime multiple times.", author: "Rajeev M.", role: "Plant Head, Automotive Mfg" },
              { text: "Finding genuine Sibass components in bulk was a challenge until we partnered with them. 100% authentic products and extremely professional service.", author: "Sanjay D.", role: "Procurement Director, OEM" },
              { text: "The speed of dispatch is unmatched. When we need industrial fans or heavy-duty switchgears immediately, AA Enterprises is the only name we trust.", author: "Vikram S.", role: "Maintenance Engineer" },
              { text: "Their technical authority on automation parts is incredible. They cross-referenced our discontinued parts perfectly in under an hour.", author: "Anita P.", role: "Chief Engineer" },
              { text: "AA Enterprises has been our core supplier for Schneider contactors. Their ready stock capability has saved us from critical downtime multiple times.", author: "Rajeev M.", role: "Plant Head, Automotive Mfg" },
              { text: "Finding genuine Sibass components in bulk was a challenge until we partnered with them. 100% authentic products and extremely professional service.", author: "Sanjay D.", role: "Procurement Director, OEM" },
              { text: "The speed of dispatch is unmatched. When we need industrial fans or heavy-duty switchgears immediately, AA Enterprises is the only name we trust.", author: "Vikram S.", role: "Maintenance Engineer" },
              { text: "Their technical authority on automation parts is incredible. They cross-referenced our discontinued parts perfectly in under an hour.", author: "Anita P.", role: "Chief Engineer" }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak hover:border-brand-primary/30 transition-all duration-300 relative group flex-1 min-w-[300px] sm:min-w-full max-w-sm max-w-[450px]"
              >
                <div className="absolute top-6 right-6 text-gray-100 group-hover:text-brand-primary/10 transition-colors">
                  <Star size={48} className="fill-current" />
                </div>
                <div className="flex gap-1 mb-6 text-brand-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">"{testimonial.text}"</p>
                <div className="mt-auto border-t border-gray-50 pt-6">
                  <h4 className="font-black text-gray-900 text-base sm:text-lg">{testimonial.author}</h4>
                  <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.6 SMART FACTORY SOLUTIONS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-primary/5 pattern-grid-lg pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8 border border-brand-primary/30">
                  <Activity size={14} /> Industry 4.0 Ready
                </div>
                <h3 className="text-[1.75rem] sm:text-3xl md:text-6xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[1.1] uppercase italic">
                  Powering The <br /><span className="text-brand-primary">Smart Factory.</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10">
                  Modern manufacturing relies on <strong>data, automation, and absolute precision</strong>. We supply the <em>high-end sensors, smart relays, and logic controllers</em> needed to bring your facility into the <em><strong>Industry 4.0 era</strong></em>.
                </p>
                <ul className="space-y-4">
                  {['Precision Sensors & Limit Switches', 'Smart Contactor Panels', 'Advanced Logic Control Hardware'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 sm:gap-4 text-white font-bold text-sm sm:text-base">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                    <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:border-brand-primary transition-colors group">
                      <Cpu size={28} className="text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                      <h4 className="text-white font-black text-sm md:text-lg mb-2">Automation</h4>
                      <p className="text-gray-500 text-xs md:text-sm font-medium">Critical PLC inputs</p>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:border-brand-primary transition-colors group">
                      <ShieldCheck size={28} className="text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                      <h4 className="text-white font-black text-sm md:text-lg mb-2">Safety Logic</h4>
                      <p className="text-gray-500 text-xs md:text-sm font-medium">Failsafe operations</p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:border-brand-primary transition-colors group">
                      <Settings size={28} className="text-gray-400 group-hover:text-brand-primary mb-4 transition-colors" />
                      <h4 className="text-white font-black text-sm md:text-lg mb-2">Control</h4>
                      <p className="text-gray-500 text-xs md:text-sm font-medium">Switchgear systems</p>
                    </div>
                    <div className="bg-brand-primary border border-brand-primary p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg shadow-brand-primary/20">
                      <Zap size={28} className="text-white mb-4" />
                      <h4 className="text-white font-black text-sm md:text-lg mb-2">Efficiency</h4>
                      <p className="text-white/80 text-xs md:text-sm font-medium">Optimized power</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 10. GLOBAL CERTIFICATIONS & QUALITY ASSURANCE */}
      <section className="py-16 sm:py-20 bg-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 bg-[#fafafa] rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-premium">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <ShieldCheck size={20} className="sm:w-6 sm:h-6 text-brand-primary" />
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary">Quality Assurance</h3>
              </div>
              <h4 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 sm:mb-6 leading-tight">Certified Industrial Grade.</h4>
              <p className="text-gray-600 font-medium text-sm sm:text-lg leading-relaxed">
                AA Enterprises exclusively supplies products that comply with strict international standards including ISO, CE, RoHS, and ISI. Every dispatch is guaranteed to meet factory specifications.
              </p>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "ISO 9001", sub: "Compliant Sourcing" },
                { label: "CE Certified", sub: "European Standards" },
                { label: "RoHS", sub: "Eco-Friendly Material" },
                { label: "ISI / BIS", sub: "Indian Standards" }
              ].map((cert, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 text-center shadow-sm">
                  <h5 className="text-lg sm:text-xl font-black text-gray-900 mb-1">{cert.label}</h5>
                  <p className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECHNICAL RESOURCE CENTER */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Technical Downloads</h2>
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900 mb-12 sm:mb-16">Engineering Resource Center</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <FileText size={28} className="sm:w-8 sm:h-8" />, title: "Product Datasheets", desc: "Download comprehensive electrical and mechanical specifications." },
              { icon: <Settings size={28} className="sm:w-8 sm:h-8" />, title: "CAD & 3D Models", desc: "Integrate component dimensions directly into your panel designs." },
              { icon: <Download size={28} className="sm:w-8 sm:h-8" />, title: "Installation Guides", desc: "Step-by-step technical manuals and wiring diagrams." }
            ].map((resource, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-brand-primary transition-colors group cursor-pointer shadow-premium hover:shadow-peak">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fafafa] rounded-2xl flex items-center justify-center text-gray-900 group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors mx-auto mb-5 sm:mb-6">
                  {resource.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">{resource.title}</h4>
                <p className="text-gray-500 font-medium text-sm sm:text-base mb-5 sm:mb-6">{resource.desc}</p>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary flex items-center justify-center gap-2">
                  Access Library <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BLOG & LATEST INSIGHTS */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <BookOpen size={16} className="sm:w-5 sm:h-5 text-brand-primary" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">AA Enterprises Knowledge Hub</span>
              </div>
              <h3 className="text-4xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                LATEST <br className="hidden sm:block" /><span className="text-brand-primary">INSIGHTS.</span>
              </h3>
              <p className="mt-4 sm:mt-6 max-w-2xl text-gray-600 text-sm sm:text-lg font-medium leading-relaxed">
                Product guides, technical knowledge, safety information, industry insights, and practical resources from AA Enterprises.
              </p>
            </div>
            <Link to="/blog" className="inline-flex w-full lg:w-auto items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900 hover:text-brand-primary transition-colors group">
              View All Articles <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-[#fafafa] rounded-2xl sm:rounded-[2rem] border border-gray-100 overflow-hidden shadow-premium hover:shadow-peak hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-500">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                      <span className="bg-white text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-2 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                      <Clock size={12} className="sm:w-3 sm:h-3" /> {post.readTime}
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3 sm:mb-4">{post.date}</div>
                    <h4 className="text-xl sm:text-2xl font-black text-gray-900 uppercase leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">{post.title}</h4>
                    <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-xs sm:text-sm font-medium line-clamp-2">{post.excerpt}</p>
                    <div className="mt-5 sm:mt-7 flex items-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-brand-primary transition-colors">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Frequently Asked Questions</span>
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary"></div>
            </div>
            <h3 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter">NEED TO KNOW <br /><span className="text-brand-primary">SOMETHING?</span></h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`bg-white border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-primary shadow-md' : 'border-gray-200'}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="w-full px-5 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 sm:gap-6 text-left">
                    <span className="text-sm sm:text-lg font-black text-gray-900">{faq.question}</span>
                    <ChevronDown size={18} className={`shrink-0 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <div className="px-5 sm:px-8 pb-5 sm:pb-7 text-gray-600 leading-relaxed font-medium text-xs sm:text-base">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 hover:text-brand-primary transition-colors group">
              Still Have Questions? <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. BRANDS MARQUEE */}
      <section className="py-12 sm:py-20 bg-white border-y border-gray-100 overflow-hidden relative flex flex-col items-center justify-center">
        <div className="absolute top-2 sm:top-4 left-4 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Trusted Partnerships</div>
        <div className="flex w-[200%] animate-marquee">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex-1 flex justify-center items-center px-4 sm:px-4 sm:px-8 md:px-16">
              <span className="font-black text-3xl md:text-6xl text-gray-300 tracking-tighter uppercase hover:text-brand-primary transition-colors cursor-default">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 15. CONTACT, QUERIES & MAP */}
      <section className="bg-white py-16 md:py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900">Queries & <span className="text-brand-primary">Orders</span></h3>
            <p className="mt-4 sm:mt-6 text-gray-600 font-medium text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Share your requirements with us. Our team is ready to assist you with aggressive B2B pricing and swift logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
            
            {/* Contact Details & Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-[#fafafa] border border-gray-100 shadow-premium rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 mb-8 animated-gradient-border">
                <h4 className="text-xl sm:text-3xl font-black text-gray-900 mb-8 tracking-tight">Contact Information</h4>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Phone 1 (WhatsApp) */}
                  <div className="flex gap-4 sm:gap-5 items-start group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">WhatsApp / Call</div>
                      <div className="font-black text-lg md:text-2xl tracking-tight text-gray-900 hover:text-brand-primary transition-colors cursor-pointer">
                        <em><strong>+91 9326183962</strong></em>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex gap-4 sm:gap-5 items-start group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Phone size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Direct Sales</div>
                      <div className="font-black text-lg md:text-2xl tracking-tight text-gray-900 hover:text-brand-primary transition-colors cursor-pointer">
                        <em><strong>+91 9819495892</strong></em>
                      </div>
                    </div>
                  </div>

                  {/* Gmail */}
                  <div className="flex gap-4 sm:gap-5 items-start group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Mail size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</div>
                      <div className="font-black text-sm sm:text-lg tracking-tight text-gray-900 break-all hover:text-brand-primary transition-colors cursor-pointer">
                        <em><strong>aaenterprises123786@gmail.com</strong></em>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 sm:gap-5 items-start group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <MapPin size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Headquarters</div>
                      <div className="font-black text-sm sm:text-lg tracking-tight text-gray-900">
                        <em><strong>Lohar Chawl, Chichkal House,</strong></em><br/>
                        Mumbai, Maharashtra
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl sm:rounded-[3rem] overflow-hidden border border-gray-100 shadow-premium h-64 sm:h-80 relative z-10">
                <iframe 
                  src="https://maps.google.com/maps?q=Chichkal+House,+Lohar+Chawl,+Mumbai,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AA Enterprises Location"
                  className="filter grayscale contrast-125 opacity-90 hover:filter-none hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Request Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[3rem] border border-gray-100 shadow-peak transition-all duration-500 sticky top-32">
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 tracking-tighter">Submit a Request</h3>
                <p className="text-gray-600 text-sm sm:text-base font-medium mb-8 sm:mb-10">Whether it's a general query or a bulk order, our team responds within hours.</p>

                <form onSubmit={handleRequestSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm" />
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company Name" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone / WhatsApp" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email Address" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm" />
                  </div>
                  <input type="text" name="product" value={formData.product} onChange={handleInputChange} placeholder="Product Model / Category" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required placeholder="Tell us about your requirement or query..." rows="5" className="w-full px-5 py-4 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm resize-none"></textarea>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl sm:rounded-2xl border border-green-200 font-medium text-sm text-center">
                      Thank you! Your request has been successfully submitted. We will contact you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl sm:rounded-2xl border border-red-200 font-medium text-sm text-center">
                      Oops! Something went wrong. Please try again later.
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="bg-brand-primary text-white w-full py-4 sm:py-6 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-accent flex items-center justify-center gap-3 group shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
