import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Shop & Warehouse', path: '/shop' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/60124107554";

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white/95 backdrop-blur-sm py-2'}`}>
      <div className="container mx-auto px-3 md:px-5 flex items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center flex-1 min-w-0">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 text-brand-navy font-bold text-lg md:text-xl lg:text-2xl leading-tight hover:text-brand-blue transition-colors"
          >
            <Logo className="w-14 h-14 md:w-18 md:h-18 shrink-0" />
            <span>
              M.A. Veerappan <span className="text-brand-blue font-extrabold">Auto</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors hover:text-brand-blue ${isActive ? 'text-brand-blue' : 'text-brand-navy'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-all hover:shadow-md"
          >
            Get Parts Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-slate-700 hover:text-brand-blue focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `block text-base font-medium py-2 border-b border-gray-50 ${isActive ? 'text-brand-blue' : 'text-slate-600'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-2">
             <a 
               href={whatsappLink} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex justify-center items-center w-full bg-brand-blue hover:bg-blue-700 text-white px-4 py-3 rounded-full text-base font-bold shadow-sm transition-all"
             >
                Get Parts Now
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;