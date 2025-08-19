// File: src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from './ApiService';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // This useEffect syncs the apiClient header whenever the token changes.
  useEffect(() => {
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete apiClient.defaults.headers.common['Authorization'];
    }
    // We set loading to false after the initial check.
    setLoading(false);
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await apiClient.post('/auth/login', { username, password });
      const { token: newToken, ...userData } = response.data;

      // Store session data in localStorage
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(userData));

      // Update the application's state
      setToken(newToken);
      setUser(userData);
      setIsAuthenticated(true);

      return response;
    } catch (error) {
      // If login fails, make sure everything is cleared out
      logout();
      throw error;
    }
  };

  const logout = () => {
    // Clear session data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Reset the application's state
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  // The value provided to all child components
  const authContextValue = {
    token,
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  // Render children only after the initial loading is complete
  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for easy access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
