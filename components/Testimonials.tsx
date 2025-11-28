import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Jenkins",
    role: "Sales Director",
    company: "MedTech Solutions USA",
    content: "Since joining 1MDM, our export revenue has increased by 40%. The verification process gives buyers confidence, and the logistics support is a game-changer.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Dr. Ahmed Hassan",
    role: "CEO",
    company: "Cairo Medical Supplies",
    content: "The platform is incredibly user-friendly. We connected with hospital chains in Europe and Asia that we never could have reached on our own.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Export Manager",
    company: "BioCare Systems",
    content: "1MDM's escrow payment system removed the risk from international trade. We now ship with confidence knowing our payments are secured.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied suppliers who are growing their business with 1MDM.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-red-100" />
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-red/20"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-brand-red font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
