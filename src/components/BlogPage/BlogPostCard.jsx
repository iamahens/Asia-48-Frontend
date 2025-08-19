// File: src/components/BlogPostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden h-48">
          <img 
            src={post.featuredImageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <p className="text-sm font-semibold text-[#032B66]">{post.category}</p>
          <h3 className="text-xl font-bold mt-2 mb-2 text-gray-800 hover:text-[#032B66] transition-colors">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{post.publishedDate}</span>
            <span className="font-semibold hover:underline">Read More &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
