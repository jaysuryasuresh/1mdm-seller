import React from 'react';
import { UserPlus, PackagePlus, ShoppingBag, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-white" />,
    title: "Register Your Account",
    description: "Sign up for free and complete your company profile verification."
  },
  {
    icon: <PackagePlus className="w-8 h-8 text-white" />,
    title: "List Products",
    description: "Upload your medical catalog with photos, specs, and pricing."
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "Receive Orders",
    description: "Get inquiries and orders from verified buyers worldwide."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-white" />,
    title: "Ship & Get Paid",
    description: "Fulfill the order and receive payment securely to your bank."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Get started in 4 simple steps</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center shadow-lg mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
