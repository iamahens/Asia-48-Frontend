// File: src/pages/ServicesPage.jsx
import React from 'react';
import PageHero from '../components/Services/PageHero';
import MainFeatures from '../components/Services/MainFeatures';
import Footer from '../components/HomePage/Footer';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <PageHero 
        title="Our Services"
        subtitle="Everything You Need to Plan Your Study Abroad Journey. Our platform provides complete guidance — from visa types to scholarships — all in one place."
        breadcrumb="Services"
        bgImage="https://images.unsplash.com/photo-1519671482727-a4d61a1c12de?auto=format&fit=crop&w=1770&q=80"
      />
      
      {/* Placeholder for the Main Features section we will build next */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Main Features Coming Soon</h2>
        </div>
      </section>
      <MainFeatures/>
      <Footer/>
    </div>
  );
};

export default ServicesPage;
