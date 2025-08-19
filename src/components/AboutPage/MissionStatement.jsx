// File: src/components/MissionStatement.jsx
import React from 'react';
import { Target } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-last lg:order-first">
            <img 
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1770&q=80" 
              alt="A person planning a journey on a map"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-[#032B66]">
              <Target className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To simplify and streamline visa processes for education, work, immigration, and business across Asia and the world. We guide you every step of the way – from choosing the right country to settling abroad with confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">From student dreams to business ambitions – we make global relocation easy, transparent, and affordable.</p>
            <div className="pt-4">
                <a href="/services" className="inline-block bg-[#032B66] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors transform hover:scale-105">
                    How We Help
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
