import { products } from '../data';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Factory,
  Cpu,
  HardHat,
  Settings,
  PackageCheck,
  Truck,
  BookOpen,
  ChevronRight,
  Globe
} from 'lucide-react';

import { brands } from '../data';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';

const brandHeroSlides = [
  {
    title: 'GLOBAL PARTNERS',
    subtitle: 'AUTHORIZED DISTRIBUTOR',
    desc: 'We partner directly with the world\'s most prestigious electrical OEMs to guarantee 100% genuine components and absolute supply chain integrity.',
    image: products[0]?.image || 'images/hero.png',
  },
  {
    title: 'ZERO COUNTERFEITS',
    subtitle: 'UNCOMPROMISED QUALITY',
    desc: 'Every product distributed by AA Enterprises comes with complete traceability and direct manufacturer warranty support.',
    image: products[1]?.image || 'images/hero.png',
  },
  {
    title: 'INDUSTRIAL',
    subtitle: 'SUPPLY NETWORK',
    desc: 'From massive contactors to precision limit switches, explore the authorized brands that form our industrial supply network.',
    image: products[2]?.image || 'images/hero.png',
  },
];

const brandDescriptions = {
  'Schneider Electric':
    'Global leaders in industrial electrical, automation, switching, protection, and control solutions for gigafactories.',
  'Sibass Electricals':
    'Ruggedized industrial indicators, limit switches, proximity sensors, sockets, and heavy-duty control components.',
  'Jigo':
    'Vibration-proof industrial multipole connectors, signalling products, high-decibel sirens, and electrical accessories.',
  'Resonance':
    'High-CFM industrial cooling and ventilation solutions designed specifically for massive electrical control panels.',
};

const industries = [
  {
    title: 'Manufacturing',
    icon: <Factory size={32} className="sm:w-9 sm:h-9" />,
    desc: 'Heavy electrical and automation components designed for massive production lines and CNC machinery.',
  },
  {
    title: 'Industrial Automation',
    icon: <Cpu size={32} className="sm:w-9 sm:h-9" />,
    desc: 'Precision sensors, limit switches, and control components acting as the nervous system for PLC networks.',
  },
  {
    title: 'Construction',
    icon: <HardHat size={32} className="sm:w-9 sm:h-9" />,
    desc: 'Ruggedized electrical components for temporary site infrastructure, heavy cranes, and harsh environments.',
  },
];

const brandBenefits = [
  {
    icon: <ShieldCheck size={28} className="sm:w-8 sm:h-8" />,
    title: 'Authorized Supply',
    desc: 'AA Enterprises holds direct, tier-one partnerships with global OEMs ensuring absolute authenticity.',
  },
  {
    icon: <PackageCheck size={28} className="sm:w-8 sm:h-8" />,
    title: 'Massive Inventory',
    desc: 'We maintain one of Mumbai\'s largest ready-to-dispatch stocks to prevent factory downtime.',
  },
  {
    icon: <Settings size={28} className="sm:w-8 sm:h-8" />,
    title: 'Engineering Support',
    desc: 'Our technical team assists with complex specifications, cross-referencing, and component selection.',
  },
  {
    icon: <Truck size={28} className="sm:w-8 sm:h-8" />,
    title: 'Pan-India Logistics',
    desc: 'Rapid dispatch and robust logistics handling for industrial customers anywhere in India.',
  },
];

const BrandLogo = ({ brand, className, smallFallback = false }) => {
  const [error, setError] = useState(false);
  
  if (error || !brand.logo) {
    return (
      <div className="flex items-center justify-center w-full h-full px-1 overflow-hidden">
         <span className={`font-black italic uppercase text-gray-800 text-center tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis w-full ${smallFallback ? 'text-[8px] sm:text-[10px]' : 'text-lg md:text-2xl'}`} style={{ lineHeight: '1.1' }}>
           {brand.name}
         </span>
      </div>
    );
  }

  const src = brand.logo.includes('/') ? brand.logo : `images/${brand.logo.toLowerCase()}.png`;

  return (
    <img 
      src={src} 
      alt={brand.name} 
      onError={() => setError(true)} 
      className={className} 
    />
  );
};

