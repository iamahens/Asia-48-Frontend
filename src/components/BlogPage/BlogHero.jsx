// File: src/components/BlogHero.jsx
import React from 'react';
import { Search } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="relative bg-[#032B66] text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1770&q=80')" }}></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Study Abroad Insights & Tips</h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
          Your go-to guide for study abroad trends, tips, and news
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full p-4 pl-12 text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
