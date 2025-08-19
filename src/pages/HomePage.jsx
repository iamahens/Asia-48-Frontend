// File: src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import MissionSection from '../components/HomePage/MissionSection';
import VisaCategories from '../components/HomePage/VisaCategories';
import HowItWorks from '../components/HomePage/HowItWorks';
import TopCountriesSection from '../components/HomePage/TopCountriesSection';
import VisaHighlightSection from '../components/HomePage/VisaHighlightSection';
import VisaComparisonSection from '../components/HomePage/VisaComparisonSection';
import Map from '../components/HomePage/Map';
import CtaSection from '../components/HomePage/CtaSection';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
 <>
 <HeroSection/>
 <MissionSection/>
 <VisaCategories/>
 <HowItWorks/>
 <TopCountriesSection/>
 <VisaHighlightSection/>
 <CtaSection/>
 <VisaComparisonSection/>
 <Map/>
 <Footer/>
 </>
  );
};

export default HomePage;

