import { products } from '../data';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User, CalendarDays, Share2, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find the exact post matching the slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // Graceful fallback if somehow a bad URL is entered
      setPost({
        title: "Article Not Found",
        category: "Error",
        author: "AA Enterprises",
        date: "N/A",
        readTime: "0 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
        content: `<h2>Oops!</h2><p>The technical guide you are looking for does not exist or has been moved. Please return to the Knowledge Hub.</p>`
      });
    }
  }, [slug]);

  if (!post) return <div className="min-h-screen bg-[#fafafa] flex items-center justify-center font-black text-2xl uppercase tracking-widest text-brand-primary">Loading Technical Data...</div>;

  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden selection:bg-brand-primary selection:text-white pt-20 md:pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 sm:mb-20">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 hover:text-brand-primary transition-colors mb-8 sm:mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Knowledge Hub
        </button>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="text-brand-primary bg-brand-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest border border-brand-primary/20">
            {post.category}
          </span>
          <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
            <CalendarDays size={14} className="text-brand-primary" /> {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black text-gray-900 leading-[0.95] tracking-tighter uppercase mb-8 sm:mb-12">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-y border-gray-200 py-4 sm:py-6 text-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-brand-primary" />
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Written By</div>
              <div className="text-sm sm:text-base font-bold text-gray-900">{post.author}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center">
              <Clock size={20} className="text-brand-primary" />
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Reading Time</div>
              <div className="text-sm sm:text-base font-bold text-gray-900">{post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MASSIVE HERO IMAGE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-16 sm:mb-24">
        <div className="aspect-[16/10] md:aspect-[21/9] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-peak border border-gray-100 relative group">
          <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>
      </section>

      {/* 3. CONTENT AREA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20 sm:mb-32">
        <article 
          className="prose prose-sm sm:prose-lg md:prose-xl max-w-none text-gray-600 font-medium leading-relaxed
            prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:uppercase
            prose-h2:text-2xl sm:prose-h2:text-4xl prose-h2:mt-12 sm:prose-h2:mt-16 prose-h2:mb-6 sm:prose-h2:mb-8
            prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 sm:prose-h3:mt-12 prose-h3:mb-4 sm:prose-h3:mb-6
            prose-p:mb-6 sm:prose-p:mb-8
            prose-strong:text-gray-900 prose-strong:font-black
            prose-img:w-full prose-img:rounded-3xl prose-img:shadow-peak prose-img:my-10 sm:prose-img:my-16 prose-img:border prose-img:border-gray-100 prose-img:aspect-[16/9] prose-img:object-cover
            prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4 prose-li:flex prose-li:items-start prose-li:gap-3
            [&_li]:before:content-[''] [&_li]:before:block [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-brand-primary [&_li]:before:rounded-full [&_li]:before:mt-2.5 [&_li]:before:shrink-0
            [&_.highlight-box]:bg-white [&_.highlight-box]:border [&_.highlight-box]:border-gray-200 [&_.highlight-box]:shadow-premium [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-l-brand-primary [&_.highlight-box]:p-6 sm:[&_.highlight-box]:p-8 [&_.highlight-box]:rounded-2xl [&_.highlight-box]:text-gray-900 [&_.highlight-box]:font-semibold [&_.highlight-box]:my-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & Tag */}
        <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500">Tags:</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer">AA Enterprises</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-900 hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer">Industrial</span>
          </div>

          <button className="btn-magnetic w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
            <Share2 size={16} /> Share Technical Guide
          </button>
        </div>
      </section>

      {/* 4. CALL TO ACTION - AA ENTERPRISES BRANDED */}
      <section className="py-16 sm:py-16 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-10 text-white shadow-peak transform rotate-3">
            <CheckCircle2 size={32} className="sm:w-10 sm:h-10 transform -rotate-3" />
          </div>
          <h2 className="text-brand-primary font-black uppercase tracking-widest text-xs sm:text-sm mb-4">Empower Your Manufacturing</h2>
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9]">Upgrade Your <br/>Industrial Supply.</h3>
          <p className="text-gray-400 font-medium text-sm sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't compromise on industrial safety and efficiency. Source genuine electrical and automation components directly from the authorized distribution network of <strong>AA Enterprises</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/products" className="btn-magnetic flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-colors shadow-xl group">
              Browse Core Catalog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-magnetic flex items-center justify-center gap-3 border-2 border-gray-700 bg-transparent text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-gray-800 hover:border-gray-600 transition-colors shadow-xl group">
              Request B2B Quote <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
