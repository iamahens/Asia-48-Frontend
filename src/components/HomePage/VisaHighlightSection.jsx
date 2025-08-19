// File: src/components/VisaHighlightSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedCountries, getVisaHighlight } from '/src/services/ApiService.jsx';
import { Clock, DollarSign, Calendar, MapPin, Languages, Coins, Search } from 'lucide-react';

const VisaHighlightSection = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisaType, setSelectedVisaType] = useState('Education');
  const [highlightData, setHighlightData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [countriesLoading, setCountriesLoading] = useState(true);

  const visaTypes = ['Education', 'Immigration', 'Travel', 'Business'];

  // Fetch the list of featured countries only once when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      setCountriesLoading(true);
      try {
        const response = await getFeaturedCountries();
        setCountries(response.data);
        if (response.data.length > 0) {
          setSelectedCountry(response.data[0]); // Set a default country
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError("Could not load country list. Please ensure the backend is running and the API is accessible.");
      } finally {
        setCountriesLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // This function is now triggered by the button click
  const handleSearch = () => {
    if (selectedCountry && selectedVisaType) {
      setInitialLoad(false); // We have performed the first search
      setLoading(true);
      setError('');
      setHighlightData(null);
      
      // Simulate a short delay for a better user experience
      setTimeout(async () => {
        try {
          const response = await getVisaHighlight(selectedCountry, selectedVisaType);
          setHighlightData(response.data);
        } catch (err) {
          console.error("Failed to fetch highlight data:", err);
          setError(`No visa highlight found for  ${selectedCountry} - ${selectedVisaType}check the Destination page for more info ` );
        } finally {
          setLoading(false);
        }
      }, 500);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#032B66]">Explore Country Visa Highlights</h2>
          <div className="mt-4 h-1 w-24 bg-[#032B66] mx-auto rounded"></div>
        </div>

        {/* Filter & Search Section */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 bg-gray-50 rounded-lg shadow-inner items-center">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            disabled={countriesLoading || countries.length === 0}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#032B66] disabled:bg-gray-200"
          >
            <option value="" disabled>{countriesLoading ? "Loading..." : "Select a Country"}</option>
            {countries.map(country => <option key={country} value={country}>{country}</option>)}
          </select>
          <select
            value={selectedVisaType}
            onChange={(e) => setSelectedVisaType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#032B66]"
          >
            {visaTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <button
            onClick={handleSearch}
            disabled={countriesLoading || !selectedCountry}
            className="w-full p-3 bg-[#032B66] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 mr-2" />
            Find Visa
          </button>
        </div>

        {/* Highlight Card Display Area */}
        <div className="min-h-[32rem] flex items-center justify-center">
          {initialLoad && <div className="text-lg text-gray-500">Please select your options and click "Find Visa".</div>}
          {loading && <div className="text-lg font-semibold">Searching...</div>}
          {error && !loading && <div className="text-lg text-red-500">{error}</div>}
          {highlightData && !loading && (
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl border grid grid-cols-1 md:grid-cols-3 overflow-hidden transition-all duration-500 animate-fade-in">
              <div className="md:col-span-2 p-8">
                <div className="flex items-center mb-4">
                  <img src={highlightData.flagUrl} alt={`${highlightData.countryName} flag`} className="w-10 h-auto mr-4 rounded-full shadow" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{highlightData.countryName}</h3>
                    <p className="text-md font-semibold text-[#032B66]">{highlightData.visaType} Visa</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-[#032B66]" /> <strong>Validity:</strong> {highlightData.visaValidity}</div>
                  <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#032B66]" /> <strong>Processing:</strong> {highlightData.processingTime}</div>
                  <div className="flex items-center"><strong>Stay:</strong> {highlightData.stayDuration}</div>
                  <div className="flex items-center"><DollarSign className="w-5 h-5 mr-2 text-[#032B66]" /> <strong>Fee:</strong> {highlightData.fee}</div>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">Eligibility Brief</h4>
                  <p className="text-gray-600">{highlightData.eligibilityBrief}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 mb-2">Services We Offer</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {highlightData.servicesOffered.split(',').map(service => <li key={service}>{service.trim()}</li>)}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-8 border-l">
                <h4 className="font-bold text-gray-700 mb-4 text-center">Quick Facts</h4>
                <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-[#032B66]" /> <strong>Country:</strong> {highlightData.countryName}</div>
                    <div className="flex items-center"><Coins className="w-5 h-5 mr-3 text-[#032B66]" /> <strong>Currency:</strong> {highlightData.currency}</div>
                    <div className="flex items-center"><Languages className="w-5 h-5 mr-3 text-[#032B66]" /> <strong>Language:</strong> {highlightData.language}</div>
                </div>
                <div className="mt-8 group relative">
                    <button className="w-full text-center font-semibold text-[#032B66]">
                        Required Docs
                    </button>
                    <div className="absolute bottom-full mb-2 w-64 p-4 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {highlightData.requiredDocs}
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisaHighlightSection;
