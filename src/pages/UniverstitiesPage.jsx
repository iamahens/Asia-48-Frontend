// File: src/pages/UniversitiesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/Services/PageHero';
import { getAllUniversities } from '../services/ApiService';
import { Filter, School, MapPin, DollarSign, Award } from 'lucide-react';

const UniversityCard = ({ university }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border overflow-hidden">
    <div className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{university.name}</h3>
          <p className="text-sm font-semibold text-gray-500 flex items-center mt-1"><MapPin className="w-4 h-4 mr-1.5" />{university.city}, {university.country}</p>
        </div>
        <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
            <School className="w-6 h-6 text-[#032B66]" />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t space-y-2 text-sm">
        <p className="flex items-center text-gray-600"><DollarSign className="w-4 h-4 mr-2 text-green-600" /> <strong>Tuition:</strong> ${university.tuitionFeeMin} - ${university.tuitionFeeMax}/year</p>
        <p className="flex items-center text-gray-600"><Award className="w-4 h-4 mr-2 text-yellow-600" /> <strong>Ranking:</strong> {university.ranking}</p>
      </div>
    </div>
    <div className="bg-gray-50 px-6 py-3">
        <a 
        href={university.websiteLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-semibold text-[#032B66] hover:underline"
       >
        View Details &rarr;
      </a>
    </div>
  </div>
);

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add state for filters later

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllUniversities();
        setUniversities(response.data);
        setFilteredUniversities(response.data);
      } catch (err) {
        console.error("Failed to fetch universities:", err);
        setError("Could not load universities. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  return (
    <div className="bg-gray-50">
      <PageHero 
        title="Course & University Explorer"
        subtitle="Find the perfect university and course for your study abroad journey."
        breadcrumb="Universities"
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1770&q=80"
      />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Filter Section (placeholder for now) */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
          <Filter className="w-6 h-6 text-gray-500" />
          <p className="font-semibold">Filter options coming soon...</p>
        </div>

        {/* University Cards */}
        {loading ? (
          <div className="text-center">Loading universities...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map(uni => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitiesPage;
