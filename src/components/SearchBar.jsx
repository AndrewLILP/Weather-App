/**
 * Weather Forecast App - Search Bar Component
 * src/components/SearchBar.jsx
 * 
 * This component provides a form for users to search for cities
 * to display weather information.
 */

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <form 
        onSubmit={handleSubmit} 
        className="flex w-full relative shadow-lg rounded-full overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-6 py-3 rounded-full border-0
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  dark:bg-gray-800 dark:text-white text-gray-700
                  placeholder-gray-400 dark:placeholder-gray-500"
          aria-label="City name"
        />
        <button 
          type="submit"
          className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-600 
                 text-white font-medium px-6 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Search"
          disabled={!city.trim()}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;