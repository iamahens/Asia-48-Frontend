// File: src/pages/Layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../services/AuthContext'; // Corrected the import path

const Layout = () => {
  const { isAuthenticated, logout } = useAuth(); // Get state and functions from context
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleLogout = () => {
    logout(); // Call the original logout function from the context
    navigate('/login'); // Redirect the user to the login page
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Pass the new handleLogout function to the Navbar */}
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main className="flex-grow">
        {/* The Outlet renders the current page's component */}
        <Outlet />
      </main>
      {/* Your Footer component would go here if you have one */}
    </div>
  );
};

export default Layout;
