// File: src/components/WhoWeAre.jsx
import React from 'react';
import { Users, Globe } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-[#032B66]">
              <Users className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Who We Are</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Asia48 was started by a team of passionate travelers and consultants who wanted to solve the confusion and overwhelm around visa processes. We’ve built this platform to give you clarity, transparency, and peace of mind.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#032B66] p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-[#032B66]" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Our platform is your single source of truth for getting visa help for **48 Asian countries**, ensuring you are prepared and confident for your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1770&q=80" 
              alt="A passionate team of consultants working together"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
