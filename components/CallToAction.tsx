import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-xl text-gray-300 mb-10">
          Join 5,000+ medical suppliers who trust 1MDM to power their global sales.
          Registration is free and takes less than 5 minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="primary">Create Seller Account</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">Contact Sales Team</Button>
        </div>
      </div>
    </section>
  );
};
