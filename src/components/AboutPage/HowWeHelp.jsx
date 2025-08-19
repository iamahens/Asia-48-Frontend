// File: src/components/HowWeHelp.jsx
import React from 'react';
import { Target, Map, ListChecks, Users, FileUp, CheckCircle } from 'lucide-react';

const HowWeHelp = () => {
  const steps = [
    { icon: <Target className="h-10 w-10 text-[#032B66]" />, title: 'Select Your Purpose', description: 'Choose from study, migrate, travel, or business.' },
    { icon: <Map className="h-10 w-10 text-[#032B66]" />, title: 'Choose a Country', description: 'Explore our detailed guides for over 48 destinations.' },
    { icon: <ListChecks className="h-10 w-10 text-[#032B66]" />, title: 'Get a Step-by-Step Guide', description: 'Receive a clear, actionable plan for your visa.' },
    { icon: <Users className="h-10 w-10 text-[#032B66]" />, title: 'Connect with Experts', description: 'Get personalized advice from our experienced team (Coming Soon).' },
    { icon: <FileUp className="h-10 w-10 text-[#032B66]" />, title: 'Prepare Documents', description: 'Use our support to gather and verify your paperwork.' },
    { icon: <CheckCircle className="h-10 w-10 text-[#032B66]" />, title: 'Settle Confidently', description: 'Receive regular updates and tips for your new life abroad.' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">How We Help You</h2>
          <div className="mt-4 h-1 w-20 bg-[#032B66] mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We've streamlined the entire process into a few simple steps to ensure you have a clear path to your destination.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <div className="bg-blue-100 p-4 rounded-full inline-block">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
