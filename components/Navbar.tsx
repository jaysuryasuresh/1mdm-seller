import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail, Phone, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Our Story', href: '#' },
    { label: 'Sell on 1MDM', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar - Hidden on scroll to save space, or keep if preferred. Keeping it for specific request. */}
      <div className={`bg-brand-dark text-white py-2 px-4 transition-all duration-300 ${isScrolled ? '-translate-y-full absolute w-full' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:support@1mdm.com" className="flex items-center hover:text-brand-red transition-colors">
              <Mail className="w-3 h-3 mr-2" />
              support@1mdm.com
            </a>
            <span className="hidden sm:flex items-center">
              <Phone className="w-3 h-3 mr-2" />
              +1 (800) 123-4567
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-brand-red transition-colors">Help Center</a>
            <span className="text-gray-600">|</span>
            <div className="flex items-center cursor-pointer hover:text-brand-red transition-colors">
              <Globe className="w-3 h-3 mr-1" />
              English
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3 mt-0' : 'bg-white border-b border-gray-100 py-4 mt-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-3xl font-bold text-brand-red tracking-tighter">1MDM</span>
              <span className="ml-2 text-xs text-gray-500 font-medium hidden sm:block border-l border-gray-300 pl-2">
                Global Medical Marketplace
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-600 hover:text-brand-red font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-brand-red font-medium text-sm flex items-center">
                <User className="w-4 h-4 mr-1" />
                Login
              </a>
              <Button size="sm">Register Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-red focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-red">Login</a>
                <div className="mt-2">
                  <Button className="w-full justify-center">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
