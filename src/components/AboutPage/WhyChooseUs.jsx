// File: src/components/WhatWeDo.jsx
// Renamed conceptually to "Why Choose Us"
import React from 'react';
import { CheckSquare, UserCheck, Scale, LayoutGrid } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckSquare className="w-10 h-10 text-white" />,
      title: 'Verified Visa Info',
      description: 'Accurate, up-to-date information you can trust for every country.'
    },
    {
      icon: <UserCheck className="w-10 h-10 text-white" />,
      title: 'Personalized Assistance',
      description: 'Tailored guidance to match your specific visa and relocation needs.'
    },
    {
      icon: <Scale className="w-10 h-10 text-white" />,
      title: 'Transparent Comparisons',
      description: 'Easily compare fees, processing times, and requirements side-by-side.'
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-white" />,
      title: 'One Platform, All Purposes',
      description: 'Whether for study, work, or travel, find everything you need in one place.'
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">Why Choose Asia48?</h2>
          <div className="mt-4 h-1 w-20 bg-[#032B66] mx-auto rounded"></div>
        </div>

        {/* Features Container */}
        <div className="relative bg-[#032B66] text-white p-12 rounded-2xl shadow-2xl overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '25px 25px' }}></div>
          
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="text-center p-6 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
