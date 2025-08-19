// File: src/components/VisaFinder.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries, getVisaDetails } from '/src/services/ApiService.jsx';
import { Search, Clock, DollarSign, Calendar, FileText, ShieldCheck, Wrench, FileWarning } from 'lucide-react';

const VisaFinder = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisaType, setSelectedVisaType] = useState('Education');
  const [visaResult, setVisaResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);

  const visaTypes = ['Education', 'Immigration', 'Travel', 'Business'];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getAllCountries();
        setCountries(response.data);
        if (response.data.length > 0) {
          setSelectedCountry(response.data[0].name); // Set a default country
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError("Could not load country list.");
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = async () => {
    if (selectedCountry && selectedVisaType) {
      setInitialLoad(false);
      setLoading(true);
      setError('');
      setVisaResult(null);
      try {
        const response = await getVisaDetails(selectedCountry, selectedVisaType);
        if (response.data && response.data.length > 0) {
          let result = response.data[0];
          
          const fullCountry = countries.find(c => c.name === selectedCountry);
          result.country = fullCountry;
          
          setVisaResult(result);
        } else {
          setError(`No specific visa details found for ${selectedCountry} - ${selectedVisaType}.`);
        }
      } catch (err) {
        console.error("Failed to fetch visa details:", err);
        setError(`An error occurred while fetching visa details.`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#032B66]">Find Your Visa</h2>
          <p className="mt-4 text-lg text-gray-600">Get detailed information for any visa in any country.</p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 bg-white rounded-lg shadow-lg items-center">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            <option value="" disabled>Select Country</option>
            {countries.map(country => <option key={country.id} value={country.name}>{country.name}</option>)}
          </select>
          <select
            value={selectedVisaType}
            onChange={(e) => setSelectedVisaType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            {visaTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <button
            onClick={handleSearch}
            disabled={!selectedCountry}
            className="w-full p-3 bg-[#032B66] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </div>

        <div className="min-h-[24rem] flex items-center justify-center">
          {initialLoad && <div className="text-lg text-gray-500">Select your options to begin.</div>}
          {loading && <div className="text-lg font-semibold">Loading Details...</div>}
          {error && !loading && <div className="text-lg text-red-500">{error}</div>}
          {visaResult && !loading && (
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8 transition-opacity duration-500 animate-fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img src={visaResult.country.flagUrl} alt={`${visaResult.country.name} flag`} className="w-12 h-auto mr-4 rounded-full shadow" />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{visaResult.country.name}</h3>
                    <p className="text-xl font-semibold text-[#032B66]">{visaResult.type} Visa</p>
                  </div>
                </div>
                <Link 
                  to={visaResult.country.pageUrl}
                  className="w-full sm:w-auto text-center bg-[#032B66] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
                >
                  View Full Guide
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">Key Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center"><DollarSign className="w-4 h-4 mr-2 text-[#032B66]" /> <strong>Fee:</strong> {visaResult.applicationFee}</p>
                    <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#032B66]" /> <strong>Processing Time:</strong> {visaResult.processingTime}</p>
                    <p className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#032B66]" /> <strong>Stay Duration:</strong> {visaResult.stayDuration}</p>
                    <p className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-[#032B66]" /> <strong>Validity:</strong> {visaResult.visaValidity}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">Eligibility Highlight</h4>
                  <p className="text-sm text-gray-600">{visaResult.eligibilityBrief}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">Services We Offer</h4>
                  <p className="text-sm text-gray-600">{visaResult.servicesOffered}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-700 mb-2">Required Docs</h4>
                  <p className="text-sm text-gray-600">{visaResult.requiredDocs}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisaFinder;
