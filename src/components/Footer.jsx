import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Heart, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from './Toast';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Footer() {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if(email) {
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

        showToast('Subscribed to newsletter successfully!');
        setEmail('');
      } catch (error) {
        showToast('Error subscribing. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gray-950 text-white pt-24 pb-12 overflow-hidden z-0 border-t-[8px] border-brand-primary">
      {/* Oversized Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.02] select-none">
        <h1 className="text-[20vw] font-black tracking-tighter whitespace-nowrap text-white italic">AA ENTERPRISES</h1>
      </div>

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Info (Spans 4) */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 sm:gap-4 group mb-6">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-sm bg-white shrink-0 flex items-center justify-center border border-gray-200">
                  <img 
                    src="/aa-enterprises/images/logo.jpg" 
                    alt="AA Enterprises Logo" 
                    className="w-full h-full object-contain p-1.5 sm:p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none group-hover:text-brand-primary transition-colors m-0 whitespace-nowrap">
                    AA Enterprises
                  </h1>
                  <p className="text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 sm:mt-1.5 leading-[1.2]">
                    electrical & electronics <br />
                    industrial automation
                  </p>
                </div>
              </Link>
              <p className="text-gray-400 font-medium mb-6 leading-relaxed max-w-sm text-sm sm:text-base">
                Your trusted partner in industrial electrical solutions. We supply premium automation, control, power, and safety equipment from top global brands.
              </p>
              
              <div className="flex items-center gap-2 mb-8 text-brand-primary font-bold text-sm">
                <ShieldCheck size={18} />
                <span>Authorized Distributors & Channel Partners</span>
              </div>
            </div>

            <div className="inline-block bg-gray-900 border border-gray-800 px-5 py-3 rounded-2xl shadow-sm self-start">
              <span className="text-brand-primary font-black text-xs uppercase tracking-widest italic">GSTIN:</span> 
              <span className="text-white ml-2 text-xs font-bold tracking-wider">27FOYPS9860F1ZR</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Spans 2) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 lg:pl-4">
            <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-widest mb-8 italic">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'All Products', 'Our Brands', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.split(' ')[0].toLowerCase() === 'all' ? 'products' : item.split(' ')[0].toLowerCase()}`} 
                    className="text-gray-400 font-bold hover:text-brand-primary transition-colors text-sm relative group inline-flex items-center gap-2 uppercase tracking-wider"
                  >
                    <ArrowRight size={14} className="text-brand-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info (Spans 3) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-3">
            <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-widest mb-8 italic">Reach Out</h3>
            <ul className="space-y-6 text-sm text-gray-400 font-semibold tracking-wide">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all text-brand-primary shadow-sm group-hover:-translate-y-1">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed pt-1 group-hover:text-white transition-colors">
                  Lohar Chawl, Chichkal House,<br />
                  Near Maruti Mandir, Mumbai,<br />
                  Maharashtra - 400002
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all text-brand-primary shadow-sm group-hover:-translate-y-1">
                  <Phone size={16} />
                </div>
                <span className="pt-1 group-hover:text-white transition-colors">+91 9326183962<br/>+91 9819495892</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all text-brand-primary shadow-sm group-hover:-translate-y-1">
                  <Mail size={16} />
                </div>
                <span className="pt-1 truncate group-hover:text-white transition-colors">aaenterprises123786@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all text-brand-primary shadow-sm group-hover:-translate-y-1">
                  <Clock size={16} />
                </div>
                <span className="pt-1 truncate group-hover:text-white transition-colors">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday: Closed</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter (Spans 3) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-3">
            <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-widest mb-8 italic">Stay Updated</h3>
            <p className="text-sm text-gray-400 font-medium mb-6 leading-relaxed">
              Subscribe to get the latest product catalogs, industrial offers, and technical updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input 
                type="email" 
                placeholder="ENTER EMAIL ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-4 md:pl-6 pr-28 py-4 md:py-5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary focus:bg-gray-800 transition-all shadow-sm"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="absolute right-2 top-2 bottom-2 bg-brand-primary text-white px-4 sm:px-5 rounded-lg flex justify-center items-center hover:bg-white hover:text-gray-900 transition-all font-black text-[10px] uppercase tracking-widest italic disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Subscribe"
              >
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeUp} className="pt-8 border-t border-gray-800 flex flex-col items-center gap-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">&copy; {new Date().getFullYear()} AA ENTERPRISES. ALL RIGHTS RESERVED.</p>
            
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
              <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="w-full text-center pt-8 border-t border-gray-900 flex justify-center mt-2 pb-4 sm:pb-0 px-1 sm:px-0">
            <div className="bg-gray-900/80 border border-gray-800 rounded-full px-2.5 sm:px-8 py-2 sm:py-3 flex flex-row items-center justify-center gap-1.5 sm:gap-4 shadow-sm hover:border-brand-primary/50 hover:shadow-neon transition-all duration-300 w-full sm:w-auto max-w-[360px] sm:max-w-none mx-auto overflow-hidden">
              <span className="flex items-center gap-1 sm:gap-1.5 text-[7px] min-[375px]:text-[8px] sm:text-xs font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">
                Made with <Heart size={10} className="text-brand-primary animate-pulse sm:w-3.5 sm:h-3.5 shrink-0" fill="currentColor" /> by 
                <span className="text-brand-primary ml-0.5 sm:ml-1 drop-shadow-neon">Mohd. Arbaz Khan</span>
              </span>
              <span className="inline-block text-gray-700 text-[8px] sm:text-xs shrink-0">|</span>
              <span className="flex items-center gap-1 sm:gap-2 text-[7px] min-[375px]:text-[8px] sm:text-xs font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">
                Website Contact: 
                <a href="tel:8957135387" className="text-white hover:text-brand-primary transition-colors bg-brand-primary/20 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-brand-primary/30">
                  8957135387
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

