import React from 'react';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const benefits = [
    "Access to 26,000+ verified buyers",
    "0% Commission on first 3 months",
    "Global logistics support"
  ];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-slate-50 to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-brand-red font-semibold text-sm mb-4">
                #1 B2B Medical Marketplace
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Grow Your Medical Business <span className="text-brand-red">Globally</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                Connect with thousands of hospitals, pharmacies, and distributors worldwide. 
                The most trusted platform for medical equipment manufacturers and suppliers.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">Start Selling Today</Button>
              <Button size="lg" variant="outline">Schedule Demo</Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              *No credit card required for registration.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.01] duration-500">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Medical Professional using Tablet" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 max-w-xs animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Monthly Growth</p>
                  <p className="text-xl font-bold text-slate-900">+128% Sales</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
