// File: src/pages/CountryDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByName } from '../services/ApiService';
import { Clock, DollarSign, Calendar, ShieldCheck, Utensils, Map, CheckCircle, HelpCircle, Wrench, AlertTriangle, FileText, Banknote, UserCheck } from 'lucide-react';

const CountryDetailPage = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVisaTab, setActiveVisaTab] = useState('');

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);
      try {
        const formattedCountryName = countryName.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const response = await getCountryByName(formattedCountryName);
        setCountryData(response.data);
        
        if (response.data && response.data.visas.length > 0) {
          setActiveVisaTab(response.data.visas[0].type);
        }
      } catch (err) {
        console.error("Failed to fetch country data:", err);
        setError("Could not find the requested country.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="text-xl font-semibold">Loading country details...</div></div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500 text-xl">{error}</div>;
  }

  if (!countryData) {
    return <div className="text-center py-20">No data available for this country.</div>;
  }
  
  const activeVisa = countryData.visas.find(visa => visa.type === activeVisaTab);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#032B66] text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${countryData.flagUrl})`}}></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <img src={countryData.flagUrl} alt={`${countryData.name} flag`} className="w-24 h-auto mx-auto mb-4 rounded-full shadow-lg border-4 border-white" />
          <h1 className="text-5xl font-bold">{countryData.name}</h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">{countryData.countryOverview}</p>
        </div>
      </section>

      {/* Visa Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Visa Type Tabs */}
          <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
            {countryData.visas.map(visa => (
              <button
                key={visa.type}
                onClick={() => setActiveVisaTab(visa.type)}
                className={`px-4 sm:px-6 py-3 font-semibold transition-all duration-300 -mb-px text-sm sm:text-base ${
                  activeVisaTab === visa.type
                    ? 'text-[#032B66] border-b-2 border-[#032B66]'
                    : 'text-gray-500 hover:text-[#032B66]'
                }`}
              >
                {visa.type} Visa
              </button>
            ))}
          </div>

          {/* Active Visa Content */}
          {activeVisa && (
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{countryData.name} - {activeVisa.type} Visa</h2>
              
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Main Content (Left) */}
                <div className="lg:col-span-3 space-y-8">
                  <InfoCard icon={<FileText />} title="Detailed Description">
                    <p className="text-gray-600 whitespace-pre-line">{activeVisa.detailedDescription}</p>
                  </InfoCard>
                  
                  <InfoCard icon={<Wrench />} title="Step-by-Step Process">
                    <div className="relative pl-6">
                      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-blue-100"></div>
                      {activeVisa.applicationProcess.split('\n').map((step, index) => (
                        <div key={index} className="relative mb-4">
                          <div className="absolute -left-8 top-1 w-5 h-5 bg-[#032B66] rounded-full border-4 border-gray-50"></div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </InfoCard>
                  
                  <InfoCard icon={<CheckCircle />} title="Required Documents">
                    <ul className="list-disc list-inside text-gray-600 whitespace-pre-line pl-2">{activeVisa.documentChecklist}</ul>
                  </InfoCard>
                </div>

                {/* Sidebar (Right) */}
                <div className="lg:col-span-2 space-y-6">
                  <InfoCard icon={<DollarSign />} title="Key Details">
                    <div className="space-y-3 text-sm">
                      <DetailItem icon={<DollarSign />} label="Fee" value={activeVisa.applicationFee} />
                      <DetailItem icon={<Clock />} label="Processing" value={activeVisa.processingTime} />
                      <DetailItem icon={<Calendar />} label="Stay" value={activeVisa.stayDuration} />
                      <DetailItem icon={<ShieldCheck />} label="Validity" value={activeVisa.visaValidity} />
                    </div>
                  </InfoCard>
                  <InfoCard icon={<UserCheck />} title="Eligibility">
                    <p className="text-gray-600 whitespace-pre-line">{activeVisa.eligibilityBrief}</p>
                  </InfoCard>
                  <InfoCard icon={<Banknote />} title="Financial Requirements">
                    <p className="text-gray-600 whitespace-pre-line">{activeVisa.financialRequirements}</p>
                  </InfoCard>
                  <InfoCard icon={<AlertTriangle />} title="Common Pitfalls">
                    <p className="text-gray-600 whitespace-pre-line">{activeVisa.commonPitfalls}</p>
                  </InfoCard>
                </div>
              </div>

              {/* Travel Suggestions */}
              {(activeVisa.itinerarySuggestion || activeVisa.cuisineSuggestion) && (
                <div className="mt-8 pt-6 border-t">
                   <h3 className="text-2xl font-semibold mb-4 text-center">Travel & Culture Tips</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                      {activeVisa.itinerarySuggestion && <div className="bg-blue-50 p-4 rounded-lg"><h4 className="font-bold flex items-center mb-2"><Map className="w-5 h-5 mr-2"/>Itinerary Suggestion</h4><p className="text-sm text-gray-700">{activeVisa.itinerarySuggestion}</p></div>}
                      {activeVisa.cuisineSuggestion && <div className="bg-green-50 p-4 rounded-lg"><h4 className="font-bold flex items-center mb-2"><Utensils className="w-5 h-5 mr-2"/>Cuisine to Try</h4><p className="text-sm text-gray-700">{activeVisa.cuisineSuggestion}</p></div>}
                   </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-10 text-center">
                <Link to="/contact" className="bg-[#032B66] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all">
                  Contact Us for Assistance
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Helper components for styling
const InfoCard = ({ icon, title, children }) => (
  <div className="bg-gray-50 p-6 rounded-lg border">
    <div className="flex items-center mb-3">
      <div className="flex-shrink-0 text-[#032B66]">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 text-[#032B66] mt-0.5">
      {React.cloneElement(icon, { className: "w-4 h-4" })}
    </div>
    <div className="ml-2">
      <span className="font-semibold">{label}:</span> {value}
    </div>
  </div>
);

export default CountryDetailPage;
