// File: src/components/GetInTouch.jsx
import React from 'react';
import { Mail, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#032B66]">Get in Touch</h2>
          <div className="mt-4 h-1 w-20 bg-[#032B66] mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <a href="mailto:info@asia48.com" className="flex items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-[#032B66] mr-5" />
              <div>
                <p className="text-lg font-semibold">Email Us</p>
                <p className="text-gray-600">info@asia48.com</p>
              </div>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-[#032B66] mr-5" />
              <div>
                <p className="text-lg font-semibold">Chat on WhatsApp</p>
                <p className="text-gray-600">Start a conversation</p>
              </div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-4 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Linkedin /></a>
              <a href="#" className="p-4 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="p-4 bg-gray-200 rounded-full text-gray-600 hover:bg-[#032B66] hover:text-white transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
