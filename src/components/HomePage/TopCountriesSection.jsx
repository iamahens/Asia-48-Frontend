// File: src/components/TopCountriesSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import china from '../../assets/images/china.jpg';
import hongkong from '../../assets/images/hongkong.jpg';
import india from '../../assets/images/india.jpg';
import indonesia from '../../assets/images/Indonesia.jpg';
import japan from '../../assets/images/japan.jpg';
import malaysia from '../../assets/images/malaysia.jpg';
import skorea from '../../assets/images/s.korea.jpg';
import singapore from '../../assets/images/singapore.jpg';
import thailand from '../../assets/images/thailand.jpg';
import uae from '../../assets/images/UAE.jpg';
import vietnam from '../../assets/images/vietnam.jpg';


const topCountriesData = {
  Education: [
    { name: 'Japan', reason: 'MEXT Scholarships, tech and cultural education.', image: japan },
    { name: 'South Korea', reason: 'GKS Scholarships, global universities like SNU and KAIST.', image: skorea },
    { name: 'China', reason: 'CSC Scholarships, MBBS & Engineering programs.', image: china },
    { name: 'Singapore', reason: 'English-speaking, top global universities (NUS, NTU).', image: singapore },
  ],
  Immigration: [
    { name: 'Singapore', reason: 'High PR acceptance for skilled professionals.', image: singapore },
    { name: 'UAE', reason: 'Long-term visas, Golden Visa for entrepreneurs and investors.', image: uae },
    { name: 'Japan', reason: 'Pathway to PR after 5–10 years of work/study.', image: japan },
    { name: 'South Korea', reason: 'Offers F-2 and F-5 visas after years of residency or investment.', image: skorea },
  ],
  Vacation: [
    { name: 'Thailand', reason: 'Visa-friendly, affordable, rich culture and beaches.', image: thailand },
    { name: 'Indonesia (Bali)', reason: 'Visa-on-arrival, nature, yoga retreats, digital nomad haven.', image: indonesia },
    { name: 'Vietnam', reason: 'Budget travel, historical places, e-visa available.', image: vietnam },
    { name: 'Malaysia', reason: 'Visa-free for many countries, family-friendly, urban + nature mix.', image: malaysia },
  ],
  Business: [
    { name: 'Singapore', reason: 'Business hub, simple company registration, startup friendly.', image: singapore },
    { name: 'UAE (Dubai)', reason: 'Tax-free zones, business visa schemes, global HQs.', image: uae },
    { name: 'India', reason: 'Fastest-growing economy, startup ecosystem booming.', image: india },
    { name: 'Hong Kong', reason: 'Strategic gateway to China, excellent financial sector.', image: hongkong },
  ],
};

const TopCountriesSection = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = Object.keys(topCountriesData);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#032B66]">Best Countries for Your Goals</h2>
          <div className="mt-4 h-1 w-24 bg-[#032B66] mx-auto rounded"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 space-x-4 md:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold pb-2 transition-all duration-300 ${
                activeTab === tab
                  ? 'text-[#032B66] border-b-2 border-[#032B66]'
                  : 'text-gray-500 hover:text-[#032B66]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCountriesData[activeTab].map((country, index) => (
            <Link to={`/destinations/${country.name.toLowerCase().replace(/ \(.+\)/, '')}`} key={index} className="block group relative rounded-lg overflow-hidden shadow-lg h-96">
              <img 
                src={country.image} 
                alt={country.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold">{country.name}</h3>
                <p className="mt-1 text-sm opacity-90">{country.reason}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountriesSection;
