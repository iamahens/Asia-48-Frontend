// File: src/pages/BlogPostPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { getBlogBySlug } from '../services/ApiService'; // Import the real API function

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getBlogBySlug(slug);
        setPost(response.data);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Could not load the article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]); // Re-run the effect if the slug changes

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="flex items-center text-gray-600 hover:text-[#032B66] font-semibold mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>

          {/* Post Header */}
          <div className="mb-8">
            <p className="text-[#032B66] font-semibold">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
              <div className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.publishedDate}</div>
            </div>
          </div>

          {/* Featured Image */}
          <img src={post.featuredImageUrl} alt={post.title} className="w-full h-auto rounded-lg shadow-lg mb-8" />

          {/* Post Content */}
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 border-l-4 border-[#032B66] rounded-r-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800">Need Expert Visa Guidance?</h3>
            <p className="mt-2 text-gray-600">Our team is here to help you navigate the complexities of the visa process.</p>
            <Link to="/contact" className="mt-4 inline-block bg-[#032B66] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
