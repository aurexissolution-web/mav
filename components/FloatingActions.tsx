import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const whatsappLink = "https://wa.me/60124107554";

  return (
    <div className="fixed z-50 flex flex-row gap-3 md:flex-col bottom-4 right-4 md:bottom-8 md:right-8 items-end justify-end pointer-events-none">
      
      {/* Container for buttons to enable pointer events only on buttons */}
      <div className="flex flex-row md:flex-col gap-3 pointer-events-auto">
        
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="text-white w-7 h-7" />
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            WhatsApp Us
          </span>
        </a>

      </div>
    </div>
  );
};

export default FloatingActions;