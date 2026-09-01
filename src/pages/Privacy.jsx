import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight, Server, Database, UserCheck, CheckCircle } from 'lucide-react';
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



export default function Privacy() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: 'Privacy Overview' },
    { id: 'collection', title: 'Data Collection' },
    { id: 'usage', title: 'How We Use Data' },
    { id: 'security', title: 'B2B Security' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 selection:bg-brand-primary selection:text-white">
      {/* Dynamic Hero Slider */}
      <PageHeroSlider slides={globalHeroSlides} pageName="Privacy Policy" />

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
            
            <motion.div variants={fadeUp} id="overview" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-6 border-l-4 border-brand-primary pl-6">Overview</h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg mb-6">
                At <strong className="text-gray-900 font-black uppercase tracking-wide">AA Enterprises</strong>, operating from our main headquarters at <span className="text-brand-primary">Lohar Chawl, Mumbai</span>, we prioritize the confidentiality and security of our B2B clients. As a premier distributor of electrical goods, electronic equipment, and industrial automation components, we handle procurement data with the utmost discretion.
              </p>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg">
                This Privacy Policy outlines how AA Enterprises collects, uses, and safeguards information when you request quotes, browse our product catalogs, or engage with our services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} id="collection" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-8 flex items-center gap-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl"><Database className="text-brand-primary" size={28} /></div>
                Data Collection
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <p className="text-gray-600 font-medium leading-relaxed sm:text-lg mb-6">
                  When you request a quotation or contact us regarding industrial automation solutions (like VFDs, switchgears, or sensors), we may collect:
                </p>
                <ul className="space-y-4 text-gray-700 font-bold sm:text-lg uppercase tracking-wide">
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-brand-primary shrink-0 shadow-neon"></div>
                    Corporate Entity Name & GSTIN
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gray-900 shrink-0"></div>
                    Procurement Officer Contact Details
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gray-900 shrink-0"></div>
                    Project Specifications & RFQs (Request For Quotes)
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gray-900 shrink-0"></div>
                    Shipping & Delivery Logistics Addresses
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} id="usage" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-8 flex items-center gap-4">
                <div className="p-3 bg-gray-900 rounded-xl"><UserCheck className="text-white" size={28} /></div>
                How We Use Data
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg mb-8">
                AA Enterprises utilizes your corporate data exclusively to facilitate seamless business operations. We do not sell or distribute your procurement data to third-party marketers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Processing B2B Orders & Quotes',
                  'Sourcing Rare Automation Parts',
                  'Fulfilling Logistics & Delivery',
                  'Providing Warranty Support'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-brand-primary transition-colors group cursor-default">
                    <CheckCircle className="text-gray-300 group-hover:text-brand-primary mb-4 transition-colors" size={32} />
                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">{item}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} id="security" className="mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight italic mb-6 border-l-4 border-gray-900 pl-6">B2B Security</h2>
              <p className="text-gray-600 font-medium leading-relaxed sm:text-lg">
                AA Enterprises prioritizes the security of your corporate data. We implement industry-standard physical, electronic, and managerial procedures in our Mumbai offices to protect against unauthorized access, alteration, disclosure, or destruction of your transaction information, RFQs, and data stored on our Site.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} id="contact">
              <div className="p-8 sm:p-12 bg-gray-950 rounded-3xl border border-gray-800 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
                
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-widest italic mb-4 relative z-10">Data Privacy Officer</h3>
                <p className="text-gray-400 font-medium mb-8 sm:text-lg relative z-10 max-w-xl mx-auto">
                  If you require clarification on how AA Enterprises handles your corporate data, please contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                  <a href="mailto:aaenterprises123786@gmail.com" className="bg-brand-primary text-white font-black hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest px-8 py-4 rounded-xl italic shadow-neon">
                    Email Support
                  </a>
                  <a href="tel:+919326183962" className="bg-gray-800 text-white font-black hover:bg-gray-700 transition-all uppercase tracking-widest px-8 py-4 rounded-xl italic border border-gray-700">
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
