// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext'; // Corrected the import path
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CounsellingPage from './pages/CounsellingPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import CountryDetailPage from './pages/CountryDetailPage';
import BlogPostPage from './pages/BlogPostPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import UniversitiesPage from './pages/UniverstitiesPage';
import PlannerPage from './pages/PlannerPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* === Public Routes === */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* === Protected Routes === */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="destinations" element={<DestinationsPage />} />
              <Route path="destinations/:countryName" element={<CountryDetailPage />} />
              <Route path="blogs" element={<BlogPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="counselling" element={<CounsellingPage />} />
               <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="scholarships" element={<ScholarshipsPage />} />
                  <Route path="universities" element={<UniversitiesPage />} />
                  <Route path="planner" element={<PlannerPage />} />
              
              
            </Route>
          </Route>

          {/* === Not Found Route === */}
          {/* This will now catch any route that doesn't match the ones above */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
