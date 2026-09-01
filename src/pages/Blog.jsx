import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  User,
  Clock,
  CalendarDays,
  Tag,
  BookOpen,
  ArrowUpRight,
  ChevronRight,
  Filter,
  ShieldCheck,
  Zap,
  Settings,
  Cpu,
  Factory,
  HardHat,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';
import { useToast } from '../components/Toast';
import { blogPosts } from '../blogData';
import { products } from '../data';

const blogHeroSlides = [
  {
    title: 'INDUSTRY INSIGHTS',
    subtitle: 'AA ENTERPRISES KNOWLEDGE HUB',
    desc: 'Explore practical articles, technical guides, product knowledge, safety information, and industrial insights from AA Enterprises.',
    image: products[0]?.image || 'images/hero.png',
  },
  {
    title: 'TECHNICAL GUIDES',
    subtitle: 'ENGINEERING KNOWLEDGE',
    desc: 'Understand industrial components, specifications, applications, installation requirements, and product selection.',
    image: products[1]?.image || 'images/hero.png',
  },
  {
    title: 'SMARTER SOURCING',
    subtitle: 'PRODUCT KNOWLEDGE',
    desc: 'Make better purchasing decisions with useful information about electrical, automation, control, and industrial products.',
    image: products[2]?.image || 'images/hero.png',
  },
];

const categories = [
  'All',
  'Product Guide',
  'Technology',
  'Safety',
  'How-To',
  'Maintenance',
  'Industry Insights',
  'Tips',
];

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

