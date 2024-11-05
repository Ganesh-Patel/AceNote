// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Brand and Description */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-blue-600 cursor-pointer">
              Ace<span className="text-gray-800">Note</span>
            </h2>
            {/* <p className="text-gray-600 max-w-xs">
              AceNote is your trusted platform for sharing ideas, exploring stories, and connecting with fellow creators.
            </p> */}
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-gray-700">
            <a href="#" className="hover:text-gray-900 font-medium">About Us</a>
            <a href="#" className="hover:text-gray-900 font-medium">Contact</a>
            <a href="#" className="hover:text-gray-900 font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 font-medium">Terms of Service</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-blue-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AceNote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
