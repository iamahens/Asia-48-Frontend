// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Import the same scrolling background image
import scrollingBgImage from '../../assets/images/moving-img.png'; 

const Footer = () => {
  // Reusing the animation style from the CtaSection
  const animationStyle = `
    @keyframes scrollBackground {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .scrolling-bg-footer {
      background-image: url(${scrollingBgImage});
      animation: scrollBackground 120s linear infinite alternate;
    }
  `;

  const recentProjects = [
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1547893261-77e69c849a64?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1563492065599-3520f775ee05?auto=format&fit=crop&w=300&q=80',
  ];

  return (
    <>
      <style>{animationStyle}</style>
      <footer className="relative bg-[#032B66] text-gray-300 overflow-hidden">
        {/* Scrolling Background Image */}
        <div className="scrolling-bg-footer absolute top-0 left-0 w-full h-full z-0 bg-cover opacity-10"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Asia48</h3>
              <p className="text-gray-400">
                Your trusted partner for seamless visa processing and relocation guidance. We simplify the complexities so you can focus on your journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-white" /> +1 (123) 456-7890</li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-white" /> info@asia48.com</li>
                <li className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-white" /> 123 Visa Lane, Global City</li>
              </ul>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
              </div>
            </div>

            {/* Column 2: Explore */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-3">
                <li><Link to="/visa-guidance/student" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Student Visas</Link></li>
                <li><Link to="/visa-guidance/work" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Work Visas</Link></li>
                <li><Link to="/visa-guidance/tourist" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Tourist Visas</Link></li>
                <li><Link to="/visa-guidance/pr" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Immigration</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-white hover:pl-2 transition-all">All Destinations</Link></li>
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Our Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Contact Us</Link></li>
                <li><Link to="/faqs" className="text-gray-400 hover:text-white hover:pl-2 transition-all">FAQs</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white hover:pl-2 transition-all">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Featured Destinations */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Featured Destinations</h4>
              <div className="grid grid-cols-2 gap-3">
                {recentProjects.map((img, index) => (
                  <Link to="/destinations" key={index} className="block overflow-hidden rounded-md">
                    <img src={img} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Asia48. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
