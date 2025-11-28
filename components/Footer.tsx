import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-brand-red">1MDM</span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              The world's leading B2B marketplace for medical equipment and supplies. connecting manufacturers with verified buyers globally.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-red hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-3">
              {['About Us', 'Sell on 1MDM', 'Buy on 1MDM', 'Pricing', 'Success Stories', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety Center', 'Community Guidelines', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-500">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                <span>123 Medical Plaza, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>support@1mdm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 1MDM Worldwide. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Sitemap</a>
            <a href="#" className="hover:text-slate-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
