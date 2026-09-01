import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Factory, Users, ChevronRight, CheckCircle2, History, Target, Lightbulb, Zap, Clock, Package, Wrench, Globe, Cpu, LineChart, Building2, Focus, Scale, Fingerprint, ChevronLeft, Truck, Flame, Anchor as AnchorIcon, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

import PageHeroSlider from '../components/PageHeroSlider';
import { globalHeroSlides } from '../data/globalSlides';



export default function About() {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 overflow-hidden relative selection:bg-brand-primary selection:text-white">
      
      {/* 1. Advanced Hero Slider Section */}
      <PageHeroSlider 
        slides={globalHeroSlides} 
        pageName="Corporate Profile" 
        minHeight="min-h-[70vh]" 
      />

      {/* 2. Global Statistics Bar (Removed per request) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        
        {/* 3. Massive Corporate Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group animated-gradient-border">
              <img 
                src="/aa-enterprises/images/hero.png"
                alt="AA Enterprises Facility" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter  opacity-80  group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-10 left-10 text-gray-900">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-black">Corporate Headquarters</h4>
                </div>
                <p className="text-gray-600 font-medium text-lg">Lohar Chawl, Mumbai - The Electrical Heart of India</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-primary rounded-full"></span> Corporate Identity
            </h2>
            <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              The Critical Link in the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Global Supply Chain.</span>
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg mb-10">
              <p>
                At <strong>AA Enterprises</strong>, we view electrical distribution not just as a transaction, but as the <em><strong>fundamental infrastructure</strong></em> that keeps the global economy moving. Without reliable <em>motor control, automation sensing, and power distribution</em>, industries halt. 
              </p>
              <p>
                We have spent over a quarter of a century perfecting our <strong>supply chain logistics</strong>, building direct relationships with the world's most prestigious electrical OEMs, and curating an inventory that anticipates the needs of <em>modern heavy engineering</em>. From the smallest auxiliary contact to the most massive industrial contactors, our <strong>warehouses are prepared</strong>.
              </p>
              <p className="pl-6 border-l-4 border-brand-primary text-gray-900 font-bold italic bg-gray-100 p-4 rounded-r-xl">
                "Our commitment is absolute: to deliver uncompromised quality, unparalleled technical support, and unprecedented speed to every manufacturing plant, panel builder, and project site we serve."
              </p>
            </div>
          </motion.div>
        </div>

        {/* MASSIVE MISSION, VISION, VALUES */}
        <div className="mb-40">
          <div className="text-center mb-20">
             <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Our Guiding Principles</h2>
             <h3 className="text-2xl sm:text-3xl md:text-6xl font-black text-gray-900 tracking-tight">The AA Enterprises Philosophy</h3>
          </div>
          
          <div className="space-y-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-16 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center hover:border-brand-primary/30 transition-all shadow-premium hover:shadow-peak hover:-translate-y-2 relative overflow-hidden group animated-gradient-border"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-[80px] group-hover:bg-brand-primary/10 transition-colors"></div>
              <div className="w-32 h-32 shrink-0 bg-gray-50 rounded-full border-4 border-gray-200 flex items-center justify-center text-brand-primary group-hover:border-brand-primary transition-colors">
                <Target size={56} />
              </div>
              <div>
                <h4 className="text-[1.35rem] sm:text-2xl md:text-4xl font-black text-gray-900 mb-6">Our Mission</h4>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  To aggressively empower Indian and global industries by supplying <em><strong>authentic, high-efficiency electrical hardware</strong></em>. We are dedicated to ensuring <strong>absolute safety, maximum operational uptime, and total mechanical reliability</strong> for our clients. We refuse to compromise on the quality of the components that run your factories.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-16 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center hover:border-blue-300 transition-all shadow-premium hover:shadow-peak hover:-translate-y-2 relative overflow-hidden group animated-gradient-border"
            >
               <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] group-hover:bg-blue-100 transition-colors"></div>
              <div className="w-32 h-32 shrink-0 bg-gray-50 rounded-full border-4 border-gray-200 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                <Lightbulb size={56} />
              </div>
              <div className="md:text-right">
                <h4 className="text-[1.35rem] sm:text-2xl md:text-4xl font-black text-gray-900 mb-6">Our Vision</h4>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  To cement <strong>AA Enterprises</strong> as the ultimate, most <em>technologically advanced B2B partner</em> for industrial electrical solutions globally. We envision a future where procurement is seamless, logistics are instantaneous, and every industrial plant operates with <em><strong>zero downtime</strong></em> thanks to our intelligent supply network.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-16 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center hover:border-green-300 transition-all shadow-premium hover:shadow-peak hover:-translate-y-2 relative overflow-hidden group animated-gradient-border"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] group-hover:bg-green-100 transition-colors"></div>
              <div className="w-32 h-32 shrink-0 bg-gray-50 rounded-full border-4 border-gray-200 flex items-center justify-center text-green-500 group-hover:border-green-500 transition-colors">
                <Fingerprint size={56} />
              </div>
              <div>
                <h4 className="text-[1.35rem] sm:text-2xl md:text-4xl font-black text-gray-900 mb-6">Our Core Values</h4>
                <ul className="text-gray-600 text-lg leading-relaxed space-y-4">
                  <li className="flex items-start gap-4"><CheckCircle2 className="text-green-500 shrink-0 mt-1" /> <strong>Unwavering Integrity:</strong> Honest, transparent pricing and business ethics in every transaction.</li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="text-green-500 shrink-0 mt-1" /> <strong>Zero Tolerance for Counterfeits:</strong> We guarantee 100% genuine components, sourced strictly from authorized channels.</li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="text-green-500 shrink-0 mt-1" /> <strong>Customer Obsession:</strong> Unrelenting focus on customer satisfaction, technical support, and rapid issue resolution.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. Our Advanced Product Ecosystem */}
        <div className="mb-40">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Our Expertise & Catalog</h2>
            <h3 className="text-2xl sm:text-3xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">The AA Enterprises Ecosystem</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">We don't just sell components; we provide complete architecture across four critical domains of industrial electrical systems.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto snap-start bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 hover:border-gray-300 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-500 group animated-gradient-border"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Factory size={40} />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-gray-900">Motor Control & Protection</h4>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">The heart of any industrial operation. We supply premium contactors and overload relays designed for extreme durability and precise control.</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Schneider TeSys D (LC1D) & EasyPact (LC1E) Contactors</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Schneider LRD & LRE Thermal Overload Relays</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Sibass Electric SE1D AC Contactors</span>
                </div>
              </div>
            </motion.div>

            {/* Domain 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto snap-start bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 hover:border-blue-300 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-500 group animated-gradient-border"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Lightbulb size={40} />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-gray-900">Signaling & Indication</h4>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Visual and acoustic feedback systems essential for human-machine interface safety, plant monitoring, and electrical diagnostics.</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-500" /> <span className="text-gray-800 font-medium">Sibass Digital Volt & Ampere Panel Meters</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-500" /> <span className="text-gray-800 font-medium">Jigo Industrial Andon Tower Lights</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-500" /> <span className="text-gray-800 font-medium">Schneider Harmony & Sibass LED Indicators / Buzzers</span>
                </div>
              </div>
            </motion.div>

            {/* Domain 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto snap-start bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 hover:border-green-300 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-500 group animated-gradient-border"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Cpu size={40} />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-gray-900">Automation & Sensing</h4>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Precision inputs for complex PLC logic. We provide heavy-duty sensing equipment designed to withstand violent mechanical environments.</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" /> <span className="text-gray-800 font-medium">Omron High-Fidelity Limit Switches</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" /> <span className="text-gray-800 font-medium">Jigo Heavy-Duty Mechanical Limit Switches</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" /> <span className="text-gray-800 font-medium">Schneider TeSys LADN Auxiliary Control Blocks</span>
                </div>
              </div>
            </motion.div>

            {/* Domain 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-auto snap-start bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 hover:border-gray-300 shadow-premium hover:shadow-peak hover:-translate-y-2 transition-all duration-500 group animated-gradient-border"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Globe size={40} />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-gray-900">Thermal & Infrastructure</h4>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">The foundational elements that protect and connect your panels. From cooling systems to pristine wiring architecture.</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Resonance Axial AC Cooling Fans</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Jigo Wiring Accessories, Lugs & Cable Ties</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <CheckCircle2 className="text-brand-primary" /> <span className="text-gray-800 font-medium">Schneider Harmony Push Buttons & Estops</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5. The AA Enterprises Guarantee */}
        <div className="mb-40">
           <div className="bg-brand-primary rounded-[3rem] p-1 md:p-2 relative overflow-hidden shadow-md animated-gradient-border">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="bg-white rounded-[2.5rem] p-6 md:p-20 relative z-10">
               <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-6 text-center">The AA Enterprises Guarantee</h3>
               <p className="text-center text-gray-600 text-base md:text-lg mb-10 md:mb-16 max-w-3xl mx-auto">Why we are the preferred supplier for India's largest panel builders and OEMs.</p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="text-center bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <ShieldCheck size={48} className="text-brand-primary mx-auto mb-6" />
                    <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-4">Zero Counterfeits</h4>
                    <p className="text-gray-600 leading-relaxed">Every Schneider, Omron, Sibass, and Jigo product is sourced directly from authorized channels. We provide complete traceability and manufacturer warranty support.</p>
                  </div>
                  <div className="text-center bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <LineChart size={48} className="text-brand-primary mx-auto mb-6" />
                    <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-4">Scale & Capacity</h4>
                    <p className="text-gray-600 leading-relaxed">Whether you are building a single control panel or outfitting an entire gigafactory, AA Enterprises has the inventory depth and logistical capacity to fulfill your BOM.</p>
                  </div>
                  <div className="text-center bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <Users size={48} className="text-brand-primary mx-auto mb-6" />
                    <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-4">Engineering Support</h4>
                    <p className="text-gray-600 leading-relaxed">We don't just push boxes. Our sales engineers understand load ratings, tripping classes, and coil voltages to ensure you buy exactly what your circuit requires.</p>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* 6. Advanced Timeline */}
        <div className="mb-20">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Historical Roadmap</h2>
          </div>
          
          <div className="relative border-l-4 border-gray-200 ml-6 md:ml-0 md:border-none space-y-16 md:space-y-0 pb-10">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {[
              { title: "Foundation in Lohar Chawl", desc: <span><strong>AA Enterprises</strong> was established in <em>Mumbai's historic electrical market</em>, beginning a legacy of <strong>trust and reliability</strong>.</span> },
              { title: "OEM Partnerships", desc: <span>Secured <strong>direct, authorized distributorships</strong> with global electrical giants, completely eliminating <em>third-party supply chain risks</em>.</span> },
              { title: "Industrial Portfolio Expansion", desc: <span>Massively scaled our warehousing to include <em><strong>highly specialized automation gear</strong></em>: limit switches, advanced contactors, and digital meters.</span> },
              { title: "Digital Supply Chain", desc: <span>Launched a <strong>fully integrated digital catalog</strong> allowing B2B clients, panel builders, and factories to explore our vast inventory globally.</span> }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} ${idx !== 0 ? 'md:mt-24' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-[-28px] md:left-1/2 w-14 h-14 bg-white border-4 border-brand-primary rounded-full transform md:-translate-x-1/2 flex items-center justify-center font-black text-white shadow-md z-10">
                  <History size={20} className="text-brand-primary" />
                </div>
                <div className="w-full md:w-5/12 pl-10 md:pl-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-white p-6 md:p-8 rounded-[2rem] border border-gray-200 hover:border-brand-primary shadow-premium hover:shadow-peak transition-all hover:-translate-y-2 duration-500 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} animated-gradient-border`}
                  >
                    <h4 className="text-gray-900 font-black text-2xl mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Quality Assurance Protocol */}
        <div className="mb-40">
          <div className="bg-gray-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-primary/5 pattern-grid-lg pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Zero Defects</h2>
                <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                  The Multi-Tier <br/><span className="text-brand-primary">Quality Assurance Protocol.</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  In industrial electricals, a single faulty relay can cause millions in mechanical damage. That's why <strong>AA Enterprises</strong> employs a ruthless quality assurance protocol. We do not deal in grey market parts. Every single component in our <em><strong>10K+ SKU inventory</strong></em> is fully traceable back to the original manufacturing line.
                </p>
                <ul className="space-y-4">
                  {[
                    "100% Authorized OEM Sourcing",
                    "Stringent Anti-Counterfeit Verification",
                    "Climate-Controlled Inventory Storage",
                    "Pre-Dispatch Visual & Batch Inspection"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-bold">
                      <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-800 p-6 md:p-8 rounded-[2rem] border border-gray-700 hover:border-brand-primary/50 transition-colors">
                  <ShieldCheck size={36} className="text-brand-primary mb-4" />
                  <h4 className="text-base sm:text-xl font-black text-white mb-2">Authenticity</h4>
                  <p className="text-gray-500 text-sm font-medium">OEM seals intact on every box.</p>
                </div>
                <div className="bg-gray-800 p-6 md:p-8 rounded-[2rem] border border-gray-700 hover:border-brand-primary/50 transition-colors mt-8 md:mt-12">
                  <Award size={36} className="text-brand-primary mb-4" />
                  <h4 className="text-base sm:text-xl font-black text-white mb-2">Warranty</h4>
                  <p className="text-gray-500 text-sm font-medium">Full manufacturer backing guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Logistics Network */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Supply Chain Dominance</h2>
            <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Heavy Industrial Logistics Network</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Operating from <em>Mumbai</em>, our distribution network is engineered for <strong>maximum velocity</strong>, ensuring critical automation components reach any Indian factory floor with unprecedented speed.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak transition-all text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors text-gray-400">
                <Truck size={28} />
              </div>
              <h4 className="text-base sm:text-xl font-black text-gray-900 mb-3">Express Nationwide Dispatch</h4>
              <p className="text-gray-600 font-medium">Same-day dispatch for all ready-stock items, coordinated via premier heavy-cargo logistics partners.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak transition-all text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors text-gray-400">
                <Package size={28} />
              </div>
              <h4 className="text-base sm:text-xl font-black text-gray-900 mb-3">Massive Warehousing</h4>
              <p className="text-gray-600 font-medium">Our deeply stocked central facilities hold the <em><strong>inventory depth</strong></em> required for entire plant overhauls.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-premium hover:shadow-peak transition-all text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors text-gray-400">
                <Globe size={28} />
              </div>
              <h4 className="text-base sm:text-xl font-black text-gray-900 mb-3">Global Sourcing Network</h4>
              <p className="text-gray-600 font-medium">Direct procurement lines with European and Asian manufacturing hubs for highly specialized components.</p>
            </div>
          </div>
        </div>

        {/* 9. Core Industries Powered */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Sectors We Supply</h2>
            <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Industries Powered by AA Enterprises</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We do not serve the lightweight commercial market. Our focus is strictly on <em><strong>heavy engineering</strong></em>, manufacturing, and critical infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Steel & Metallurgy", icon: <Flame size={32} />, desc: "High-amperage contactors and thermal overload relays for extreme heat environments." },
              { title: "Automotive OEM", icon: <Factory size={32} />, desc: "Precision limit switches and automation logic for robotic assembly lines." },
              { title: "Marine & Offshore", icon: <AnchorIcon size={32} />, desc: "Vibration-resistant switchgears and panels for the maritime sector." },
              { title: "Power Infrastructure", icon: <Zap size={32} />, desc: "Grid-level indication, digital metering, and critical control components." }
            ].map((industry, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-primary/50 shadow-premium hover:shadow-peak transition-all group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors mb-6">
                  {industry.icon}
                </div>
                <h4 className="text-base sm:text-xl font-black text-gray-900 mb-3">{industry.title}</h4>
                <p className="text-gray-600 text-sm font-medium">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Specialized Panel Building & Automation Architecture */}
        <div className="mb-20">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-200 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-1 bg-brand-primary rounded-full"></span> Panel & Automation Expertise
                </h2>
                <h3 className="text-[1.35rem] sm:text-2xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
                  Mastering the Complexity of <br/><span className="text-brand-primary">Industrial Electric Automation.</span>
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    <strong>AA Enterprises</strong> is more than a supplier; we are technical partners to India's top panel builders and automation architects. We understand that modern control panels require extreme precision, modularity, and heat dissipation.
                  </p>
                  <p>
                    From high-density PLC routing to massive VFD (Variable Frequency Drive) enclosures, our inventory provides the exact components required to build intelligent, self-monitoring electrical panels. We supply everything from <em>micro-contactors for logic switching</em> to <em>heavy-duty busbar supports</em>.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex items-start gap-4">
                     <Cpu className="text-brand-primary shrink-0 mt-1" />
                     <div>
                       <h4 className="font-bold text-gray-900">PLC Integration</h4>
                       <p className="text-sm text-gray-500 mt-1">Sensing and signaling logic for automated plants.</p>
                     </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex items-start gap-4">
                     <Factory className="text-brand-primary shrink-0 mt-1" />
                     <div>
                       <h4 className="font-bold text-gray-900">Motor Control Centers</h4>
                       <p className="text-sm text-gray-500 mt-1">High-amperage components for heavy MCC panels.</p>
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group animated-gradient-border">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
                    alt="Industrial Electric Automation Panel" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-lg sm:text-2xl font-black text-white mb-2">Next-Gen Control Panels</h4>
                    <p className="text-gray-300 font-medium text-sm">Powered by AA Enterprises' certified component ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11. Global Procurement Strategy */}
        <div className="mb-20">
          <div className="bg-brand-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl animated-gradient-border group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-black text-white/80 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-white/80 rounded-full"></span> International Sourcing
              </h2>
              <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                Global Procurement for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Local Dominance.</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    To guarantee absolute reliability, <strong>AA Enterprises</strong> bypasses local grey markets entirely. We maintain <em><strong>direct procurement pipelines</strong></em> with manufacturing hubs in Germany, France, Japan, and the United States. 
                  </p>
                  <p>
                    By importing directly from <em>authorized OEM factories</em>, we ensure that every contactor, breaker, and relay you purchase carries a <strong>100% authenticity guarantee</strong> and full international warranty backing.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                    <Globe size={32} className="text-white mb-4" />
                    <h4 className="text-base sm:text-xl font-bold text-white mb-2">Borderless</h4>
                    <p className="text-white/70 text-sm">Direct import logistics.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                    <ShieldCheck size={32} className="text-white mb-4" />
                    <h4 className="text-base sm:text-xl font-bold text-white mb-2">Certified</h4>
                    <p className="text-white/70 text-sm">CE & UL marked gear.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12. Engineering & Technical Support */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Beyond Distribution</h2>
            <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Elite Technical Support</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We do not just ship boxes. Our team consists of <em><strong>electrical engineers</strong></em> who understand your schematics and can assist in optimizing your BOM.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-premium hover:shadow-peak transition-all hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Focus size={32} />
                </div>
                <h4 className="text-base sm:text-xl font-black text-gray-900 mb-4">Load Calculation</h4>
                <p className="text-gray-600 font-medium">Assistance in selecting the exact AC-3 or AC-1 contactor rating for your specific motor application.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-premium hover:shadow-peak transition-all hover:-translate-y-2 group text-center mt-0 md:mt-8">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Wrench size={32} />
                </div>
                <h4 className="text-base sm:text-xl font-black text-gray-900 mb-4">Cross-Referencing</h4>
                <p className="text-gray-600 font-medium">Expert replacement of obsolete parts with <em><strong>modern, equivalent components</strong></em> without circuit modification.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-premium hover:shadow-peak transition-all hover:-translate-y-2 group text-center mt-0 md:mt-16">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Scale size={32} />
                </div>
                <h4 className="text-base sm:text-xl font-black text-gray-900 mb-4">BOM Optimization</h4>
                <p className="text-gray-600 font-medium">Value-engineering your Bill of Materials to reduce cost while maintaining absolute safety.</p>
             </div>
          </div>
        </div>

        {/* 13. Client Testimonials */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-3">Industry Trust</h2>
            <h3 className="text-[1.35rem] sm:text-2xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Client Endorsements</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg sm:text-2xl font-black text-gray-900 ml-2">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trusted by over <strong>10,000+</strong> panel builders, heavy manufacturing plants, and electrical contractors globally.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "AA Enterprises completely eliminated our counterfeit part problem. Their direct OEM sourcing means we never have to second-guess the contactors we install in our blast furnaces.", name: "Rajesh S.", role: "Chief Electrical Engineer, Steel Manufacturing" },
              { text: "When a critical VFD tripped on a Friday night, they dispatched a replacement from their warehouse within 2 hours. Unmatched inventory depth and logistics speed.", name: "Amit P.", role: "Plant Head, Automotive OEM" },
              { text: "Their technical team helped us cross-reference and optimize our entire BOM, saving us 14% on total panel costs while upgrading to modern Schneider components.", name: "Vikram D.", role: "Senior Panel Builder, Automation Solutions" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-premium hover:shadow-peak transition-all hover:-translate-y-2 flex flex-col justify-between group">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-8">"{review.text}"</p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
