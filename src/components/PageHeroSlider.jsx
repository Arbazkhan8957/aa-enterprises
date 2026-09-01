import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const bannerImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg"
];

export default function PageHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="relative w-full bg-black group flex justify-center">
      {/* 
        Using the natural aspect ratio of the images by setting an invisible spacer.
        Since the original images are very wide (3:1), this naturally makes the slider 
        FULL width and SHORT height, exactly as requested, without cropping ANYTHING.
      */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        {/* We use the first image with opacity-0 to force the container's height to naturally match the image's aspect ratio perfectly! */}
        <img src={bannerImages[0]} alt="Spacer" className="w-full h-auto opacity-0 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={bannerImages[currentSlide]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full object-contain"
            alt={`Banner ${currentSlide + 1}`}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#ff2a70] border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all z-20 opacity-100 sm:opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={24} className="hidden sm:block" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#ff2a70] border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all z-20 opacity-100 sm:opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={24} className="hidden sm:block" />
      </button>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${
              currentSlide === idx ? "w-6 sm:w-8 bg-[#ff2a70]" : "w-1.5 sm:w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
