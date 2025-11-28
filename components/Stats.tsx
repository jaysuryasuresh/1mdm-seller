import React from 'react';

const stats = [
  { value: '26,000+', label: 'Active Buyers' },
  { value: '100+', label: 'Countries Served' },
  { value: '$500M+', label: 'Yearly Volume' },
  { value: '24/7', label: 'Support Team' },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-slate-400 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
