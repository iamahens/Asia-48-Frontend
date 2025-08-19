// File: src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Asia48
        </Link>

        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <button onClick={onLogout} className="text-gray-700 hover:text-blue-600 font-semibold">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-semibold">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600 font-semibold">Register</Link>
            </>
          )}
          <Link to="/counselling" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get Free Counselling
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-semibold text-lg">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 p-6 flex flex-col items-center space-y-4">
            {isAuthenticated ? (
              <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 font-semibold text-lg">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-semibold text-lg">Login</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-semibold text-lg">Register</Link>
              </>
            )}
            <Link to="/counselling" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white w-full text-center px-5 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Get Free Counselling
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
