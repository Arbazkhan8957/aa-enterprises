Created At: 2026-08-21T21:27:43+05:30
Completed At: 2026-08-21T21:27:43+05:30
File Path: `file:///d:/aa-enterprises/src/pages/Home.jsx`
Total Lines: 525
Total Bytes: 36098
Showing lines 1 to 525
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: import React, { useState, useEffect } from 'react';
2: import { Link } from 'react-router-dom';
3: import { ShieldCheck, Zap, Package, Search, FileText, CheckCircle2, Factory, TrendingUp, ArrowRight, Truck, PhoneCall, Award, Users, HardHat, Settings, Building2, Quote, Phone, Mail, ChevronRight, Activity, Cpu, Globe, ChevronLeft, MapPin } from 'lucide-react';
4: import { motion, AnimatePresence } from 'framer-motion';
5: import { categories, products, brands } from '../data';
6: 
7: const fadeIn = {
8:   hidden: { opacity: 0, y: 30 },
9:   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
10: };
11: 
12: const staggerContainer = {
13:   hidden: { opacity: 0 },
14:   visible: {
15:     opacity: 1,
16:     transition: { staggerChildren: 0.15 }
17:   }
18: };
19: 
20: const heroSlides = [
21:   {
22:     title: "AA ENTERPRISES",
23:     subtitle: "INDUSTRIAL POWER",
24:     desc: "We engineer the supply chain of the future. Providing mission-critical electrical hardware and advanced switchgears.",
25:     image: products[2]?.image || "/images/hero.png"
26:   },
27:   {
28:     title: "ZERO DOWNTIME",
29:     subtitle: "MAXIMUM EFFICIENCY",
30:     desc: "Supplying massive gigafactories and automated assembly lines with indestructible motor control components.",
31:     image: products[3]?.image || "/images/hero.png"
32:   },
33:   {
34:     title: "100% AUTHENTIC",
35:     subtitle: "GLOBAL BRANDS",
36:     desc: "Direct authorized distributors for Schneider Electric, Omron, Sibass, Jigo and Stroke. Zero counterfeits guaranteed.",
37:     image: products[4]?.image || "/images/hero.png"
38:   }
39: ];
40: 
41: export default function Home() {
42:   const [currentSlide, setCurrentSlide] = useState(0);
43: 
44:   useEffect(() => {
45:     const timer = setInterval(() => {
46:       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
47:     }, 6000);
48:     return () => clearInterval(timer);
49:   }, []);
50: 
51:   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
52:   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
53: 
54:   // We want to show featured products in exactly a 3-column grid
55:   const featuredProducts = products.slice(0, 6);
56: 
57:   return (
58:     <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
59:       
60:       {/* 1. ADVANCED HERO SLIDER SECTION */}
61:       <section className="relative h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20 border-b border-slate-900">
62:         
63:         {/* Slider Backgrounds */}
64:         <AnimatePresence mode="wait">
65:           <motion.div
66:             key={currentSlide}
67:             initial={{ opacity: 0, scale: 1.05 }}
68:             animate={{ opacity: 1, scale: 1 }}
69:             exit={{ opacity: 0 }}
70:             transition={{ duration: 1.2, ease: "easeInOut" }}
71:             className="absolute inset-0 z-0"
72:           >
73:             <img 
74:               src={heroSlides[currentSlide].image} 
75:               alt="Slide Background" 
76:               className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter grayscale"
77:             />
78:             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
79:             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
80:           </motion.div>
81:         </AnimatePresence>
82: 
83:         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0"></div>
84: 
85:         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-24 flex items-center justify-between">
86:           <div className="max-w-4xl">
87:             <motion.div 
88:               initial={{ opacity: 0, y: -20 }}
89:               animate={{ opacity: 1, y: 0 }}
90:               transition={{ duration: 0.8, delay: 0.2 }}
91:               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-indigo-500 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl backdrop-blur-md"
92:             >
93:               <span className="relative flex h-3 w-3">
94:                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
95:                 <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
96:               </span>
97:               India's Premier Electrical Distribution Network
98:             </motion.div>
99:             
100:             <AnimatePresence mode="wait">
101:               <motion.div
102:                 key={currentSlide}
103:                 initial={{ opacity: 0, y: 20 }}
104:                 animate={{ opacity: 1, y: 0 }}
105:                 exit={{ opacity: 0, y: -20 }}
106:                 transition={{ duration: 0.5 }}
107:               >
108:                 <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black leading-[0.9] mb-8 tracking-tighter text-white">
109:                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-red-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
110:                     {heroSlides[currentSlide].title}
111:                   </span><br/>
112:                   <span className="text-zinc-100">{heroSlides[currentSlide].subtitle}</span>
113:                 </h1>
114:                 
115:                 <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl font-medium leading-relaxed drop-shadow-md">
116:                   {heroSlides[currentSlide].desc}
117:                 </p>
118:               </motion.div>
119:             </AnimatePresence>
120:             
121:             <motion.div 
122:               initial={{ opacity: 0, y: 20 }}
123:               animate={{ opacity: 1, y: 0 }}
124:               transition={{ duration: 0.8, delay: 0.4 }}
125:               className="flex flex-col sm:flex-row gap-6"
126:             >
127:               <Link to="/products" className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-slate-950 px-10 py-5 font-black rounded-xl flex items-center justify-center gap-3 hover:from-indigo-400 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] text-lg uppercase tracking-wider overflow-hidden relative">
128:                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
129:                 <span className="relative z-10 flex items-center gap-3">Explore The Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
130:               </Link>
131:               <Link to="/contact" className="group bg-slate-900/80 border border-slate-700 text-white px-10 py-5 font-black rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all text-lg uppercase tracking-wider backdrop-blur-md">
132:                 <span>Request Bulk Quote</span>
133:               </Link>
134:             </motion.div>
135:           </div>
136: 
137:           {/* Slider Controls */}
138:           <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hidden sm:flex items-center justify-center text-white hover:bg-indigo-500 hover:text-black hover:border-indigo-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
139:             <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
140:           </button>
141:           <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hidden sm:flex items-center justify-center text-white hover:bg-indigo-500 hover:text-black hover:border-indigo-500 transition-all shadow-2xl opacity-80 hover:opacity-100 group">
142:             <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
143:           </button>
144:         </div>
145: 
146:         {/* Slider Indicators */}
147:         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
148:           {heroSlides.map((_, idx) => (
149:             <button 
150:               key={idx}
151:               onClick={() => setCurrentSlide(idx)}
152:               className={`w-12 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-indigo-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : 'bg-slate-800 hover:bg-slate-600'}`}
153:               aria-label={`Go to slide ${idx + 1}`}
154:             ></button>
155:           ))}
156:         </div>
157:       </section>
158: 
159:       {/* QUICK STATS SECTION */}
160:       <section className="relative -mt-16 z-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
161:         <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
162:           {[
163:             { label: "Years Experience", value: "25+", icon: <Award size={24} /> },
164:             { label: "Products in Stock", value: "10,000+", icon: <Package size={24} /> },
165:             { label: "Global Brands", value: "20+", icon: <Globe size={24} /> },
166:             { label: "Happy Clients", value: "5,000+", icon: <Users size={24} /> },
167:           ].map((stat, idx) => (
168:             <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
169:               <div className="text-indigo-500 mb-3 bg-indigo-500/10 p-3 rounded-xl">{stat.icon}</div>
170:               <h4 className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</h4>
171:               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
172:             </div>
173:           ))}
174:         </div>
175:       </section>
176: 
177:       {/* 2. CORPORATE IDENTITY & ABOUT */}
178:       <section className="py-32 bg-slate-950 relative overflow-hidden">
179:         {/* Decorative background elements */}
180:         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
181:         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
182:         
183:         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
184:           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
185:             <motion.div 
186:               initial={{ opacity: 0, x: -50 }}
187:               whileInView={{ opacity: 1, x: 0 }}
188:               viewport={{ once: true, margin: "-100px" }}
189:               transition={{ duration: 0.8 }}
190:               className="relative group"
191:             >
192:               <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 via-red-500/10 to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
193:               <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800">
194:                 <img 
195:                   src="/images/hero.png"
196:                   alt="AA Enterprises Global Supply" 
197:                   className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
198:                 />
199:                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
200:                 <div className="absolute bottom-10 left-10 text-white flex items-end gap-6">
201:                   <div>
202:                     <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-600 block leading-none mb-2 filter drop-shadow-lg">1998</span>
203:                     <span className="text-sm font-black uppercase tracking-widest text-slate-300">Established In Mumbai</span>
204:                   </div>
205:                 </div>
206:               </div>
207:             </motion.div>
208: 
209:             <motion.div 
210:               initial={{ opacity: 0, x: 50 }}
211:               whileInView={{ opacity: 1, x: 0 }}
212:               viewport={{ once: true, margin: "-100px" }}
213:               transition={{ duration: 0.8 }}
214:             >
215:               <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
216:                 <span className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></span> The AA Enterprises Advantage
217:               </h2>
218:               <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
219:                 The Backbone of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Manufacturing.</span>
220:               </h3>
221:               <div className="space-y-6 text-slate-300 leading-relaxed text-lg mb-10">
222:                 <p>
223:                   Based in Lohar Chawl, Mumbai, <strong className="text-white">AA Enterprises</strong> has established itself as the ultimate tier-one authorized distributor of industrial electrical components.
224:                 </p>
225:                 <p>
226:                   From massive contactors to ultra-precise proximity sensors, we hold the inventory depth required to outfit entire gigafactories overnight. We don't just sell parts; we provide reliability.
227:                 </p>
228:               </div>
229:               
230:               <div className="grid grid-cols-2 gap-6 mb-10">
231:                 <div className="flex items-start gap-4">
232:                   <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 mt-1">
233:                     <ShieldCheck size={20} />
234:                   </div>
235:                   <div>
236:                     <h4 className="text-white font-bold mb-1">Authentic Gear</h4>
237:                     <p className="text-sm text-slate-400">100% genuine products sourced directly from manufacturers.</p>
238:                   </div>
239:                 </div>
240:                 <div className="flex items-start gap-4">
241:                   <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 mt-1">
242:                     <Truck size={20} />
243:                   </div>
244:                   <div>
245:                     <h4 className="text-white font-bold mb-1">Pan-India Delivery</h4>
246:                     <p className="text-sm text-slate-400">Swift logistics ensuring your operations never halt.</p>
247:                   </div>
248:                 </div>
249:               </div>
250: 
251:               <Link to="/about" className="inline-flex items-center gap-3 text-white bg-slate-900 border border-slate-700 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider hover:bg-indigo-500 hover:border-indigo-500 hover:text-slate-950 transition-all shadow-xl group">
252:                 Read Corporate Profile <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
253:               </Link>
254:             </motion.div>
255:           </div>
256:         </div>
257:       </section>
258: 
259:       {/* WHY CHOOSE US - GRID SECTION */}
260:       <section className="py-24 bg-[#0d0d0d] border-y border-slate-900">
261:         <div className="max-w-7xl mx-auto px-6 lg:px-8">
262:            <div className="text-center mb-20">
263:               <h2 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3">Excellence Guaranteed</h2>
264:               <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">Why Partner With Us?</h3>
265:            </div>
266:            
267:            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
268:               {[
269:                 { icon: <ShieldCheck size={32}/>, title: "100% Genuine", desc: "As authorized distributors, we guarantee zero counterfeit products." },
270:                 { icon: <TrendingUp size={32}/>, title: "B2B Pricing", desc: "Highly competitive wholesale pricing for bulk industrial requirements." },
271:                 { icon: <Package size={32}/>, title: "Massive Inventory", desc: "Ready stock of thousands of SKUs for immediate dispatch." },
272:                 { icon: <Settings size={32}/>, title: "Technical Support", desc: "Expert guidance to help you select the exact part for your machinery." }
273:               ].map((feature, idx) => (
274:                 <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
275:                   <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:scale-110 transition-all duration-300 mb-6 border border-slate-800">
276:                     {feature.icon}
277:                   </div>
278:                   <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
279:                   <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
280:                 </div>
281:               ))}
282:            </div>
283:         </div>
284:       </section>
285: 
286:       {/* 3. SHOP BY EXPERTISE (EXACTLY 3 ITEMS PER ROW) */}
287:       <section className="py-32 bg-slate-950 relative">
288:         <div className="max-w-7xl mx-auto px-6 lg:px-8">
289:           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
290:             <div className="max-w-3xl">
291:               <h2 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Our Core Catalog</h2>
292:               <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight">Industrial Architecture</h3>
293:             </div>
294:           </div>
295: 
296:           <motion.div 
297:             variants={staggerContainer}
298:             initial="hidden"
299:             whileInView="visible"
300:             viewport={{ once: true, margin: "-100px" }}
301:             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
302:           >
303:             {categories.map((cat, idx) => (
304:               <motion.div key={idx} variants={fadeIn} className="bg-slate-950 rounded-[2rem] border border-slate-800 overflow-hidden group hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] flex flex-col h-full relative z-10">
305:                 <Link to={`/products?category=${encodeURIComponent(cat.name)}`} className="flex flex-col h-full p-8 md:p-10">
306:                   
307:                   <div className="flex items-center justify-between mb-8">
308:                     <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-slate-950 group-hover:border-indigo-500 transition-all duration-300">
309:                       <Package size={32} />
310:                     </div>
311:                     <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-indigo-500 group-hover:bg-indigo-500/10 transition-all">
312:                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
313:                     </div>
314:                   </div>
315:                   
316:                   <h3 className="font-black text-3xl text-white leading-tight mb-6">{cat.name}</h3>
317: 
318:                   <div className="h-56 overflow-hidden flex items-center justify-center mb-8 bg-gradient-to-b from-[#1a1a1a] to-slate-900 rounded-2xl p-6 border border-slate-800/50 relative">
319:                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
320:                     <img 
321:                       src={cat.image} 
322:                       alt={cat.name} 
323:                       className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out filter drop-shadow-2xl relative z-10"
324:                     />
325:                   </div>
326:                   
327:                   <div className="flex flex-col flex-grow">
328:                     <ul className="text-sm font-medium text-slate-400 space-y-4 mb-10">
329:                       {cat.description.split(',').map((item, i) => (
330:                          <li key={i} className="flex items-start gap-3">
331:                            <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" /> 
332:                            <span className="text-slate-300">{item.trim()}</span>
333:                          </li>
334:                       ))}
335:                     </ul>
336:                     <div className="mt-auto flex items-center gap-3 text-sm font-black text-slate-500 group-hover:text-indigo-500 transition-colors uppercase tracking-[0.15em] border-t border-slate-800 pt-6">
337:                       Explore Series
338:                     </div>
339:                   </div>
340:                 </Link>
341:               </motion.div>
342:             ))}
343:           </motion.div>
344:         </div>
345:       </section>
346: 
347:       {/* 4. FEATURED PRODUCTS (EXACTLY 3 IMAGES VISIBLE PER LINE) */}
348:       <section className="py-32 bg-slate-950 border-t border-slate-900 relative">
349:         {/* Glow effect */}
350:         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
351: 
352:         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
353:           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
354:             <div>
355:               <h2 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3">Top Inventory</h2>
356:               <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">Featured Components</h3>
357:             </div>
358:             <Link to="/products" className="inline-flex items-center gap-3 text-slate-400 font-black hover:text-indigo-500 transition-colors uppercase tracking-widest bg-slate-900 px-6 py-3 rounded-full border border-slate-800 hover:border-indigo-500/50">
359:               View All Parts <ArrowRight size={18} />
360:             </Link>
361:           </div>
362: 
363:           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
364:             {featuredProducts.map((product) => (
365:               <Link key={product.id} to={`/product/${product.id}`} className="group bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full relative">
366:                 <div className="bg-slate-900 p-8 flex justify-center items-center h-72 relative overflow-hidden border-b border-slate-800/50">
367:                   {/* Subtle background pattern in image area */}
368:                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
369:                   <img src={product.image} alt={product.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out relative z-10 filter drop-shadow-xl" />
370:                   
371:                   {/* Brand Tag */}
372:                   <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1 rounded-full z-20">
373:                     <span className="text-xs font-black uppercase tracking-widest text-indigo-500">{product.brand}</span>
374:                   </div>
375:                 </div>
376:                 
377:                 <div className="p-8 flex flex-col flex-grow bg-slate-950 relative">
378:                   <h3 className="font-black text-xl text-white leading-snug group-hover:text-indigo-500 transition-colors mb-4">{product.name}</h3>
379:                   <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
380:                     <div className="flex flex-col">
381:                       <span className="text-xs uppercase text-slate-500 font-bold mb-1">Model No.</span>
382:                       <span className="text-sm font-black text-slate-300">{product.model}</span>
383:                     </div>
384:                     <span className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-slate-950 group-hover:border-indigo-500 transition-all duration-300">
385:                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
386:                     </span>
387:                   </div>
388:                 </div>
389:               </Link>
390:             ))}
391:           </div>
392:         </div>
393:       </section>
394: 
395:       {/* 5. INDUSTRIES WE EMPOWER */}
396:       <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-slate-900">
397:         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
398:         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
399:           <div className="text-center mb-24 max-w-3xl mx-auto">
400:              <h2 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-3">Global Impact</h2>
401:              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">Industries We Empower</h3>
402:              <p className="text-slate-400 text-lg">Our components form the nervous system of modern industrial infrastructure across multiple sectors.</p>
403:           </div>
404:           
405:           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
406:             {/* Industry 1 */}
407:             <div className="bg-slate-950 border border-slate-800 p-10 rounded-[2rem] hover:border-indigo-500/50 transition-all duration-300 shadow-2xl group relative overflow-hidden">
408:               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full group-hover:bg-indigo-500/10 transition-colors"></div>
409:               <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:scale-110 transition-transform"><Factory size={32} /></div>
410:               <h4 className="text-2xl font-black mb-4 text-white relative z-10">Manufacturing</h4>
411:               <p className="text-slate-400 leading-relaxed mb-8 relative z-10">Powering automated assembly lines and heavy machinery conveyor systems with robust contactors and drives.</p>
412:               <ul className="space-y-4 border-t border-slate-800/50 pt-6">
413:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-indigo-500"/> Motor Control Centers</li>
414:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-indigo-500"/> Packaging Machinery</li>
415:               </ul>
416:             </div>
417: 
418:             {/* Industry 2 */}
419:             <div className="bg-slate-950 border border-slate-800 p-10 rounded-[2rem] hover:border-blue-500/50 transition-all duration-300 shadow-2xl group relative overflow-hidden">
420:               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full group-hover:bg-blue-500/10 transition-colors"></div>
421:               <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform"><Cpu size={32} /></div>
422:               <h4 className="text-2xl font-black mb-4 text-white relative z-10">Automation</h4>
423:               <p className="text-slate-400 leading-relaxed mb-8 relative z-10">Supplying precision limits and sensors required for complex PLC logic and robotic orchestration.</p>
424:               <ul className="space-y-4 border-t border-slate-800/50 pt-6">
425:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-blue-500"/> Proximity Sensors</li>
426:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-blue-500"/> Micro Switches</li>
427:               </ul>
428:             </div>
429: 
430:             {/* Industry 3 */}
431:             <div className="bg-slate-950 border border-slate-800 p-10 rounded-[2rem] hover:border-violet-500/50 transition-all duration-300 shadow-2xl group relative overflow-hidden">
432:               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-bl-full group-hover:bg-violet-500/10 transition-colors"></div>
433:               <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-violet-500 mb-8 group-hover:scale-110 transition-transform"><HardHat size={32} /></div>
434:               <h4 className="text-2xl font-black mb-4 text-white relative z-10">Construction</h4>
435:               <p className="text-slate-400 leading-relaxed mb-8 relative z-10">Heavy-duty switchgears and panels designed for temporary power distribution in harsh environments.</p>
436:               <ul className="space-y-4 border-t border-slate-800/50 pt-6">
437:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-violet-500"/> Crane Controls</li>
438:                 <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 size={18} className="text-violet-500"/> Site Panels</li>
439:               </ul>
440:             </div>
441:           </div>
442:         </div>
443:       </section>
444: 
445:       {/* PREMIUM BRANDS MARQUEE */}
446:       <section className="py-12 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 border-y border-indigo-700 overflow-hidden relative flex flex-col items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.2)]">
447:         <h3 className="text-black/80 font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-6 drop-shadow-sm">Authorized Partnerships</h3>
448:         <div className="flex w-[200%] animate-marquee">
449:           {[...brands, ...brands, ...brands].map((brand, idx) => (
450:             <div key={idx} className="flex-1 flex justify-center items-center px-8 sm:px-16">
451:               <span className="font-black text-3xl sm:text-4xl text-black/70 tracking-widest uppercase hover:text-black transition-all cursor-pointer filter drop-shadow-md hover:drop-shadow-xl hover:scale-110 duration-300">
452:                 {brand.logo}
453:               </span>
454:             </div>
455:           ))}
456:         </div>
457:       </section>
458: 
459:       {/* MASSIVE CTA SECTION */}
460:       <section className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
461:         {/* Background Gradients */}
462:         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.1)_0%,transparent_50%)]"></div>
463:         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.05)_0%,transparent_50%)]"></div>
464:         
465:         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
466:           <div className="bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-slate-800 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden">
467:             
468:             {/* Decorative inner pattern */}
469:             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
470:             
471:             <div className="lg:w-1/2 relative z-10">
472:               <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-6">
473:                 <h2 className="text-xs font-black text-indigo-500 uppercase tracking-widest">Partner With The Best</h2>
474:               </div>
475:               <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
476:                 Secure your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">supply chain.</span>
477:               </h3>
478:               <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
479:                 Contact AA Enterprises today for bulk requirement quotes. Experience authentic parts, unmatched B2B pricing, and zero-day logistics across India.
480:               </p>
481:               
482:               <div className="flex flex-col sm:flex-row gap-6">
483:                 <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl flex items-center gap-5 border border-slate-800 hover:border-indigo-500/50 transition-colors">
484:                    <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center text-slate-950 shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.4)]"><Phone size={24} className="animate-pulse" /></div>
485:                    <div>
486:                      <div className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Direct Hotlines</div>
487:                      <div className="font-black text-xl text-white tracking-wide">+91 9326183962</div>
488:                      <div className="font-black text-xl text-white tracking-wide">+91 9819495892</div>
489:                    </div>
490:                 </div>
491:               </div>
492:             </div>
493: 
494:             <div className="lg:w-1/2 w-full relative z-10">
495:               <div className="bg-slate-950 p-10 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
496:                 {/* Subtle top glow */}
497:                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
498:                 
499:                 <h3 className="text-3xl font-black text-white mb-2">Request Quote</h3>
500:                 <p className="text-slate-400 text-sm mb-8">Fill out the form below and our sales team will contact you within 2 hours.</p>
501:                 
502:                 <form className="space-y-5">
503:                   <div>
504:                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Company Name</label>
505:                     <input type="text" placeholder="e.g. Tata Motors" className="w-full px-6 py-4 bg-[#0a0a0a] border border-slate-800 rounded-xl text-white placeholder:text-slate-600 outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all" />
506:                   </div>
507:                   <div>
508:                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Phone Number</label>
509:                     <input type="tel" placeholder="+91 XXXX XXXXX" className="w-full px-6 py-4 bg-[#0a0a0a] border border-slate-800 rounded-xl text-white placeholder:text-slate-600 outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all" />
510:                   </div>
511:                   <button type="button" className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-slate-950 w-full py-5 font-black uppercase tracking-wider text-lg hover:from-indigo-400 hover:to-indigo-500 transition-all rounded-xl flex items-center justify-center gap-3 mt-4 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
512:                     Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
513:                   </button>
514:                 </form>
515:               </div>
516:             </div>
517: 
518:           </div>
519:         </div>
520:       </section>
521: 
522:     </div>
523:   );
524: }
525: 
The above content shows the entire, complete file contents of the requested file.
