// File: src/components/HowItWorks.jsx
import React from 'react';
import { FileText, CalendarCheck, FileStack, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: 'Choose Visa Type',
      description: 'Select your destination and the type of visa you need—student, work, or tourist.',
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-white" />,
      title: 'Get Checklist & Timeline',
      description: 'Receive a detailed, personalized checklist and an estimated timeline for your application.',
    },
    {
      icon: <FileStack className="h-10 w-10 text-white" />,
      title: 'Prepare Documents',
      description: 'Follow our expert guidance to gather and prepare all your required documents perfectly.',
    },
    {
      icon: <Send className="h-10 w-10 text-white" />,
      title: 'Apply with Confidence',
      description: 'Submit your application with the assurance that everything is in order for a smooth process.',
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">How It Works</h2>
          <div className="mt-4 h-1 w-24 bg-[#032B66] mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600">A simple, transparent process designed for your success.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative px-4">
              {/* The connecting line for desktop - uses pseudo-elements */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gray-300"></div>
              )}
              
              <div className="relative flex flex-col items-center">
                {/* The icon circle */}
                <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-[#032B66] rounded-full border-4 border-gray-100 transition-transform duration-300 hover:scale-110">
                  {step.icon}
                </div>
                {/* The connecting line for mobile */}
                {index < steps.length - 1 && <div className="md:hidden mt-4 h-16 w-0.5 bg-gray-300"></div>}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
