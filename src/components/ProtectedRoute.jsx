// File: src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // While we are checking the user's authentication status, show a loading message.
  // This prevents a "flash" of the login page for already logged-in users.
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div>Loading Application...</div>
      </div>
    );
  }

  // If the user is authenticated, render the child component (the Outlet).
  // Otherwise, redirect them to the login page.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
