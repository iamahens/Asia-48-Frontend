// File: src/components/WhatWeDo.jsx
import React from 'react';
import { GraduationCap, Briefcase, Plane, Home, Wallet, FileCheck } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    { icon: <GraduationCap />, title: 'Education Visas', description: 'Guidance for studying abroad' },
    { icon: <Briefcase />, title: 'Immigration Support', description: 'Step-by-step migration help' },
    { icon: <Plane />, title: 'Travel Assistance', description: 'Tourist visa info, dos & don\'ts' },
    { icon: <Home />, title: 'Accommodation Tips', description: 'How to settle in a new country' },
    { icon: <Wallet />, title: 'Cost Estimates & Comparison', description: 'Visa fees, living cost info' },
    { icon: <FileCheck />, title: 'Document Guidance', description: 'What you need, when you need it' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">What We Do</h2>
          <div className="mt-4 h-1 w-20 bg-[#032B66] mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to make your international journey as smooth and stress-free as possible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 border-t-4 border-transparent hover:border-[#032B66] transition-all duration-300 group"
            >
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full inline-block group-hover:bg-[#032B66] transition-colors duration-300">
                {/* Clone the icon to change its color on hover */}
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#032B66] group-hover:text-white transition-colors duration-300" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