export default function Blog() {
  const { showToast } = useToast();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      try {
        const NEWSLETTER_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTax3D6g8lms9OZp3zpEt2PL4pqvixub4FlJEcO2B3Uj8BhZh94LKQ4KZ-2GAzA2_5sg/exec";
        
        if (NEWSLETTER_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
          showToast('Please provide the Google Apps Script URL for the Newsletter sheet in chat!');
          setIsSubmitting(false);
          return;
        }

        await fetch(NEWSLETTER_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({ email }),
          mode: 'no-cors'
        });

        showToast('Subscribed to network successfully!');
        setEmail('');
      } catch (error) {
        showToast('Error subscribing. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  const filteredPosts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return blogPosts.filter((post) => {
      const categoryMatch =
        activeCategory === 'All' ||
        post.category === activeCategory;

      const searchMatch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const regularPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost.id
  );

  const visiblePosts = regularPosts.slice(0, visibleCount);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const changeSearch = (value) => {
    setSearch(value);
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden selection:bg-brand-primary selection:text-white pt-2">

      {/* =========================================================
          HERO (CINEMATIC)
      ========================================================== */}
      <PageHeroSlider
        slides={globalHeroSlides}
        pageName="Blog"
        minHeight="min-h-[70vh] md:min-h-[75vh]"
      />

      {/* =========================================================
          INTRO (MASSIVE TYPOGRAPHY)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="hidden md:block md:text-[12vw] lg:text-[15vw] font-black tracking-tighter text-gray-100 absolute -top-4 md:-top-10 left-0 leading-none whitespace-nowrap select-none pointer-events-none z-0">
          AA ENTERPRISES
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
                AA Enterprises Authority
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8">
              ENGINEERING
              <br />
              <span className="text-brand-primary">
                INTELLIGENCE.
              </span>
            </h1>

            <p className="mt-4 sm:mt-8 max-w-3xl text-gray-600 text-lg md:text-2xl leading-relaxed font-medium">
              Explore highly technical product guides, authoritative industrial insights, rigorous safety resources, and actionable knowledge curated by the engineers at <strong className="text-gray-900">AA Enterprises</strong> to optimize your factory floors and procurement pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SEARCH + FILTER (ULTRA-PREMIUM UI)
      ========================================================== */}
      <section className="relative z-20 -mt-6 sm:-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-peak animated-gradient-border">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              
              {/* Search */}
              <div className="relative w-full lg:w-[450px] shrink-0">
                <Search size={20} className="sm:w-6 sm:h-6 absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => changeSearch(e.target.value)}
                  placeholder="Search technical articles..."
                  className="w-full h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-[#fafafa] border border-gray-200 pl-12 sm:pl-16 pr-4 sm:pr-6 outline-none text-sm sm:text-base font-bold text-gray-900 placeholder:text-gray-400 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2 sm:gap-3 mb-1 lg:hidden">
                <Filter size={16} className="sm:w-5 sm:h-5 text-brand-primary" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-600">Categories</span>
              </div>

              <div className="flex-1 overflow-x-auto custom-scrollbar pb-2 lg:pb-0 -mx-1 px-1">
                <div className="flex gap-2 sm:gap-3 min-w-max items-center h-full">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => changeCategory(category)}
                      className={`px-4 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gray-900 text-white shadow-xl scale-105'
                          : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE (MASSIVE SHOWCASE)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <div className="w-8 sm:w-10 h-[3px] bg-brand-primary" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-gray-900">
              Essential Reading
            </span>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl sm:rounded-[3rem] overflow-hidden group shadow-premium hover:shadow-peak transition-shadow duration-700 relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-gray-900 to-gray-900 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-12 relative z-10 flex-col lg:flex-row">
              {/* Image */}
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[250px] sm:min-h-[400px] lg:min-h-[650px] overflow-hidden block order-1"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-gray-900/50 lg:to-gray-900" />
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
                  <span className="bg-brand-primary text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest shadow-xl">
                    Must Read
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-gray-900 order-2">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                  <span className="text-brand-primary bg-brand-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
                    {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.05] mb-4 sm:mb-8 group-hover:text-brand-primary transition-colors duration-500">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-400 text-sm sm:text-lg lg:text-xl leading-relaxed font-medium mb-6 sm:mb-12">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-8 mb-6 sm:mb-12 text-gray-300 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2 sm:gap-3">
                    <User size={16} className="sm:w-[18px] sm:h-[18px] text-brand-primary" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2 sm:gap-3">
                    <Clock size={16} className="sm:w-[18px] sm:h-[18px] text-brand-primary" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="btn-magnetic w-full sm:w-auto justify-center bg-brand-primary text-white px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 inline-flex items-center gap-3 sm:gap-4 group/read transition-all rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    Read Full Guide <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover/read:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* =========================================================
          LATEST ARTICLES (GRID)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white relative border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">
                  Technical Archive
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">
                LATEST
                <br />
                <span className="text-brand-primary">
                  PUBLICATIONS.
                </span>
              </h2>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest text-gray-900">
              Showing {visiblePosts.length} of {regularPosts.length} Guides
            </div>
          </div>

          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {visiblePosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl sm:rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 sm:hover:-translate-y-4 shadow-premium hover:shadow-peak transition-all duration-500 flex flex-col h-full"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block relative aspect-[4/3] overflow-hidden p-2 sm:p-3"
                  >
                    <div className="w-full h-full rounded-xl sm:rounded-[2rem] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="bg-brand-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-1 sm:gap-2 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl">
                        <Clock size={12} className="sm:w-3.5 sm:h-3.5 text-brand-primary" />
                        {post.readTime}
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">
                      <CalendarDays size={14} className="sm:w-4 sm:h-4 text-brand-primary" />
                      {post.date}
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase leading-tight tracking-tight group-hover:text-brand-primary transition-colors line-clamp-2 mb-3 sm:mb-4">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium line-clamp-3 mb-6 sm:mb-8">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg">
                        <User size={12} className="sm:w-3.5 sm:h-3.5 text-brand-primary" />
                        {post.author}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#fafafa] border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all shadow-sm"
                      >
                        <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-20 sm:py-16 sm:py-24 md:py-32 text-center bg-[#fafafa] border border-gray-200 rounded-2xl sm:rounded-[3rem] px-4">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-sm">
                <Search size={28} className="sm:w-10 sm:h-10 text-brand-primary" />
              </div>
              <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 mb-3 sm:mb-4 tracking-tight">
                No Guides Found
              </h3>
              <p className="text-gray-500 text-sm sm:text-lg font-medium mb-8 sm:mb-10 max-w-md mx-auto">
                We couldn't find any technical articles matching your current filters. Try searching for "contactors" or "sensors".
              </p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="btn-magnetic px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl bg-gray-900 text-white text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-xl"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {visibleCount < regularPosts.length && (
            <div className="flex justify-center mt-12 sm:mt-20">
              <button
                onClick={() => setVisibleCount((count) => count + 3)}
                className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-gray-900 bg-transparent text-gray-900 text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                Load More Articles
                <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          MASSIVE AA ENTERPRISES BRANDING
      ========================================================== */}
      <section className="py-20 md:py-16 sm:py-24 md:py-32 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-white/5 rotate-12 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-white" />
                <span className="text-sm font-black uppercase tracking-widest text-white whitespace-nowrap">
                  The Industry Standard
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 italic">
                AA <br/>
                <span className="text-gray-900">ENTERPRISES.</span>
              </h2>
              <p className="text-lg md:text-2xl text-white/95 font-medium leading-relaxed max-w-2xl">
                For over a decade, <strong className="text-gray-900 font-black uppercase">AA Enterprises</strong> has been the undisputed backbone of industrial procurement. We don't just supply components; we engineer supply chain confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden group border border-gray-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <ShieldCheck size={56} className="text-brand-primary mb-6 sm:mb-8" />
                <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 sm:mb-8 italic">
                  Why Choose <br className="hidden sm:block"/><span className="text-brand-primary">AA Enterprises?</span>
                </h3>
                <ul className="space-y-4 sm:space-y-6 relative z-10">
                  {[
                    "Direct Authorized Distributor Pricing",
                    "Massive Ready-to-Dispatch Inventory",
                    "Dedicated Technical Sales Engineers",
                    "Pan-India Fast Track Delivery"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-300 font-bold text-base sm:text-lg lg:text-xl">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-primary rounded-full"></div>
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Massive Marquee */}
        <div className="mt-16 sm:mt-20 -mb-8 sm:-mb-10 w-full overflow-hidden flex whitespace-nowrap opacity-[0.05] pointer-events-none select-none relative z-0">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="text-[15vw] lg:text-[20vw] font-black uppercase text-gray-900 flex gap-10 sm:gap-16 tracking-tighter italic leading-none"
          >
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE AREAS (INDUSTRIAL SECTORS)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-primary/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Explore Industrial Domains</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter">DEEP DIVE BY SECTOR.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap size={28} className="sm:w-9 sm:h-9" />,
                title: 'Power Distribution',
                desc: 'Guides on switchgears, heavy contactors, MCBs, and safe electrical panel management.',
                link: '/products?category=Switchgears',
                button: 'Explore Switchgears',
              },
              {
                icon: <Cpu size={28} className="sm:w-9 sm:h-9" />,
                title: 'Factory Automation',
                desc: 'Technical specs on PLCs, limit switches, proximity sensors, and logic components.',
                link: '/products?category=Automation',
                button: 'View Sensors',
              },
              {
                icon: <HardHat size={28} className="sm:w-9 sm:h-9" />,
                title: 'Safety & Compliance',
                desc: 'Resources ensuring your factory meets CE, RoHS, and strict industrial safety standards.',
                link: '/contact',
                button: 'Talk to Engineers',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl sm:rounded-[2.5rem] border border-gray-700 p-6 sm:p-10 hover:bg-gray-800 hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 sm:mb-8 border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium mb-6 sm:mb-10 text-sm sm:text-lg">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-primary group-hover:text-white transition-colors"
                >
                  {item.button}
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER / UPDATE CTA (HUGE BOX)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-2xl sm:rounded-[3rem] p-8 sm:p-16 md:p-24 relative overflow-hidden animated-gradient-border shadow-peak">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-16 items-center justify-between">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-10 h-[3px] bg-white" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                    Stay Ahead
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-6 sm:mb-8">
                  GET INDUSTRIAL
                  <br />
                  <span className="text-gray-900">
                    UPDATES.
                  </span>
                </h2>
                <p className="text-white/90 text-sm sm:text-xl leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                  Join the AA Enterprises mailing list. Receive immediate updates on new inventory, massive price drops, and exclusive technical manuals.
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-2xl">
                  <h3 className="text-xl md:text-3xl font-black uppercase text-gray-900 mb-2 sm:mb-3">Join the Network</h3>
                  <p className="text-gray-500 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                    No spam, just pure industrial knowledge and supply chain updates.
                  </p>

                  <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your Factory/Business Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-4 sm:px-6 sm:py-5 bg-[#fafafa] border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 font-bold text-sm sm:text-lg placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-primary transition-all group flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SUBSCRIBING...' : 'Subscribe Now'} <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AA ENTERPRISES CONTACT & MAP (MASSIVE)
      ========================================================== */}
      <section className="py-16 md:py-16 sm:py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Official Headquarters</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic leading-[0.9]">
              AA <span className="text-brand-primary">ENTERPRISES.</span>
            </h3>
            <p className="mt-6 text-gray-600 text-sm sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              The central hub of industrial distribution. Reach out to our engineers for direct B2B procurement, technical manuals, or factory automation consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Contact Info */}
            <div className="bg-[#fafafa] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-gray-200 shadow-premium animated-gradient-border h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-[80px] group-hover:bg-brand-primary/20 transition-colors duration-700"></div>
              
              <div className="space-y-10 sm:space-y-12 relative z-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-white border border-brand-primary/20 text-brand-primary p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 shadow-sm">
                    <MapPin size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-black text-lg md:text-2xl mb-1 sm:mb-2 text-gray-900 uppercase tracking-tight italic">Corporate Office</h4>
                    <p className="text-xs sm:text-lg text-gray-600 leading-relaxed font-semibold">
                      <strong className="text-gray-900 text-sm sm:text-xl font-black block whitespace-nowrap mb-1">AA ENTERPRISES</strong>
                      Lohar Chawl, Chichkal House,<br/>
                      Near Maruti Mandir, Mumbai,<br/>
                      Maharashtra – 400002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-white border border-brand-primary/20 text-brand-primary p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 shadow-sm">
                    <Phone size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-black text-lg md:text-2xl mb-1 sm:mb-2 text-gray-900 uppercase tracking-tight italic">Direct Lines</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919326183962" className="text-sm sm:text-lg text-gray-600 font-black hover:text-brand-primary transition-colors whitespace-nowrap block">+91 9326183962</a>
                      <a href="tel:+919819495892" className="text-sm sm:text-lg text-gray-600 font-black hover:text-brand-primary transition-colors whitespace-nowrap block">+91 9819495892</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-white border border-brand-primary/20 text-brand-primary p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 shadow-sm">
                    <Mail size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="overflow-hidden w-full">
                    <h4 className="font-black text-lg md:text-2xl mb-1 sm:mb-2 text-gray-900 uppercase tracking-tight italic">Email Support</h4>
                    <a href="mailto:aaenterprises123786@gmail.com" className="text-xs sm:text-lg text-gray-600 font-black hover:text-brand-primary transition-colors block break-words w-full">
                      aaenterprises123786@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200 relative z-10 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919326183962" target="_blank" rel="noreferrer" className="flex-1 btn-premium bg-[#25D366] hover:bg-[#1DA851] text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  WhatsApp Us
                </a>
                <Link to="/contact" className="flex-1 btn-magnetic bg-gray-900 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-brand-primary transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Full Contact <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Massive Map */}
            <div className="h-[400px] sm:h-[500px] lg:h-auto bg-gray-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative border border-gray-200 shadow-premium animated-gradient-border">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Lohar%20Chawl,%20Mumbai,%20Maharashtra%20400002+(AA%20Enterprises)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="AA Enterprises Location"
                className="absolute inset-0 grayscale contrast-125 mix-blend-multiply transition-all duration-700 hover:grayscale-0 hover:mix-blend-normal"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-200/50 rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
