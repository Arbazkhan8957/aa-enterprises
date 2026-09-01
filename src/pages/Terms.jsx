import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Briefcase, CheckCircle, AlertCircle, ChevronRight, FileWarning } from 'lucide-react';
import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};



export default function Terms() {
  const [activeSection, setActiveSection] = useState('agreement');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'agreement', title: 'B2B Agreement' },
    { id: 'quotes', title: 'Quotes & Orders' },
    { id: 'logistics', title: 'Industrial Logistics' },
    { id: 'liability', title: 'Liability' },
    { id: 'contact', title: 'Contact Legal' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 selection:bg-brand-primary selection:text-white">
      {/* Dynamic Hero Slider */}
      <PageHeroSlider slides={globalHeroSlides} pageName="Terms of Service" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12 sm:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sticky Sidebar */}
          <div className="hidden lg:block w-80 shrink-0 sticky top-32">
            <div className="bg-white rounded-3xl shadow-premium border border-gray-100 p-8">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest italic mb-8 border-b-2 border-gray-100 pb-4">Contents</h3>
              <ul className="space-y-4">
                {sections.map(section => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center justify-between text-sm font-bold uppercase tracking-widest transition-all ${activeSection === section.id ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      {section.title}
                      <ChevronRight size={16} className={`transition-transform ${activeSection === section.id ? 'translate-x-1' : ''}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-grow bg-white rounded-3xl shadow-premium border border-gray-100 p-8 sm:p-12 md:p-16">
            
            <motion.div variants={fadeUp} id="agreement" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-6 border-l-4 border-brand-primary pl-6">B2B Agreement</h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg mb-6">
                Welcome to <strong className="text-gray-900 font-black uppercase tracking-wide">AA Enterprises</strong>. By accessing our platform or requesting quotations for electrical, electronics, and industrial automation components, you agree to be bound by these terms. 
              </p>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg">
                AA Enterprises operates from <span className="text-gray-900 font-bold">Lohar Chawl, Mumbai, Maharashtra (400002)</span>. Our services are strictly designed for B2B (Business to Business) clients, factories, contractors, and industrial procurement officers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} id="quotes" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-8 flex items-center gap-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl"><FileWarning className="text-brand-primary" size={28} /></div>
                Quotes & Product Specs
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <ul className="space-y-6 text-gray-700 font-medium sm:text-lg leading-relaxed">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1 shadow-sm"><span className="text-brand-primary font-black text-sm">1</span></div>
                    <div>
                      <strong className="text-gray-900 uppercase tracking-wider block mb-1">Non-Binding Estimates</strong>
                      Quotes generated through the website are estimates. Formal commercial invoices will be sent post-verification by AA Enterprises staff.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1 shadow-sm"><span className="text-brand-primary font-black text-sm">2</span></div>
                    <div>
                      <strong className="text-gray-900 uppercase tracking-wider block mb-1">Dynamic Stock</strong>
                      Industrial component availability is highly dynamic. Final order fulfillment depends on warehouse inventory at the time of PO (Purchase Order) issuance.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1 shadow-sm"><span className="text-brand-primary font-black text-sm">3</span></div>
                    <div>
                      <strong className="text-gray-900 uppercase tracking-wider block mb-1">OEM Specifications</strong>
                      All specifications are defined by manufacturers (Siemens, Schneider, etc.). AA Enterprises is an authorized supplier, not the original manufacturer.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} id="logistics" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-6 border-l-4 border-gray-900 pl-6">Industrial Logistics</h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg mb-6">
                AA Enterprises specializes in pan-India industrial logistics. Delivery timelines for heavy equipment, switchgears, and bulk cables will be communicated formally during the quotation phase. Delays due to transit or unavoidable circumstances (Force Majeure) are not liable for compensation.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} id="liability" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-8 flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-xl"><AlertCircle className="text-red-500" size={28} /></div>
                Liability Disclaimer
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg">
                To the maximum extent permitted by applicable law, AA Enterprises shall not be held responsible for any direct, indirect, special, or consequential damages arising out of the use or inability to use our products in industrial environments. <strong className="text-gray-900">Proper engineering consultation should be sought prior to installation of all electrical components.</strong>
              </p>
            </motion.div>

            <motion.div variants={fadeUp} id="contact">
              <div className="p-8 sm:p-12 bg-gray-950 rounded-3xl border border-gray-800 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
                
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-widest italic mb-4 relative z-10">Commercial Inquiries</h3>
                <p className="text-gray-400 font-medium mb-8 sm:text-lg relative z-10 max-w-xl mx-auto">
                  For formal legal agreements, vendor registration, or corporate procurement inquiries with AA Enterprises.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                  <a href="tel:+919326183962" className="bg-brand-primary text-white font-black hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest px-8 py-4 rounded-xl italic shadow-neon">
                    +91 9326183962
                  </a>
                  <a href="tel:+919819495892" className="bg-gray-800 text-white font-black hover:bg-gray-700 transition-all uppercase tracking-widest px-8 py-4 rounded-xl italic border border-gray-700">
                    +91 9819495892
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
