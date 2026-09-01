import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ChevronRight, MessageSquare, ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';



export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      
      // Exact headers from the sheet
      data.append('Full Name', formData.name);
      data.append('Email Address', formData.email);
      data.append('Phone Number', formData.phone);
      data.append('Company Name', formData.company);
      data.append('Subject / Product Model', formData.subject);
      data.append('Your Message', formData.message);
      
      // Additional safety keys (lowercase/camelCase) to ensure Apps Script catches them
      data.append('name', formData.name);
      data.append('fullName', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('company', formData.company);
      data.append('subject', formData.subject);
      data.append('message', formData.message);
      data.append('yourMessage', formData.message);
      
      await fetch('https://script.google.com/macros/s/AKfycbxi2ZhT2zTWETQDtXVXrATF_TjLojFs2b0Fw3dqFV2WQD1gTlJ4NkVKWd1-mO3Utde4/exec', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      
      showToast('Your message has been sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 overflow-hidden relative selection:bg-brand-primary selection:text-white">
      
      {/* 1. Advanced Hero Slider Section */}
      <PageHeroSlider 
        slides={globalHeroSlides} 
        pageName="Contact Us" 
      />

      {/* =========================================================
          MASSIVE COMPANY BRANDING (NEW)
      ========================================================== */}
      <section className="bg-gray-900 py-20 md:py-16 sm:py-24 md:py-32 relative overflow-hidden border-b-[8px] border-brand-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-gray-900 to-gray-900 pointer-events-none"></div>
        
        {/* Massive Marquee Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden flex whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="text-[25vw] font-black uppercase text-white flex gap-16 tracking-tighter italic leading-none"
          >
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
            <span>AA ENTERPRISES</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
            <span className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-brand-primary whitespace-nowrap">
              The Authorized Distributor
            </span>
            <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-10 italic">
            AA <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">ENTERPRISES.</span>
          </h2>
          
          <p className="text-sm sm:text-xl lg:text-2xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto">
            The ultimate destination for industrial electrical, automation, and control products. We connect global manufacturers directly to your factory floor with uncompromising speed and reliability.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[2rem] shadow-premium hover:shadow-peak hover:-translate-y-2 border border-gray-200 flex flex-col items-center text-center group hover:border-brand-primary/50 transition-all duration-300 animated-gradient-border"
          >
            <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <MessageSquare size={36} />
            </div>
            <h3 className="font-black text-2xl text-gray-900 mb-2 italic uppercase tracking-tight">Sales Enquiry</h3>
            <p className="text-gray-600 font-semibold mb-6 text-sm">For quotes and bulk orders.</p>
            <a href="mailto:aaenterprises123786@gmail.com" className="text-brand-primary font-bold mt-auto hover:underline">aaenterprises123786@gmail.com</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[2rem] shadow-premium hover:shadow-peak hover:-translate-y-2 border border-gray-200 flex flex-col items-center text-center group hover:border-brand-primary transition-all duration-300 animated-gradient-border"
          >
            <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Phone size={36} />
            </div>
            <h3 className="font-black text-2xl text-gray-900 mb-2 italic uppercase tracking-tight">Technical Support</h3>
            <p className="text-gray-600 font-semibold mb-6 text-sm">Product specs & installation help.</p>
            <a href="tel:+919326183962" className="text-brand-primary font-bold mt-auto hover:underline">+91 9326183962<br/>+91 9819495892</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-[2rem] shadow-premium hover:shadow-peak hover:-translate-y-2 border border-gray-200 flex flex-col items-center text-center group hover:border-brand-primary/50 transition-all duration-300 animated-gradient-border"
          >
            <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <MapPin size={36} />
            </div>
            <h3 className="font-black text-2xl text-gray-900 mb-2 italic uppercase tracking-tight">Visit Office</h3>
            <p className="text-gray-600 font-semibold mb-6 text-sm">Lohar Chawl, Mumbai</p>
            <a href="#map" className="text-brand-primary font-bold mt-auto hover:underline">Get Directions</a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info & Map Placeholder */}
          <div className="lg:col-span-1 space-y-8 order-2 lg:order-2">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white text-gray-900 p-10 rounded-[2rem] border border-gray-200 shadow-premium relative overflow-hidden animated-gradient-border"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary rounded-full filter blur-[100px] opacity-10"></div>
              
              <h2 className="text-3xl font-black mb-10 relative z-10 text-gray-900 uppercase tracking-tighter italic">HQ Address</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary p-3 rounded-xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 text-gray-900 uppercase italic tracking-tight">Corporate Office</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      AA ENTERPRISES<br/>
                      Lohar Chawl, Chichkal House,<br/>
                      Near Maruti Mandir, Mumbai,<br/>
                      Maharashtra – 400002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary p-3 rounded-xl shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 text-gray-900 uppercase italic tracking-tight">Business Hours</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">Monday – Saturday<br/>9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 relative z-10">
                <h3 className="font-bold text-gray-500 font-semibold mb-3 text-xs uppercase tracking-widest">GSTIN Details</h3>
                <p className="text-xl font-black text-brand-primary tracking-wider">
                  27FOYPS9860F1ZR
                </p>
              </div>
            </motion.div>

            {/* Embedded Google Map */}
            <div id="map" className="h-72 bg-gray-100 rounded-[2rem] overflow-hidden relative border border-gray-200 shadow-premium animated-gradient-border">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Lohar%20Chawl,%20Mumbai,%20Maharashtra%20400002+(AA%20Enterprises)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="AA Enterprises Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Premium Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] border border-gray-200 shadow-premium h-full animated-gradient-border"
            >
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic">Send us an Enquiry</h2>
              <p className="text-gray-600 font-semibold mb-8 sm:mb-12 text-sm sm:text-lg">Fill out the form below and our sales engineering team will contact you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div className="relative group">
                    <input required type="text" name="name" id="name" value={formData.name} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Full Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Full Name *</label>
                  </div>

                  <div className="relative group">
                    <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Email Address" />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Email Address *</label>
                  </div>

                  <div className="relative group mt-4">
                    <input required type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Phone Number" />
                    <label htmlFor="phone" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Phone Number *</label>
                  </div>

                  <div className="relative group mt-4">
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Company Name" />
                    <label htmlFor="company" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Company Name</label>
                  </div>
                  
                  <div className="md:col-span-2 relative group mt-6">
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Subject / Product Model" />
                    <label htmlFor="subject" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Subject / Product Model</label>
                  </div>
                  
                  <div className="md:col-span-2 relative group mt-8">
                    <textarea required name="message" id="message" rows="4" value={formData.message} onChange={handleChange} 
                      className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl resize-none" placeholder="Your Message"></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 font-semibold peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase peer-focus:font-bold">Your Message *</label>
                  </div>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto btn-premium bg-brand-primary text-white font-black uppercase tracking-widest text-[10px] md:text-lg px-8 md:px-4 sm:px-6 md:px-12 py-4 md:py-5 rounded-2xl hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-peak flex items-center justify-center gap-3 mt-8 italic disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Submit Enquiry <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
        
        {/* =========================================================
            AA ENTERPRISES SUPPORT PROMISE
        ========================================================== */}
        <div className="mt-20 sm:mt-32 bg-brand-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic mb-6 leading-tight">
                The <span className="text-gray-900">AA Enterprises</span><br /> Support Promise
              </h2>
              <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed max-w-xl">
                When you contact <strong className="text-gray-900 font-black">AA Enterprises</strong>, you aren't just reaching a distributor. You are connecting with a dedicated team of technical experts committed to keeping your industrial operations running 24/7 without interruption.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition-colors group">
                <Zap className="w-10 h-10 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">Lightning Fast Response</h3>
                <p className="text-sm text-white/80 font-medium">Instant B2B quoting and real-time inventory checks directly from our command center.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition-colors group">
                <ShieldCheck className="w-10 h-10 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">Technical Engineers</h3>
                <p className="text-sm text-white/80 font-medium">Expert guidance on product specs, compatibility, and drop-in replacements.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
