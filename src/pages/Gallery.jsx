import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Cpu,
  HardHat,
  Settings,
  ShieldCheck,
  PackageCheck,
  Truck,
  X,
  Maximize2,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';
import { products } from '../data';

const heroSlides = [
  {
    title: 'GALLERY',
    subtitle: 'AA ENTERPRISES SHOWCASE',
    desc: 'Explore industrial products, applications, and component solutions supplied by AA Enterprises.',
    image: products[0]?.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000',
  },
  {
    title: 'INDUSTRIAL',
    subtitle: 'PRODUCT SHOWCASE',
    desc: 'From switching and control to automation and sensing, discover products supporting demanding industrial applications.',
    image: products[1]?.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
  },
];



const industries = [
  {
    title: 'Manufacturing',
    icon: <Factory size={32} />,
    desc: 'Components supporting production lines, machinery, motor control, and factory electrical systems.',
  },
  {
    title: 'Automation',
    icon: <Cpu size={32} />,
    desc: 'Sensors, control devices, switching components, and automation-related industrial products.',
  },
  {
    title: 'Construction',
    icon: <HardHat size={32} />,
    desc: 'Electrical and industrial components for infrastructure, equipment, panels, and site applications.',
  },
];

const qualityPoints = [
  'Trusted industrial product sourcing',
  'Product specification assistance',
  'Reliable B2B quotation support',
  'Suitable product identification',
  'Nationwide supply support',
  'Responsive technical assistance',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Gallery() {
  const galleryProducts = useMemo(() => {
    return products.filter(p => p.image);
  }, []);

  const filters = useMemo(() => {
    const uniqueBrands = new Set(galleryProducts.map(p => p.brand).filter(Boolean));
    return ['All', ...Array.from(uniqueBrands)];
  }, [galleryProducts]);

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = galleryProducts.map((product, index) => ({
    id: product.id || index,
    title: product.name,
    client: product.brand || 'AA Enterprises',
    desc:
      product.description ||
      'Industrial-grade component suitable for demanding electrical and automation applications.',
    img: product.image || 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
    category: product.category || 'Industrial',
    model: product.model || 'Industrial Component',
  }));

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (activeFilter !== 'All') {
      result = result.filter((project) => project.client === activeFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter((project) => 
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.model.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeFilter, searchQuery, projects]);

  return (
    <div className="bg-[#fafafa] min-h-screen overflow-hidden relative selection:bg-brand-primary selection:text-white pt-2">

      {/* =========================================================
          HERO
      ========================================================== */}
      <PageHeroSlider
        slides={globalHeroSlides}
        pageName="Gallery"
        minHeight="min-h-[70vh] md:min-h-[75vh]"
      />

      {/* =========================================================
          INTRO (UPGRADED MASSIVE TYPOGRAPHY)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="hidden md:block md:text-[12vw] lg:text-[15vw] font-black tracking-tighter text-gray-50 absolute -top-4 md:-top-10 left-0 leading-none whitespace-nowrap select-none pointer-events-none z-0">
          SHOWCASE
        </div>

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

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
                AA Enterprises Gallery
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase italic">
              INDUSTRIAL
              <br />
              <span className="text-brand-primary">
                IN ACTION.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-3xl text-gray-600 text-sm sm:text-xl md:text-2xl leading-relaxed font-medium">
              Explore products, components, and industrial solutions represented through the AA Enterprises product network. This gallery highlights the types of equipment and components available for demanding business and industrial requirements.
            </p>
          </motion.div>
        </div>
      </section>



      {/* =========================================================
          GALLERY FILTER (PREMIUM UI)
      ========================================================== */}
      <section className="pt-16 md:pt-28 pb-10 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                <span className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-gray-900">
                  Product Showcase
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9] italic">
                EXPLORE
                <br />
                <span className="text-brand-primary">
                  OUR WORK.
                </span>
              </h2>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4 w-full xl:w-auto shrink-0">
              {/* Search Box */}
              <div className="relative w-full xl:w-80">
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Premium Scrollable Brand Filters */}
              <div className="w-full xl:w-[600px] 2xl:w-[800px]">
                <div className="bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm flex overflow-x-auto pb-4 sm:pb-5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:m-2 [&::-webkit-scrollbar-thumb]:bg-brand-primary [&::-webkit-scrollbar-thumb]:rounded-full w-full">
                  <div className="flex gap-2 sm:gap-3 min-w-max px-1">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl whitespace-nowrap text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 italic border ${
                          activeFilter === filter
                            ? 'bg-gray-900 text-white shadow-xl scale-105 border-gray-900'
                            : 'bg-gray-50 text-gray-600 border-transparent hover:border-brand-primary hover:text-brand-primary'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED GALLERY (UPGRADED OVERLAPPING CARDS)
      ========================================================== */}
      <section className="pb-20 md:pb-32 bg-[#fafafa] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 sm:py-16 sm:py-24 md:py-32 text-center bg-white border border-gray-200 rounded-[2rem] sm:rounded-[3rem] px-4 shadow-sm"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-inner">
                  <Search size={28} className="sm:w-10 sm:h-10 text-brand-primary opacity-50" />
                </div>
                <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 mb-3 sm:mb-4 tracking-tight">
                  No Products Found
                </h3>
                <p className="text-gray-500 text-sm sm:text-lg font-medium max-w-md mx-auto">
                  Try selecting a different filter category to explore our industrial product showcase.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-16 sm:space-y-24 md:space-y-32">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center ${
                      idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* TEXT CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="lg:w-1/2 w-full order-2 lg:order-none"
                    >
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <span className="text-[9px] sm:text-[10px] font-black text-white uppercase tracking-widest rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-900 shadow-md">
                          {project.client}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-black text-gray-900 uppercase tracking-widest border border-gray-200 rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 bg-white shadow-sm">
                          {project.model}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-6xl lg:text-[4.5rem] font-black text-gray-900 leading-[0.95] mb-6 sm:mb-8 uppercase tracking-tighter italic">
                        {project.title}
                      </h2>

                      <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-lg md:text-xl leading-relaxed font-medium">
                        {project.desc}
                      </p>

                      <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                        {[
                          'Industrial Grade Product',
                          'Product Specification Support',
                          'B2B Supply Assistance'
                        ].map((point, i) => (
                          <li key={i} className="flex items-start gap-3 sm:gap-4 text-gray-900 font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="text-brand-primary w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                            <span className="mt-0.5 sm:mt-1">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/product/${project.id}`}
                        className="btn-magnetic inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1 italic"
                      >
                        View Product Details
                        <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </motion.div>

                    {/* IMAGE CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="lg:w-1/2 w-full relative group order-1 lg:order-none"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedImage(project)}
                        className="w-full text-left outline-none block"
                      >
                        <div className="aspect-[4/3] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-premium group-hover:shadow-peak group-hover:-translate-y-2 lg:group-hover:-translate-y-4 border border-gray-100 transition-all duration-700 relative z-10 bg-white">
                          
                          <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-contain p-8 sm:p-12 md:p-16 opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>

                          {/* Lightbox Trigger Icon */}
                          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-900 text-white flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                            <Maximize2 size={20} className="sm:w-6 sm:h-6" />
                          </div>
                        </div>
                      </button>

                      {/* Decorative Background Blob */}
                      <div
                        className={`absolute -inset-4 sm:-inset-6 bg-brand-primary/10 rounded-[3rem] sm:rounded-[4rem] transform ${
                          idx % 2 === 0 ? 'rotate-3 scale-95' : '-rotate-3 scale-95'
                        } opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10`}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES (UPGRADED CARDS)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white border-y border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary">
                Applications
              </span>
              <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] italic">
              INDUSTRIES
              <br />
              <span className="text-brand-primary">
                WE SUPPORT.
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
                className="bg-gray-800/50 border border-gray-700 rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-10 hover:bg-gray-800 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:border-gray-600 transition-all duration-500 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gray-900 border border-gray-700 text-brand-primary flex items-center justify-center mb-6 sm:mb-8 shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {industry.icon}
                </div>
                <h3 className="text-xl sm:text-3xl font-black uppercase text-white mb-3 sm:mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium text-sm sm:text-lg mb-6 sm:mb-10">
                  {industry.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors group/link"
                >
                  Explore Products
                  <ArrowRight
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUALITY & DELIVERY
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                <span className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-gray-900">
                  AA Enterprises Standard
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-8 italic text-gray-900">
                BUILT AROUND
                <br />
                <span className="text-brand-primary">
                  RELIABILITY.
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-xl leading-relaxed font-medium max-w-xl">
                Industrial sourcing is about getting the correct product, correct specification, and dependable support. AA Enterprises focuses on making that process straightforward for business customers across India.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 bg-[#fafafa] border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-brand-primary/30 hover:shadow-md transition-all"
                >
                  <CheckCircle2
                    size={20}
                    className="sm:w-6 sm:h-6 text-brand-primary shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 leading-relaxed uppercase tracking-wide">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA (UPGRADED)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-[4rem] bg-gray-900 text-white shadow-peak p-8 sm:p-16 md:p-20 relative overflow-hidden animated-gradient-border">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 sm:gap-16 text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-5 sm:mb-7">
                  <div className="w-8 sm:w-10 h-[2px] bg-brand-primary" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary">
                    Need Something Specific?
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6 sm:mb-8 italic">
                  FIND THE RIGHT
                  <br />
                  <span className="text-brand-primary">
                    COMPONENT.
                  </span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-xl leading-relaxed font-medium">
                  Share your product name, model number, brand, quantity, or application requirement with the AA Enterprises team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 shrink-0 justify-center">
                <Link
                  to="/products"
                  className="btn-magnetic flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-xl group"
                >
                  Explore Products
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-magnetic flex items-center justify-center gap-3 border-2 border-gray-700 bg-transparent text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-gray-800 hover:border-gray-600 transition-all shadow-xl group"
                >
                  Request Quote
                  <ArrowUpRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE LIGHTBOX (IMPROVED UI)
      ========================================================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white flex items-center justify-center transition-colors shadow-md group"
              >
                <X size={20} className="sm:w-6 sm:h-6 group-hover:scale-90 transition-transform" />
              </button>

              <div className="flex-1 min-h-0 flex items-center justify-center p-8 sm:p-16 bg-white relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 to-white pointer-events-none"></div>
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain relative z-10 drop-shadow-xl"
                />
              </div>

              <div className="p-6 sm:p-10 border-t border-gray-100 bg-[#fafafa]">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <span className="bg-brand-primary text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {selectedImage.client}
                  </span>
                  <span className="bg-white border border-gray-200 text-gray-900 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {selectedImage.model}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
