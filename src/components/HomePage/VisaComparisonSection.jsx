// File: src/components/VisaComparisonSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

// For now, we will use mock data.
const mockApiService = {
    getVisasByType: async (type) => {
        const mockData = {
            Education: [
                { id: 1, country: { name: 'Singapore', flagUrl: 'https://flagcdn.com/sg.svg' }, applicationFee: '$30', processingTime: '2 weeks', stayDuration: '1 year', eligibilityHighlight: 'Online Application, Part-time Work Allowed' },
                { id: 2, country: { name: 'Japan', flagUrl: 'https://flagcdn.com/jp.svg' }, applicationFee: '$25', processingTime: '1-2 weeks', stayDuration: '2 years', eligibilityHighlight: 'Requires Certificate of Eligibility (COE)' },
            ],
            Immigration: [
                { id: 3, country: { name: 'UAE', flagUrl: 'https://flagcdn.com/ae.svg' }, applicationFee: 'Varies', processingTime: '4-6 weeks', stayDuration: '5-10 years', eligibilityHighlight: 'Golden Visa for Investors & Entrepreneurs' },
            ],
            Travel: [
                { id: 4, country: { name: 'Thailand', flagUrl: 'https://flagcdn.com/th.svg' }, applicationFee: '$40', processingTime: '3-5 days', stayDuration: '60 days', eligibilityHighlight: 'Visa on Arrival for many nationalities' },
            ],
            Business: [
                { id: 5, country: { name: 'Hong Kong', flagUrl: 'https://flagcdn.com/hk.svg' }, applicationFee: '$25', processingTime: '4 weeks', stayDuration: '1 year', eligibilityHighlight: 'Ideal for startups and financial services' },
            ]
        };
        return { data: mockData[type] || [] };
    }
};


const VisaComparisonSection = () => {
    const [activeTab, setActiveTab] = useState('Education');
    const [visaData, setVisaData] = useState([]);
    const [loading, setLoading] = useState(true);

    const tabs = ['Education', 'Immigration', 'Travel', 'Business'];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await mockApiService.getVisasByType(activeTab);
                setVisaData(response.data);
            } catch (error) {
                console.error("Failed to fetch visa data:", error);
                setVisaData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [activeTab]);

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#032B66]">Visa Highlights</h2>
                    <div className="mt-4 h-1 w-24 bg-[#032B66] mx-auto rounded"></div>
                </div>

                {/* Tab Navigation - Now responsive */}
                <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 sm:px-6 py-3 font-semibold transition-all duration-300 -mb-px text-sm sm:text-base ${
                                activeTab === tab
                                    ? 'text-[#032B66] border-b-2 border-[#032B66]'
                                    : 'text-gray-500 hover:text-[#032B66]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Visa Cards - Now responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <p className="col-span-full text-center">Loading...</p>
                    ) : visaData.length > 0 ? (
                        visaData.map((visa) => (
                            <div key={visa.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                                <div className="flex items-center mb-4">
                                    <img src={visa.country.flagUrl} alt={`${visa.country.name} flag`} className="w-10 h-10 mr-4 rounded-full shadow-md object-cover" />
                                    <h3 className="text-xl font-bold text-gray-800">{visa.country.name}</h3>
                                </div>
                                <div className="space-y-3 text-gray-600 flex-grow">
                                    <p><span className="font-semibold">Fee:</span> {visa.applicationFee}</p>
                                    <p><span className="font-semibold">Processing:</span> {visa.processingTime}</p>
                                    <p><span className="font-semibold">Stay:</span> {visa.stayDuration}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <p className="text-sm text-gray-700">{visa.eligibilityHighlight}</p>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <Link to={`/destinations/${visa.country.name.toLowerCase()}`} className="font-bold text-[#032B66] hover:underline">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No visa information available for this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VisaComparisonSection;
