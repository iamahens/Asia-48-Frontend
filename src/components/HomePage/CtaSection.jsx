// File: src/components/CtaSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local assets
import personImage from '../../assets/images/student-image.png'; // Make sure you have an image at this path
// IMPORTANT: Add a wide, panoramic image for the background effect at this path
import scrollingBgImage from '../../assets/images/moving-img.png'; 

const CtaSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // This triggers the animation after the component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const featuredCountries = [
    { name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    { name: 'South Korea', flag: 'https://flagcdn.com/kr.svg' },
    { name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
    { name: 'UAE', flag: 'https://flagcdn.com/ae.svg' },
  ];

  // Custom CSS for the scrolling background animation
  const animationStyle = `
    @keyframes scrollBackground {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .scrolling-bg {
      background-image: url(${scrollingBgImage});
      animation: scrollBackground 25s linear infinite alternate;
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <section className="relative bg-[#032B66] text-white overflow-hidden pt-20">
        {/* Scrolling Background Image */}
        <div className="scrolling-bg absolute top-0 left-0 w-full h-full z-0 bg-cover"></div>
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#032B66] opacity-80 z-10"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content with Transition */}
            <div className={`space-y-6 transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Looking for Quality Education Abroad?
              </h2>
              <p className="opacity-80">
                We guide you through every step of the process, from choosing the right university to securing your student visa. Let us help you turn your academic dreams into reality.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {featuredCountries.map(country => (
                  <div key={country.name} className="flex items-center space-x-2">
                    <img src={country.flag} alt={`${country.name} flag`} className="w-8 h-auto rounded-full" />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-[#032B66] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-colors transform hover:scale-105">
                  Get a Free Consultation
                </Link>
              </div>
            </div>

            {/* Person Image with Transition */}
            <div className={`relative h-[28rem] md:h-[32rem] transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img 
                src={personImage} 
                alt="Consultant" 
                className="absolute bottom-0 right-0 w-auto h-full max-w-none"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/FFFFFF/000000?text=Consultant'; }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Wavy Shape - Updated to match Hero Section style */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f6" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
