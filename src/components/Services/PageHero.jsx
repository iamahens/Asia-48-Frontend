// File: src/components/PageHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumb, bgImage }) => {
  return (
    <section className="relative bg-[#032B66] text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#032B66] opacity-70"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {breadcrumb && (
          <div className="mt-6 bg-white/10 inline-block px-4 py-2 rounded-md text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&rarr;</span>
            <span>{breadcrumb}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
