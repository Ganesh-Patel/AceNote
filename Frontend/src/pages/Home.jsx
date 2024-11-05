import React from 'react';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook

function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access the theme context

  return (
    <div className={`flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition duration-300`}>
      {/* Sidebar */}
      <Sidebar isDarkMode={isDarkMode} />


      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <header className="flex justify-center gap-60 items-center mb-6">
          <h1 className={`text-4xl ml-20 font-bold ${isDarkMode ? 'text-white' : 'text-black'} transition duration-300`}>
            Welcome to AceNote
          </h1>
          <button 
            onClick={toggleDarkMode} 
            className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-blue-600 text-white'} transition duration-300`}
          >
            Toggle Dark Mode
          </button>
        </header>

        {/* Blog Posts Section */}
        <section>
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Blog Post Card */}
            <div className={`border rounded-lg p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition duration-300`}>
              <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
              <p className="mb-4">This is a short description of the blog post. It gives a quick overview of what the post is about.</p>
              <a href="/post/1" className={`text-blue-600 hover:underline ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'} transition duration-300`}>Read More</a>
            </div>
            <div className={`border rounded-lg p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition duration-300`}>
              <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
              <p className="mb-4">This is a short description of the blog post. It gives a quick overview of what the post is about.</p>
              <a href="/post/2" className={`text-blue-600 hover:underline ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'} transition duration-300`}>Read More</a>
            </div>
            <div className={`border rounded-lg p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition duration-300`}>
              <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
              <p className="mb-4">This is a short description of the blog post. It gives a quick overview of what the post is about.</p>
              <a href="/post/3" className={`text-blue-600 hover:underline ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'} transition duration-300`}>Read More</a>
            </div>
            {/* Add more blog post cards as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
