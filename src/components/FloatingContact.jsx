import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href="https://wa.me/919326183962"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      
      <a
        href="tel:+919326183962"
        className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
}
