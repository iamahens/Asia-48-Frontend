// File: src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

// Import your local background image
import heroBgImage from '../../assets/images/asia-banner.png';
// Import your local person image (assuming it's named student-image.png)
import studentImage from '../../assets/images/student-image.png';

const HeroSection = () => {
  // State to control the slide-in animation
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // A small delay to ensure the transition is visible
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-primary-dark overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center " 
        style={{ backgroundImage: `url(${heroBgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="lg:w-1/2 text-white relative z-20">
            {/* Animated Text Block */}
            <div className={`space-y-6 transition-all duration-1000 transform ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="flex items-center space-x-3">
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
                <Star className="text-yellow-400" fill="currentColor" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Unlock Your Future in Asia
              </h1>
              <p className="text-lg md:text-xl opacity-80 max-w-lg">
                Your trusted partner for seamless visa processing. We simplify the complexities of student, work, and tourist visas, so you can focus on your journey.
              </p>
              <div>
                <Link 
                  to="/services" 
                  className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-colors transform hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* Person Image Section */}
          <div className={`hidden lg:flex absolute bottom-0 right-0 lg:w-1/2 items-end justify-center h-screen z-0 transition-all duration-1000 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <img 
                src={studentImage} // Use the imported image variable here
                alt="Happy student ready for their journey in Asia" 
                className="object-contain h-[85%]"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/FFFFFF/000000?text=Student'; }}
             />
          </div>
        </div>
      </div>
      
      {/* Wavy Divider Shape - Reduced Height */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,150L1320,150C1200,150,960,150,720,150C480,150,240,150,120,150L0,150Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
