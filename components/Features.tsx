import React from 'react';
import { Globe2, ShieldCheck, BarChart3, Truck, Users, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-brand-red" />,
    title: "Global Reach",
    description: "Expand your medical business to over 100+ countries instantly. Connect with international hospital chains."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    title: "Verified Buyers",
    description: "Deal with confidence. All buyers on 1MDM are verified for authenticity and creditworthiness."
  },
  {
    icon: <Wallet className="w-8 h-8 text-brand-red" />,
    title: "Secure Payments",
    description: "Our escrow payment system ensures you get paid on time, every time. No risk of bad debts."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-red" />,
    title: "Smart Analytics",
    description: "Get detailed insights into your store performance, visitor demographics, and trending products."
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-red" />,
    title: "Logistics Support",
    description: "Integrated shipping solutions with discounted rates from top global carriers like DHL and FedEx."
  },
  {
    icon: <Users className="w-8 h-8 text-brand-red" />,
    title: "Dedicated Account Manager",
    description: "Get a dedicated expert to help you optimize your listings and boost your sales strategy."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Sell on 1MDM?</h2>
          <p className="text-lg text-gray-600">
            We provide the tools, security, and audience you need to scale your B2B medical supply business exponentially.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