export default function Brands() {
  const [search, setSearch] = useState('');
  const doubledBrands = [...brands, ...brands, ...brands, ...brands];

  const filteredBrands = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return brands;
    return brands.filter((brand) => brand.name?.toLowerCase().includes(query));
  }, [search]);

  return (
    <div className="bg-[#fafafa] min-h-screen overflow-x-hidden relative selection:bg-brand-primary selection:text-white pt-2">

      {/* =========================================================
          HERO (CINEMATIC)
      ========================================================== */}
      <PageHeroSlider
        slides={globalHeroSlides}
        pageName="Brands"
        minHeight="min-h-[70vh] md:min-h-[75vh]"
      />

      {/* =========================================================
          INTRO (MASSIVE TYPOGRAPHY)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="hidden md:block md:text-[15vw] lg:text-[18vw] font-black tracking-tighter text-gray-50 absolute -top-4 md:-top-10 left-0 leading-none whitespace-nowrap select-none pointer-events-none z-0">
          PARTNERS
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
              <span className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-gray-900">
                AA Enterprises Supply Network
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 italic">
              BRANDS
              <br />
              <span className="text-brand-primary">
                YOU CAN TRUST.
              </span>
            </h1>

            <p className="mt-4 sm:mt-8 max-w-3xl text-gray-600 text-lg md:text-2xl leading-relaxed font-medium">
              Explore the authorized industrial OEMs available through <strong>AA Enterprises</strong> across <em>electrical, automation, control, sensing, and switching</em> categories.
            </p>

            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#fafafa] border border-gray-200 rounded-full px-5 py-3 sm:px-6 sm:py-4 shadow-sm border-brand-primary/20 italic">
              <ShieldCheck size={20} className="sm:w-6 sm:h-6 text-brand-primary" />
              <span className="text-gray-900 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                Tier-One Genuine Supply
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRAND MARQUEE (INFINITE LOOP)
      ========================================================== */}
      <section className="relative w-full overflow-hidden py-8 sm:py-12 bg-[#fafafa] border-b border-gray-100 flex items-center justify-center">
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-56 h-full bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-56 h-full bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-2 sm:top-4 left-4 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400 z-20 italic">Authorized Partners</div>

        <div className="flex w-[200%] animate-marquee mt-4">
          {doubledBrands.map((brand, idx) => (
            <div key={idx} className="flex-1 flex justify-center items-center px-4 sm:px-4 sm:px-8 md:px-16 shrink-0">
               <div className="w-[180px] sm:w-[250px] h-[100px] sm:h-[140px] bg-white border border-gray-200 rounded-xl sm:rounded-[2rem] flex items-center justify-center p-4 sm:p-8 hover:border-brand-primary shadow-premium hover:shadow-peak hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group">
                  <BrandLogo brand={brand} className="w-full h-10 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          BRAND DIRECTORY
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">
                  Official Brand Directory
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] uppercase italic">
                OUR
                <br className="hidden sm:block" />
                <span className="text-brand-primary">
                  BRANDS.
                </span>
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-[400px]">
              <Search size={20} className="sm:w-5 sm:h-5 absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search OEM partners..."
                className="w-full h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-[#fafafa] border-2 border-gray-100 pl-12 sm:pl-14 pr-4 sm:pr-5 text-sm sm:text-base font-bold outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-sm focus:bg-white"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredBrands.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredBrands.map((brand, index) => (
                  <motion.div
                    key={brand.name || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#fafafa] rounded-2xl sm:rounded-[2.5rem] border border-gray-200 overflow-hidden group hover:border-brand-primary hover:-translate-y-2 sm:hover:-translate-y-3 shadow-premium hover:shadow-peak transition-all duration-500 animated-gradient-border flex flex-col"
                  >
                    <div className="h-40 sm:h-52 bg-white flex items-center justify-center p-6 sm:p-10 border-b border-gray-100 relative">
                      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <BrandLogo brand={brand} className="max-w-full max-h-16 sm:max-h-24 object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-10" />
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 italic">
                          <ShieldCheck size={14} className="sm:w-[15px] sm:h-[15px] text-brand-primary" />
                          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand-primary">Tier-One Partner</span>
                        </div>
                        <Globe size={14} className="sm:w-[15px] sm:h-[15px] text-gray-300 group-hover:text-brand-primary transition-colors" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-2 sm:mb-3 italic">
                        {brand.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium min-h-[60px] sm:min-h-[80px]">
                        {brandDescriptions[brand.name] || 'Industrial products and components available through AA Enterprises.'}
                      </p>

                      <Link
                        to={`/products?brand=${encodeURIComponent(brand.name)}`}
                        className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 flex items-center justify-between group/link"
                      >
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover/link:text-brand-primary transition-colors italic">
                          Explore Products
                        </span>
                        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-900 group-hover/link:bg-brand-primary group-hover/link:border-brand-primary group-hover/link:text-white transition-all shadow-sm">
                          <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 sm:py-12 sm:py-16 md:py-24 text-center border border-gray-200 rounded-2xl sm:rounded-[3rem] bg-[#fafafa]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <Search size={24} className="sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                  No Brand Found
                </h3>
                <p className="mt-2 text-gray-500 font-medium text-xs sm:text-sm">We could not find an OEM matching your search.</p>
                <button
                  onClick={() => setSearch('')}
                  className="mt-6 sm:mt-8 bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg"
                >
                  View All Partners
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          BRAND → PRODUCTS (QUICK ACCESS)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] border-b border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,0,0.03),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">
                Explore By Brand
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95] italic">
              FIND THE
              <br className="hidden sm:block" />
              <span className="text-brand-primary">
                RIGHT PRODUCT.
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg font-medium leading-relaxed">
              Select an authorized brand partner to discover available electrical products, specifications, models, and heavy industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brands.slice(0, 6).map((brand, index) => (
              <Link
                key={index}
                to={`/products?brand=${encodeURIComponent(brand.name)}`}
                className="group bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-brand-primary shadow-sm hover:shadow-premium hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between gap-4 sm:gap-5 mb-4 sm:mb-6">
                  <div className="w-20 h-14 sm:w-24 sm:h-16 bg-[#fafafa] rounded-xl border border-gray-100 flex items-center justify-center p-2 sm:p-3">
                    <BrandLogo brand={brand} smallFallback={true} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all bg-[#fafafa]">
                    <ArrowRight size={16} className="sm:w-[17px] sm:h-[17px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-gray-900 group-hover:text-brand-primary transition-colors italic">
                  {brand.name}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 font-medium">
                  Explore available stock →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY SOURCE THROUGH AA ENTERPRISES
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary">
                  The AA Advantage
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase mb-4 sm:mb-6">
                MORE THAN
                <br />
                <span className="text-white">
                  A VENDOR.
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-lg leading-relaxed font-medium">
                AA Enterprises connects gigafactories and OEMs with world-class industrial brands, delivering massive stock, correct specifications, and zero counterfeits.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {brandBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/60 border border-gray-700 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 hover:bg-gray-800 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 shadow-premium"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-5 sm:mb-6 border border-brand-primary/20">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTHENTICITY GUARANTEE
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fafafa] border border-gray-100 shadow-premium rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 md:p-16 lg:p-20 animated-gradient-border">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 sm:mb-8 border border-brand-primary/20">
                  <ShieldCheck size={28} className="sm:w-[34px] sm:h-[34px]" />
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.95] mb-4 sm:mb-6">
                  QUALITY &
                  <br />
                  <span className="text-brand-primary">
                    AUTHENTICITY.
                  </span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed font-medium max-w-xl">
                  When sourcing for heavy industrial components, product authenticity is critical. A counterfeit contactor leads to fires and downtime. AA Enterprises guarantees 100% genuine supply directly from OEM factories.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  'Tier-One Authorized Industrial Brands',
                  'Rigorous Product Specification Support',
                  'Zero Counterfeits Guarantee',
                  'Full OEM Warranty Assistance',
                  'Aggressive B2B Bulk Quotation',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:border-brand-primary transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-brand-primary shrink-0 sm:w-[21px] sm:h-[21px]" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OEM TECHNICAL INTEGRATION (NEW)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-gray-900/0 to-gray-900/0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                 <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                 <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary italic">
                   Beyond the Box
                 </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6 sm:mb-8 italic">
                TECHNICAL <br/> <span className="text-brand-primary">INTEGRATION.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-lg leading-relaxed font-medium mb-8">
                AA Enterprises doesn't just supply components; we ensure they work. Our engineering team provides deep technical support across all our partnered brands, from <em><strong>Schneider PLC configuration</strong></em> to <em><strong>Sibass limit switch calibration</strong></em>.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Cross-Referencing", desc: "Instantly match obsolete parts with current OEM equivalents." },
                  { title: "Panel Design Support", desc: "Optimizing component selection for spatial and thermal constraints." },
                  { title: "On-Site Troubleshooting", desc: "Factory-level support for complex automation failures." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-gray-800/50 p-5 rounded-2xl border border-gray-700 hover:border-brand-primary/50 transition-colors">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight text-white italic">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-medium mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[300px] sm:h-[500px] rounded-[3rem] overflow-hidden border border-gray-700 shadow-2xl group">
               <img src="images/lc1e_family.jpg" alt="Technical Support" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 mix-blend-luminosity group-hover:mix-blend-normal" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
               <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                  <div className="bg-brand-primary/10 border border-brand-primary/30 backdrop-blur-md p-6 rounded-2xl">
                     <h3 className="text-xl font-black uppercase text-white italic mb-2">OEM Certified Experts</h3>
                     <p className="text-gray-300 text-sm font-medium">Our staff undergoes rigorous technical training directly from our brand partners.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VOLUME PROCUREMENT & ENTERPRISE CONTRACTS (NEW)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <div className="flex justify-center items-center gap-3 mb-6">
             <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
             <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900 italic">
               Enterprise Sourcing
             </span>
             <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
           </div>
           
           <h2 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.95] mb-8 italic">
             VOLUME <br className="hidden sm:block" /> <span className="text-brand-primary">PROCUREMENT.</span>
           </h2>
           
           <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-lg leading-relaxed font-medium mb-16">
             For large-scale infrastructure projects, continuous manufacturing plants, and OEM panel builders, AA Enterprises offers <strong>specialized volume contracts</strong> across all our authorized brands.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { icon: <Factory size={32} />, title: "Blanket Orders", desc: "Lock in pricing and guarantee inventory for long-term project rollouts." },
                { icon: <ShieldCheck size={32} />, title: "Compliance Documentation", desc: "Full traceability, certificates of conformity, and ROHS/CE documentation provided." },
                { icon: <Settings size={32} />, title: "Kitting Services", desc: "Components grouped, labeled, and shipped as ready-to-assemble kits for your factory." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-[#fafafa] p-8 rounded-[2rem] border border-gray-200 hover:border-brand-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-premium group flex flex-col">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                   </div>
                   <h3 className="text-xl font-black uppercase text-gray-900 tracking-tight mb-3 italic">{feature.title}</h3>
                   <p className="text-gray-600 text-sm font-medium leading-relaxed flex-grow">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL SUPPLY CHAIN & LOGISTICS (NEW SECTION)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="lg:w-1/2">
               <div className="flex items-center gap-3 mb-4 sm:mb-6">
                 <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                 <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-primary italic">
                   Supply Chain Mastery
                 </span>
               </div>
               <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.95] mb-6 sm:mb-8 italic">
                 GLOBAL NETWORK. <br/> <span className="text-brand-primary">LOCAL SPEED.</span>
               </h2>
               <p className="text-gray-600 text-sm sm:text-lg leading-relaxed font-medium mb-8">
                 We have integrated our procurement systems directly with the top OEMs worldwide. Whether you need a massive heavy-duty contactor from Germany or precision sensors from Japan, our <strong>logistics pipeline</strong> ensures <em><strong>unmatched delivery speed</strong></em>.
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm border-l-4 border-l-brand-primary">
                    <h4 className="text-3xl font-black text-gray-900 mb-2">24h</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest italic">Dispatch Time</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm border-l-4 border-l-brand-primary">
                    <h4 className="text-3xl font-black text-gray-900 mb-2">99%</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest italic">Order Fulfillment</p>
                 </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-premium border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] group-hover:bg-brand-primary/10 transition-colors duration-1000"></div>
                  
                  <ul className="space-y-8 relative z-10">
                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                         <Globe className="text-brand-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight italic">Direct Import Channels</h4>
                        <p className="text-gray-600 text-sm font-medium mt-1">Bypassing third-party distributors to eliminate markups and delays.</p>
                      </div>
                    </li>
                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                         <Truck className="text-brand-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight italic">Heavy Freight Handling</h4>
                        <p className="text-gray-600 text-sm font-medium mt-1">Specialized logistics for massive panel enclosures and bulk cabling.</p>
                      </div>
                    </li>
                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                         <PackageCheck className="text-brand-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight italic">Automated Warehousing</h4>
                        <p className="text-gray-600 text-sm font-medium mt-1">Real-time inventory tracking spanning over 10,000+ unique SKUs.</p>
                      </div>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES WE SERVE
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-brand-primary">
                Applications
              </span>
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
              BRANDS FOR
              <br />
              <span className="text-brand-primary">
                EVERY INDUSTRY.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-brand-primary hover:-translate-y-2 hover:shadow-premium transition-all duration-500 shadow-sm"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 sm:mb-8 border border-brand-primary/20">
                  {industry.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-gray-900 mb-3 sm:mb-4 tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium mb-6 sm:mb-8">
                  {industry.desc}
                </p>
                <Link
                  to="/products"
                  className="mt-auto inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 hover:text-brand-primary transition-colors group"
                >
                  Explore Solutions
                  <ChevronRight size={14} className="sm:w-[15px] sm:h-[15px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND + BLOG CONNECTION
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-7 mb-10 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <BookOpen size={16} className="sm:w-[18px] sm:h-[18px] text-brand-primary" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">
                  AA Enterprises Knowledge Hub
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.95]">
                LEARN MORE
                <br className="hidden sm:block" />
                <span className="text-brand-primary">
                  BEFORE YOU BUY.
                </span>
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex w-full md:w-auto justify-center sm:justify-start items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-900 hover:text-brand-primary transition-colors group bg-[#fafafa] md:bg-transparent py-4 px-6 md:p-0 rounded-xl"
            >
              View All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Choosing the Right Limit Switch for Harsh Environments',
                category: 'Product Guide',
                slug: 'choosing-right-limit-switch-harsh-environments'
              },
              {
                title: 'Understanding PLC Automation in Modern Manufacturing',
                category: 'Technology',
                slug: 'understanding-plc-automation-modern-manufacturing'
              },
              {
                title: 'Why Genuine Electrical Components Matter',
                category: 'Safety',
                slug: 'why-genuine-electrical-components-matter'
              },
            ].map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-[#fafafa] border border-gray-200 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 hover:border-brand-primary hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-premium transition-all shadow-sm flex flex-col"
              >
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/10 w-fit px-3 py-1.5 rounded-md mb-4 sm:mb-5">
                  {post.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-gray-900 leading-tight group-hover:text-brand-primary transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 flex items-center justify-between text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-brand-primary transition-colors mt-auto">
                  Read Technical Guide
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors shadow-sm">
                    <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA (PROCUREMENT)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gray-900 p-8 sm:p-12 md:p-16 lg:p-20 shadow-peak">
            <div className="absolute -right-40 -top-40 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] rounded-full bg-brand-primary/20 blur-[80px] sm:blur-[120px]" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 sm:gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5 sm:mb-7">
                  <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary">
                    Procurement Direct
                  </span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4 sm:mb-6">
                  SOURCE THE
                  <br className="hidden sm:block" />
                  <span className="text-brand-primary">
                     {" "}RIGHT COMPONENTS.
                  </span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-lg leading-relaxed font-medium">
                  Send your BOM or requirements to the AA Enterprises technical team. We will cross-reference models and provide an immediate B2B quotation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/products"
                  className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-xl group"
                >
                  Explore Catalog
                  <ArrowRight size={16} className="sm:w-[17px] sm:h-[17px] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-6 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl group"
                >
                  Request Bulk Quote
                  <ArrowUpRight size={16} className="sm:w-[17px] sm:h-[17px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
