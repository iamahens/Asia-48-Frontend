// File: src/components/MissionSection.jsx
import React from 'react';
import { FileText, Wallet, Backpack, MapPin, ListChecks } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: 'All-in-One Visa Guide',
      description: 'Tourist, student, work, PR — whatever your path, we’ve mapped it clearly.',
    },
    {
      icon: <Wallet className="h-8 w-8 text-white" />,
      title: 'Transparent Cost Breakdown',
      description: 'From embassy charges to unexpected living expenses — know it all, before you go.',
    },
    {
      icon: <Backpack className="h-8 w-8 text-white" />,
      title: 'Relocation & Survival Tips',
      description: 'From finding affordable housing to public transport and local do’s & don’ts.',
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: 'Country-Specific Insights',
      description: 'Get tailored visa and lifestyle info for over 48 destinations in Asia and beyond.',
    },
    
  ];

  return (
    <section className="bg-gray-100 pt-28 pb-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">Your Visa Guide. Your Relocation Partner.</h2>
          {/* Decorative Underline */}
          <div className="mt-4 h-1 w-24 bg-[#032B66] mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600">Making Visa & Relocation Hassle-Free — One Country at a Time.</p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Section with Hover Effect */}
          <div className="mb-8 h-[550px] lg:mb-0 rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1770&q=80" 
              alt="Students collaborating" 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Asia48, our mission is to break down complex visa procedures and make international relocation seamless. Whether you're a student, professional, or traveler — we guide you through every document, requirement, cost, and real-life challenge of settling abroad.
              </p>
            </div>

            {/* Value Cards with Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex-shrink-0 bg-[#032B66] p-3 rounded-full">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
