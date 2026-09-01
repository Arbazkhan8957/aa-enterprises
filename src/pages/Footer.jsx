import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      showToast('Subscribed to newsletter successfully!');
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-brand-dark text-white pt-32 pb-12 overflow-hidden z-0">
      {/* Oversized Background Typography */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.03]">
        <h1 className="text-[20vw] font-black tracking-tighter whitespace-nowrap select-none">AA ENTERPRISES</h1>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand Info (Spans 4) */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="text-white font-black text-3xl mix-blend-difference bg-brand-dark px-2 py-1 rounded-lg transition-transform group-hover:scale-105">
                AA
              </div>
              <h1 className="text-2xl font-black text-white tracking-tighter leading-none uppercase">AA Enterprises</h1>
            </Link>
            <p className="text-white font-semibold mb-8 leading-relaxed max-w-sm text-sm">
              Your trusted partner in industrial electrical solutions for automation, control, power & safety applications. We provide premium quality products for heavy-duty industrial needs.
            </p>
            <div className="inline-block border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">GSTIN:</span> 
              <span className="text-white ml-2 text-xs font-medium">27FOYPS9860F1ZR</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Spans 2) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-8">Important Links</h3>
            <ul className="space-y-4">
              {['About Us', 'All Products', 'Our Brands', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.split(' ')[0].toLowerCase() === 'all' ? 'products' : item.split(' ')[0].toLowerCase()}`} 
                    className="text-white font-semibold hover:text-brand-primary transition-colors text-sm font-medium relative group inline-block"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info (Spans 3) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-3">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-8">Get In Touch</h3>
            <ul className="space-y-6 text-sm text-white font-semibold">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed pt-1">
                  Lohar Chawl, Chichkal House,<br />
                  Near Maruti Mandir, Mumbai,<br />
                  Maharashtra - 400002
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <Phone size={14} />
                </div>
                <span className="pt-1">+91 9326183962<br/>+91 9819495892</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <Mail size={14} />
                </div>
                <span className="pt-1 truncate">aaenterprises123786@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter (Spans 3) */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-3">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-8">Newsletter</h3>
            <p className="text-sm text-white font-semibold mb-6 leading-relaxed">
              Premium updates, offers, and architectural solutions delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/30 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-primary focus:bg-brand-dark/10 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-brand-dark text-black w-10 h-10 rounded-full flex justify-center items-center hover:bg-brand-primary transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeUp} className="pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex gap-3">
            {['FB', 'IN', 'LI', 'YT'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold  hover:border-brand-primary transition-colors">
                {social}
              </a>
            ))}
          </div>

          <p className="text-xs font-medium text-white font-semibold uppercase tracking-widest">&copy; {new Date().getFullYear()} AA Enterprises</p>
          
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-white font-semibold">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
