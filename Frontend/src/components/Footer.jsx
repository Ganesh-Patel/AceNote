import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import { useTheme } from '../context/ThemeContext'; // Import theme context

function Footer() {
  const { isDarkMode } = useTheme(); // Access theme context

  return (
    <footer 
      className={`py-10 px-6 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">CONTACT</h3>
          <address className="not-italic leading-relaxed">
            <p>Street: 2017 Harron Drive</p>
            <p>City: Baltimore</p>
            <p>State: Maryland</p>
            <p>Zip Code: 21201</p>
            <p>Phone: 443-498-7166</p>
            <p>Mobile: 443-934-9384</p>
          </address>
        </div>
        
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">MENU</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/books" className="hover:underline">Books</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/blog" className="hover:underline">Our Blog</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
          </ul>
        </div>
        
        {/* Recent Posts Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">RECENT POSTS</h3>
          <ul className="space-y-2">
            <li><a href="/post/1" className="hover:underline">Breaking Down Barriers</a></li>
            <li><a href="/post/2" className="hover:underline">A Celebration of Success</a></li>
            <li><a href="/post/3" className="hover:underline">A World of Opportunities</a></li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">NEWSLETTER</h3>
          <form className="flex flex-col">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`p-3 mb-4 rounded ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-300'}`}
            />
            <button 
              type="submit" 
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 font-semibold tracking-wide"
            >
              SIGN UP
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500 transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600 transition duration-300">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-xs md:text-sm font-light">
        <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          &copy; 2023 AceNote. Built with passion and dedication.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
