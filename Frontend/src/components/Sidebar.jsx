import { useState, useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { ImMenu2 } from 'react-icons/im';
const Sidebar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Smooth transition on mount/unmount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling when sidebar is closed
    }
  }, [isOpen]);

  return (
    <>
      {/* Button to toggle sidebar visibility */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="m-2 rounded absolute top-15 left-2 z-40"
      >
        {isOpen ? (
          <IoIosCloseCircle size={50} className={`transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        ) : (
          <ImMenu2 size={50} className={`transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        )}
      </button>

      {/* Sidebar container */}
      <div className={`transition-all duration-300 ${isOpen ? 'w-80 p-6' : 'w-0 overflow-hidden'} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} h-screen shadow-lg`}>
        {isOpen && (
          <div>
            <h2 className="font-bold text-xl mb-4 mt-12">AceNote Blog</h2>

            {/* Search Bar */}
            <div className="mb-4">
              <label className="block mb-1">Search Posts</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                placeholder="Search by title or keyword"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col">
              <a href="/" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">Home</a>
              <a href="/my-posts" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">My Posts</a>
              <a href="/categories" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">Categories</a>
              <a href="/about" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">About</a>
              <a href="/contact" className="mb-2 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">Contact</a>
            </nav>

            {/* Additional Links */}
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">More</h3>
              <a href="/privacy" className="block mb-2 text-sm hover:underline transition duration-200">Privacy Policy</a>
              <a href="/terms" className="block text-sm hover:underline transition duration-200">Terms of Service</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
