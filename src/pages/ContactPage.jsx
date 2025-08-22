// File: src/pages/ContactPage.jsx
import React, { useState } from 'react';
import PageHero from '../components/Services/PageHero';
import { submitContactForm } from '../services/ApiService';
import { Mail, MessageCircle, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import Footer from '../components/HomePage/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ fullName: '', email: '', message: '' }); // Clear form
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <PageHero 
        title="Contact Us"
        subtitle="We're here to help. Whether you have a question about our services or need specific guidance, our team is ready to assist you."
        breadcrumb="Contact"
        bgImage="https://images.unsplash.com/photo-1587560699334-cc426240169f?auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a href="mailto:info@asia48.com" className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Mail className="w-6 h-6 text-[#032B66] mr-4" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-gray-600">snehasaxena152003@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/8476979157" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#032B66] mr-4" />
                    <div>
                      <p className="font-semibold">Chat on WhatsApp</p>
                      <p className="text-gray-600">Start a conversation</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Linkedin /></a>
                  <a href="#" className="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Twitter /></a>
                  <a href="#" className="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Instagram /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#032B66]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#032B66]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#032B66]"></textarea>
                </div>
                
                {success && <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>}
                {error && <p className="text-red-600">{error}</p>}

                <div>
                  <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-[#032B66] text-white font-semibold rounded-md shadow-sm hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:bg-gray-400">
                    <Send className="w-5 h-5 mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ContactPage;
