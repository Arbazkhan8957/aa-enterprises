import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Calculator, Send, ShieldCheck, Zap, UploadCloud } from 'lucide-react';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';
import { useToast } from '../components/Toast';



export default function Quote() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    person: '',
    email: '',
    phone: '',
    bom: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let base64Clean = "";
      let fName = "";
      let fType = "";

      if (file) {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(file);
        });
        base64Clean = base64.includes(',') ? base64.split(',')[1] : base64;
        fName = file.name;
        fType = file.type;
      }

      const payload = {
        companyName: formData.company,
        contactPerson: formData.person,
        email: formData.email,
        phone: formData.phone,
        requirements: formData.bom,
        fileName: fName,
        fileData: base64Clean,
        fileType: fType
      };

      await fetch('https://script.google.com/macros/s/AKfycbyaiW8XM6hsWWf3Sz3OEJEitEPrquGBnxWNabwye7k3feC_wD1wjWYAi0j8iFxq0hPDSw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
      
      showToast('Formal RFQ submitted successfully! Our team will contact you shortly.');
      setFormData({ company: '', person: '', email: '', phone: '', bom: '' });
      setFile(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Error submitting RFQ. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 overflow-hidden relative selection:bg-brand-primary selection:text-white">
      
      {/* 1. Hero Slider Section */}
      <PageHeroSlider 
        slides={globalHeroSlides} 
        pageName="Request a Quote" 
      />

      {/* =========================================================
          MASSIVE AA ENTERPRISES B2B BRANDING
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
            <span>AA ENTERPRISES B2B</span>
            <span>AA ENTERPRISES B2B</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
            <span className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-brand-primary whitespace-nowrap">
              Wholesale & Bulk Procurement
            </span>
            <div className="w-8 sm:w-12 h-[3px] bg-brand-primary" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-10 italic">
            AA <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">ENTERPRISES.</span>
          </h2>
          
          <p className="text-sm sm:text-xl lg:text-2xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto">
            Leverage our massive authorized inventory. Whether it's a single factory line upgrade or a massive Pan-India deployment, we supply at the speed of industry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 relative z-10">
        
        {/* =========================================================
            AA ENTERPRISES QUOTING ADVANTAGE
        ========================================================== */}
        <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-black uppercase tracking-widest text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            AA Enterprises B2B Pipeline
          </div>
          <h3 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter italic mb-8 leading-[0.9]">
            The <span className="text-brand-primary">AA Enterprises</span><br /> Quoting Advantage
          </h3>
          <p className="text-lg md:text-2xl text-gray-600 font-medium leading-relaxed">
            Procuring industrial components shouldn't be a bottleneck. At <strong className="text-gray-900 font-black">AA Enterprises</strong>, our dedicated engineering sales team processes your Bill of Materials (BOM) instantly, guaranteeing the lowest authorized pricing for your bulk orders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white border border-gray-200 p-8 sm:p-14 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-premium hover:shadow-peak transition-all duration-300 animated-gradient-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-[80px]"></div>
            
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic relative z-10">
              Formal RFQ <span className="text-brand-primary">Submission</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Company Name" required />
                  <label htmlFor="company" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase">Company Name *</label>
                </div>
                <div className="relative group">
                  <input type="text" id="person" name="person" value={formData.person} onChange={handleChange} className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Contact Person" required />
                  <label htmlFor="person" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase">Contact Person *</label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group mt-4">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Email Address" required />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase">Email Address *</label>
                </div>
                <div className="relative group mt-4">
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl" placeholder="Phone Number" required />
                  <label htmlFor="phone" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase">Phone Number *</label>
                </div>
              </div>

              <div className="md:col-span-2 relative group mt-8">
                <textarea id="bom" name="bom" value={formData.bom} onChange={handleChange} rows="6" className="peer w-full bg-transparent border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-primary transition-all text-sm md:text-xl resize-none" placeholder="Requirements / Bill of Materials" required></textarea>
                <label htmlFor="bom" className="absolute left-0 -top-4 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-sm peer-focus:text-brand-primary peer-focus:uppercase">Requirements / Bill of Materials *</label>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-inner mt-8">
                 <div className="bg-brand-primary/10 p-4 rounded-xl shrink-0">
                    <UploadCloud className="w-8 h-8 text-brand-primary" />
                 </div>
                 <div className="flex-1 w-full">
                   <h4 className="font-black text-gray-900 mb-1 uppercase tracking-tight text-sm sm:text-base">Upload BOM / Excel File</h4>
                   <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-4">Attach your Bill of Materials for faster processing.</p>
                   <div className="flex items-center gap-4">
                     <input type="file" id="bom-upload" onChange={handleFileChange} className="hidden" />
                     <label htmlFor="bom-upload" className="cursor-pointer bg-white border border-gray-200 hover:border-brand-primary text-brand-primary px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all shadow-sm">
                        Choose File
                     </label>
                     <span className="text-gray-400 font-semibold text-xs sm:text-sm truncate">
                       {file ? file.name : "No file chosen"}
                     </span>
                   </div>
                 </div>
              </div>
              <div className="md:col-span-2 flex justify-end mt-12">
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto btn-premium bg-brand-primary text-white font-black uppercase tracking-widest text-[10px] md:text-lg px-8 md:px-4 sm:px-6 md:px-12 py-4 md:py-5 rounded-2xl hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-peak flex items-center justify-center gap-3 italic disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Submit Formal RFQ <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        
        {/* =========================================================
            B2B TRUST INDICATORS
        ========================================================== */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-premium">
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h4 className="font-black text-xl text-gray-900 uppercase tracking-tight italic mb-3">Instant Quotes</h4>
            <p className="text-gray-600 font-medium text-sm">BOM processing typically completed by the AA Enterprises team within 2 business hours.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-premium">
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-black text-xl text-gray-900 uppercase tracking-tight italic mb-3">100% Authentic</h4>
            <p className="text-gray-600 font-medium text-sm">Every single component supplied by AA Enterprises is authorized, verified, and warrantied.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-premium">
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Box size={32} />
            </div>
            <h4 className="font-black text-xl text-gray-900 uppercase tracking-tight italic mb-3">Bulk Discounts</h4>
            <p className="text-gray-600 font-medium text-sm">AA Enterprises' massive inventory scale allows us to offer unmatched B2B pricing.</p>
          </div>
        </div>

        {/* =========================================================
            MASSIVE FOOTER CTA
        ========================================================== */}
        <div className="mt-24 sm:mt-32 bg-gray-900 rounded-[2rem] sm:rounded-[4rem] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter italic mb-8 leading-[0.9]">
              Scale Your Operations With <br className="hidden sm:block" />
              <span className="text-brand-primary">AA Enterprises.</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-10">
              Submit your RFQ today and experience why India's top manufacturers trust <strong className="text-white font-black">AA Enterprises</strong> for their mission-critical procurement.
            </p>
            <div className="flex justify-center">
              <button type="button" onClick={() => window.scrollTo({top: 500, behavior: 'smooth'})} className="btn-premium bg-white text-gray-900 px-8 sm:px-4 sm:px-6 md:px-12 py-4 sm:py-5 text-sm sm:text-lg font-black uppercase tracking-widest rounded-2xl hover:shadow-peak hover:-translate-y-1 transition-all">
                Scroll to Quote Form
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
