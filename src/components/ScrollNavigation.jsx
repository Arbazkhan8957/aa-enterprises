import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollNavigation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          className="fixed left-4 bottom-24 sm:left-6 sm:bottom-6 z-[100] flex flex-col gap-3"
        >
          <button
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-gray-800 rounded-full shadow-premium border border-gray-100 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} />
          </button>
          <button
            onClick={scrollToBottom}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-gray-800 rounded-full shadow-premium border border-gray-100 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors hover:scale-105 active:scale-95"
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
