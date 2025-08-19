// File: src/components/AboutHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import abouthero from '../../assets/images/DestinationPage.jpg'; 

const AboutHero = () => {
  return (
    <section className="relative bg-[#032B66] text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url(${abouthero})` }}
      ></div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#032B66] opacity-70"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-40 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Explore Asian Countries by Visa Type</h1>
        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          Get simplified visa details, stay info & cost estimates for top Asian destinations
        </p>
        <div className="mt-6 bg-white/10 inline-block px-4 py-2 rounded-md">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">&rarr;</span>
          <span>Destination</span>
        </div>
      </div>

      {/* Wavy Divider Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,150L1320,150C1200,150,960,150,720,150C480,150,240,150,120,150L0,150Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
