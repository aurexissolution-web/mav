import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, ShoppingBag, ShoppingCart, ExternalLink, Facebook, Instagram, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const shopeeLink = "https://shopee.com.my/mavsss33?entryPoint=ShopBySearch&searchKeyword=veerappan";
  const lazadaLink = "https://s.lazada.com.my/s.GDdC9?dsource=share&laz_share_info=2355118494_103_1600_0_2355120494_null&laz_token=354ad6ed4ab37e4190b0e2fa2b4d9204";
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/p/MAVeerappan-Auto-Store-100057058075799/', icon: Facebook },
    { name: 'TikTok', href: 'https://www.tiktok.com/@mav.veerappan', icon: Music2 },
    { name: 'Instagram', href: 'https://www.tiktok.com/@mav.veerappan', icon: Instagram },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-light">M.A. Veerappan Auto</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing trusted auto spare parts and professional services since 1983. Quality, reliability, and customer satisfaction are our top priorities.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">Shop & Warehouse</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-light">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="flex-shrink-0 mt-1 w-4 h-4 text-brand-blue" />
                <span>No. 34, Jalan Sekerat, 08000 Sungai Petani, Kedah Darul Aman, Malaysia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="flex-shrink-0 w-4 h-4 text-brand-blue" />
                <a href="tel:044212448" className="hover:text-white transition-colors">04-4212448</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <MessageCircle className="flex-shrink-0 w-4 h-4 text-brand-blue" />
                <a href="https://wa.me/60164392448" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+60 16-439 2448</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="flex-shrink-0 w-4 h-4 text-brand-blue" />
                <a href="mailto:mavsss33@gmail.com" className="hover:text-white transition-colors">mavsss33@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Online Stores */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-light">Shop Online</h3>
            <div className="space-y-3">
              <a href={shopeeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg group hover:bg-orange-600 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="text-orange-500 group-hover:text-white transition-colors w-5 h-5" />
                  <span className="text-sm font-medium">Shopee Store</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
              </a>
              <a href={lazadaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg group hover:bg-blue-600 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="text-blue-500 group-hover:text-white transition-colors w-5 h-5" />
                  <span className="text-sm font-medium">Lazada Store</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} M.A. Veerappan Auto Sdn Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
