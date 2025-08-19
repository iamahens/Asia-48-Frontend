// File: src/components/VisaCategories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GraduationCap, Briefcase, Plane, Home } from 'lucide-react';

const VisaCategories = () => {
  const categories = [
    {
      icon: <GraduationCap className="h-8 w-8 text-[#032B66]" />,
      title: 'Student Visa',
      description: 'Pursue your education at top institutions across Asia with our expert guidance.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60',
      link: '/visa-guidance/student'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#032B66]" />,
      title: 'Work Visa',
      description: 'Unlock international career opportunities with our comprehensive work visa support.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60',
      link: '/visa-guidance/work'
    },
    {
      icon: <Plane className="h-8 w-8 text-[#032B66]" />,
      title: 'Tourist Visa',
      description: 'Explore breathtaking landscapes and rich cultures with a hassle-free tourist visa.',
      image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=60',
      link: '/visa-guidance/tourist'
    },
    {
      icon: <Home className="h-8 w-8 text-[#032B66]" />,
      title: 'PR Visa',
      description: 'Begin your journey towards permanent residency and a new life abroad.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059ee355?auto=format&fit=crop&w=800&q=60',
      link: '/visa-guidance/pr'
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#032B66" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 tracking-widest">VISA CATEGORIES</p>
          <h2 className="text-4xl font-bold text-[#032B66] mt-2">Assisting You in Fulfilling Your Eligibility</h2>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.title}>
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img src={category.image} alt={category.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 h-16">{category.description}</p>
                    <Link to={category.link} className="font-semibold text-[#032B66] hover:underline">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-[#032B66] text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-opacity">
            &#8249;
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-[#032B66] text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-opacity">
            &#8250;
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
