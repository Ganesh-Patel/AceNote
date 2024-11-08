// src/components/Header.js
import React, { useState } from 'react';
import userProfilePic from '../assets/hdimages/pexels-expect-best-79873-323780.jpg';

const Header = ({ isLoggedIn = true }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        
        {/* Logo/Brand Section */}
        <div className="text-3xl font-extrabold text-blue-600 cursor-pointer">
          Ace<span className="text-gray-800">Note</span>
        </div>

        {/* Navigation Links for Logged-out State */}
        {!isLoggedIn ? (
          <nav className="hidden sm:flex space-x-6 text-gray-700 font-medium">
            {["Our Story", "Membership", "Write", "Sign in"].map((tab) => (
              <a
                key={tab}
                href="#"
                className={`hover:text-gray-900 ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
              Get started
            </button>
          </nav>
        ) : (
          <div className="flex items-center space-x-6">
            
            {/* Home Icon */}
            <a
              href="#"
              className={`text-gray-700 hover:text-gray-900 hidden sm:block ${
                activeTab === "Home" ? "text-blue-600 border-b-2 border-blue-600" : ""
              }`}
              onClick={() => handleTabClick("Home")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 4.5l9 5.25v9.75a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5V15a1.5 1.5 0 00-1.5-1.5H9a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V9.75z" />
              </svg>
            </a>

            {/* Search Bar */}
            <div className="relative hidden sm:flex items-center w-full max-w-xs">
              <input
                type="text"
                className="w-full px-4 py-1 border rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Search..."
              />
            </div>

            {/* Profile Icon */}
            <div className="relative">
              <img
                src={userProfilePic}
                alt="User Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  {["My Profile", "Settings", "My Blogs", "Log Out"].map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => handleTabClick(item)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isProfileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="px-4 py-2 space-y-2">
            {!isLoggedIn ? (
              <>
                {["Our Story", "Membership", "Write", "Sign in"].map((tab) => (
                  <a
                    href="#"
                    key={tab}
                    className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </a>
                ))}
                <button className="w-full bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                  Get started
                </button>
              </>
            ) : (
              <>
                {["Home", "My Profile", "Settings", "My Blogs", "Log Out"].map((tab) => (
                  <a
                    href="#"
                    key={tab}
                    className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </a>
                ))}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
