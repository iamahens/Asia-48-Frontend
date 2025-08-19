// File: src/pages/ScholarshipsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/Services/PageHero';
import { getAllScholarships } from '../services/ApiService';
import { Award, Globe, Filter } from 'lucide-react';

const ScholarshipCard = ({ scholarship }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-[#032B66]">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
        <Award className="w-6 h-6 text-[#032B66]" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{scholarship.scholarshipName}</h3>
        <p className="text-sm font-semibold text-gray-500 flex items-center"><Globe className="w-4 h-4 mr-1.5" />{scholarship.country}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-2"><strong className="font-semibold">Funding:</strong> {scholarship.funding}</p>
    <p className="text-gray-600 mb-4"><strong className="font-semibold">Eligibility:</strong> {scholarship.eligibility}</p>
    <a 
      href={scholarship.applicationLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block w-full text-center bg-[#032B66] text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
    >
      Apply Now
    </a>
  </div>
);

const ScholarshipsPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllScholarships();
        setScholarships(response.data);
        setFilteredScholarships(response.data);
        // Get unique country names for the filter dropdown
        const uniqueCountries = [...new Set(response.data.map(item => item.country))];
        setCountries(['All', ...uniqueCountries]);
      } catch (err) {
        console.error("Failed to fetch scholarships:", err);
        setError("Could not load scholarships. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchScholarships();
  }, []);

  useEffect(() => {
    if (selectedCountry === 'All') {
      setFilteredScholarships(scholarships);
    } else {
      setFilteredScholarships(scholarships.filter(s => s.country === selectedCountry));
    }
  }, [selectedCountry, scholarships]);

  return (
    <div className="bg-gray-50">
      <PageHero 
        title="Scholarships & Funding"
        subtitle="Discover and apply for scholarships to fund your study abroad journey."
        breadcrumb="Scholarships"
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1770&q=80"
      />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
          <Filter className="w-6 h-6 text-gray-500" />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            {countries.map(country => <option key={country} value={country}>{country}</option>)}
          </select>
        </div>

        {/* Scholarship Cards */}
        {loading ? (
          <div className="text-center">Loading scholarships...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map(scholarship => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipsPage;
