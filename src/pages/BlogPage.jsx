// File: src/pages/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// We will create these components in the next steps
// import BlogHero from '../components/BlogHero';
// import BlogPostCard from '../components/BlogPostCard';
// import { getAllBlogs } from '../services/ApiService'; // Assuming you will add this to your service

// Mock data until the backend is connected
const mockBlogs = [
  { id: 1, slug: '5-steps-to-secure-your-student-visa-for-japan', title: '5 Essential Steps to Secure Your Student Visa for Japan', excerpt: 'Navigating the visa process can be daunting. Here are the 5 key steps to ensure your application for a Japanese student visa is successful.', category: 'Visa & Immigration', publishedDate: '2025-08-10', featuredImageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80' },
  { id: 2, slug: 'top-scholarships-for-studying-in-south-korea', title: 'Top Scholarships for Studying in South Korea', excerpt: 'Discover the most prestigious and accessible scholarships available for international students looking to study in South Korea.', category: 'Scholarships & Funding', publishedDate: '2025-08-05', featuredImageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80' },
  { id: 3, slug: 'a-guide-to-student-life-in-singapore', title: 'A Guide to Student Life in Singapore', excerpt: 'From accommodation to local cuisine, here is everything you need to know to make the most of your student life in the vibrant city-state of Singapore.', category: 'Student Life Abroad', publishedDate: '2025-07-28', featuredImageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80' },
];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Visa & Immigration', 'Scholarships & Funding', 'Destination Guides', 'Student Life Abroad', 'Career Opportunities Abroad', 'News & Updates'];

  useEffect(() => {
    // In a real app, you would fetch this from your backend:
    // const response = await getAllBlogs();
    // setPosts(response.data);
    setPosts(mockBlogs);
    setFilteredPosts(mockBlogs);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory, posts]);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* We will create this component next */}
      {/* <BlogHero /> */}
      <div className="text-center py-20 bg-white border-b">
        <h1 className="text-4xl font-bold text-[#032B66]">Study Abroad Insights & Tips</h1>
        <p className="mt-4 text-lg text-gray-600">Your go-to guide for study abroad trends, tips, and news.</p>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#032B66] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            // We will create this component next
            // <BlogPostCard key={post.id} post={post} />
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.featuredImageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <p className="text-sm text-gray-500">{post.category} | {post.publishedDate}</p>
                    <h3 className="text-xl font-bold mt-2 mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="font-semibold text-[#032B66] hover:underline">Read More &rarr;</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
