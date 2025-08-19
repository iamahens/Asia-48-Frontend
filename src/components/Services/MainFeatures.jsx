// File: src/components/MainFeatures.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { Map, Award, School, ListChecks, HelpCircle } from 'lucide-react';

const MainFeatures = () => {
  const features = [
    {
      icon: <Map className="w-10 h-10 text-white" />,
      title: 'Country-Specific Visa Guides',
      description: 'Detailed requirements, processing times, and application steps for each country and visa type.',
      path: '/services', // Add a path for the link
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: 'Scholarship & Funding Database',
      description: 'Search for scholarships based on country, course, or eligibility, with links to application portals.',
      path: '/scholarships',
    },
    {
      icon: <School className="w-10 h-10 text-white" />,
      title: 'Course & University Explorer',
      description: 'Browse top universities in Asian countries, filtering by tuition fees, location, and ranking.',
      path: '/universities',
    },
    {
      icon: <ListChecks className="w-10 h-10 text-white" />,
      title: 'Step-by-Step Study Abroad Planner',
      description: 'Utilize our timelines and checklists to prepare for your applications with confidence.',
      path:'/planner',
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-white" />,
      title: 'FAQ & Document Library',
      description: 'Get answers to common questions and download sample SOPs, LORs, and checklists.',
      path: '/services',
    },

 
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Wrap the entire card in a Link component
            <Link to={feature.path} key={feature.title}>
              <div 
                className="p-8 h-full rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border-l-4 border-transparent hover:border-[#032B66]"
              >
                <div className="flex-shrink-0 bg-[#032B66] p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
