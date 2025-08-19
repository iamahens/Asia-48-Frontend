// File: src/pages/PlannerPage.jsx
import React, { useState, useEffect } from 'react';
import PageHero from '../components/Services/PageHero';
import { getAllCountries, getPlannerTasks } from '../services/ApiService';
import { Calendar, CheckSquare, Download } from 'lucide-react';

const PlannerPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Postgraduate');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const courseLevels = ['Undergraduate', 'Postgraduate', 'PhD', 'Diploma'];

  // Fetch the list of all countries for the dropdown
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getAllCountries();
        setCountries(response.data);
        if (response.data.length > 0) {
          setSelectedCountry(response.data[0].name); // Set a default
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };
    fetchCountries();
  }, []);

  const handleGeneratePlan = async () => {
    if (!selectedCountry || !selectedLevel) return;
    setLoading(true);
    setError(null);
    try {
      const response = await getPlannerTasks(selectedCountry, selectedLevel);
      setTasks(response.data);
    } catch (err) {
      console.error("Failed to generate plan:", err);
      setError("Could not generate the plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <PageHero 
        title="Study Abroad Planner"
        subtitle="Generate a personalized timeline and checklist for your journey."
        breadcrumb="Planner"
        bgImage="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1770&q=80"
      />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            <option value="" disabled>Select Country</option>
            {countries.map(country => <option key={country.id} value={country.name}>{country.name}</option>)}
          </select>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            {courseLevels.map(level => <option key={level} value={level}>{level}</option>)}
          </select>
          <button
            onClick={handleGeneratePlan}
            className="w-full p-3 bg-[#032B66] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-colors"
          >
            Generate Plan
          </button>
        </div>

        {/* Timeline Display */}
        <div className="mt-12 max-w-4xl mx-auto">
          {loading && <div className="text-center">Generating your plan...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {tasks.length > 0 && !loading && (
            <div className="space-y-8">
              {tasks.map(task => (
                <div key={task.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="bg-[#032B66] text-white rounded-lg px-3 py-1 font-bold">
                      {task.timelineMonths}
                    </div>
                    <p className="text-xs text-gray-500">Months Before</p>
                  </div>
                  <div className="flex-grow bg-white p-4 rounded-lg shadow-md border-l-4 border-[#032B66]">
                    <p className="font-semibold text-gray-800">{task.taskDescription}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-2 inline-block ${
                      task.category === 'Country-Specific' ? 'bg-green-100 text-green-800' : 
                      task.category === 'Course-Level' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {task.category}
                    </span>
                  </div>
                </div>
              ))}
              <div className="text-center mt-8">
                <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download Plan (PDF)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlannerPage;
